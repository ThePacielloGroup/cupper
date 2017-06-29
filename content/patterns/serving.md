+++
title = "Serving"
+++

## Serving locally

While you're creating content for your library, you'll probably want to see what the finished product looks like. Fortunately, **Infusion** is easy to serve locally using the `serve` command:

{{<cmd>}}npm run serve{{</cmd>}}

This will serve your working library on `localhost:1313`. Whenever you make changes to your library's files, the site will automatically rebuild. No need to refresh the web page!

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
