+++
title = "Image crop"
+++

The Image crop plugin automatically calculates and adds cropping information based on the input image dimensions and the set crop ratio.

The [Image preview](../image-preview) plugin uses this information to show the correct preview. The [Image transform](../image-transform) plugin uses this information to transform the image before uploading it to the server.

## Properties

| Property             | Default | Description                                                                             |
| -------------------- | ------- | --------------------------------------------------------------------------------------- |
| allowImageCrop       | `true`  | Enable or disable image cropping                                                        |
| imageCropAspectRatio | `null`  | The aspect ratio of the crop in human readable format, for example `'1:1'` or `'16:10'` |
