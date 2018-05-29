+++
title = "FilePond object"
weight = 2
+++

The FilePond object is the object available after importing FilePond in your project. It exposes the FilePond public API which we'll mostly use to add create, find or destroy FilePond instances on the page.

## Methods

| Method                                             | Params                  | Description                                                                                                         |
| -------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [create](#creating-a-filepond-instance)            | `[element [, options]]` | Creates a new FilePond instance, both parameters are optional.                                                      |
| [destroy](#destroying-a-filepond-instance)         | `element`               | Destroys the FilePond instance attached to the supplied element                                                     |
| find                                               | `element`               | Returns the FilePond instance attached to the supplied element                                                      |
| [parse](#automatically-loading-filepond-instances) | `context`               | Parses a given section of the DOM tree for elements with class `.filepond` and turns them into `FilePond` elements. |
| [registerPlugin](#registering-plugins)             | `plugin`                | Registers a FilePond plugin for later use                                                                           |
| [setOptions](#setting-options)                     | `options`               | Sets page level default options for all FilePond instances                                                          |
| getOptions                                         |                         | Returns the current default options |
| supported                                          |                         | Returns `true` or `false` based on if the browser supports FilePond                                                 |

## Properties

| Property   | Description                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| FileOrigin | An enum to use together with the File `origin` property to determine the file origin. |
| FileStatus | An enum to use together with the File `status` method to determine the current file status. |
| OptionTypes | Returns an object describing all the available options and their types, useful for writing FilePond adapters |

## Events

The Filepond object fires a `FilePond:loaded` event when it's ready. This is useful when we're directly embedding filepond on a page using a `defer` or `async` attribute on the `<script>` tag. In those situations the script will be loaded asynchronous so it might not be available on document ready.

The event `detail` property will contain the FilePond API.

```js
document.addEventListener('FilePond:loaded', e => {
    console.log('FilePond ready for use', e.detail);
});
```

## Creating a FilePond instance

### Enhancing an HTML element

The `create` method can be used to turn an element into a FilePond element. Pass an element reference as the first argument and presto!.

We can still pass options to our instance by using data attributes.

FilePond will automatically clone attribute values and map them to its properties. This is very useful when progressively enhancing an existing `<input type="file">` element.

In the example below the attributes `name`, `data-max-files` and `required` will automatically be passed to the created FilePond instance and converted from a `string` to the right property unit type.

```html
<input type="file" name="filepond" data-max-files="10" required>

<script>
// get a reference to the input element
const inputElement = document.querySelector('input[type="file"]');

// create a FilePond instance at the input element location
const pond = FilePond.create( inputElement );

// attributes have been set to pond options
console.log(pond.name);  // 'filepond'
console.log(pond.maxFiles); // 10
console.log(pond.required); // true
</script>
```

Attribute to option mapping is done by removing the `data-` part, removing dashes and uppercasing each character after a dash. This process turns `data-max-files` into `maxFiles`.

It's also possible to pass an additional option object to the `create` method.

```html
<input type="file" name="filepond" required multiple>

<script>
// get a reference to the input element
const inputElement = document.querySelector('input[type="file"]');

// create a FilePond instance at the input element location
const pond = FilePond.create( inputElement, {
    maxFiles: 10,
    allowBrowse: false
});

// attributes and initial options have been set to pond options
console.log(pond.name);  // 'filepond'
console.log(pond.maxFiles); // 10
console.log(pond.required); // true
console.log(pond.allowMultiple); // true
</script>
```

### Using an option object

We can also create a FilePond instance out of thin air and then add it to the page later on.

```js
// create a FilePond instance at the input element location
const pond = FilePond.create({
    name: 'filepond',
    maxFiles: 10,
    allowBrowse: false
});

// add our pond to the body
pond.appendTo(document.body);
</script>
```

### Setting initial files

You can populate FilePond with a set of initial files using the `files` property. This property is suitable for restoring earlier temporary uploads or already upload files. While the `files` property can also be populates with new files, it is adviced to add new files using the `addFile` and `addFiles` methods.

The files property takes an array of file references, it accepts the same formats as the `addFile` method.

*   Local and Remote URLs
*   DataURLs
*   Blobs or File objects

It extends this selection with the option to add server files.

Adding a temporary server file. The `limbo` type will direct the load request to the `restore` end point.

```js
const pond = FilePond.create({
    files: [
        {
            // the server file reference
            source: '12345',

            // set type to limbo to tell FilePond this is a temp file
            options: {
                type: 'limbo'
            }
        }
    ]
});
```

Adding an already uploaded server file. The `local` type will direct the load request to the `load` end point.

```js
const pond = FilePond.create({
    files: [
        {
            // the server file reference
            source: '12345',

            // set type to local to indicate an already uploaded file
            options: {
                type: 'local'
            }
        }
    ]
});
```

Fitting with the progressive enhancement strategy FilePond adheres to, it's also possible to feed FilePond an initial file using HTML.

The example below might seem elaborate at first, maybe it is a bit. But should JavaScript fail to load, for whatever reason, the user will still be able to remove files (by unchecking them) and add new files. The resulting form object when posted will contain all information required to update any server state.

```html
<fieldset>

    <legend>Files</legend>

    <!-- a list of already uploaded files -->
    <ul>
        <li>
            <label>
                <input value="foo.jpg" data-type="local" checked type="checkbox">
                foo.jpeg
            </label>
        </li>
        <li>
            <label>
                <input value="bar.png" data-type="local" checked type="checkbox">
                bar.png
            </label>
        </li>
    </ul>

    <!-- our filepond input -->
    <input type="file" name="filepond" required multiple>

</fieldset>

<script>
// get a reference to the fieldset element
const fieldsetElement = document.querySelector('fieldset');

// create a FilePond instance at the fieldset element location
const pond = FilePond.create( fieldsetElement );

// files have been gathered
console.log(pond.files); // [{ source: 'foo.jpeg' }, { source: 'bar.png' }]
</script>
```

And this is how that HTML renders without styles. It's not super fancy, but it allows the user to upload or change his file selection, even without JavaScript.

<fieldset>

    <legend>Files</legend>

    <!-- a list of already uploaded files -->
    <ul>
        <li>
            <label>
                <input value="foo.jpg" data-type="local" checked type="checkbox">
                foo.jpeg
            </label>
        </li>
        <li>
            <label>
                <input value="bar.png" data-type="local" checked type="checkbox">
                bar.png
            </label>
        </li>
    </ul>

    <!-- our filepond input -->
    <input type="file" required multiple>

</fieldset>

## Destroying a FilePond instance

Destroying a FilePond instance will reset the HTML to its original state.

```html
<intput type="file" name="filepond" required multiple>

<script>
const inputElement = document.querySelector('input[type="file"]');

// create the FilePond instance
FilePond.create( inputElement );

// destroy the FilePond instance by element reference
FilePond.destroy( inputElement );
</script>
```

## Automatically Loading FilePond Instances

The `parse` method lets us automatically load FilePond elements on the page.

This will look for elements with the class `.filepond` in the subtree of the `<body>` element.

```html
<input type="file" class="filepond"/>

<script>
FilePond.parse(document.body);
</script>
```

## Setting Options

We can set default options for all our FilePond instances on the page using the `setOptions` method.

```js
FilePond.setOptions({
    allowDrop: false,
    allowReplace: false,
    instantUpload: false,
    server: {
        url: 'http://192.168.33.10',
        process: './process.php',
        revert: './revert.php',
        restore: './restore.php?id=',
        fetch: './fetch.php?data='
    }
});
```

## Registering Plugins

With the plugins available on the page we can now register them with `FilePond` using the `registerPlugin` method.

```js
FilePond.registerPlugin(FilePondPluginImagePreview);
```

We can pass multiple plugin references to the `registerPlugin` method.

```js
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize
);
```

A plugin will fire a `FilePond:pluginloaded` event on the document when it's ready for use. The event `detail` property will contain the plugin.

```js
document.addEventListener('FilePond:pluginloaded', e => {
    console.log('FilePond plugin is ready for use', e.detail);
});
```

{{% note %}}
Plugins need to be registered before we create our first FilePond instance.
{{% /note %}}
