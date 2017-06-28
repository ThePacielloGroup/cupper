+++
title = "Library structure"
weight = 1
+++

Before you can set about documenting patterns, you need to know where everything goes. The simplest folder structure looks like this:

```
└── content
    ├── _index.md
    └── patterns
        ├── name-of-my-pattern.md
        └── name-of-my-other-pattern.md
```

* **/content** - This is where all of your content lives. You won't need to visit any other folders very frequently.
* **_index.md** — This is the content for your home page.
* **/patterns** — This is the folder where individual pattern files are kept.

## Subsections

You may have noticed that this site's navigation is divided partly into subsections, with labels like "Writing". **Infusion** (or, rather, Hugo) allows you to create such subsections by simply nesting folders under the `/patterns` folder. In the following example, I have a subsection about different types of "popup" pattern.

```
└── content
    ├── _index.md
    └── patterns
        ├── name-of-my-pattern.md
        ├── name-of-my-other-pattern.md
        └── popups
            ├── _index.md
            ├── popup-menu.md
            └── tooltip.md
```

{{% note %}}
Note that subfolders like `/popups` must each have an `_index.md` file. This file doesn't need any content except the TOML metadata defining the title (name) of that subsection:

```
+++
title = "Popups"
+++
```

The `/patterns` folder itself does not need indexing explicitly in this way.

**Infusion** does not currently support _sub_-subsections.
{{% /note %}}

Now that you know where to put everything, it's time to talk about how to actually write individual patterns. Don't worry, it's pretty straightforward. Turn to {{% pattern "Markdown & metadata" %}}.
