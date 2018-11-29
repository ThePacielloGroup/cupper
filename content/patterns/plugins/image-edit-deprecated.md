+++
title = "Image edit (deprecated)"
+++

{{% warning %}}
This is a plugin has been deprecated. Please make the switch to the [Image edit](../image-edit) plugin combined with [Doka.js](https://pqina.nl/doka) as soon as possible.
{{% /warning %}}

The Image editor plugin adds manual image editing capabilities to image files.

The [Image preview](../image-preview) plugin uses the editor output to show the correct preview. The [Image transform](../image-transform) plugin uses the editor output to transform the image before uploading it to the server. The [Image crop](../image-crop) plugin can be used to set the initial crop aspect ratio.

Please note that the image edit plugin requires the [Image preview](../image-preview) plugin to be active.


## Installation

The Image Edit plugin files are only available from the [Premium plugin store](https://pqina.nl/filepond/image-editor.html).


### Importing the Image Edit module

Premium plugins aren't available on npm. You can put the esm file in a directory relative to your project and import the plugin like this.

```js
// Import the plugin code (we also need the preview plugin)
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageEdit from './filepond-plugin-image-edit.esm.min.js';

// Import the plugin styles (we also need the preview plugin)
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import './filepond-plugin-image-edit.min.css';
```

### Manual installation

```html
<!-- add to document <head> (we also need the preview plugin) -->
<link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet">
<link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css" rel="stylesheet">
<link href="filepond-plugin-image-edit.min.css" rel="stylesheet">

<!-- add before </body> (we also need the preview plugin) -->
<script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js"></script>
<script src="filepond-plugin-image-edit.min.js"></script>
<script src="filepond.js"></script>

<script>
FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginImageEdit);
// ... FilePond initialisation code here
</script>
```

## Properties

| Property             | Default | Description                                                                             |
| -------------------- | ------- | --------------------------------------------------------------------------------------- |
| allowImageEdit       | `true`  | Enable or disable image editing                                                        |
| imageCropAspectRatio | `null`  | The aspect ratio of the crop in human readable format, for example `'1:1'` or `'16:10'` |
| styleImageEditButtonEditItemPosition | `bottom center` | Position of the image edit button within the image preview window |
| imageEditImageTurnRight | `false` | Set to true to enable both the turn left and turn right image controls |
| imageEditInstantEdit | `false` | Instantly opens the editor when an image is added, when editing is cancelled the image is not added to FilePond |
| imageEditAllowEdit | `true` | Disables the manual edit button. |
| imageEditResizeKeyCodes | `[18, 91, 92, 93]` | The modifier keys that can be used to enable the mouse move resize controls, default is ALT and CMD |
| imageEditIconEdit | `'<svg></svg>'` | The SVG icon used in the image edit button |
