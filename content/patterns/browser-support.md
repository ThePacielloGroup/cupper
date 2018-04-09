+++
title = "Browser support"
weight = 3
+++

## Progressive Enhancement

FilePond follows a Progressive Enhancement strategy, which means that the more modern the browser the more FilePond features are supported.

At the time of this writing not all browsers support dropping of external links, directories or allow pasting files. Some browsers do, those browsers will automatically unlock these functionalities for their useres.

To keep file size to a minimum very old browsers are not supported. We can determine if a browser is supported by calling the `FilePond.supported()` method.

By using a `<input type="file">` as our base element we can fallback to a default file upload scenario if FilePond is not available.

## Supported browsers

FilePond has been succesfully tested on the following browsers and devices.

### Desktop

{{% tested using="Firefox, Chrome, Safari, Edge, IE11" %}}

To support IE11 we need to install the [filepond-polyfill](https://github.com/pqina/filepond-polyfill) files.

### Mobile

{{% tested using="Safari iOS, Chrome Android, Firefox Android" %}}

Tested on Safari iOS version 9 and higher.

### Assistive Technology

{{% tested using="Safari + VoiceOver, Chrome + VoiceOver, Chrome + NVDA, Firefox + NVDA" %}}
