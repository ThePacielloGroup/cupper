+++
title = "Server"
weight = 5
+++

## Introduction

The server API endpoints can be configured with the `server` property. Only after these have been configured can FilePond upload files to a server using XMLHttpRequest.

We'll first go over the different end points and what they do before discussing how to configure them.

### Process

Asynchronously uploading files with FilePond is called processing. In short, FilePond sends a file to the server and expects the server to return a unique file id. This unique id is then used to revert uploads or restore earlier uploads later on.

The upload process described over time:

1. **FilePond** uploads file `my-file.jpg` as `multipart/form-data` using a `POST` request
2. **server** saves file to unique location `tmp/12345/my-file.jpg`
3. **server** returns unique location id `12345` in `text/plain` response
4. **FilePond** stores unique id `12345` in a hidden input field
5. **client** submits the FilePond parent form containing the hidden input field with the unique id
6. **server** uses the unique id to move `tmp/12345/my-file.jpg` to its final location and remove the `tmp/12345` folder

{{%note%}}
FilePond uses unique file ids to prevent showing information about the server file structure to the client. Storing files in a temporary folder will also make chunk uploading a possibility in the near future.
{{%/note%}}

### Revert

There's one way the **client** can deviate from the previous path and that is by reverting the upload. Let's go back to step five and switch to this alternate reality.

<ol start="5">
<li><strong>FilePond</strong> sends <code>DELETE</code> request with <code>12345</code> as body by tapping the undo button
<li><strong>server</strong> removes temporary folder matching the supplied id <code>tmp/12345</code> and returns an empty response
</ol>

This is another reason why FilePond uses unique ids. If we're going to give the client the power to influence the server file system that power should be very minimal.

### Restore

FilePond uses the `restore` end point to restore temporary server files. This might be useful in a situation where the user closes the browser window but hadn't finished completing the form. Temporary files can be set with the `files` property.

Step one and two now look like this.

1. **FilePond** requests restore of file with id `12345` using a `GET` request
2. **server** returns a file object with header `Content-Disposition: inline; filename=my-file.jpg`

### Load

The `restore` end point is used to restore a temporary file, the `load` end point is used to restore already uploaded server files. These files might be located in a database or somewhere on the server file system. Either way they might not be directly accessible from the web.

For situations where a user might want to edit an existing file selection we can use the `load` end point to restore those files.

1. **FilePond** requests restore of file with id `12345` or a file name using a `GET` request
2. **server** returns a file object with header `Content-Disposition: inline; filename=my-file.jpg`

### Fetch

The `fetch` end point is used to load files located on remote servers. When a user drops a remote link, FilePond asks the server to download it (CORS might otherwise block it).

1. **FilePond** requests fetch of file `http://somewhere/their-file.jpg` using a `GET` request
2. **server** returns a file object as if the file is located on the server

## Configuration

The `server` configuration property expects an object or a URL. If it's not defined, FilePond will not be able to upload file to the server or use fetch functionality.

### URL

Setting a single URL is the most basic form of defining a server configuration.

```js
FilePond.setOptions({
    server: './'
});
```

This tells FilePond the api is located at the same location as the current page. It will then assume it can call all methods on this url. Like shown below.

| method  | type   | path          |
| ------- | ------ | ------------- |
| process | POST   |               |
| revert  | DELETE |               |
| load    | GET    | ?load=<id>    |
| restore | GET    | ?restore=<id> |
| fetch   | GET    | ?fetch=<url>  |

We can of course supply a path or URL to another location, FilePond will simply append the above default paths to the supplied value. If we want more fine grained control we can use an object to configure the server end points.

### Object Configuration

To setup asynchronous uploading only, we pass the location of the process end point.

```js
FilePond.setOptions({
    server: {
        process: './process',
        fetch: null,
        revert: null
    }
});
```

This configuration assumes that the `process` end point is located on the same server. Reverting a file upload and fetching a remote file have been disabled. Restoring or loading an earlier uploaded file with this configuration is also not possible.

To unlock these features we have to supply FilePond with some more end points using the `revert`, `fetch`, `load` and `restore` properties.

```js
FilePond.setOptions({
    server: {
        process: './process',
        revert: './revert',
        restore: './restore/',
        load: './load/',
        fetch: './fetch/'
    }
});
```

FilePond will append the dropped URL to the `fetch` method, and the unique file id will automatically be added to the `restore` and `load` end points. `restore`, `load` and `fetch` are `GET` requests while `process` is a `POST` request and `revert` is a `DELETE` request.

If the endpoints are located on a different server we can add a `url` property to tell FilePond its location.

```js
FilePond.setOptions({
server:{
    url: 'http://192.168.0.100',
    process: './process',
    revert: './revert',
    restore: './restore/',
    load: './load/',
    fetch: './fetch/'
});
```

Depending on our project we might have to pass additional information to each request. We can accomplish this by turning the end point into an object which allows for more fine grain control over how FilePond handles each request.

For brevity we'll only look at the `process` property. All other properties can be configured with the same configuration object.

```js
FilePond.setOptions({
    server: {
        url: 'http://192.168.0.100',
        process: {
            url: './process',
            method: 'POST',
            withCredentials: false,
            headers: {},
            timeout: 7000,
            onload: null,
            onerror: null
        }
    }
});
```

