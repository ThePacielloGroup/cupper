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

## Annotated HTML

Since the structure of HTML is critical to interoperable web interfaces, **Infusion** offers the ability to highlight and annotate specific HTML elements and attributes using the `html` shortcode.

Take an accessible dialog. You may wish to point out key attributes that make that dialog support assistive technologies:

{{<html>}}
<div ((role="dialog")) ((aria-labelledby="dialog-heading"))>
  <button ((aria-label="close"))>x</button>
  <h2 ((id="dialog-heading"))>Confirmation</h2>
  <p>Press <strong>Okay</strong> to confirm or <strong>Cancel</strong></p>
  <button>Okay</button>
  <button>Cancel</button>
</div>
{{</html>}}

You mark out the highlighted areas with double parentheses like so:

{{<codeBlock>}}
&#x7b;{&lt;html>}}
&lt;div ((role="dialog")) ((aria-labelledby="dialog-heading"))>
  &lt;button ((aria-label="close"))>x&lt;/button>
  &lt;h2 ((id="dialog-heading"))>Confirmation&lt;/h2>
  &lt;p>Press <strong>Okay</strong> to confirm or <strong>Cancel</strong>&lt;/p>
  &lt;button>Okay&lt;/button>
  &lt;button>Cancel&lt;/button>
&lt;/div>
&#x7b;{&lt;/html>}}
{{</codeBlock>}}

Better still, if you include `numbered="true"`, each highlight is enumberated so you can reference it directly in the ensuing text.

{{<html numbered="true">}}
<div ((role="dialog")) ((aria-labelledby="dialog-heading"))>
  <button ((aria-label="close"))>x</button>
  <h2 ((id="dialog-heading"))>Confirmation</h2>
  <p>Press <strong>Okay</strong> to confirm or <strong>Cancel</strong></p>
  <button>Okay</button>
  <button>Cancel</button>
</div>
{{</html>}}

You just include `numbered="true"` on the opening shortcode tag:

{{<codeBlock>}}
&#x7b;{&lt;html numbered="true">}}
&lt;div ((role="dialog")) ((aria-labelledby="dialog-heading"))>
  &lt;button ((aria-label="close"))>x&lt;/button>
  &lt;h2 ((id="dialog-heading"))>Confirmation&lt;/h2>
  &lt;p>Press <strong>Okay</strong> to confirm or <strong>Cancel</strong>&lt;/p>
  &lt;button>Okay&lt;/button>
  &lt;button>Cancel&lt;/button>
&lt;/div>
&#x7b;{&lt;/html>}}
{{</codeBlock>}}
