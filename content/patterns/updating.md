+++
title = "Updating Infusion"
weight = 5
+++

The core of **Infusion's** functionality is in its Hugo theme, also called **Infusion**. This is found in the theme folder.

{{% fileTree %}}
* content
* docs
* lib
* snippets
* static
* themes
    * infusion
{{% /fileTree %}}

Do not "hack the core". If you have any issues with **Infusion**, please report them to [the **Infusion** Github repository](https://github.com/ThePacielloGroup/infusion/issues) and they will be dealt with ASAP.

Infusion is undergoing constant development, so keep an eye out for new releases. To update to a new version of **Infusion**, simply run the `update` command from inside your local project folder.

{{<cmd>}}
npm run update
{{</cmd>}}

This will save a timestamped backup of the current version, and download the latest version. Your theme folder will now look something like the following.

{{% fileTree %}}
* themes
    * infusion
    * infusion-old-1503389765972
{{% /fileTree %}}

If you experience breaking changes and are having trouble fixing them, you can rename the old folder and revert to using it. In the meantime, you can [submit an issue](https://github.com/ThePacielloGroup/infusion/issues) with the "help" tag describing your problem.

{{% warning %}}
The described update process relies on SVN because Github does not support downloading individual repository folders. If you have a Mac, SVN should be installed already. If not, or if you are on Windows, you can either install SVN or download the latest [**Infusion** theme folder](https://github.com/ThePacielloGroup/infusion/tree/master/themes/infusion) manually, using the Github web interface.
{{% /warning %}}
