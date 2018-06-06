+++
title = "File rename"
+++

The File Rename plugin handles allows us to rename files before they are added to FilePond.


## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-file-rename --save{{</cmd>}}

Now we can add the File Rename plugin to our project like this.

```js
// Import the plugin code
import FilepondPluginFileRename from 'filepond-plugin-file-rename';
```


### Using a CDN

```html
<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-file-rename/dist/filepond-plugin-file-rename.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add before </body> -->
<script src="filepond-plugin-file-rename.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Usage

This example keeps the file extension in place but replaces the name with a custom name.

```js
FilePond.setOptions({
    fileRenameFunction: (file) => {
        return `my_new_name${file.extension}`;
    }
})
```

## Properties

Property | Default | Description
---------|---------|---------
allowFileRename | `true` | Enable or disable file renaming
fileRenameFunction | `null` | A function that receives an objecting containing file information like `basename`, `extension` and `name`, return value should be the output filename.