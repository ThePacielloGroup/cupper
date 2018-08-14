+++
title = "File rename"
+++

The File Rename plugin allows us to rename files before they are added to FilePond.


## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-file-rename --save{{</cmd>}}

Now we can add the File Rename plugin to our project like this.

```js
// Import the plugin code
import FilePondPluginFileRename from 'filepond-plugin-file-rename';
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

You can also return a `Promise` and do asynchronous file renaming.

```js
FilePond.setOptions({
    fileRenameFunction: file => new Promise(resolve => {
        resolve(window.prompt('Enter new filename', file.name))
    })
})
```

## Properties

Property | Default | Description
---------|---------|---------
allowFileRename | `true` | Enable or disable file renaming
fileRenameFunction | `null` | A function that receives an objecting containing file information like `basename`, `extension` and `name`. It should return either a string value or a Promise that resolves with a string value.