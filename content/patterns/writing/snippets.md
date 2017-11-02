+++
title = "Snippets"
+++

A lot of the time, your larger documentation patterns will share some common techniques and utilities. For this reason, **Cupper** lets you save snippets of markdown in a **snippets** folder, alongside the main content folder.

The example `visually-hidden.md` snippet describes the CSS needed to create content that is visually hidden but still available to screen readers. Since this is a technique/utility you are likely to use often, it's nice to be able to just drop a snippet into your markdown content. The `snippet` shortcode lets you do exactly that:

{{<codeBlock>}}
&#x7b;{% snippet file="visually-hidden.md" %}}
{{</codeBlock>}}

{{% note %}}
To make your snippets truly reusable, try to write them in such a way that they make sense independent of surrounding text, a little bit like this note does.
{{% /note %}}

## Visually hidden snippet

{{% snippet file="visually-hidden.md" %}}
