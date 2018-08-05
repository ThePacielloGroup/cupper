+++
title = "Image transform"
+++

The Image transform plugin applies the image modifications supplied by the [Image crop](../image-crop) and [Image resize](../image-resize) plugins before the image is uploaded. It can also change the file format to either JPEG or PNG.


## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-image-transform --save{{</cmd>}}

Now we can add the Image Transform plugin to our project like this.

```js
// Import the plugin code
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
```


### Using a CDN

```html
<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-image-transform/dist/filepond-plugin-image-transform.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add before </body> -->
<script src="filepond-plugin-image-transform.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Properties

| Property                     | Default | Description                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowImageTransform          | `true`  | Enable or disable client-side image transforms                                                                                                                                                                                                                                                                      |
| imageTransformOutputMimeType | `null`  | The file type of the output image. Can be either `'image/jpeg'` or `'image/png'` as those are the formats the [HTML5 Canvas element can output to](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob). If not defined, will default to the input file type, and fallback to `'image/jpeg'`. |
| imageTransformOutputQuality  | `null`  | The quality of the output image supplied as a value between `0` and `100`. Where `100` is best quality and `0` is worst. When not supplied it will use the browser default quality which averages around `94`.                                                                                                      |
