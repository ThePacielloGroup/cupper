+++
title = "High contrast mode"
tags = ["wcag1.3.1", "wcag1.4.1", "wcag1.4.11", "wcag4.1.2"]
+++

## Finding

The "High contrast"-button is currently implemented as following:

````
	<a class="high-contrast__lnk" data-action="https://www.unicef.org/careers/vacancies/template" tabindex="0" data-tracked-component="high-contrast" data-bound="click" data-label="High contrast">High contrast</a>

````

It looks like, and is implemented as, a link but functions mostly like a button. This results in the behavior of the component not aligning with its presentation. This can confuse and mislead the user. The button triggers something within the page and should therefore be implemented as a button, unlike a link that should refer to another page.
As the implementation of the high contrast-mode is inaccessible, the page has no "conforming alternate version" and all contrast-related issues on the page should be treated as issues. If the implementation were accessible, these issues would be irrelevant.
Another issue with the button is that it does not communicate its state. It's not clear when (and if) the high contrast-mode is activated.


### Location
Xpath: `/html/body/div[1]/header/div/div[1]/div[1]/div/div/div/a`

## Improvement

A possible alternate implementation would be.
````
  <button type="button" aria-pressed="false">
    Toggle high contrast
  </button>
````
This also removes the superfluous `tabindex` and should be accompanied by a visual change to indicate the state of the button.