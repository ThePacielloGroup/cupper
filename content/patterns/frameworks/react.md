+++
title = "React"
+++

The FilePond React Component functions as a tiny adapter for the FilePond object so it's easier to use with React.

Installation instructions for npm.

```bash
npm install react-filepond --save
```

Now you can import the `<FilePond>` Component and add it to your `.jsx` files.

```js
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
```

We can configure our pond by using the [FilePond instance properties](../../api/filepond-instance/#properties) as props on the `<FilePond>` Component.

```js
<FilePond allowMultiple={true} maxFiles={3} server='/api'/>
```

We can use the callback properties to listen for events on the pond.

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


Using the `<File>` Component we can programmatically update the current files list. For more information see [Setting initial files](../../api/filepond-object/#setting-initial-files).

```js
<FilePond>
    {/* a random file to load immidiately */}
    <File src="kitten.jpeg"/>

    {/* a temporary file already available on the server */}
    <File src="12345" origin="limbo"/>

    {/* a file already uploaded to the server */}
    <File src="12345" origin="local"/>

    {/* mock file data so the file is not downloaded from the server */}
    <File src="12345" origin="local" name="cat.jpeg" size={700100} type="image/jpeg"/>

    {/* add metadata */}
    <File src="12345" origin="local" metadata={{date:'2019-01-01T12:00'}}/>
</FilePond>
```

A more elaborate example using state to update the files list and add a plugin.

```js
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Register the image preview plugin
import FilePondImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondImagePreview);

// Our app
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: ['index.html']
        };
    }
    
    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    render() {
        return (
            <div className="App">
            
                {/* // Pass FilePond properties as attributes */}
                <FilePond ref={ref => this.pond = ref}
                          allowMultiple={true}
                          maxFiles={3}
                          server="/api"
                          oninit={() => this.handleInit()}>
                    
                    {/* // Set current files using the <File/> component */}
                    {this.state.files.map(file => (
                        <File key={file} src={file} />
                    ))}
                    
                </FilePond>
            </div>
        );
    }
}
```
