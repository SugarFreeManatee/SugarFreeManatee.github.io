---
layout: page
permalink: /publications/
title: publications
description: Recent papers and preprints on learning, communication, and representation.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<section class="publication-page-intro">
  <p>
    My recent work studies how communication constraints, compositional structure, and representation learning shape intelligent systems.
  </p>
  <div class="publication-topic-list" aria-label="Publication topics">
    <span>compositionality</span>
    <span>communication</span>
    <span>generative models</span>
    <span>biomedical NLP</span>
  </div>
</section>

<section class="publication-tools" aria-label="Publication filters">
  {% include bib_search.liquid %}
</section>

<div class="publications">

{% bibliography %}

</div>
