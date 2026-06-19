---
layout: about
title: about
permalink: /
subtitle: Incoming PhD student in Computer Science at the University of Toronto, working on communication, compositionality, and learning.

home_hero:
  kicker: Machine learning · communication · compositionality
  highlights:
    - Incoming PhD @ University of Toronto
    - Adjunct Lecturer @ PUC Chile
    - Computer Engineering and CS MSc @ PUC Chile
  ctas:
    - label: CV
      url: /CV.pdf
      icon: fa-solid fa-file-pdf
      primary: true
    - label: Publications
      url: /publications/
      icon: ai ai-google-scholar
    - label: GitHub
      url: https://github.com/SugarFreeManatee
      icon: fa-brands fa-github
    - label: Email
      url: mailto:rafael.elberg@uc.cl
      icon: fa-solid fa-envelope

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Santiago, Chile</p>
    <p>rafael.elberg [at] uc.cl</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<section class="home-intro">
  <p>
    I study how communication shapes learning systems: when messages become compositional, how compression can support generalization, and how agents can coordinate through learned representations.
  </p>
  <p>
    I completed my Master's degree in Computer Science at Pontificia Universidad Catolica de Chile, where I worked with Denis Parra and Mircea Petrache. I will start my PhD in the Department of Computer Science at the University of Toronto.
  </p>
</section>

<section class="home-section home-focus">
  <h2>research focus</h2>
  <div class="home-focus-grid">
    <div class="home-focus-item">
      <h3>Communication in learning</h3>
      <p>How bottlenecks, messages, and interaction protocols change what models learn and how well they generalize.</p>
    </div>
    <div class="home-focus-item">
      <h3>Compositional representations</h3>
      <p>How structure emerges in learned representations, especially when systems must communicate efficiently.</p>
    </div>
    <div class="home-focus-item">
      <h3>Multi-agent intelligence</h3>
      <p>How reinforcement learning agents can develop useful coordination strategies through complex interaction.</p>
    </div>
  </div>
</section>

<section class="home-section home-current">
  <h2>current</h2>
  <ul>
    <li>Teaching Discrete Mathematics (IIC1253) at PUC Chile.</li>
    <li>Preparing to join the University of Toronto CS PhD program.</li>
    <li>Broadly interested in machine learning theory and neurosymbolic AI.</li>
  </ul>
</section>

<section class="home-section">
  <h2>teaching</h2>
  <p>
    Alongside my research, I have worked as a teaching assistant for Deep Learning, Advanced Topics in AI, Artificial Intelligence, Data Structures and Algorithms, Introduction to Programming, and Advanced Programming at PUC Chile.
  </p>
</section>

<section class="home-section">
  <h2>elsewhere</h2>
  <p>
    In my free time, I enjoy reading, especially science fiction. I keep a small <a href="{{ '/books/' | relative_url }}">bookshelf</a> with books I have been reading and would like to revisit.
  </p>
</section>

<section class="home-section home-snapshots">
  <div class="home-snapshot-heading">
    <h2>snapshots</h2>
    <button class="home-snapshot-button" type="button" data-random-snapshot-button>
      <i class="fa-solid fa-shuffle" aria-hidden="true"></i>
      <span>Random snapshot</span>
    </button>
  </div>

  <figure class="home-random-snapshot" data-random-snapshot-card>
    <div class="home-random-media">
      <img data-random-snapshot-image src="" alt="" loading="lazy" decoding="async">
    </div>
    <figcaption class="home-random-caption">
      <span class="home-random-kind" data-random-snapshot-kind></span>
      <strong data-random-snapshot-name></strong>
    </figcaption>
  </figure>

  <script id="home-snapshot-data" type="application/json">
    [
      {% assign snapshot_first = true %}
      {% for file in site.static_files %}
        {% assign snapshot_ext = file.extname | downcase %}
        {% if file.path contains '/assets/img/Places/' %}
          {% if snapshot_ext == '.jpg' or snapshot_ext == '.jpeg' or snapshot_ext == '.png' or snapshot_ext == '.gif' %}
            {% unless snapshot_first %},{% endunless %}
            {
              "src": {{ file.path | relative_url | jsonify }},
              "filename": {{ file.name | jsonify }}
            }
            {% assign snapshot_first = false %}
          {% endif %}
        {% endif %}
      {% endfor %}
    ]
  </script>

  <script>
    (() => {
      const data = document.getElementById("home-snapshot-data");
      const button = document.querySelector("[data-random-snapshot-button]");
      const card = document.querySelector("[data-random-snapshot-card]");
      const image = document.querySelector("[data-random-snapshot-image]");
      const kind = document.querySelector("[data-random-snapshot-kind]");
      const name = document.querySelector("[data-random-snapshot-name]");

      if (!data || !button || !card || !image || !kind || !name) return;

      const titleCase = (value) =>
        value
          .split(/\s+/)
          .filter(Boolean)
          .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1))
          .join(" ");

      const parseSnapshot = (item) => {
        const filename = item.filename || item.src.split("/").pop() || "";
        const baseName = filename.replace(/\.[^.]+$/, "");
        const nameWithoutIndex = baseName.replace(/[_\s-]*\d+$/, "");
        const compactName = nameWithoutIndex.replace(/[_\s-]+/g, "");
        const isBailey = compactName.toLowerCase() === "bailey";
        const placeName = titleCase(
          nameWithoutIndex
            .replace(/[_-]+/g, " ")
            .replace(/([a-záéíóúüñ])([A-ZÁÉÍÓÚÜÑ])/g, "$1 $2")
            .trim()
        );

        return {
          src: item.src,
          kind: isBailey ? "Bailey" : "place",
          name: isBailey ? "Bailey" : placeName,
        };
      };

      let currentSrc = "";
      const snapshots = JSON.parse(data.textContent).map(parseSnapshot).filter((item) => item.src && item.name);

      const randomFrom = (items) => items[Math.floor(Math.random() * items.length)];

      const nextSnapshot = () => {
        if (snapshots.length <= 1) return snapshots[0];

        let snapshot = randomFrom(snapshots);
        while (snapshot.src === currentSrc && snapshots.length > 1) {
          snapshot = randomFrom(snapshots);
        }

        return snapshot;
      };

      const showRandomSnapshot = () => {
        if (!snapshots.length) {
          card.hidden = true;
          button.disabled = true;
          return;
        }

        const snapshot = nextSnapshot();
        currentSrc = snapshot.src;
        image.src = snapshot.src;
        image.alt = snapshot.name;
        kind.textContent = snapshot.kind;
        name.textContent = snapshot.name;
      };

      button.addEventListener("click", showRandomSnapshot);
      showRandomSnapshot();
    })();
  </script>
</section>
