+++
title = "jQuery"
+++

The FilePond jQuery adapter transforms the standard FilePond API into a jQuery plguin API.

Installation instructions for npm.

```bash
npm install jquery-filepond --save
```

Get it from a CDN. Make sure to include jQuery and FilePond core first.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>

<script src="https://unpkg.com/filepond/dist/filepond.min.js"></script>

<script src="https://unpkg.com/jquery-filepond/filepond.jquery.js"></script>
```

Or [download it from the GitHub repository](https://github.com/pqina/jquery-filepond/archive/master.zip) and add it to the page manually.

```html
<script src="jquery.js"></script>
<script src="filepond.min.js"></script>
<script src="filepond.jquery.js"></script>
```

Now we can use FilePond as a jQuery plugin.

Select elements with the familiar `$()` function and use `.filepond()` to run functions and change FilePond [instance properties](../../api/filepond-instance/#properties) or [methods](../../api/filepond-instance/#methods).

```js
$(function(){

    // Turn input element into a pond
    $('.my-pond').filepond();

    // Turn input element into a pond with configuration options
    $('.my-pond').filepond({
        allowMultiple: true
    });

    // Set allowMultiple property to true
    $('.my-pond').filepond('allowMultiple', false);
  
    // Listen for addfile event
    $('.my-pond').on('FilePond:addfile', function(e) {
        console.log('file added event', e);
    });

    // Manually add a file using the addfile method
    $('.my-pond').filepond('addFile', 'index.html').then(function(file){
      console.log('file added', file);
    });
  
  });
```

Using the static FilePond api we can register plugins and change default settings.

```js
$(function(){

    $.fn.filepond.registerPlugin(FilePondPluginFileValidateSize);

    $.fn.filepond.setDefaults({
        maxFileSize: '3MB'
    });

});
```