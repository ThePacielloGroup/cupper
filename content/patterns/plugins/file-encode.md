+++
title = "File encode"
+++

When we want to submit files along with the classic form post we run into a serious browser limitation. The file input field is the only field available to submit files to a server but its value cannot be set. The file input field value can only be modified by the user by manually adding files (in one action).

To circumvent this, we can encode files as base64 strings and add those strings to hidden input fields. Then we decode the strings on the server to get back to a file object.

The File encode plugin does just that, it encodes a dropped file as a Base64 string and stores the string in a hidden input field as a JSON string. It uses a JSON string so it can also add the file size, type, name and metadata.

The resulting object will look something like this.

```js
{
    "id": "b56kpu6u9",
    "name": "encoded-file.png",
    "type": "image/png",
    "size": 123456,
    "metadata": {
        "resize": {
            "mode": "force",
            "size": {
                "width": 200,
                "height": 200
            }
        },
        "crop": {
            "rect": {
                "x": 0.19234,
                "y": 0,
                "width": 1,
                "height": 0.61213
            },
            "aspectRatio": 1
        }
    },
    "data": "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAA..."
}
```

{{% warning %}}
Submitting forms with very large Base64 encoded strings can result in browsers running out of memory (especially on mobile devices). Server side security software might also tag a big form post as insecure and prevent the submit from succeeding. To remedy this we can use the [Image transform](../image-transform) plugin to limit the file size before encoding.
{{% /warning %}}

## Properties

| Property        | Default | Description                     |
| --------------- | ------- | ------------------------------- |
| allowFileEncode | `true`  | Enable or disable file encoding |
