+++
title = "Getting started"
weight = 2
+++

Ensure you've installed FilePond by following the [installation instructions](../installation) before you take these steps.

## Enhancing a file input

We'll assume the `FilePond` object is available and loaded before these snippets are executed.

Use the `create` method to [progressively enhance](../browser-support//#progressive-enhancement) a basic file input into a FilePond element. The target (in this case the file input element) will automatically be replaced by a FilePond element.

```html
<input type="file">

<script>
const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create( inputElement );
</script>
```

The original element has now been replaced by a `<div class="filepond--root">...</div>` and shows the FilePond drop area.

We can now start adding local files. To upload these files we'll have to tell FilePond where it can send them.

## Connecting to a server

We'll use the `setOptions` method to overwrite default server options for all FilePond instances on the page. In the example below we'll follow the setup of the [PHP boilerplate](https://github.com/pqina/filepond-boilerplate-php).

```js
FilePond.setOptions({
    server: 'api/'
});
```

If our server files are located somewhere else we can simply point FilePond to the right location by setting it to the server property.

```js
FilePond.setOptions({
    server: 'http://192.168.33.10'
});
```

That should be it, drop a file on FilePond and it should now upload it to the server automatically.

If it doesn't we might have to further [configure our server](../api/server).

We can now customize FilePond to our needs by [passing options to the create method](../api/filepond-object).
