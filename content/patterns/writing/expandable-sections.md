+++
title = "Expandable sections"
weight = 6
+++

In some cases, where there is a lot of content, it's helpful to collapse certain sections. That way, readers get an overview of what's in the content and can choose where to focus in. **Cupper** provides a shortcode method for creating expandable sections which generates accessible markup using `aria-expanded`.

The `expandable` shortcode takes three parameters:

* **label** — This is the label for the the section heading.
* **level** — This is the heading level (e.g. `level="2"` for an `<h2>`) that will contain the label. If you omit a level parameter, no heading is used; it's just a button.
* **open** — Include this and give it a value of "true" or "yes" to make the section expanded on page load.

Here's what the code might look like for a simple expandable section containing markdown:

{{<codeBlock>}}
&#x7b;{% expandable label="A section of dummy text" level="2" %}}
Here is some markdown including [a link](https://twitter.com/heydonworks). Donec erat est, feugiat a est sed, aliquet pharetra ipsum. Vivamus in arcu leo. Praesent feugiat, purus a molestie ultrices, libero massa iaculis ante, sit amet accumsan leo eros vel ligula.
&#x7b;{% /expandable %}}
{{</codeBlock>}}

Let's look at what that outputs:

{{% expandable label="A section of dummy text" level="2" %}}
Here is some markdown including [a link](https://twitter.com/heydonworks). Donec erat est, feugiat a est sed, aliquet pharetra ipsum. Vivamus in arcu leo. Praesent feugiat, purus a molestie ultrices, libero massa iaculis ante, sit amet accumsan leo eros vel ligula.
{{% /expandable %}}

Successive collapsible sections fit snugly together. The second of the following two has `open="true"`.

{{% expandable label="A section of dummy text" level="2" %}}
Mauris eget elit ut neque venenatis placerat id nec libero. Nunc accumsan cursus elit nec iaculis. Proin id rutrum magna, a aliquet sem. Sed et tortor id sem eleifend porta vitae eget elit. Cras sodales porta malesuada. Suspendisse at odio ac tortor.
{{% /expandable %}}

{{% expandable label="Another dummy section" level="2" open="true" %}}
Ut vulputate enim ut lorem iaculis, vel faucibus metus iaculis. Aliquam erat volutpat. Aliquam luctus orci vel consectetur dignissim. Nullam et efficitur lorem, et ornare est. Sed tristique porttitor justo, quis malesuada velit. Nullam et elit finibus, sollicitudin velit placerat, ultricies dui.
{{% /expandable %}}

Unfortunately, it is not currently possible to include shortcodes inside other shortcodes, using the "`%`" notation (which is designated for markdown content). If you use the angle brackets notation (illustrated below) it is possible, but markdown will no longer be permitted. You will have to code HTML inside such a section manually.

{{<codeBlock>}}
&#x7b;{&lt;expandable label="A section of dummy text" level="2">}}
&lt;p>Here is a pattern reference shortcode: &#x7b;{% pattern "Writing inline demos" %}}.&lt;/p>
&#x7b;{&lt;/expandable>}}
{{</codeBlock>}}

{{% note %}}
When you go to print a pattern from your library, some print styles take care of collapsible sections, making them appear expanded and like any other section.
{{% /note %}}
