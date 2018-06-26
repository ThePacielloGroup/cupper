+++
title = "File metadata"
+++

The File Metadata plugin makes it possible to add initial metadata to file objects without using the file item `setMetadata` method.

Add metadata by setting a generic `fileMetadataObject` to the FilePond object or pass custom properties by using data attributes.


## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-file-metadata --save{{</cmd>}}

Now we can add the File Metadata plugin to our project like this.

```js
// Import the plugin code
import FilepondPluginFileMetadata from 'filepond-plugin-file-metadata';
```


### Using a CDN

```html
<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-file-metadata/dist/filepond-plugin-file-metadata.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add before </body> -->
<script src="filepond-plugin-file-metadata.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Usage

This example adds a custom metadata object to each file.

```js
FilePond.setOptions({
    fileMetadataObject: {
        'hello': 'world'
    }
})
```

Here we can see how to pass the same values using data attributes. Use the `file-metadata-` prefix, then add the property name.

```html
<input type="file" name="filepond" data-file-metadata-hello="world">
```


## Properties

Property | Default | Description
---------|---------|---------
allowFileMetadata | `true` | Enable or disable the filemetadata object
fileMetadataObject | `null` | The object that is used to set the initial metadata object of each file item