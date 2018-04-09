+++
title = "File size validation"
+++

The File Size Validation plugin handles blocking of files that are too large.

## Properties

Property | Default | Description
---------|---------|---------
allowFileSizeValidation | `true` | Enable or disable file size validation
maxFileSize | `null` | The maximum size of a file, for instance `5MB` or `750KB`
maxTotalFileSize | `null` | Maximum size of all files in list, same format as `maxFileSize`
labelMaxFileSizeExceeded | `'File is too large'` | Status message shown when large file is dropped.
labelMaxFileSize | `'Maximum file size is {filesize}'` | Detail message shown when max file size was exceeded. `{filesize}` is replace with the value of the `maxFileSize` property.
labelTotalFileSizeExceeded | `'Maximum total size exceeded'` | Status message shown when total file size exceeds maximum.
labelMaxTotalFileSize | `'Maximum total file size is {filesize}'` | Detail message shown then total file size exceeds maximum.