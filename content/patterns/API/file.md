+++
title = "File"
weight = 4
+++

The `addFile`, `getFile` and `processFile` methods will return `File` objects. We can use these objects in our logic as follows.

## Properties

| Name                     | Description                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------------- |
| id                       | Returns the id of the file                                                                          |
| serverId                 | Returns the server id of the file                                                                   |
| origin                   | Returns the origin of the file, either `input` ( added by user ), `limbo` ( temporary server file ) or `local` ( existing server file ) |
| status                   | Returns the current status of the file, use the `FilePond.FileStatus` enum to determine the status. |
| file                     | Returns the `File` object                                                                           |
| fileExtension            | Returns the file extension                                                                          |
| fileSize                 | Returns the size of the file                                                                        |
| filename                 | Returns the full name of the file                                                                   |
| filenameWithoutExtension | Returns the name of the file without extension                                                      |

## Methods

| Method          | Description                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| abortLoad       | Aborts loading of this file                                                                                                                                                                    |
| abortProcessing | Aborts processing of this file                                                                                                                                                                 |
| getMetadata     | Retrieve metadata saved to the file, pass a key to retrieve a specific part of the metdata (for instance `'crop'` or `'resize'`). If no key is passed, the entire metadata object is returned. |
| setMetadata     | Add additional metadata to the file. Expects a key and a value.                                                                                                                                |
