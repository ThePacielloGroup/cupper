+++
title = "Installation"
weight = 1
+++

FilePond is exposed as a module wrapped in a UMD. It can be added to a project using Node Package Manager, from a CDN or by adding the files manually.

## Using npm

If you're familiar with Node you can run the following command in your terminal to install FilePond.

{{<cmd>}}npm i filepond --save{{</cmd>}}

We can then use it in our project using imports.

```js
import * as FilePond from 'filepond';
```

FilePond also requires some styles. When using a module bundler like Webpack we can add those styles like this.

```js
import 'filepond/dist/filepond.min.css';
```

If we're not using a module bundler, we can simply add the stylesheet to the `<head>` of the document.


## From a CDN

We can link to the files on a CDN.

```html
<!-- add to document <head> -->
<link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet">

<!-- add before </body> -->
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>
```

## Manual embedding the files

We can also [download FilePond](https://github.com/pqina/filepond/archive/master.zip) and embed the files manually.

```html
<!-- add to document <head> -->
<link href="filepond.css" rel="stylesheet">

<!-- add before </body> -->
<script src="filepond.js"></script>
```

With the FilePond files in place we can now [get started setting up a FilePond instance](../getting-started).
