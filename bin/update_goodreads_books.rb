#!/usr/bin/env ruby
# frozen_string_literal: true

require "cgi"
require "csv"
require "date"
require "fileutils"
require "open-uri"
require "rexml/document"
require "rss"
require "yaml"

OUT_DIR = File.expand_path("../_books/goodreads", __dir__)
DEFAULT_SHELVES = %w[read currently-reading to-read].freeze

def usage
  <<~TEXT
    Usage:
      ruby bin/update_goodreads_books.rb --csv path/to/goodreads_library_export.csv
      GOODREADS_USER_ID=12345 ruby bin/update_goodreads_books.rb --rss

    RSS import uses public Goodreads shelf feeds. CSV import uses the Goodreads library export.
  TEXT
end

def slugify(value)
  value
    .downcase
    .gsub(/&/, " and ")
    .gsub(/[^a-z0-9]+/, "-")
    .gsub(/\A-|-+\z/, "")
end

def normalize_isbn(value)
  value.to_s.gsub(/[^\dXx]/, "")
end

def parse_date(value)
  return nil if value.nil? || value.to_s.strip.empty?

  Date.parse(value.to_s).iso8601
rescue Date::Error
  nil
end

def status_for_shelf(value)
  case value.to_s.downcase.strip
  when "read"
    "Finished"
  when "currently-reading"
    "Reading"
  when "to-read"
    "Queued"
  else
    "Interested"
  end
end

def yaml_front_matter(data)
  cleaned = data.reject { |_key, value| value.nil? || value == "" || value == [] }
  YAML.dump(cleaned).sub(/\A---\s*\n/, "").strip
end

def write_books(books)
  FileUtils.mkdir_p(OUT_DIR)
  Dir.children(OUT_DIR).each do |entry|
    path = File.join(OUT_DIR, entry)
    FileUtils.rm_rf(path) if File.file?(path)
  end

  books.each_with_index do |book, index|
    slug = slugify("#{book.fetch("title")} #{book["author"]}")
    slug = "book-#{index + 1}" if slug.empty?
    path = File.join(OUT_DIR, "#{slug}.md")

    front_matter = yaml_front_matter(book)
    File.write(path, "---\n#{front_matter}\n---\n")
  end
end

def csv_books(path)
  CSV.read(path, headers: true).filter_map do |row|
    title = row["Title"].to_s.strip
    next if title.empty?

    shelf = row["Exclusive Shelf"]
    date_read = parse_date(row["Date Read"])
    date_added = parse_date(row["Date Added"])
    book_id = row["Book Id"].to_s.strip
    rating = row["My Rating"].to_i
    isbn = normalize_isbn(row["ISBN13"])
    isbn = normalize_isbn(row["ISBN"]) if isbn.empty?

    {
      "layout" => "book-review",
      "title" => title,
      "author" => row["Author"].to_s.strip,
      "isbn" => isbn,
      "date" => date_read || date_added || Date.today.iso8601,
      "started" => date_added,
      "finished" => date_read,
      "released" => row["Original Publication Year"].to_s.strip.empty? ? row["Year Published"] : row["Original Publication Year"],
      "stars" => rating.positive? ? rating : nil,
      "status" => status_for_shelf(shelf),
      "goodreads_book_id" => book_id,
      "goodreads_url" => book_id.empty? ? nil : "https://www.goodreads.com/book/show/#{book_id}",
      "tags" => ["goodreads"]
    }
  end
end

def rss_books(user_id, shelves)
  shelves.flat_map do |shelf|
    url = "https://www.goodreads.com/review/list_rss/#{CGI.escape(user_id)}?shelf=#{CGI.escape(shelf)}"
    document = REXML::Document.new(URI.open(url, &:read))

    REXML::XPath.match(document, "//item").map do |item|
      field = ->(name) { item.elements[name]&.text.to_s.strip }
      title = field.call("title")
      next if title.empty?

      book_id = field.call("book_id")
      date_read = parse_date(field.call("user_read_at"))
      date_added = parse_date(field.call("user_date_added"))
      rating = field.call("user_rating").to_i
      isbn = normalize_isbn(field.call("isbn"))
      review_url = field.call("link")
      book_url = "https://www.goodreads.com/book/show/#{book_id}"
      cover = field.call("book_large_image_url")

      {
        "layout" => "book-review",
        "title" => title,
        "author" => field.call("author_name"),
        "cover" => cover,
        "isbn" => isbn,
        "date" => date_read || date_added || Date.today.iso8601,
        "started" => date_added,
        "finished" => date_read,
        "released" => field.call("book_published"),
        "stars" => rating.positive? ? rating : nil,
        "status" => status_for_shelf(shelf),
        "goodreads_book_id" => book_id,
        "goodreads_url" => book_url,
        "goodreads_review_url" => review_url,
        "tags" => ["goodreads"]
      }
    end.compact
  end
end

mode = ARGV.shift
books =
  case mode
  when "--csv"
    path = ARGV.shift
    abort usage unless path && File.file?(path)

    csv_books(path)
  when "--rss"
    user_id = ENV.fetch("GOODREADS_USER_ID", "").strip
    abort "GOODREADS_USER_ID is required for RSS import.\n\n#{usage}" if user_id.empty?

    shelves = ENV.fetch("GOODREADS_SHELVES", DEFAULT_SHELVES.join(",")).split(",").map(&:strip).reject(&:empty?)
    rss_books(user_id, shelves)
  else
    abort usage
  end

abort "No Goodreads books found." if books.empty?

write_books(books)
puts "Wrote #{books.length} Goodreads book(s) to #{OUT_DIR}."
