+++
title = "Image crop"
+++

The Image crop plugin automatically calculates and adds cropping information based on the input image dimensions and the set crop ratio.

The [Image preview](../image-preview) plugin uses this information to show the correct preview. The [Image transform](../image-transform) plugin uses this information to transform the image before uploading it to the server.

## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-image-crop --save{{</cmd>}}

Now we can add the Image Crop plugin to our project like this.

```js
// Import the plugin code
import FilepondPluginImageCrop from 'filepond-plugin-image-crop';
```


### Using a CDN

```html
<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-image-crop/dist/filepond-plugin-image-crop.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add before </body> -->
<script src="filepond-plugin-image-crop.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Properties

| Property             | Default | Description                                                                             |
| -------------------- | ------- | --------------------------------------------------------------------------------------- |
| allowImageCrop       | `true`  | Enable or disable image cropping                                                        |
| imageCropAspectRatio | `null`  | The aspect ratio of the crop in human readable format, for example `'1:1'` or `'16:10'` |
