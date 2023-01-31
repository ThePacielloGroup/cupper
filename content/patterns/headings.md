+++
title = "Headings"
tags = ["Best practice", "wcag1.3.1"]
+++

## Finding

The heading structure of a page should create a hierarchy. It starts with one unique `<h1>` that mirrors the page title. Every other heading should be "below" the `<h1>`, and no levels should be skipped.
Ignoring the rogue `role="heading"` that is (I assume) implemented by Drupal, the current structure is the following:
- h2: Vacancies
  - h1: Current vacancies
    - h3: Explore our current job opportunities
    - h3: Contract type
    - h3: Locations
    - h3: Functional Area
      - h4: **Re-advertisement** Risk and Compliance Officer, NOB, Bridgetown, Barbados, Post #122476 (Open to Nationals of Barbados)
      - h4.. etc  

## Improvement

A more structured set of headings would be along the lines of:
- h1: Vacancies
- h2: Current vacancies
- h3: **Re-advertisement** Risk and Compliance Officer, NOB, Bridgetown, Barbados, Post #122476 (Open to Nationals of Barbados)
- h3: etc
- h2: Footer
  - h3: UNICEF Careers home
  - h3: Work with UNICEF
  - h3: Our talent programmes
  - h3: Social media

This makes sure no levels are skipped, the `h1` aligns with the page-title and any texts that shouldn't be heading will no longer be headings.
It also adds headings to the footer, where there are now elements implemented as links that should be headings.