+++
title = "More jobs"
tags = ["wcag1.3.1"]
+++

## Finding

The "More jobs"-button looks like a button and functions like a button but is an `<a>` in the code.

````
<a href="/en-us/listing/?page=2&amp;page-items=20" class="more-link button" style="display:block" title="More Jobs" data-page="2" data-page-items="20">
  More Jobs <span class="count">239</span>
</a>
````

By turning this into a `<button>`, the appearance and behavior will align with the expectations of users.

The label-text can also be clarified more, but this seems to be a general usability-issue and not accessibility-specific.

### Location
Xpath: `/html/body/div[1]/div[2]/div/section/div[2]/article/div/div[2]/div/div/div/div/div[2]/div/div/div[5]/p/a`

## Improvement

A possible alternate implementation would be.
````
  <button type="button">
    More Jobs <span class="count">239</span>
  </button>
````
