+++
title = "Serving"
+++

## Serving locally

While you're creating content for your library, you'll probably want to see what the finished product looks like. Fortunately, **Infusion** is easy to serve locally using the `serve` command:

{{<cmd>}}npm run serve{{</cmd>}}

This will serve your working library on `localhost:1313`. Whenever you make changes to your library's files, the site will automatically rebuild. No need to refresh the web page!

## Publishing on Github Pages

The easiest way to host your pattern library so you have a link to share is to run the `host` command. This will build the library and push it to the local Github repository's `gh-pages` branch.

{{<cmd>}}npm run host{{</cmd>}}

You should now be able to find a "live" version of your library at `github.io/[your username]/[your library repo' name]`.

{{% warning %}}
The `host` command *force* pushes the contents of the `public` folder to `gh-pages`. This is not in itself problematic since nothing is overwritten on the `master` branch. However, be aware that the command does not push your `master` branch changes to origin. You still have to commit and push any changes you've made locally.
{{% /warning %}}
