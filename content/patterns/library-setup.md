+++
title = "Library setup"
weight = 2
+++

By now, you should have followed the {{% pattern "Installation" %}} instructions. You should have Hugo and Node installed, and a local copy of a forked version of **Infusion**. You should also have run `npm install` in the root of that codebase.

## "Cleaning" the content folder

Before you can start documenting patterns, there are a few things still to do in order to get set up. At the moment, your version of **Infusion** is a facsimile of the original, containing all this documentation content. We want to delete that content and replace it with some starter content. There's a simple `clean` command for this.

{{% warning %}}
If you are contributing to an existing **Infusion** library, do not run the following command. It will delete all of the patterns in that library. The `clean` command is just for libraries that you are starting from scratch.
{{% /warning %}}

{{<cmd>}}
  npm run clean
{{</cmd>}}

This will leave your `content` folder with just an `_index.md` file and a `patterns` folder containing a single demonstration pattern file. Find out more about these in {{% pattern "Library structure" %}}.

## The config file

You'll also want to name your library and configure one or two other things in the `config.toml` file that's found at the root of your project. Here's how that file looks:

{{<codeBlock lang="html" numbered="true">}}
languageCode = "en-us"
title = "Infusion"
baseURL = "https://thepaciellogroup.github.io/infusion/"
theme = "infusion"

[params]
  description = "Documentation for the **Infusion** pattern library builder. This documentation is constructed using the builder itself."
  codePenUser = "Heydon"
{{</codeBlock>}}

* **title** — This is the library's name, like "Megacorp 5000 Pattern Library". You don't have to include the term "pattern library" if you don't want to. For **Infusion's** own version of **Infusion**, the `title` is, naturally, _Infusion_ :-)
* **baseURL** — This is the root of the live site. Typically you will publish the site to Github Pages, so this should be the base URL for your Github Pages site.
* **theme** — This is the theme the library is using. Don't change this from "infusion".
* **description** — This is a short description of the library and comes under the logo. You can include markdown syntax here, like _&#x002a;&#x002a;Infusion&#x002a;&#x002a;_ in the above example for making the name of the library bold.
* **codePenUser** — If you want to embed codePens in your pattern files, you need to supply a codePen username here.

## The Web App Manifest

**Infusion** libraries work as progressive web applications, meaning users can save them to their home screen and read them offline. The web app manifest, found at the root of the `static` folder defines names and icons for the app. You'll probably want to open `/static/manifest.json` and personalize the `name` and `short_name` values.

```
{
 "name": "Infusion Pattern Library Docs",
 "short_name": "Infusion Docs",
 "icons": [
  {...
```

{{% note %}}
The `short_name` value refers to the text that appears under the icon on your homescreen. As the name suggests, it should be as short as possible to fit well.
{{% /note %}}

## Including a logo

In the `images/static` folder, you'll find a `logo.svg` file. Replace this file with your own company or project logo. Currently, only the SVG is supported this easily because SVG the superior format for logotypes. However, if you must use a different format, you can open up the `themes/infusion/layouts/_default/baseof.html` file and edit the image reference:

```html
<a class="logo" href="/" aria-label="{{ .Site.Title }} pattern library home page">
  <img src="{{ "images/logo.svg" | absURL }}" alt="">
</a>
```

Now that your logo's in place, everything should be ready. Where next? You can learn about {{% pattern "Library structure" %}} to help you get writing, or find out how to serve the library locally and on Github Pages in {{% pattern "Serving" %}}.
