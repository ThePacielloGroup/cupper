+++
title = "Multiple languages"
tags = ["wcag3.1.2"]
+++

## Finding

The page features texts in different languages. These are not marked up as such, making it impossible for technology like screen readers to know the language (and pronounciation) of these texts.

Because the wide range of languages involved, content could not be fully checked for "sensory characteristics".

## Improvement

Pieces of text should have a fitting `lang`-attribute. For example, a French text could be marked up in the following way.

````
  <p lang="fr">French text</p>
````