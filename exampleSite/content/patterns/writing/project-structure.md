+++
title = "Project structure"
weight = 1
+++

Before you can set about making documentation, you need to know where everything goes. The simplest folder structure looks like this:

{{% fileTree %}}
* content
    * \_index.md
    * print-version.md
    * patterns
        * name-of-my-pattern.md
        * name-of-my-other-pattern.md
{{% /fileTree %}}

* **/content** - This is where all of your content lives. You won't need to visit any other folders very frequently.
* **_index.md** — This is the content file for your home page.
* **print-version.md** — This is a placeholder for the single-page / print-friendly version of you library. Leave this file as it is.
* **/patterns** — This is the folder where individual content files are kept. **Cupper** refers to each individual documentation file/page as a "pattern".

## Subsections

You may have noticed that this site's navigation is divided partly into subsections, with labels like "Writing". **Cupper** (or, rather, Hugo) allows you to create such subsections by simply nesting folders under the `/patterns` folder. In the following example, I have a subsection about different types of "popup" pattern.

{{% fileTree %}}
* content
    * \_index.md
    * patterns
        * name-of-my-pattern.md
        * name-of-my-other-pattern.md
        * popups
            * \_index.md
            * popup-menu.md
            * tooltips.md
{{% /fileTree %}}

Subfolders like `/popups` must each have an `_index.md` file. This file doesn't need any content except the TOML metadata defining the title (name) of that subsection:

```
+++
title = "Popup windows"
+++
```

This title is what labels the subsection in the navigation, *not* the folder name (`/popups`, in this case). For each subfolder you create, you must also create one of these `_index.md` files. The `/patterns` folder itself does not need one, however.

{{% note %}}
**Cupper** does not currently support _sub_-subsections. You can only create child folders under `/patterns`.
{{% /note %}}

Now that you know where to put everything, it's time to talk about how to actually write individual patterns. Don't worry, it's pretty straightforward. Turn to {{% pattern "Markdown & metadata" %}}.
