+++
title = "Updating Cupper"
weight = 5
+++

The core of **Cupper's** functionality is in its Hugo theme, called [Cupper Hugo Theme](https://github.com/aral/cupper-hugo-theme). This is installed in the theme folder when you run the installation script. You can also install it separately into any Hugo instance.

{{% fileTree %}}
* content
* docs
* lib
* snippets
* static
* themes
    * cupper
{{% /fileTree %}}

Do not "hack the core". If you have any issues with **Cupper**, please report them to [the **Cupper** Github repository](https://github.com/ThePacielloGroup/cupper/issues) and they will be dealt with ASAP.

Cupper is undergoing constant development, so keep an eye out for new releases. To update to a new version of **Cupper**, simply run the `update` command from inside your local project folder.

{{<cmd>}}
./update
{{</cmd>}}

This will update the Cupper Hugo Theme to its latest version.
