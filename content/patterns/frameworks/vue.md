+++
title = "Vue"
+++

The FilePond Vue Component functions as a tiny adapter for the FilePond object so it's easier to use with Vue.

Installation instructions for npm.

```bash
npm install vue-filepond filepond --save
```

Now you can import the `<file-pond>` Component in your Vue project. The adapter automatically references FilePond methods to the Component instance so you can use the Component just like you would use FilePond itself.

We can configure our pond by using the [FilePond instance properties](../../api/filepond-instance/#properties) as attributes on the `<file-pond>` Component. Note that the callback methods are not available and have been mapped to Vue events, see the example below.

```html
<file-pond allow-multiple="true" max-files="3" server="/api"/>
```

You can see that instead of using the `multiple` attribute we use the property name `allow-multiple` and instead of `data-max-files` we use `max-files`.

Use bindings if values need to be updated in the future.

```html
<!-- normal -->
<file-pond v-bind:files="myFiles"/>

<!-- shorthand -->
<file-pond :files="myFiles"/>
```

We can use the `v-on` to listen for events on the pond.

```html
<!-- normal -->
<file-pond v-on:init="handleFilePondInit"/>

<!-- shorthand -->
<file-pond @init="handleFilePondInit"/>
```

A more elaborate example showing the use of `data` to populate the `files` attribute.

```html
<template>
  <div id="app">
    
    <file-pond
        name="test"
        ref="pond"
        class-name="my-pond"
        label-idle="Drop files here..."
        allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        v-bind:files="myFiles"
        v-on:init="handleFilePondInit"/>
    
  </div>
</template>

<script>
// Import FilePond
import vueFilePond from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond( FilePondPluginFileValidateType, FilePondPluginImagePreview );

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