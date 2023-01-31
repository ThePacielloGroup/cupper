+++
title = "Unicef logo"
tags = ["Best practice", "wcag1.1.1", "wcag1.4.5"]
+++

## Finding

The logo is currently implemented as following:

````
  <a href="https://www.unicef.org/careers/" title="UNICEF" rel="home" class="site-branding__logo">
  	<span class="icon-logo-unicef en">
      ::before
      <em class="visibility-hidden">Unicef default logo</em>
    </span>
  </a>
````

The image includes the "for every child"-text and is implemented as an icon font. Icon fonts can present all kinds of issues, for example when people locally change their font. It also results in an image that contains no text alternative. That alternative is specifically needed because the "for every child"-text is part of the image.
The link also includes a title-attribute that's superfluous and might confuse people about the actual purpose of the link.

### Location
Xpath: `/html/body/div[1]/header/div/div[1]/div[4]/div/div/a`

## Improvement

A possible alternate implementation would be.
````
  <a href="https://www.unicef.org/careers/" rel="home" aria-label="Unicef careers home">
  	<img src="unicef-logo.svg" alt="Unicef logo">
    <span>for every child</span>
  </a>
````
