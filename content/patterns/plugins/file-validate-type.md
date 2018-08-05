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
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
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
acceptedFileTypes | `[]` | Array of accepted file types. Can be mime types or wild cards. For instance `['image/*']` will accept all images. `['image/png', 'image/jpeg']` will only accepts `PNGs` and `JPEGs`. 
labelFileTypeNotAllowed | `'File of invalid type'` | Message shown when an invalid file is added
fileValidateTypeLabelExpectedTypes | `'Expects {allButLastType} or {lastType}'` | Message shown to indicate the allowed file types. Available placeholders are `{allTypes}`, `{allButLastType}`, `{lastType}`.
fileValidateTypeLabelExpectedTypesMap | `{}` | Allows mapping the file type to a more visually appealing label, `{ 'image/jpeg': '.jpg' }` will show `.jpg` in the expected types label. Set to `null` to hide a type from the label.