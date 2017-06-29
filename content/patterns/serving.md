+++
title = "Serving"
+++

## Serving locally

While you're creating content for your library, you'll probably want to see what the finished product looks like. Fortunately, **Infusion** is easy to serve locally using the `serve` command:

{{<cmd>}}npm run serve{{</cmd>}}

This will serve your working library on `localhost:1313`. Whenever you make changes to your library's files, the site will automatically rebuild. No need to refresh the web page!

## Publishing on Github Pages

The easiest way to host your pattern library so you have a link to share is to run the `host` command. This will build the library and push it to the local Github repository's `gh-pages` branch. Before you can use `host` you will need to commit any changes you made on the master branch. Otherwise there's nothing new to push over to the `gh-pages` branch.

{{<cmd>}}git commit -am "my commit message"{{</cmd>}}

This will ensure changes go through to `gh-pages`. Now you can run:

{{<cmd>}}npm run host{{</cmd>}}

You should now be able to find a "live" version of your library at `github.io/[your username]/[your library repo  name]`.
