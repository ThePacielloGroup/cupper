+++
title = "Cookie notice close-button"
tags = ["wcag1.3.1", "wcag2.1.1"]
+++

## Finding

The close-button for the cookie notice is currently implemented as following:

````
  <img class="agree-button" src="https://sites.unicef.org/vacanciestemplate/icon_wclose.png" alt="pop up close">
````

It looks like and functions mostly like a button but is implemented as an image. This results in the component being unreachable and inoperable for people using a keyboard.


### Location
Xpath: `/html/body/div[1]/div/div/div[2]/img`

## Improvement

A possible alternate implementation would be.
````
  <button type="button">
    <img class="agree-button" src="close-icon.svg" alt="">
    Close notice
  </button>
````
