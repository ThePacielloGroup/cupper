+++
title = "Including images"
+++

From time to time, you'll be wanting to include images illustrating the documented pattern in hand. Images live in the static folder, which is a sibling of the `/content` folder you'll be mostly working in.

{{% fileTree %}}
* content
* static
    * images
        * logo.png
        * menu-button.gif
{{% /fileTree %}}

{{% note %}}
When you first make a copy of **Cupper**, **Cupper's** own logo will be included. You should replace this with your own company or project logo.
{{% /note %}}

The path to the `/images` folder should begin with a forward slash, so include that when referencing images in your markdown.

```
![Global Megacorp Ltd](/images/logo.png)
```

## Figures

Sometimes you will want to include a caption with your illustration. This is what the `<figure>` and `<figcaption>` elements are for. However, **Cupper** doesn't ask you to code all that manually. A special shortcode is provided, which takes a `caption` parameter. Note that the image markdown is provided between the opening and closing shortcode tags, and that you can use markdown syntax in the `caption` value.

{{<codeBlock>}}
&#x7b;{% figure caption="A design system that uses a bad code example as a **single source of truth** only serves to proliferate bad code." %}}
![Diagram of a design pattern represented by a turd emoji begetting three bad implementations](/images/bad_design_system.png)
&#x7b;{% /figure %}}
{{</codeBlock>}}

This will output the following. Note the automatically incremented **Figure** number.

{{% figure caption="A design system that uses a bad code example as a **single source of truth** only serves to proliferate bad code." %}}
![Diagram of a design pattern represented by a turd emoji begetting three bad implementations](/images/bad_design_system.png)
{{% /figure %}}

The generated markup includes special provisions for assistive technology support:

```html
<figure role="group" aria-describedby="caption-5fbafefe946c724e7a5d3d2d447a8684">
  <p><img src="http://localhost:1313/images/bad_design_system.png" alt="Diagram of a design pattern represented by a turd emoji begetting three bad implementations"></p>
  <figcaption id="caption-5fbafefe946c724e7a5d3d2d447a8684">
    A design system that uses a bad code example as a <strong>single source of truth</strong> only serves to proliferate bad code.
  </figcaption>
</figure>
```
