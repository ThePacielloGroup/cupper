# Cupper

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc8c4e51-37ee-419d-ad4f-b378010ee546/deploy-status)](https://app.netlify.com/sites/cupper-hugo-theme/deploys)

An accessibility-friendly Hugo theme, ported from the [original Cupper](https://github.com/ThePacielloGroup/cupper) project.

## Table of contents

TODO generate

## Demo

https://cupper-hugo-theme.netlify.com/

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

Copy the `config.toml` from the [`exampleSite`](https://github.com/zwbetz-gh/cupper-hugo-theme/tree/master/exampleSite), then edit as desired. 

## Shortcodes

See the [full list of supported shortcodes](https://cupper-hugo-theme.netlify.com/cupper-shortcodes/).

## Favicons

Upload your image to [RealFaviconGenerator](https://realfavicongenerator.net/) then copy-paste the generated favicon files to `static/images`. 

## Credits

Thank you to:

- [Heydon Pickering](http://www.heydonworks.com) and [The Paciello Group
](https://www.paciellogroup.com/) for creating the original Cupper project
- [Netlify](https://www.netlify.com/) for deploys
