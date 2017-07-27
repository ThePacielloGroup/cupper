+++
title = "Serving"
+++

## Serving locally

While you're creating content for your library, you'll probably want to see what the finished product looks like. Fortunately, **Infusion** is easy to serve locally using the `serve` command:

{{<cmd>}}npm run serve{{</cmd>}}

This will serve your working library from `localhost:1313`. Whenever you make changes to your library's files, the site will automatically rebuild. No need to refresh the web page!

## Publishing on Github Pages

**Infusion** creates a `/docs` folder containing the latest version of your library whenever you do an `npm run build` or a `git commit`. This folder can be made the source for your Github Pages site by selecting it under  **Settings → Github Pages → Source** in the web interface.

![The publishing source dropdown menu on Github](/images/serve_from_docs.png)

Then, whenever you push to master, you will also be updating the site found at your Github Pages URL.

This URL will be in the following format:

```
[your user name].github.io/[your library repo name]
```

You'll also need to add it to your `config.toml` file as the `baseURL` value. See {{% pattern "Library setup" %}} for more information.
