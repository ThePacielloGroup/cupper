+++
title = "Angular"
+++

The FilePond Angular Component functions as a tiny adapter for the FilePond object so it's easier to use with Angular.

Installation instructions for npm.

```bash
npm install filepond ngx-filepond --save
```

We add the stylesheet(s) to our `angular.json` configuration.

```json
"styles": [
  "styles.css",
  "../node_modules/filepond/dist/filepond.min.css"
]
```

After importing the component in an NgModule we can use the `<FilePond>` Component in our Angular project.

{{% note %}}
FilePond plugins are not automatically installed, we need to install these manually.
{{% /note %}}
```js
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FilePondModule // add filepond module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

The adapter automatically references FilePond methods to the Component instance.

We can configure our pond by using the [FilePond instance properties](../../api/filepond-instance/#properties) as properties on the `[options]` attribute.

{{% note %}}
The callback methods like `oninit` and `onaddfile` are not available as properties and have been mapped to events.
{{% /note %}}

```html
<!-- app.component.html -->
<file-pond #myPond 
    [options]="pondOptions" 
    [files]="pondFiles"
    (oninit)="pondHandleInit()"
    (onaddfile)="pondHandleAddFile($event)">
</file-pond>
```

```js
// app.component.ts
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('myPond') myPond: any;

  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png'
  }

  pondFiles = [
    'index.html'
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }
}
```
