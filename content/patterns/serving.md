+++
title = "Serving"
+++

## Serving locally

While you're creating content for your library, you'll probably want to see what the finished product looks like. Fortunately, **Infusion** is easy to serve locally using the `serve` command:

{{<cmd>}}npm run serve{{</cmd>}}

This will serve your working library from `localhost:1313` (the exact URL will be determined by what's in your `baseURL` and will be revealed to you by your terminal). Whenever you make changes to your library's files, the site will automatically rebuild. No need to refresh the web page!

## Publishing on Github Pages

There are three steps to hosting your library on Github Pages.

### 1. Edit the baseURL

Open up `config.toml` (at the root of your library project folder) and make sure `baseURL` matches your Github Pages URL.

```html
baseURL = "[your user name].github.io/[your library repo name]"
```

If you are having trouble working out your Github Pages URL, [this tool may help](https://drastudio.github.io/url-generator/).

### 2. Commit your latest changes

On the (default) master branch run:

{{<cmd>}}git commit -am "my commit message"{{</cmd>}}

### 3. Run the `host` command

{{<cmd>}}npm run host{{</cmd>}}

You should now be able to find a "live" version of your library at `[your user name].github.io/[your library repo name]`.

+++
title = "Serving"
+++

## Serving locally

While you're creating content for your library, you'll probably want to see what the finished product looks like. Fortunately, **Infusion** is easy to serve locally using the `serve` command:

{{<cmd>}}npm run serve{{</cmd>}}

This will serve your working library from `localhost:1313` (the exact URL will be determined by what's in your `baseURL` and will be revealed to you by your terminal). Whenever you make changes to your library's files, the site will automatically rebuild. No need to refresh the web page!

## Publishing on Github Pages

**Infusion** creates a `/docs` folder containing the latest version of your library whenever you run `npm run build` or do a `git commit`. This folder can be made the source for your Github Pages site by selecting it under  **Settings → Github Pages → Source** in the web interface.

Then, whenever you push to master, you will also be updating the site found at your Github Pages URL, in the format `[your user name].github.io/[your library repo name]`. See {{% pattern "Library setup" %}} for adding this URL to your `config.toml` file. If you are having trouble working out your Github Pages URL, [this tool may help](https://drastudio.github.io/url-generator/).
