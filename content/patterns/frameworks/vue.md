+++
title = "Vue"
+++

The FilePond Vue Component functions as a tiny adapter for the FilePond object so it's easier to use with Vue.

Installation instructions for npm.

```bash
npm install vue-filepond --save
```

Now you can import the `<FilePond>` Component in your Vue project. The adapter automatically references FilePond methods to the Component instance so you can use the Component just like you would use FilePond itself.

We can configure our pond by using the [FilePond instance properties](../../api/filepond-instance/#properties) as attributes on the `<FilePond>` Component. Note that the callback methods are not available and have been mapped to Vue events, see the example below.

```html
<FilePond allowMultiple="true" maxFiles="3" server="/api"/>
```

You can see that instead of using the `multiple` attribute we use the property name `allowMultiple` and instead of `data-max-files` we use `maxFiles`.

Use bindings if values need to be updated in the future.

```html
<!-- normal -->
<FilePond v-bind:files="myFiles"/>

<!-- shortcut -->
<FilePond :files="myFiles"/>
```

We can use the `v-on` to listen for events on the pond.

```html
<!-- normal -->
<FilePond v-on:init="handleFilePondInit"/>

<!-- shortcut -->
<FilePond @init="handleFilePondInit"/>
```

A more elaborate example showing the use of `data` to populate the `files` attribute and `registerPlugin` to register a plugin.

```html
<template>
  <div id="app">
    
    <FilePond
        name="test"
        ref="pond"
        className="my-pond"
        labelIdle="Drop files here..."
        allowMultiple="true"
        acceptedFileTypes="image/jpeg, image/png"
        v-bind:files="myFiles"
        v-on:init="handleFilePondInit"/>
    
  </div>
</template>

<script>
// Import FilePond
import FilePond, { registerPlugin } from 'vue-filepond';

// Register a plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);

export default {
    name: 'app',
    data: function() {
        return { myFiles: ['index.html'] };
    },
    methods: {
        handleFilePondInit: function() {
            console.log('FilePond has initialized');

            // example of instance method call on pond reference
            this.$refs.pond.getFiles();
        }
    },
    components: {
        FilePond
    }
};
</script>
```