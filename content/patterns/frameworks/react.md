+++
title = "React"
+++

The FilePond React Component functions as a tiny adapter for the FilePond object so it's easier to use with React.

Installation instructions for npm.

```bash
npm install react-filepond filepond --save
```

Now you can import the `<FilePond>` Component and add it to your `.jsx` files.

```js
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
```

We can configure our pond by using the [FilePond instance properties](../../api/filepond-instance/#properties) as props on the `<FilePond>` Component.

```js
<FilePond allowMultiple={true} maxFiles={3} server='/api'/>
```

We can use the [callback properties](../../api/filepond-instance/#callbacks) to listen for events on the pond.

```js
<FilePond oninit={() => this.handleInit() }/>
```

By setting a ref we can call [FilePond instance methods](../../api/filepond-instance/#methods) on the Component.

```js
{/* set pond reference like this */}
<FilePond ref={ref => this.pond = ref}/>

{/* call methods like this */}
this.pond.getFiles();
```


By setting the `files` prop we can programmatically update the current files list. For more information see [Setting initial files](../../api/filepond-object/#setting-initial-files).

We can use the `onupdatefiles` callback to sync the FilePond files with our own state.

```js
<FilePond onupdatefiles={fileItems => {
    setState({
        files: fileItems.map(fileItem => fileItem.file)
    })
}}>
```


A more elaborate example using state to update the files list and add a plugin.

```js
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Set initial files, type 'local' means this is a file
            // that has already been uploaded to the server (see docs)
            files: [{
                source: 'index.html',
                options: {
                    type: 'local'
                }
            }]
        };
    }
    
    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    render() {
        return (
            <div className="App">
            
                {/* Pass FilePond properties as attributes */}
                <FilePond ref={ref => this.pond = ref}
                          files={this.state.files}
                          allowMultiple={true}
                          maxFiles={3}
                          server="/api"
                          oninit={() => this.handleInit() }
                          onupdatefiles={(fileItems) => {
                              // Set current file objects to this.state
                              this.setState({
                                  files: fileItems.map(fileItem => fileItem.file)
                              });
                          }}>
                </FilePond>

            </div>
        );
    }
}
```
