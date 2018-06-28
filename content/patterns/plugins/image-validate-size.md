+++
title = "Image size validation"
+++

The Image Size Validation plugin handles blocking of image that are either too small or too large.

## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-image-validate-size --save{{</cmd>}}

Now we can add the File Validate Type plugin to our project like this.

```js
// Import the plugin code
import FilepondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
```


### Using a CDN

```html
<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-image-validate-size/dist/filepond-plugin-image-validate-size.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add before </body> -->
<script src="filepond-plugin-image-validate-size.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Properties

Property | Default | Description
---------|---------|---------
allowImageValidateSize | `true` | Enable or disable image size validation.
imageValidateSizeMinWidth | `1` | The minimum image width.
imageValidateSizeMaxWidth | `65535` | The maximum image width.
imageValidateSizeMinHeight | `1` | The minimum image height.
imageValidateSizeMaxHeight | `65535` | The maximum image height.
imageValidateSizeLabelImageSizeTooSmall | `'Image is too small'` | The message shown when the image is too small.
imageValidateSizeLabelImageSizeTooBig | `'Image is too big'` | The message shown when the image is too big.
imageValidateSizeLabelExpectedMinSize | `'Minimum size is {minWidth} × {minHeight}'` | Message shown to indicate the minimum image size.
imageValidateSizeLabelExpectedMaxSize | `'Maximum size is {maxWidth} × {maxHeight}'` | Message shown to indicate the maximum image size.
