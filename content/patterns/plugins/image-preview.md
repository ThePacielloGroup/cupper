+++
title = "Image preview"
+++

The Image Preview plugin renders a downscaled preview for dropped images.

Combined with the [Image EXIF orientation](../image-exif-orientation) plugin it automatically corrects any mobile rotation information to ensure the image is alway shown correctly.

{{% note %}}
Dropping really big images might impact performance. Browsers that support [`createImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap) have an advantage as they can render the Bitmap data on a separate thread. Use the `imagePreviewMaxFileSize` setting to prevent previewing of very large images.
{{% /note %}}

## Properties

| Property                | Default | Description                                                                                                                                                                    |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowImagePreview       | `true`  | Enable or disable preview mode                                                                                                                                                 |
| imagePreviewMinHeight   | `44`    | Minimum image preview height                                                                                                                                                   |
| imagePreviewMaxHeight   | `256`   | Maximum image preview height                                                                                                                                                   |
| imagePreviewHeight      | `null`  | Fixed image preview height, overrides min and max preview height                                                                                                               |
| imagePreviewMaxFileSize | `null`  | Can be used to prevent loading of large images when `createImageBitmap` is not supported. By default no maximum file size is defined, expects a string, like `2MB` or `500KB`. |
