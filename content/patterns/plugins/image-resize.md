+++
title = "Image resize"
+++

The Image resize plugin automatically calculates and adds resize information.

The [Image preview](../image-preview) plugin uses this information to show the correct preview. The [Image transform](../image-transform) plugin uses this information to transform the image before uploading it to the server.


## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-image-resize --save{{</cmd>}}

Now we can add the Image Resize plugin to our project like this.

```js
// Import the plugin code
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
```


### Using a CDN

```html
<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-image-resize/dist/filepond-plugin-image-resize.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add before </body> -->
<script src="filepond-plugin-image-resize.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```


## Properties

| Property                | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowImageResize        | `true`    | Enable or disable image resizing                                                                                                                                                                                                                                                                                                                                                                                      |
| imageResizeTargetWidth  | `null`    | The output width in pixels, if `null` will use value of `imageResizeTargetHeight`                                                                                                                                                                                                                                                                                                                                                                                            |
| imageResizeTargetHeight | `null`    | The output height in pixels, if `null` will use value of `imageResizeTargetWidth`                                                                                                                                                                                                                                                                                                                                                                                            |
| imageResizeMode         | `'cover'` | The method in which the images are resized. Choose between `'force'`, `'cover'`, or `'contain'`. Force will ignore the image aspect ratio. Cover will respect the aspect ratio and will scale to fill the target dimensions. Contain also respects the aspect ratio and will fit the image inside the set dimensions. All three settings will upscale images when there are smaller then the given target dimensions. |
| imageResizeUpscale      | `true`    | Set to false to prevent upscaling of images smaller than the target size.