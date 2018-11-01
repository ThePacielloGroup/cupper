+++
title = "Style"
weight = 1
+++

## Fonts and colors

FilePond is quite opinionated about its layout but fonts, colors, border-radius and paddings can be finetuned without problem.

FilePond's default font stack is set to the system font stack. This makes it as light weight as possible and familiar to the user.

```css
.filepond--root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
}
```

To override the FilePond styles its best to make your styles a little bit more specific by prepending the `.filepond--root` selector. The FilePond selectors have been kept as non-specific as possible to make overriding easier.

{{% note %}}
Overriding too much styles might make upgrading to a new version difficult and could impact accessibility.
{{% /note %}}

A collection of some common style overrides have been summarized below:

```css
/* use a hand cursor intead of arrow for the action buttons */
.filepond--file-action-button {
    cursor: pointer;
}

/* the text color of the drop label*/
.filepond--drop-label {
    color: #555;
}

/* underline color for "Browse" button */
.filepond--label-action {
    text-decoration-color: #aaa;
}

/* the background color of the filepond drop area */
.filepond--panel-root {
    background-color: #eee;
}

/* the border radius of the drop area */
.filepond--panel-root {
    border-radius: 0.5em;
}

/* the border radius of the file item */
.filepond--item-panel {
    border-radius: 0.5em;
}

/* the background color of the file and file panel (used when dropping an image) */
.filepond--item-panel {
    background-color: #555;
}

/* the background color of the drop circle */
.filepond--drip-blob {
    background-color: #999;
}

/* the background color of the black action buttons */
.filepond--file-action-button {
    background-color: rgba(0, 0, 0, 0.5);
}

/* the icon color of the black action buttons */
.filepond--file-action-button {
    color: white;
}

/* the color of the focus ring */
.filepond--file-action-button:hover,
.filepond--file-action-button:focus {
    box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.9);
}

/* the text color of the file status and info labels */
.filepond--file {
    color: white;
}

/* error state color */
[data-filepond-item-state*='error'] .filepond--item-panel,
[data-filepond-item-state*='invalid'] .filepond--item-panel {
    background-color: red;
}

[data-filepond-item-state='processing-complete'] .filepond--item-panel {
    background-color: green;
}

/* bordered drop area */
.filepond--panel-root {
    background-color: transparent;
    border: 2px solid #2c3340;
}
```

## Limiting the height of FilePond

To limit the height FilePond you can add either a `height` or a `max-height` style to the `.filepond--root` element.

```css
.filepond--root {
    max-height: 10em;
}
```

The `max-height` style will cause FilePond to grow in height till the max height has been reached. The `height` style will fix FilePond to the given height, a scrollbar will automatically be created.

## Changing icons

The icons used by FilePond are embedded in the core JavaScript file. You can supply your own icons (in SVG format) by overriding the matching [FilePond instance properties](../filepond-instance/#svg-icons).

Some guidelines for using your own icons in FilePond:

*   Make sure the icons are square and have the `width` and `height` attribute set to `"26"`
*   Add an `aria-hidden="true"` attribute to the opening `<svg>` element for better screenreader compatibility
*   Set the `viewBox` attribute to `0 0 26 26`
*   Set your own colors or use the `currentColor` value to inherit the color from the button `color` style

An `<svg>` icon template

```html
<svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
<!-- graphics here -->
</svg>
```
