+++
title = "Angular"
+++

The FilePond Angular Component functions as a tiny adapter for the FilePond object so it's easier to use with Angular.

Installation instructions for npm.

```bash
npm install angular-filepond --save
```

Add the stylesheet to your `angular-cli.json` configuration.

```json
"styles": [
  "styles.css",
  "../node_modules/filepond/dist/filepond.min.css"
]
```

After importing the component in an NgModule you can use the `<FilePond>` Component in your Angular project. Note that the plugin requires a `.esm` extension.

```js
import { FilePond, registerPlugin } from 'angular-filepond';

// Registering plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm';
registerPlugin(FilePondPluginFileValidateType);

// Adding FilePond to imports
@NgModule({
  imports: [
    FilePond
  ]
})

export class AppModule { }
```

The adapter automatically references FilePond methods to the Component instance so you can use the Component just like you would use FilePond itself.

We can configure our pond by using the [FilePond instance properties](../../api/filepond-instance/#properties) as attributes on the `<FilePond>` Component. Note that the callback methods are not available and have been mapped to events, see the example below.

```html
<FilePond allowMultiple="true" maxFiles="3" server="/api"></FilePond>
```

You can see that instead of using the `multiple` attribute we use the property name `allowMultiple` and instead of `data-max-files` we use `maxFiles`.

Use bindings if values need to be updated in the future.

```html
<FilePond [files]="myFiles"></FilePond>
```

We can listen for events using parenthesis.

```html
<FilePond (oninit)="handleFilePondInit()"></FilePond>
```

A more elaborate example showing passing files using a `myFiles` property and `registerPlugin` to register a plugin.

```js
import { Component, ViewChild } from '@angular/core';

// Register file type validation plugin
import { registerPlugin } from './filepond/filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
registerPlugin(FilePondPluginFileValidateType);

@Component({
  selector: 'app-root',
  template:  `
    <div class="root">
        <FilePond #myPond 
            name="my-name" 
            className="my-class" 
            labelIdle="Drop files here..."
            allowMultiple="true"
            acceptedFileTypes="image/jpeg, image/png"
            [files]="myFiles" 
            (oninit)="handleFilePondInit()">
        </FilePond>
    </div>
  `
})

export class AppComponent {

  myFiles = ['index.html'];

  // Allows us to get a reference to the FilePond instance
  @ViewChild('myPond') myPond: any;

  handleFilePondInit = () => {

    console.log('FilePond has initialised');

    // FilePond instance methods are available on `this.myPond`

  }
}
```
