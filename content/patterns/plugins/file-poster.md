+++
title = "File poster"
+++

The File Poster plugin makes it possible to show a custom image inside the file item.

Add a `poster` property to a file metadata object and set an image URL as its value, the File Poster plugin will pick it up and render the image inside the file item similar to the image preview plugin.


## Installation

### Using npm

{{<cmd>}}npm i filepond-plugin-file-poster --save{{</cmd>}}

Now we can add the File Poster plugin to our project like this.

```js
// Import the plugin code
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

// Import the plugin styles
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';
```


### Using a CDN

```html
<!-- add to document <head> -->
<link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet">
<link href="https://unpkg.com/filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css" rel="stylesheet">

<!-- add before </body> -->
<script src="https://unpkg.com/filepond-plugin-file-metadata/dist/filepond-plugin-file-poster.js"></script>
<script src="https://unpkg.com/filepond/dist/filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

### Manual installation

```html
<!-- add to document <head> -->
<link href="filepond.css" rel="stylesheet">
<link href="filepond-plugin-file-poster.css" rel="stylesheet">

<!-- add before </body> -->
<script src="filepond-plugin-file-poster.js"></script>
<script src="filepond.js"></script>

<script>
// ... FilePond initialisation code here
</script>
```

## Usage

This example adds a custom metadata object to each file.

```js
const pond = FilePond.create({
    files: [
        {
            // the server file reference
            source: '12345',

            // set type to local to indicate an already uploaded file
            options: {
                type: 'local',

                // stub file information
                file: {
                    name: 'my-file.png',
                    size: 3001025,
                    type: 'image/png'
                },

                // pass poster property
                metadata: {
                    poster: './poster-image/file.png'
                }
            }
        }
    ]
});
```



## Properties

Property | Default | Description
---------|---------|---------
allowFilePoster | `true` | Enable or disable the file poster functionality