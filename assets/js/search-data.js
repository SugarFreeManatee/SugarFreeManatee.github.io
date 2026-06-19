// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Recent papers and preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My current CV is available as a PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-hellbound-heart",
          title: 'The Hellbound Heart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_hellbound_heart/";
            },},{id: "books-1984",
          title: '1984',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/1984-george-orwell/";
            },},{id: "books-a-game-of-thrones-a-song-of-ice-and-fire-1",
          title: 'A Game of Thrones (A Song of Ice and Fire, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/a-game-of-thrones-a-song-of-ice-and-fire-1-george-r-r-martin/";
            },},{id: "books-alice-in-wonderland",
          title: 'Alice in Wonderland',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/alice-in-wonderland-jane-carruth/";
            },},{id: "books-all-systems-red-the-murderbot-diaries-1",
          title: 'All Systems Red (The Murderbot Diaries, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/all-systems-red-the-murderbot-diaries-1-martha-wells/";
            },},{id: "books-animal-farm",
          title: 'Animal Farm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/animal-farm-george-orwell/";
            },},{id: "books-beowulf",
          title: 'Beowulf',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/beowulf-unknown/";
            },},{id: "books-blindsight-firefall-1",
          title: 'Blindsight (Firefall, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/blindsight-firefall-1-peter-watts/";
            },},{id: "books-blood-meridian-or-the-evening-redness-in-the-west",
          title: 'Blood Meridian, or, the Evening Redness in the West',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/blood-meridian-or-the-evening-redness-in-the-west-cormac-mccarthy/";
            },},{id: "books-brave-new-world",
          title: 'Brave New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/brave-new-world-aldous-huxley/";
            },},{id: "books-charlie-and-the-chocolate-factory-charlie-bucket-1",
          title: 'Charlie and the Chocolate Factory (Charlie Bucket, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/charlie-and-the-chocolate-factory-charlie-bucket-1-roald-dahl/";
            },},{id: "books-childhood-s-end",
          title: 'Childhood’s End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/childhood-s-end-arthur-c-clarke/";
            },},{id: "books-children-of-dune-dune-3",
          title: 'Children of Dune (Dune #3)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/children-of-dune-dune-3-frank-herbert/";
            },},{id: "books-chronicle-of-a-death-foretold",
          title: 'Chronicle of a Death Foretold',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/chronicle-of-a-death-foretold-gabriel-garc-a-m-rquez/";
            },},{id: "books-david-copperfield",
          title: 'David Copperfield',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/david-copperfield-charles-dickens/";
            },},{id: "books-dawn",
          title: 'Dawn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/dawn-elie-wiesel/";
            },},{id: "books-deep-learning",
          title: 'Deep Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/deep-learning-ian-goodfellow/";
            },},{id: "books-do-androids-dream-of-electric-sheep",
          title: 'Do Androids Dream of Electric Sheep?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/do-androids-dream-of-electric-sheep-philip-k-dick/";
            },},{id: "books-don-quixote",
          title: 'Don Quixote',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/don-quixote-miguel-de-cervantes-saavedra/";
            },},{id: "books-dr-jekyll-and-mr-hyde",
          title: 'Dr. Jekyll and Mr. Hyde',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/dr-jekyll-and-mr-hyde-robert-louis-stevenson/";
            },},{id: "books-dracula",
          title: 'Dracula',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/dracula-bram-stoker/";
            },},{id: "books-dragon-rider-dragon-rider-1",
          title: 'Dragon Rider (Dragon Rider, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/dragon-rider-dragon-rider-1-cornelia-funke/";
            },},{id: "books-dune-dune-1",
          title: 'Dune (Dune, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/dune-dune-1-frank-herbert/";
            },},{id: "books-dune-messiah-dune-2",
          title: 'Dune Messiah (Dune #2)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/dune-messiah-dune-2-frank-herbert/";
            },},{id: "books-el-socio",
          title: 'El socio',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/el-socio-jenaro-prieto/";
            },},{id: "books-farenheit-451",
          title: 'Farenheit 451',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/farenheit-451-ray-bradbury/";
            },},{id: "books-go-ask-alice",
          title: 'Go Ask Alice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/go-ask-alice-beatrice-sparks/";
            },},{id: "books-harry-potter-and-the-chamber-of-secrets-harry-potter-2",
          title: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/harry-potter-and-the-chamber-of-secrets-harry-potter-2-j-k-rowling/";
            },},{id: "books-harry-potter-and-the-deathly-hallows-harry-potter-7",
          title: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/harry-potter-and-the-deathly-hallows-harry-potter-7-j-k-rowling/";
            },},{id: "books-harry-potter-and-the-goblet-of-fire-harry-potter-4",
          title: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/harry-potter-and-the-goblet-of-fire-harry-potter-4-j-k-rowling/";
            },},{id: "books-harry-potter-and-the-half-blood-prince-harry-potter-6",
          title: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/harry-potter-and-the-half-blood-prince-harry-potter-6-j-k-rowling/";
            },},{id: "books-harry-potter-and-the-order-of-the-phoenix-harry-potter-5",
          title: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/harry-potter-and-the-order-of-the-phoenix-harry-potter-5-j-k-rowling/";
            },},{id: "books-harry-potter-and-the-philosopher-39-s-stone-harry-potter-1",
          title: 'Harry Potter and the Philosopher&amp;#39;s Stone (Harry Potter, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/harry-potter-and-the-philosopher-s-stone-harry-potter-1-j-k-rowling/";
            },},{id: "books-harry-potter-and-the-prisoner-of-azkaban-harry-potter-3",
          title: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/harry-potter-and-the-prisoner-of-azkaban-harry-potter-3-j-k-rowling/";
            },},{id: "books-holes-holes-1",
          title: 'Holes (Holes, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/holes-holes-1-louis-sachar/";
            },},{id: "books-i-have-no-mouth-amp-i-must-scream",
          title: 'I Have No Mouth &amp;amp; I Must Scream',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/i-have-no-mouth-and-i-must-scream-harlan-ellison/";
            },},{id: "books-if-you-39-re-reading-this-it-39-s-too-late-secret-2",
          title: 'If You&amp;#39;re Reading This, It&amp;#39;s Too Late (Secret, #2)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/if-you-re-reading-this-it-s-too-late-secret-2-pseudonymous-bosch/";
            },},{id: "books-inés-of-my-soul",
          title: 'Inés of My Soul',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/in-s-of-my-soul-isabel-allende/";
            },},{id: "books-la-gran-ilusión-las-grandes-obras-de-albert-einstein",
          title: 'La Gran Ilusión: las grandes obras de Albert Einstein',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/la-gran-ilusi-n-las-grandes-obras-de-albert-einstein-stephen-w-hawking/";
            },},{id: "books-leviathan-wakes-the-expanse-1",
          title: 'Leviathan Wakes (The Expanse, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/leviathan-wakes-the-expanse-1-james-s-a-corey/";
            },},{id: "books-love-in-the-time-of-cholera",
          title: 'Love in the Time of Cholera',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/love-in-the-time-of-cholera-gabriel-garc-a-m-rquez/";
            },},{id: "books-neuromancer-sprawl-1",
          title: 'Neuromancer (Sprawl, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/neuromancer-sprawl-1-william-gibson/";
            },},{id: "books-night",
          title: 'Night',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/night-elie-wiesel/";
            },},{id: "books-one-hundred-years-of-solitude",
          title: 'One Hundred Years of Solitude',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/one-hundred-years-of-solitude-gabriel-garc-a-m-rquez/";
            },},{id: "books-paradise-lost",
          title: 'Paradise Lost',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/paradise-lost-john-milton/";
            },},{id: "books-project-hail-mary",
          title: 'Project Hail Mary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/project-hail-mary-andy-weir/";
            },},{id: "books-shōgun-asian-saga-1",
          title: 'Shōgun (Asian Saga, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/sh-gun-asian-saga-1-james-clavell/";
            },},{id: "books-slaughterhouse-five",
          title: 'Slaughterhouse-Five',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/slaughterhouse-five-kurt-vonnegut-jr/";
            },},{id: "books-solaris",
          title: 'Solaris',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/solaris-stanis-aw-lem/";
            },},{id: "books-the-bfg",
          title: 'The BFG',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-bfg-roald-dahl/";
            },},{id: "books-the-boy-in-the-striped-pajamas",
          title: 'The Boy in the Striped Pajamas',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-boy-in-the-striped-pajamas-john-boyne/";
            },},{id: "books-the-chronicles-of-narnia-the-chronicles-of-narnia-1-7",
          title: 'The Chronicles of Narnia (The Chronicles of Narnia, #1-7)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-chronicles-of-narnia-the-chronicles-of-narnia-1-7-c-s-lewis/";
            },},{id: "books-the-curious-incident-of-the-dog-in-the-night-time",
          title: 'The Curious Incident of the Dog in the Night-Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-curious-incident-of-the-dog-in-the-night-time-mark-haddon/";
            },},{id: "books-the-diary-of-a-young-girl",
          title: 'The Diary of a Young Girl',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-diary-of-a-young-girl-anne-frank/";
            },},{id: "books-the-great-gatsby",
          title: 'The Great Gatsby',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-great-gatsby-f-scott-fitzgerald/";
            },},{id: "books-the-hitchhiker-39-s-guide-to-the-galaxy-hitchhiker-39-s-guide-to-the-galaxy-1",
          title: 'The Hitchhiker&amp;#39;s Guide to the Galaxy (Hitchhiker&amp;#39;s Guide to the Galaxy, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-hitchhiker-s-guide-to-the-galaxy-hitchhiker-s-guide-to-the-galaxy-1-douglas-adams/";
            },},{id: "books-the-hobbit-or-there-and-back-again",
          title: 'The Hobbit, or There and Back Again',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-hobbit-or-there-and-back-again-j-r-r-tolkien/";
            },},{id: "books-the-house-of-the-spirits",
          title: 'The House of the Spirits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-house-of-the-spirits-isabel-allende/";
            },},{id: "books-the-iliad",
          title: 'The Iliad',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-iliad-homer/";
            },},{id: "books-the-little-prince",
          title: 'The Little Prince',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-little-prince-antoine-de-saint-exup-ry/";
            },},{id: "books-the-martian",
          title: 'The Martian',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-martian-andy-weir/";
            },},{id: "books-the-martian-chronicles",
          title: 'The Martian Chronicles',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-martian-chronicles-ray-bradbury/";
            },},{id: "books-the-maze-runner-the-maze-runner-1",
          title: 'The Maze Runner (The Maze Runner, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-maze-runner-the-maze-runner-1-james-dashner/";
            },},{id: "books-the-metamorphosis",
          title: 'The Metamorphosis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-metamorphosis-franz-kafka/";
            },},{id: "books-the-name-of-this-book-is-secret-secret-1",
          title: 'The Name of This Book Is Secret (Secret, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-name-of-this-book-is-secret-secret-1-pseudonymous-bosch/";
            },},{id: "books-the-neverending-story",
          title: 'The Neverending Story',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-neverending-story-michael-ende/";
            },},{id: "books-the-omen",
          title: 'The Omen',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-omen-david-seltzer/";
            },},{id: "books-the-secret-garden",
          title: 'The Secret Garden',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-secret-garden-frances-hodgson-burnett/";
            },},{id: "books-the-three-body-problem-remembrance-of-earth-s-past-1",
          title: 'The Three-Body Problem (Remembrance of Earth’s Past, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-three-body-problem-remembrance-of-earth-s-past-1-liu-cixin/";
            },},{id: "books-the-ultimate-hitchhiker-s-guide-to-the-galaxy-hitchhiker-39-s-guide-to-the-galaxy-1-5",
          title: 'The Ultimate Hitchhiker’s Guide to the Galaxy (Hitchhiker&amp;#39;s Guide to the Galaxy, #1-5)...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-ultimate-hitchhiker-s-guide-to-the-galaxy-hitchhiker-s-guide-to-the-galaxy-1-5-douglas-adams/";
            },},{id: "books-the-universe-in-a-nutshell",
          title: 'The Universe in a Nutshell',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-universe-in-a-nutshell-stephen-w-hawking/";
            },},{id: "books-the-war-of-the-worlds",
          title: 'The War of the Worlds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-war-of-the-worlds-h-g-wells/";
            },},{id: "books-the-witches",
          title: 'The Witches',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-witches-roald-dahl/";
            },},{id: "books-this-book-is-not-good-for-you-secret-3",
          title: 'This Book Is Not Good for You (Secret, #3)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/this-book-is-not-good-for-you-secret-3-pseudonymous-bosch/";
            },},{id: "books-this-isn-39-t-what-it-looks-like-secret-4",
          title: 'This Isn&amp;#39;t What It Looks Like (Secret, #4)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/this-isn-t-what-it-looks-like-secret-4-pseudonymous-bosch/";
            },},{id: "books-you-have-to-stop-this-secret-5",
          title: 'You Have to Stop This (Secret, #5)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/you-have-to-stop-this-secret-5-pseudonymous-bosch/";
            },},{id: "books-hyperion-hyperion-cantos-1",
          title: 'Hyperion (Hyperion Cantos, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/hyperion-hyperion-cantos-1-dan-simmons/";
            },},{id: "books-rendezvous-with-rama-rama-1",
          title: 'Rendezvous with Rama (Rama, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/rendezvous-with-rama-rama-1-arthur-c-clarke/";
            },},{id: "books-the-lord-of-the-rings-the-lord-of-the-rings-1-3",
          title: 'The Lord of the Rings (The Lord of the Rings, #1-3)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-lord-of-the-rings-the-lord-of-the-rings-1-3-j-r-r-tolkien/";
            },},{id: "books-god-emperor-of-dune-dune-4",
          title: 'God Emperor of Dune (Dune #4)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/god-emperor-of-dune-dune-4-frank-herbert/";
            },},{id: "books-frankenstein-the-1818-text",
          title: 'Frankenstein: The 1818 Text',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/frankenstein-the-1818-text-mary-wollstonecraft-shelley/";
            },},{id: "books-it",
          title: 'It',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/it-stephen-king/";
            },},{id: "books-little-women-little-women-1",
          title: 'Little Women (Little Women, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/little-women-little-women-1-louisa-may-alcott/";
            },},{id: "books-moby-dick-or-the-whale",
          title: 'Moby-Dick or, The Whale',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/moby-dick-or-the-whale-herman-melville/";
            },},{id: "books-the-complete-stories-and-poems",
          title: 'The Complete Stories and Poems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-complete-stories-and-poems-edgar-allan-poe/";
            },},{id: "books-the-fall-of-hyperion-hyperion-cantos-2",
          title: 'The Fall of Hyperion (Hyperion Cantos, #2)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-fall-of-hyperion-hyperion-cantos-2-dan-simmons/";
            },},{id: "books-the-grapes-of-wrath",
          title: 'The Grapes of Wrath',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-grapes-of-wrath-john-steinbeck/";
            },},{id: "books-the-terror",
          title: 'The Terror',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-terror-dan-simmons/";
            },},{id: "books-books-of-blood-volumes-one-to-three-books-of-blood-1-3",
          title: 'Books of Blood: Volumes One to Three (Books of Blood, #1-3)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/books-of-blood-volumes-one-to-three-books-of-blood-1-3-clive-barker/";
            },},{id: "books-el-desierto-de-los-tartaros",
          title: 'El desierto de los tartaros',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/el-desierto-de-los-tartaros-dino-buzzati/";
            },},{id: "books-el-perfume-historia-de-un-asesino",
          title: 'El perfume: Historia de un asesino',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/el-perfume-historia-de-un-asesino-patrick-s-skind/";
            },},{id: "books-flowers-for-algernon",
          title: 'Flowers for Algernon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/flowers-for-algernon-daniel-keyes/";
            },},{id: "books-los-sauces",
          title: 'Los sauces',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/los-sauces-algernon-blackwood/";
            },},{id: "books-nunca-me-abandones",
          title: 'Nunca me abandones',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/nunca-me-abandones-kazuo-ishiguro/";
            },},{id: "books-the-summer-i-died-the-roger-huntington-saga-1",
          title: 'The Summer I Died (The Roger Huntington Saga, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-summer-i-died-the-roger-huntington-saga-1-ryan-c-thomas/";
            },},{id: "books-woom",
          title: 'Woom',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/woom-duncan-ralston/";
            },},{id: "books-quién-mató-a-palomino-molero-narrativa-punto-de-lectura-spanish-edition-by-vargas-llosa-mario-2014-paperback",
          title: '¿Quién mató a Palomino Molero? (Narrativa (Punto de Lectura)) (Spanish Edition) by Vargas...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/qui-n-mat-a-palomino-molero-narrativa-punto-de-lectura-spanish-edition-by-vargas-llosa-mario-2014-paperback-mario-vargas-llosa/";
            },},{id: "books-foundation-foundation-1",
          title: 'Foundation (Foundation, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/foundation-foundation-1-isaac-asimov/";
            },},{id: "books-heretics-of-dune-dune-5",
          title: 'Heretics of Dune (Dune #5)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/heretics-of-dune-dune-5-frank-herbert/";
            },},{id: "books-the-dispossessed-an-ambiguous-utopia",
          title: 'The Dispossessed: An Ambiguous Utopia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-dispossessed-an-ambiguous-utopia-ursula-k-le-guin/";
            },},{id: "books-the-left-hand-of-darkness",
          title: 'The Left Hand of Darkness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-left-hand-of-darkness-ursula-k-le-guin/";
            },},{id: "books-to-kill-a-mockingbird",
          title: 'To Kill a Mockingbird',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/to-kill-a-mockingbird-harper-lee/";
            },},{id: "books-the-stand",
          title: 'The Stand',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-stand-stephen-king/";
            },},{id: "books-anathema",
          title: 'Anathema',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/anathema-nick-roberts/";
            },},{id: "books-mean-spirited",
          title: 'Mean Spirited',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/mean-spirited-nick-roberts/";
            },},{id: "books-penpal",
          title: 'Penpal',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/penpal-dathan-auerbach/";
            },},{id: "books-the-exorcist-39-s-house-the-exorcist-39-s-house-1",
          title: 'The Exorcist&amp;#39;s House (The Exorcist&amp;#39;s House, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-exorcist-s-house-the-exorcist-s-house-1-nick-roberts/";
            },},{id: "books-the-trees-grew-because-i-bled-there-collected-stories",
          title: 'The Trees Grew Because I Bled There: Collected Stories',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-trees-grew-because-i-bled-there-collected-stories-eric-larocca/";
            },},{id: "books-the-hellbound-heart-hellraiser-1",
          title: 'The Hellbound Heart (Hellraiser #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-hellbound-heart-hellraiser-1-clive-barker/";
            },},{id: "books-a-clash-of-kings-a-song-of-ice-and-fire-2",
          title: 'A Clash of Kings  (A Song of Ice and Fire, #2)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/a-clash-of-kings-a-song-of-ice-and-fire-2-george-r-r-martin/";
            },},{id: "books-the-prose-edda-norse-mythology",
          title: 'The Prose Edda: Norse Mythology',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-prose-edda-norse-mythology-snorri-sturluson/";
            },},{id: "books-the-silmarillion",
          title: 'The Silmarillion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-silmarillion-j-r-r-tolkien/";
            },},{id: "books-the-shining-the-shining-1",
          title: 'The Shining (The Shining, #1)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-shining-the-shining-1-stephen-king/";
            },},{id: "books-gone-to-see-the-river-man",
          title: 'Gone to See the River Man',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/gone-to-see-the-river-man-kristopher-triana/";
            },},{id: "books-el-aleph",
          title: 'El Aleph',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/el-aleph-jorge-luis-borges/";
            },},{id: "books-the-maniac",
          title: 'The Maniac',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodreads/the-maniac-benjam-n-labatut/";
            },},{id: "news-i-got-awarded-with-honorable-mention-for-best-research-of-2025-in-the-annual-cenia-event-for-my-paper-in-neurips-2025",
          title: 'I got awarded with Honorable Mention for Best Research of 2025 in the...',
          description: "",
          section: "News",},{id: "news-i-will-be-teaching-discrete-mathematics-at-puc-this-semester-smile",
          title: 'I will be teaching Discrete Mathematics at PUC this semester! :smile:',
          description: "",
          section: "News",},{id: "news-will-officially-be-starting-my-phd-next-fall-in-the-cs-department-at-university-of-toronto-maple-leaf",
          title: 'Will officially be starting my PhD next fall in the CS department at...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-best-master-s-thesis-award-by-the-puc-computer-science-department-for-my-work-on-compositionality-in-emergent-communication",
          title: 'I was awarded the best Master’s thesis award by the PUC computer science...',
          description: "",
          section: "News",},{id: "news-i-just-came-back-from-my-first-dagstuhl-seminar-plus-a-week-of-traveling-around-germany-was-a-lot-of-fun",
          title: 'I just came back from my first Dagstuhl seminar, plus a week of...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-iic1253-discrete-mathematics",
          title: 'IIC1253 Discrete Mathematics',
          description: "An introduction to the mathematical language and proof techniques used in computer science, with emphasis on abstraction, formal modeling, and rigorous problem solving.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/discreet-mathematics/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%66%61%65%6C.%65%6C%62%65%72%67@%75%63.%63%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/SugarFreeManatee", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fjoScD0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
