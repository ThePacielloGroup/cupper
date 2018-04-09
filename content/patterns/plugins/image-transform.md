+++
title = "Image transform"
+++

The Image transform plugin applies the image modifications supplied by the [Image crop](../image-crop) and [Image resize](../image-resize) plugins before the image is uploaded. It can also change the file format to either JPEG or PNG.

## Properties

| Property                     | Default | Description                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowImageTransform          | `true`  | Enable or disable client-side image transforms                                                                                                                                                                                                                                                                      |
| imageTransformOutputMimeType | `null`  | The file type of the output image. Can be either `'image/jpeg'` or `'image/png'` as those are the formats the [HTML5 Canvas element can output to](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob). If not defined, will default to the input file type, and fallback to `'image/jpeg'`. |
| imageTransformOutputQuality  | `null`  | The quality of the output image supplied as a value between `0` and `100`. Where `100` is best quality and `0` is worst. When not supplied it will use the browser default quality which averages around `94`.                                                                                                      |