| key             | description                                          | required |
| --------------- | ---------------------------------------------------- | -------- |
| url             | Path to the end point                                | yes      |
| method          | Request method to use                                | no       |
| withCredentials | Toggles the XMLHttpRequest withCredentials on or off | no       |
| headers         | An object containing additional headers to send      | no       |
| timeout         | Timeout for this action                              | no       |
| onload          | Called when server response is received, useful for getting the unique file id from the server response | no |
| onerror         | Called when server error is received, receis the response body, useful to select the relevant error data | no |

A more elaborate server configuration is shown below. This configuration reveals the `timeout` property as assigned to the server object. This sets it for all end points, it can also be configured per end point.

```js
FilePond.setOptions({
    server: {
        url: 'http://192.168.0.100',
        timeout: 7000,
        process: {
            url: './process',
            method: 'POST',
            headers: {
                'x-customheader': 'Hello World'
            },
            withCredentials: false,
            onload: function(response) => {
                return response.key;
            },
            onload: function(response) => {
                return response.data;
            }
        },
        revert: './revert',
        restore: './restore/',
        load: './load/',
        fetch: './fetch/'
    }
});
```

If we want to disable certain end points we can pass a `null` instead of string or object. Say we only want to use the fetch functionality and not do asynchronous uploading we can disable processing. In that situation revert and restore do not make a lot of sense (since we're no longer uploading temporary files) so we can remove those.

```js
FilePond.setOptions({
    server: {
        url: 'http://192.168.0.100',
        timeout: 7000,
        process: null,
        load: './load/',
        fetch: './fetch/'
    }
});
```

## Advanced

If we require even more control we can configure each end point as a function instead of an object. FilePond will then run our function and supply callback methods to control the FilePond interface.

Note that in the examples below we make use of [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), these can of course also be written as a classic function.

### Process

Custom `process` function receives a `file` object plus a set of FilePond callback methods to return control to FilePond. The `file` parameter contains the native file object and access to it is restricted in the `process` function to prevent setting properties or running functions that would would contradict or interfere with the current processing of the file.

```js
const handler = (fieldName, file, metadata, load, error, progress, abort) => {
    // Should do custom file upload or local storing here
    // ...

    // Can call the error method if something is wrong, should exit after
    error('oh my goodness');

    // Should call the progress method to update the progress to 100% before calling load
    // (computable, processedSize, totalSize)
    progress(true, 0, 1024);
    // progress(false) switches the loading indicator to infinite mode


    // Should call the load method when done and pass the returned server file id
    // the load method accepts either a string (id) or an object
    // the unique server file id is used by revert and restore functions
    load('unique-file-id');

    // Should expose an abort method so the request can be cancelled
    return {
        abort: () => {
            // User tapped abort, cancel our ongoing actions here

            // Let FilePond know the request has been cancelled
            abort();
        }
    };
};
```

### Revert

Custom revert methods receive the unique server file id and a load and error callback.

```js
const handler = (uniqueFileId, load, error) => {
    // Should remove the earlier created temp file here
    // ...

    // Can call the error method if something is wrong, should exit after
    error('oh my goodness');

    // Should call the load method when done, no parameters required
    load();
};
```

### Load

Custom load methods receive the unique server file id and a load and error callback.

```js
const handler = (uniqueFileId, load, error, progress, abort, headers) => {
    // Should request a file object here
    // ...

    // Can call the error method if something is wrong, should exit after
    error('oh my goodness');

    // Can call the header method to supply FilePond with early response header string
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
    headers(headersString);

    // Should call the progress method to update the progress to 100% before calling load
    // (endlessMode, loadedSize, totalSize)
    progress(true, 0, 1024);

    // Should call the load method with a file object or blob when done
    load(file);

    // Should expose an abort method so the request can be cancelled
    return {
        abort: () => {
            // User tapped abort, cancel our ongoing actions here

            // Let FilePond know the request has been cancelled
            abort();
        }
    };
};
```

### Fetch

Custom fetch methods receive the url to fetch and a set of FilePond callback methods to return control to FilePond.

```js
const handler = (url, load, error, progress, abort, headers) => {
    // Should get a file object from the URL here
    // ...

    // Can call the error method if something is wrong, should exit after
    error('oh my goodness');

    // Can call the header method to supply FilePond with early response header string
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
    headers(headersString);

    // Should call the progress method to update the progress to 100% before calling load
    // (computable, loadedSize, totalSize)
    progress(true, 0, 1024);

    // Should call the load method with a file object when done
    load(file);

    // Should expose an abort method so the request can be cancelled
    return {
        abort: () => {
            // User tapped abort, cancel our ongoing actions here

            // Let FilePond know the request has been cancelled
            abort();
        }
    };
};
```

### Restore

Custom restore methods receive the server file id of the file to restore and a set of FilePond callback methods to return control to FilePond.

```js
const handler = (uniqueFileId, load, error, progress, abort, headers) => {
    // Should get the temporary file object from the server
    // ...

    // Can call the error method if something is wrong, should exit after
    error('oh my goodness');

    // Can call the header method to supply FilePond with early response header string
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
    headers(headersString);

    // Should call the progress method to update the progress to 100% before calling load
    // (computable, loadedSize, totalSize)
    progress(true, 0, 1024);

    // Should call the load method with a file object when done
    load(serverFileObject);

    // Should expose an abort method so the request can be cancelled
    return {
        abort: () => {
            // User tapped abort, cancel our ongoing actions here

            // Let FilePond know the request has been cancelled
            abort();
        }
    };
};
```

## Conclusion

We can set the server location, end point paths, configure end point request parameters or override them with methods to finaly control how data is sent to the server. This gives us all the control we need to finely tune our connection to the server.
