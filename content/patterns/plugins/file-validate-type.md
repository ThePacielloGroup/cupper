+++
title = "File type validation"
+++

The File Type Validation plugin handles blocking of files that are of the wrong type.

When creating a FilePond instance based on a input type file, this plugin will automatically interpret the `accept` attribute value.


## Properties

Property | Default | Description
---------|---------|---------
allowFileTypeValidation | `true` | Enable or disable file type validation
acceptedFileTypes | `[]` | Array of accepted file types. Can be mime types, wild cards or extensions. For instance `['image/*']` will accept all images. `['image/png', 'image/jpeg']` will only accepts `PNGs` and `JPEGs`. 
labelFileTypeNotAllowed | `'File of invalid type'` | Message shown when an invalid file is added