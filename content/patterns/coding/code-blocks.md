+++
title = "Code blocks"
weight = 1
+++

Markdown already supports code samples both inline (using single backticks like \`some code here\`) and in blocks. **Infusion** will syntax highlight HTML, CSS, and JavaScript if you provide the correct language in the formulation of the block.

So, this&hellip;

{{<codeBlock>}}
```html
&lt;button aria-pressed="false">toggle me&lt;/button>
```
{{</codeBlock>}}

&hellip; will result in this:

```html
<button aria-pressed="false">toggle me</button>
```

Note that the syntax highlighting uses a greyscale theme. **Infusion** is careful not to use color as part of its own design, because these colors may clash with those of the design being illustrated and discussed.

{{% note %}}
To preserve the wrapping inside code blocks, horizontal scrolling is implemented. To make sure scrolling is keyboard accessible, code blocks are focusable. An `aria-label` is provided to identify the code block to screen reader users.
{{% /note %}}

## Annotated

{{<html>}}
<ul>
  <li>Here's a thing</li>
  <li ((role="separator"))>Here's a thing</li>
  <li>Here's a ((thing))</li>
  <li>Here's a thing <span ((aria-hidden="true"))></span></li>
</ul>
{{</html>}}
