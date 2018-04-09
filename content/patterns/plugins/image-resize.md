+++
title = "Image resize"
+++

The Image resize plugin automatically calculates and adds resize information.

The [Image preview](../image-preview) plugin uses this information to show the correct preview. The [Image transform](../image-transform) plugin uses this information to transform the image before uploading it to the server.

## Properties

| Property                | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowImageResize        | `true`    | Enable or disable image resizing                                                                                                                                                                                                                                                                                                                                                                                      |
| imageResizeTargetWidth  | `null`    | The output width in pixels                                                                                                                                                                                                                                                                                                                                                                                            |
| imageResizeTargetHeight | `null`    | The output height in pixels                                                                                                                                                                                                                                                                                                                                                                                           |
| imageResizeMode         | `'cover'` | The method in which the images are resized. Choose between `'force'`, `'cover'`, or `'contain'`. Force will ignore the image aspect ratio. Cover will respect the aspect ratio and will scale to fill the target dimensions. Contain also respects the aspect ratio and will fit the image inside the set dimensions. All three settings will upscale images when there are smaller then the given target dimensions. |
