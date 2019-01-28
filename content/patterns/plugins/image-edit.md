+++
title = "Image edit"
+++

{{% note %}}
Documentation for the deprecated [FilePond Image Editor plugin can be found here](../image-edit-deprecated).
{{% /note %}}

The Image Edit plugin allows integration of image editing libraries like [Doka.js](https://pqina.nl/doka) to make modifications to image files loaded in FilePond.

The [Image preview](../image-preview) plugin will automatically updated based on the changes made. If registered, the [Image transform](../image-transform) plugin will automatically apply any changes made to the file object.

Please note that the image edit plugin requires the [Image preview](../image-preview) plugin to be active.


## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-image-edit --save{{</cmd>}}

Now we can add the Image Edit plugin to our project like this.

```js
// Import the plugin code
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

// Import the plugin styles
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
```

{{% note %}}
If a module bundler ( like Webpack ) is not available, the plugin CSS file will have to be embedded manually.
{{% /note %}}


### Using a CDN

```html
<!-- add to document <head> -->
<link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet">
<link href="https://unpkg.com/filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css" rel="stylesheet">

<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-image-edit/dist/filepond-plugin-image-edit.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add to document <head> -->
<link href="filepond.css" rel="stylesheet">
<link href="filepond-plugin-image-edit.css" rel="stylesheet">

<!-- add before </body> -->
<script src="filepond-plugin-image-edit.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Integrating Doka.js using the Image Edit plugin

```js

// Please note that for the image edit plugin to function
// we also need to register the image preview plugin.

FilePond.create(document.querySelector('input'), {

    // default crop aspect ratio
    imageCropAspectRatio: 1,

    // resize to width of 200
    imageResizeTargetWidth: 200,

    // open editor on image drop
    imageEditInstantEdit: true,

    // configure Doka
    imageEditEditor: Doka.create({

        // Doka.js options here ...

        cropAspectRatioOptions: [
            {
                label: 'Free',
                value: null
            },
            {
                label: 'Portrait',
                value: 1.25
            },
            {
                label: 'Square',
                value: 1
            },
            {
                label: 'Landscape',
                value: .75
            }
        ]
    })

});
```


## Properties

| Property             | Default | Description                                                                             |
| -------------------- | ------- | --------------------------------------------------------------------------------------- |
| allowImageEdit       | `true`  | Enable or disable image editing                                                        |
| styleImageEditButtonEditItemPosition | `bottom center` | Position of the image edit button within the image preview window |
| imageEditInstantEdit | `false` | Instantly opens the editor when an image is added, when editing is cancelled the image is not added to FilePond |
| imageEditAllowEdit | `true` | Disables the manual edit button. |
| imageEditIconEdit | `'<svg></svg>'` | The SVG icon used in the image edit button |
| imageEditEditor | `null` | The Image Editor to link to FilePond |



## Integrating other editors

It's possible to integrate with other editors as long as they supply the following API end points.

The object assigned to the `imageEditEditor` property should have these properties.

```js
const editor = {

    // Called by FilePond to edit the image
    // - should open your image editor
    // - receives file object and image edit instructions
    open: (file, instructions) => {
        // open editor here
    },

    // Callback set by FilePond
    // - should be called by the editor when user confirms editing
    // - should receive output object, resulting edit information
    onconfirm: (output) => {},
    
    // Callback set by FilePond
    // - should be called by the editor when user cancels editing
    oncancel: () => {},

    // Callback set by FilePond
    // - should be called by the editor when user closes the editor
    onclose: () => {}
}
```

Data `instructions` object passed to `load` by FilePond.

```js
{
    crop: {

        // Center point of crop
        center: {
            x: .5,
            y: .5
        },

        // Has the image been flipped
        flip: {
            horizontal: false,
            vertical: false
        },

        // How far to zoom the image
        zoom: 1,

        // Rotation of image
        rotation: 0,

        // Aspect ratio of crop, `null` === free
        aspectRatio: null
    }
}
```

Data `output` object returned to FilePond from the editor in `onconfirm`.

```js
{
    data: {
        // This is the same as the instructions object
        crop: {
            center: {
                x: .5,
                y: .5
            },
            flip: {
                horizontal: false,
                vertical: false
            },
            zoom: 1,
            rotation: 0,
            aspectRatio: null
        }
    }
}
```