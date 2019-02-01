+++
title = "Markdown & metadata"
weight = 3
tags = ['metadata', 'markdown']
+++

In **Cupper** everything is documented using markdown, as a "pattern". To create a new pattern file, just add a file with the `.md` extension to the `content/patterns` folder. It's recommended you use "kebab case" to name the file (words separated by hyphens). For example, a pattern with the title "Menu button" should probably have the filename `menu-button`. Then you get a nice clean URL: `username.github.io/your-library/patterns/menu-button`.

If you're not familiar with writing markdown, there are a number of tutorials available. One of the best is [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) offered by Github. There's also a [nice cheatsheet here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## The metadata

Like many static site generators, Hugo lets you add metadata to its markdown files. Hugo's brand of metadata is called TOML (although YAML is also accepted). The only thing you _have_ to put in the TOML is a `title` — like this:

```
+++
title = "Menu button"
+++
```

{{% note %}}
The title automatically becomes the page's main `<h1>` heading. The highest heading level you should use in the body of your markdown file is therefore `<h2>`.
{{% /note %}}

### Tags

If you like, you can also tag the pattern so that it turns up in lists of similar content. You add tags in an array format. Note that all the TOML data is found at the top of the markdown file, between the `+++` lines.

```
+++
title = "Menu button"
tags = ["interactive", "popup", "javascript"]
+++
```

This will create links to pages listing content tagged with the same terms using the URL schema `/tag/[tag name]`. Some example tags links are provided for this page, which you can see listed under the main heading.

### Weight

By default, patterns are listed alphabetically in the navigation. However, sometimes you might like to change the order around. This is possible by adding a `weight` parameter. To make my menu button pattern appear at the top of its subsection, I would give it a `weight` of `1`:

```
+++
title = "Menu button"
tags = ["interactive", "popup", "javascript"]
weight = 1
+++
```

{{% warning %}}
The `weight` parameter should be an integer, not a string, so don't use scare quotes around the value!
{{% /warning %}}
