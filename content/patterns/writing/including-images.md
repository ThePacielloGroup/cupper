+++
title = "Including images"
+++

From time to time, you'll be wanting to include images illustrating the documented pattern in hand. Images live in the static folder, which is a sibling of the `/content` folder you'll be mostly working in.

```
├── content
└── static
    └── images
        ├── logo.png
        └── menu-button.gif
```

{{% note %}}
When you first make a copy of **Infusion**, **Infusion's** own logo will be included. You should replace this with your own company or project logo.
{{% /note %}}

The path to the `/images` folder should begin with a forward slash, so include that when referencing images in your markdown.

```
![Global Megacorp Ltd](/images/logo.png)
```

## Figures

Sometimes you will want to include a caption with your illustration. This is what the `<figure>` and `<figcaption>` elements are for. However, **Infusion** doesn't ask you to code all that manually. A special shortcode is provided, which takes a `caption` parameter. Note that the image markdown is provided between the opening and closing shortcode tags, and that you can use markdown syntax in the `caption` value.

{{<codeBlock>}}
&#x7b;{% figure caption="[Steve Faulkner](https://twitter.com/stevefaulkner) works for The Paciello Group" %}}
![Steve Faulkner's face](/images/steve_faulkner.jpg)
&#x7b;{% /figure %}}
{{</codeBlock>}}

This will output the following. Note the automatically incremented **Figure** number.

{{% figure caption="[Steve Faulkner](https://twitter.com/stevefaulkner) works for The Paciello Group" %}}
![Steve Faulkner's face](/images/steve_faulkner.jpg)
{{% /figure %}}

The generated markup includes special provisions for assistive technology support:

```html
<figure role="group" aria-describedby="U3RldmUgRmF1bGtuZXIg">
  <p>
    <img src="/images/steve_faulkner.jpg" alt="Steve Faulkner's face">
  </p>
  <figcaption id="U3RldmUgRmF1bGtuZXIg">
    Steve Faulkner works for The Paciello Group
  </figcaption>
</figure>
```
