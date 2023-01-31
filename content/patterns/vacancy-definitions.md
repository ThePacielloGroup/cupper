+++
title = "Vacancy definitions"
tags = ["wcag1.3.1"]
+++

## Finding

The "Location" and "Deadline" in vacancies look like (prime candidates for) definition lists, but they're not. Visually there's a clear relation but it's not communicated in code.

### Location
Xpath: `/html/body/div[1]/div[2]/div/section/div[2]/article/div/div[2]/div/div/div/div/div[2]/div/div/div[5]/div/div/div[1]/div/div/div/div/div[2]/p[3]`

## Improvement

A possible alternate implementation would be.
````
  <dl>
    <dt>Location</dt>
    <dd>Barbados</dd>
    <dt>Deadline</dt>
    <dd><time datetime="...">5 Feb 2023 11:55 PM</time></dd>
  </dl>
````
This makes sure that a visual relationship is also presented in code.