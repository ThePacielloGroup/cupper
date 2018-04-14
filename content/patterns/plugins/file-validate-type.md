+++
title = "File type validation"
+++

The File Type Validation plugin handles blocking of files that are of the wrong type.

When creating a FilePond instance based on a input type file, this plugin will automatically interpret the `accept` attribute value.


## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-file-validate-type --save{{</cmd>}}

Now we can add the File Validate Type plugin to our project like this.

```js
// Import the plugin code
import FilepondPluginFileValidateType from 'filepond-plugin-file-validate-type';
```


### Using a CDN

```html
<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add before </body> -->
<script src="filepond-plugin-file-validate-type.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Properties

Property | Default | Description
---------|---------|---------
allowFileTypeValidation | `true` | Enable or disable file type validation
acceptedFileTypes | `[]` | Array of accepted file types. Can be mime types, wild cards or extensions. For instance `['image/*']` will accept all images. `['image/png', 'image/jpeg']` will only accepts `PNGs` and `JPEGs`. 
labelFileTypeNotAllowed | `'File of invalid type'` | Message shown when an invalid file is added