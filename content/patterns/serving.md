+++
title = "Serving"
weight = 3
+++

## Serving locally

While you're creating content for your project, you'll probably want to see what the finished product looks like. Fortunately, **Cupper** is easy to serve locally using the `serve` command:

{{<cmd>}}npm run serve{{</cmd>}}

This will serve your working project from `localhost:1313`. Whenever you make changes to your files, the site will automatically rebuild. No need to refresh the web page!

## Publishing on Github Pages

**Cupper** creates a `/docs` folder containing the latest version of your site whenever you do an `npm run build` or a `git commit`. So long as you forked the **Cupper** repository when making your own version (see {{% pattern "Setup" %}}), whenever you push to master, you will also be updating the site found at your Github Pages URL.

This URL will be in the following format:

```
[your user name].github.io/[your library repo name]
```

You'll also need to add this value to your `config.toml` file as the `baseURL`. For **Cupper**'s own documentation it looks like the following. Just overwrite it.

```
baseURL = "https://thepaciellogroup.github.io/cupper/"
```

### Set the publishing source

You will find the `docs` folder is not automatically setup as the publishing source, even when forking the repo. In which case, you must set it under  **Settings → Github Pages → Source** in the web interface.

![The publishing source dropdown menu on Github](/images/serve_from_docs.png)
