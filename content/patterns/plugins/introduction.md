+++
title = "Introduction"
weight = 1
+++

FilePonds functionality can be extended with plugins.

Each plugin is located in its own GitHub repository and follows a specific naming convention.

```html
filepond-plugin-<name-of-plugin>
```

Plugins can be registered with FilePond using the `registerPlugin` method. Read more about [registering plugins here](#registering-plugins).

## Available plugins

| Plugin                                              | Name                                   | Description                                                                                    |
| --------------------------------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [File Encode](../file-encode)                       | filepond-plugin-file-encode            | Encodes files as base64 data for submitting along a classic form post.                         |
| [File Size Validation](../file-validate-size)       | filepond-plugin-file-validate-size     | Limit the size of files being added                                                            |
| [File Type Validation](../file-validate-type)       | filepond-plugin-file-validate-type     | Limit the types of files being added                                                           |
| [Image Preview](../image-preview)                   | filepond-plugin-image-preview          | Shows a preview of images                                                                      |
| [Image Crop](../image-crop)                         | filepond-plugin-image-crop             | Set crop ratio for images                                                                      |
| [Image Resize](../image-resize)                     | filepond-plugin-image-resize           | Set output dimensions for images                                                               |
| [Image Transform](../image-transform)               | filepond-plugin-image-transform        | Apply image transforms on the client before uploading.                                         |
| [Image EXIF Orientation](../image-exif-orientation) | filepond-plugin-image-exif-orientation | Extracts EXIF orientation information so to fix orientation of pictures taken on mobile phones |

## Installing plugins

In the examples below we'll install the [Image Preview](../image-preview) plugin. The installation procedure is the same for all plugins, replace `filepond-plugin-image-preview` with the name of the plugin you want to install.

### Using npm

{{<cmd>}}npm i filepond-plugin-image-preview --save{{</cmd>}}

Now we can add the plugin to our project like this.

```js
// Import the plugin code
import FilepondPluginImagePreview from 'filepond-plugin-image-preview';

// Import the plugin styles (if needed)
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
```

{{% note %}}
If we're not using a module bundler like Webpack, the plugin CSS file will have to be embedded manually.
{{% /note %}}

### Using a CDN

```html
<!-- add to document <head> -->
<link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet">
<link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css" rel="stylesheet">

<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add to document <head> -->
<link href="filepond.css" rel="stylesheet">
<link href="filepond-plugin-image-preview.css" rel="stylesheet">

<!-- add before </body> -->
<script src="filepond-plugin-image-preview.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Registering Plugins

With the plugins available on the page we can now register them with `FilePond` using the `registerPlugin` method.

```js
FilePond.registerPlugin(FilePondPluginImagePreview);
```

We can pass multiple plugin references to the `registerPlugin` method.

```js
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize
);
```

A plugin will fire a `FilePond:pluginloaded` event on the document when it's ready for use. The event `detail` property will contain the plugin.

```js
document.addEventListener('FilePond:pluginloaded', e => {
    console.log('FilePond plugin is ready for use', e.detail);
});
```

{{% note %}}
Plugins need to be registered before we create our first FilePond instance.
{{% /note %}}
