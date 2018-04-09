+++
title = "Image EXIF orientation"
+++

Retrieves the EXIF orientation data from JPEG images. This helps in correctly orienting photos taken on mobile devices.

The [Image preview](../image-preview) plugin uses this information to show the correct preview. The [Image transform](../image-transform) plugin uses this information to transform the image before uploading it to the server.

## Properties

| Property                  | Default | Description                                    |
| ------------------------- | ------- | ---------------------------------------------- |
| allowImageExifOrientation | `true`  | Enable or disable fetching of EXIF orientation |
