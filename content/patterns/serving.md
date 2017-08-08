+++
title = "Serving"
weight = 3
+++

## Serving locally

While you're creating content for your library, you'll probably want to see what the finished product looks like. Fortunately, **Infusion** is easy to serve locally using the `serve` command:

{{<cmd>}}npm run serve{{</cmd>}}

This will serve your working library from `localhost:1313`. Whenever you make changes to your library's files, the site will automatically rebuild. No need to refresh the web page!

## Publishing on Github Pages

**Infusion** creates a `/docs` folder containing the latest version of your library whenever you do an `npm run build` or a `git commit`. So long as you forked the **Infusion** repository when making your own library (see {{% pattern "Library setup" %}}), whenever you push to master, you will also be updating the site found at your Github Pages URL.

This URL will be in the following format:

```
[your user name].github.io/[your library repo name]
```

You'll also need to add this value to your `config.toml` file as the `baseURL`. For **Infusion**'s own documentation it looks like the following. Just overwrite it.

```
baseURL = "https://thepaciellogroup.github.io/infusion/"
```

{{% note %}}
If you created a new library repo manually (without forking) you will find the `docs` folder is not automatically setup as the publishing source. This folder can be made the source for your Github Pages site by selecting it under  **Settings → Github Pages → Source** in the web interface.

![The publishing source dropdown menu on Github](/images/serve_from_docs.png)
{{% /note %}}
