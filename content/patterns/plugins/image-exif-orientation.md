+++
title = "Image EXIF orientation"
+++

Retrieves the EXIF orientation data from JPEG images. This helps in correctly orienting photos taken on mobile devices.

The [Image preview](../image-preview) plugin uses this information to show the correct preview. The [Image transform](../image-transform) plugin uses this information to transform the image before uploading it to the server.

## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-image-exif-orientation --save{{</cmd>}}

Now we can add the Image EXIF Orientation plugin to our project like this.

```js
// Import the plugin code
import FilepondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
```


### Using a CDN

```html
<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add before </body> -->
<script src="filepond-plugin-image-exif-orientation.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Properties

| Property                  | Default | Description                                    |
| ------------------------- | ------- | ---------------------------------------------- |
| allowImageExifOrientation | `true`  | Enable or disable fetching of EXIF orientation |
