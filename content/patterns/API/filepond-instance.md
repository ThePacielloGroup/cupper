+++
title = "FilePond instance"
weight = 3
+++

The FilePond instance is the object returned when `FilePond.create` method is used. It's an object linked to a DOM element. The FilePond instance can be used to add files, remove files and customize the functionality of a single FilePond.

## Properties

The FilePond core module exposes the following properties.

| Property      | Default      | Description                                                                              |
| ------------- | ------------ | ---------------------------------------------------------------------------------------- |
| element       | `null`       | The root element of the FilePond instance. This property has no setter  |
| status        | `0`           | Returns the current status of the FilePond instance, use the `FilePond.Status` enum to determine the status. Has no setter. |
| name          | `'filepond'` | The input field name to use                                                              |
| className     | `null`       | Additional CSS class to add to the root element                                          |
| required      | `false`      | Sets the required attribute to the output field                                          |
| disabled      | `false`      | Sets the disabled attribute to the output field                                          |
| captureMethod | `null`       | Sets the given value to the `capture` attribute                                          |
| allowDrop     | `true`       | Enable or disable drag n' drop                                                           |
| allowBrowse   | `true`       | Enable or disable file browser                                                           |
| allowPaste    | `true`       | Enable or disable pasting of files. Pasting files is not supported on all browesrs.      |
| allowMultiple | `false`      | Enable or disable adding multiple files                                                  |
| allowReplace  | `true`       | Allow drop to replace a file, only works when `allowMultiple` is `false`                 |
| allowRevert   | `true`       | Allows the user to revert file upload |
| forceRevert   | `false`      | Set to `true` to require the file to be successfully reverted before continuing |
| maxFiles      | `null`       | The maximum number of files that the pond can handle                                     |
| maxParallelUploads | `null`  | The maxmimum number of files that can be uploaded in parallel |
| checkValidity | `false`      | Set to `true` to enable custom validity messages. FilePond will throw an error when a parent form is submitted and it contains invalid files. |
| itemInsertLocation | `'before'` | Set to `'after'` to add files to end of list (when dropped at the top of the list or added using browse or paste), set to `'before'` to add files at start of list. Set to a compare function to automatically [sort items](#sorting-files) when added |
| itemInsertInterval | `75` | The interval to use before showing each item being added to the list |

### Drag n' Drop related

| Property       | Default                                     | Description                                                                                                  |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| dropOnPage     | `false`                                     | FilePond will catch all files dropped on the webpage                                                         |
| dropOnElement  | `true`                                      | Require drop on the FilePond element itself to catch the file.                                               |
| dropValidation | `false`                                     | When enabled, files are validated before they are dropped. A file is not added when it's invalid.
| ignoredFiles   | `['.ds_store', 'thumbs.db', 'desktop.ini']` | Ignored file names when handling dropped directories. Dropping directories is not supported on all browsers. |


### Server configuration

| Property      | Default | Description                                                                                                                     |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| server        | `null`  | [Server API configuration](../server)                                                                                           |
| instantUpload | `true`  | Immediately upload new files to the server                                                                                      |
| files         | `[]`    | A list of file locations that should be loaded Immediately, read more about [setting the initial files](../filepond-object/#setting-initial-files) |


### Labels

| Property                       | Default                                                                            | Description                                                                                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| labelDecimalSeparator          | `auto`                                                                             | The decimal separator used to render numbers. By default this is determined automatically.                                                                       |
| labelThousandsSeparator        | `auto`                                                                             | The thousdands separator used to render numbers. By default this is determined automatically.                                                                    |
| labelIdle                      | `'Drag & Drop your files or <span class="filepond--label-action"> Browse </span>'` | Default label shown to indicate this is a drop area. FilePond will automatically bind browse file events to the element with CSS class `.filepond--label-action` |
| labelInvalidField              | `'Field contains invalid files'`                                                   | Label shown when the field contains invalid files and is validated by the parent form. |
| labelFileWaitingForSize        | `'Waiting for size'`                                                               | Label used while waiting for file size information                                                                                                               |
| labelFileSizeNotAvailable      | `'Size not available'`                                                             | Label used when no file size information was received                                                                                                            |
| labelFileLoading               | `'Loading'`                                                                        | Label used while loading a file                                                                                                                                  |
| labelFileLoadError             | `'Error during load'`                                                              | Label used when file load failed                                                                                                                                 |
| labelFileProcessing            | `'Uploading'`                                                                      | Label used when uploading a file                                                                                                                                 |
| labelFileProcessingComplete    | `'Upload complete'`                                                                | Label used when file upload has completed                                                                                                                        |
| labelFileProcessingAborted     | `'Upload cancelled'`                                                               | Label used when upload was cancelled                                                                                                                             |
| labelFileProcessingError       | `'Error during upload'`                                                            | Label used when something went wrong during file upload                                                                                                          |
| labelFileProcessingRevertError | `'Error during revert'`                                                            | Label used when something went wrong during reverting the file upload                                                                                            |
| labelFileRemoveError           | `'Error during remove'`
| labelTapToCancel               | `'tap to cancel'`                                                                  | Label used to indicate to the user that an action can be cancelled.                                                                                              |
| labelTapToRetry                | `'tap to retry'`                                                                   | Label used to indicate to the user that an action can be retried.                                                                                                |
| labelTapToUndo                 | `'tap to undo'`                                                                    | Label used to indicate to the user that an action can be undone.                                                                                                 |
| labelButtonRemoveItem          | `'Remove'`                                                                         | Label used for remove button                                                                                                                                     |
| labelButtonAbortItemLoad       | `'Abort'`                                                                          | Label used for abort load button                                                                                                                                 |
| labelButtonRetryItemLoad       | `'Retry'`                                                                          | Label used for retry load button                                                                                                                                 |
| labelButtonAbortItemProcessing | `'Cancel'`                                                                         | Label used for abort upload button                                                                                                                               |
| labelButtonUndoItemProcessing  | `'Undo'`                                                                           | Label used for undo upload button                                                                                                                                |
| labelButtonRetryItemProcessing | `'Retry'`                                                                          | Label used for retry upload button                                                                                                                               |
| labelButtonProcessItem         | `'Upload'`                                                                         | Label used for upload button                                                                                                                                     |


### SVG Icons

| Property    | Default         | Description                       |
| ----------- | --------------- | --------------------------------- |
| iconRemove  | `'<svg></svg>'` | The icon used for remove actions  |
| iconProcess | `'<svg></svg>'` | The icon used for process actions |
| iconRetry   | `'<svg></svg>'` | The icon used for retry actions   |
| iconUndo    | `'<svg></svg>'` | The icon used for undo actions    |


### Callbacks

| Property              | Function                  | Description                                                                                                                                                        |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| oninit                | `()`                      | FilePond instance has been created and is ready.                                                                                                                   |
| onwarning             | `(error[, file, status])` | FilePond instance throws a warning. For instance when the maximum amount of files has been reached. Optionally receives file if error is related to a file object. |
| onerror               | `(error[, file, status])` | FilePond instance throws an error. Optionally receives file if error is related to a file object.                                                                  |
| onaddfilestart        | `(file)`                  | Started file load                                                                                                                                                  |
| onaddfileprogress     | `(file, progress)`        | Made progress loading a file                                                                                                                                       |
| onaddfile             | `(error, file)`           | If no error, file has been succesfully loaded                                                                                                                      |
| onprocessfilestart    | `(file)`                  | Started processing a file                                                                                                                                          |
| onprocessfileprogress | `(file, progress)`        | Made progress processing a file                                                                                                                                    |
| onprocessfileabort    | `(file)`                  | Aborted processing of a file                                                                                                                                       |
| onprocessfilerevert   | `(file)`                  | Processing of a file has been reverted                                                                                                                               |
| onprocessfile         | `(error, file)`           | If no error, Processing of a file has been completed                                                                                                               |
| onprocessfiles        | `()`                      | Called when all files in the list have been processed |
| onremovefile          | `(error, file)`           | File has been removed.                                                                                                                                             |
| onpreparefile         | `(file, output)`          | File has been transformed by the transform plugin or another plugin subscribing to the prepare_output filter. It receives the file item and the output data.       |                                                                                                                                        |
| onupdatefiles         | `(files)`                 | A file has been added or removed, receives a list of file items |
| onactivatefile        | `(file)`                  | Called when a file is clicked or tapped |


### Hooks

| Property              | Function                  | Description                                                                                                                                                        |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| beforeAddFile         | `(item)`                  | FilePond is about to add this file, return `false` to prevent adding it, or return a `Promise` and resolve with `true` or `false`.                                |
| beforeRemoveFile      | `(item)`                  | FilePond is about to remove this file, return `false` to prevent removal, or return a `Promise` and resolve with `true` or `false`.                                |


### Styles

| Property              | Default                   | Description                                                                                                                                                        |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| stylePanelLayout      | `null`                    | Set a different layout render mode. Can be either `'integrated'`, `'compact'`, and/or `'circle'`. Compact mode will remove padding, integrated mode is used to render FilePond as part of a bigger element. Circle mode adjusts the item position offsets so buttons and progress indicators don't fall outside of the circular shape. |
| stylePanelAspectRatio | `null`                    | Set a forced aspect ratio for the FilePond drop area. Useful to make the drop area take up a fixed amount of space. For example when cropping a single square image. Accepts human readable aspect ratios like `'1:1'` or numeric aspect ratios like `0.75`. |
| styleButtonRemoveItemPosition | `'left'`          | The position of the remove item button, `'left'`, `'center'`, `'right'`, and/or `'bottom'`. |
| styleButtonProcessItemPosition | `'right`         | The position of the process item button, `'left'`, `'center'`, `'right'`, and/or `'bottom'`. |
| styleLoadIndicatorPosition | `'right`             | The position of the load indicator, `'left'`, `'center'`, `'right'`, and/or `'bottom'`. |
| styleProgressIndicatorPosition | `'right`         | The position of the progress indicator, `'left'`, `'center'`, `'right'`, and/or `'bottom'`. |
| styleItemPanelAspectRatio | `null` | Set a forced aspect ratio for the file items. Useful when rendering cropped or fixed aspect ratio images in grid view, this will improve performance as FilePond will know beforehand the size of the item to render. |

## Events

FilePond exposes the following events, they're the same as the callback methods. The event `detail` property will contain the relevant event information. We can subscribe to them by listing on the root node.

```js
const pond = document.querySelector('.filepond--root');
pond.addEventListener('FilePond:addfile', e => {
    console.log('File added', e.detail);
});
```

| Option                       | Description                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FilePond:init                | FilePond instance has been created and is ready.                                                                                                                   |
| FilePond:warning             | FilePond instance throws a warning. For instance when the maximum amount of files has been reached. Optionally receives file if error is related to a file object. |
| FilePond:error               | FilePond instance throws an error. Optionally receives file if error is related to a file object.                                                                  |
| FilePond:addfilestart        | Started file load                                                                                                                                                  |
| FilePond:addfileprogress     | Made progress loading a file                                                                                                                                       |
| FilePond:addfile             | File has been loaded, if the detail object contains an error property, something went wrong                                                                        |
| FilePond:processfilestart    | Started processing a file                                                                                                                                          |
| FilePond:processfileprogress | Made progress processing a file                                                                                                                                    |
| FilePond:processfileabort    | Aborted processing of a file                                                                                                                                       |
| FilePond:processfilerevert   | Processing of a file has been reverted                                                                                                                               |
| FilePond:processfile         | Finished processing a file, if the detail object contains an error property, something went wrong                                                                  |
| FilePond:removefile          | File has been removed                                                                                                                                              |
| FilePond:updatefiles         | A file has been added or removed

## Methods

| Method                            | Params               | Description                                           |
| --------------------------------- | -------------------- | ----------------------------------------------------- |
| [setOptions](#setting-options)    | `object`             | Override multiple options at once                     |
| [addFile](#adding-files)          | `source [, options]` | Adds a file                                           |
| [addFiles](#adding-files)         | `source [, options]` | Adds multiple files                                   |
| [removeFile](#removing-files)     | `query`              | Removes the file matching the given `query`           |
| [removeFiles](#removing-files)    |                      | Removes all files                                     |
| [processFile](#processing-files)  | `query`              | Starts processing the file matching the given `query` |
| [processFiles](#processing-files) |                      | Starts processing all files                           |
| [getFile](#getting-files)         | `query`              | Returns the file matching the supplied `query`        |
| [getFiles](#getting-files)        |                      | Returns all files                                     |
| [browse](#opening-the-file-browser)                            |                      | Opens the browse file dialog, please note that this only works if the user initiaded the callstack that ends up calling the `browse` method. |
| [sort]($sorting-files) | `compare` | Sorts files in the list using the supplied compare function |
| destroy                           |                      | Destroys this FilePond instance                       |

#### DOM manipulation

| Method         | Params    | Description                                                                                          |
| -------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| insertAfter    | `element` | Inserts the FilePond instance after the supplied element                                             |
| insertBefore   | `element` | Inserts the FilePond instance before the supplied element                                            |
| appendTo       | `element` | Appends FilePond to the given element                                                                |
| isAttachedTo   | `element` | Returns `true` if the current instance is attached to the supplied element                           |
| replaceElement | `element` | Replaces the supplied element with FilePond                                                          |
| restoreElement | `element` | If FilePond replaced the original element, this restores the original element to its original glory. |


#### Event Methods

FilePond provides the `on`, `onOnce` and `off` methods as an alternative way to listen for events. We can listen for the same events but can do so without adding the `'FilePond:'` prefix. Parameters received by the hanlder functions are the same as defined on the [callback methods](#callbacks).

```js
// 'addfile' instead of 'FilePond:addfile'
const pond = FilePond.create();
pond.on('addfile', (error, file) => {
    if (error) {
        console.log('Oh no');
        return;
    }
    console.log('File added', file);
});
```

| Method | Params        | Description                                                                 |
| ------ | ------------- | --------------------------------------------------------------------------- |
| on     | `event`, `fn` | Listen to an event with name                                                |
| onOnce | `event`, `fn` | The handler will only be called once and will then automatically be removed |
| off    | `event`, `fn` |


### Setting options

To override already set options on a FilePond instance we can either use the `setOptions` method or adjust the properties directly.

```js
const pond = FilePond.create();
pond.setOptions({
    maxFiles: 10,
    required: true
});
```

Adjusting individual properties:

```js
const pond = FilePond.create();
pond.maxFiles = 10;
pond.required = true;
```


### Adding files

To add files we can use the `addFile` and `addFiles` end points.

Both methods accept the following file references:

*   Local and Remote URLs
*   DataURLs
*   Blobs or File objects

```js
// Adding a single file
pond.addFile('./my-file.jpg');

// Adding multiple files
pond.addFiles('./my-file.jpg', './my-documents.zip');

// It also accepts arrays
pond.addFiles(['./my-file.jpg', './my-documents.zip']);
```

The last argument can be set to an option object which can be used to determine the index in the items list the file or files should be added at.

```js
// Adding a single file with option object
pond.addFile('./my-file.jpg', { index: 0 });

// Adding multiple files with option object
pond.addFiles('./my-file.jpg', './my-documents.zip', { index: 0 });

// Supplying files as an array with option object
pond.addFiles(['./my-file.jpg', './my-documents.zip'], { index: 0 });
```

As stated earlier the `addFile` method also accepts Blobs, File objects and DataURLs.

```js
// Adding a basic base64 encoded DataURL
pond.addFile('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==');

// Adding a Blob or File
const data = { hello: 'world' };
const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json'
});
pond.addFile(blob);
```

{{% note %}}
Because Blobs and DataURLs don't supply any filename information FilePond sets the file name to the current date.
{{% /note %}}

The `addFile` method returns a promise. This can be useful when loading remote files.

```js
pond
    .addFile('./my-file.jpg')
    .then(file => {
        // File has been added
    })
    .catch(error => {
        // Something went wrong
    });
```

### Processing files

We can trigger manual processing of files using the `processFile` method.

Files can be processed by `id`, `index` or `file`. A parameter is not required.

```js
// processes the first file
pond.processFile().then(file => {
    // File has been processed
});

// removes the file at index 1
pond.processFile(1).then(file => {
    // File has been processed
});

// removes the file with the given id
pond.processFile('imzsdvxar').then(file => {
    // File has been processed
});
```

Processing multiple files can be done by passing multiple items to the `processFiles` method.

```js
pond.processFiles('imzsdvxar', 'afaoiwles').then(files => {
    // files have been processed
});
```

Process all files

```js
pond.processFiles().then(files => {
    // files have been processed
});
```


### Getting files

We can get access to a file by `id` or `index`. A parameter is not required.

```js
// returns the first file item
pond.getFile();

// returns the file item at index 1
pond.getFile(1);

// returns the file item with the given id
pond.getFile('imzsdvxar');
```

Get all files with the `getFiles` method.

```js
// returns all files currently in the list
pond.getFiles();
```



### Removing files

Files can be removed by `id`, `index` or `file`. A parameter is not required.

If we don't supply a parameter to the `removeFile` method FilePond removes the first file in the file list.

```js
// removes the first file item
pond.removeFile();

// removes the file item at index 1
pond.removeFile(1);

// removes the file item with the given id
pond.removeFile('imzsdvxar');
```

Files can also be removed by reference, pass a [FilePond File](../file) to the remove method to have it removed from the list.

```js
pond.addFile('./my-file.jpg').then(file => {
    pond.removeFile(file);
});
```

{{% note %}}
A [FilePond File](../file) is not the same a JavaScript [File](https://developer.mozilla.org/docs/Web/API/File) or [Blob](https://developer.mozilla.org/docs/Web/API/Blob). The FilePond File is a wrapper around a JavaScript file object. Passing a JavaScript File or Blob to the removeFile method won't work.
{{% /note %}}


## Opening The File Browser

The `browse` method can be used to manually trigger the browse files panel.

This only works if the call originates from the user.

This works, as the call originates from the browser clicking the button.

```js
document.querySelector('button').addEventListener('click', () => {
    pond.browse();
})
```

This **doesn't work**, the call to `browse` originates from the browser itself.

```js
setTimeout(() => {
    pond.browse();
}, 5000);
```

This also **doesn't work**, the timeout "breaks" the callstack and the browser won't know the call originated from the button.

```js
document.querySelector('button').addEventListener('click', () => {
    setTimeout(() => {
        pond.browse();
    }, 5000);
})
```

## Sorting Files

Using the `sort()` method or the `itemInsertLocation` property we can sort the items in the files list.

This sort method behaves exactly the same as the [default JavaScript sort compare function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).


{{% note %}}
When loading URLs the file items passed to the sort function don't have file data yet, in that situation we need to check if the files have already been loaded, and if not, we can treat the files as equals. FilePond will call the compare function again after a file has fully loaded.
{{% /note %}}

```js
// Sort the current files from small to big
pond.sort((a, b) => {

    // If no file data yet, treat as equal
    if (!(a.file && b.file)) return 0;

    // Move to right location in list
    if (a.fileSize < b.fileSize) {
        return -1;
    }
    else if (b.fileSize > a.fileSize) {
        return 1;
    }

    return 0;
});
```

To automatically sort files when they're added to the list we can set the above sort method to the `itemInsertLocation` property.

```js
const pond = FilePond.create({
    itemInsertLocation: (a, b) => {

        // If no file data yet, treat as equal
        if (!(a.file && b.file)) return 0;

        // Move to right location in list
        if (a.fileSize < b.fileSize) {
            return -1;
        }
        else if (b.fileSize > a.fileSize) {
            return 1;
        }

        return 0;
    }
});
```
