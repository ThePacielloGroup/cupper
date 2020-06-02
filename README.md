# Cupper

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc8c4e51-37ee-419d-ad4f-b378010ee546/deploy-status)](https://app.netlify.com/sites/cupper-hugo-theme/deploys)

An accessibility-friendly Hugo theme, ported from the [original Cupper](https://github.com/ThePacielloGroup/cupper) project.

## Table of contents

- [Demo](#demo)
- [Minimum Hugo version](#minimum-hugo-version)
- [Installation](#installation)
- [Updating](#updating)
- [Run example site](#run-example-site)
- [Configuration](#configuration)
- [Logo](#logo)
- [Favicons](#favicons)
- [Shortcodes](#shortcodes)
- [Syntax highlighting](#syntax-highlighting)
- [Disable toc for a blog post](#disable-toc-for-a-blog-post)
- [Localization](#localization)
- [Custom css](#custom-css)
- [Getting help](#getting-help)
- [Credits](#credits)

## Demo

https://cupper-hugo-theme.netlify.com/

## Minimum Hugo version

Hugo version `0.60.1` or higher is required. View the [Hugo releases](https://github.com/gohugoio/hugo/releases) and download the binary for your OS.

## Installation

From the root of your site:

```
git submodule add https://github.com/zwbetz-gh/cupper-hugo-theme.git themes/cupper-hugo-theme
```

## Updating

From the root of your site:

```
git submodule update --remote --merge
```

## Run example site

From the root of `themes/cupper-hugo-theme/exampleSite`:

```
hugo server --themesDir ../..
```

## Configuration

Copy `config.yaml` from the [`exampleSite`](https://github.com/zwbetz-gh/cupper-hugo-theme/tree/master/exampleSite), then edit as desired. 

## Logo

Place your SVG logo at `static/images/logo.svg`. If you don't provide a logo, then the default theme logo will be used. 

## Favicons

Upload your image to [RealFaviconGenerator](https://realfavicongenerator.net/) then copy-paste the generated favicon files under `static`. 

## Shortcodes

See the [full list of supported shortcodes](https://cupper-hugo-theme.netlify.com/cupper-shortcodes/).

## Syntax highlighting

Syntax highlighting is provided by [Prism](https://prismjs.com/). See this [markdown code fences example](https://cupper-hugo-theme.netlify.com/cupper-shortcodes/#syntax-highlighting).


## Disable toc for a blog post

Blog posts that have two or more subheadings (`<h2>`s) automatically get a table of contents. To disable this set `toc` to `false`. For example:

```
---
title: "My page with a few headings"
toc: false
---
```

## Localization

The strings in the templates of this theme can be localized. Make a copy of `<THEME_BASE_FOLDER>/i18n/en.yaml` to `<YOUR_SITE_FOLDER>/i18n/<YOUR_SITE_LANGUAGE>.yaml`, and translate one by one, changing the `translation` field.

[Here is a tutorial that goes more in depth about this.](https://regisphilibert.com/blog/2018/08/hugo-multilingual-part-2-i18n-string-localization/)

## Custom css

Instead of copying the theme's css file to your own installation and modifying this large file, you can provide a list of css files that will be loaded after the theme's one. This enables you to override individual style while getting theme updates when they come.

Please see the params section of the example site `config.yaml` for more details.

## Getting help

If you run into an issue that isn't answered by this documentation or the [`exampleSite`](https://github.com/zwbetz-gh/cupper-hugo-theme/tree/master/exampleSite), then visit the [Hugo forum](https://discourse.gohugo.io/). The folks there are helpful and friendly. **Before** asking your question, be sure to read the [requesting help guidelines](https://discourse.gohugo.io/t/requesting-help/9132).

## Credits

Thank you to [Heydon Pickering](http://www.heydonworks.com) and [The Paciello Group](https://www.paciellogroup.com/) for creating the original Cupper project. 
