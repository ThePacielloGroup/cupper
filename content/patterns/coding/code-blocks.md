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

## Line-numbered code blocks

In addition to the basic markdown support, **Infusion** provides a mechanism to display code blocks with line numbers. This is via the `codeBlock` shortcode. Here is the code for a block of JavaScript with line numbers:

{{<codeBlock>}}
&#x7b;{&lt;codeBlock lang="js" numbered="true">}}
var toggle = demo.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {  
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', !pressed);
});
&#x7b;{&lt;/codeBlock>}}
{{</codeBlock>}}

The output will look like the following. Now you can refer to particular bits of the code by line number, like the arrow function on line `3`.

{{<codeBlock lang="js" numbered="true">}}
var toggle = demo.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {  
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', !pressed);
});
{{</codeBlock>}}

{{% note %}}
To preserve the wrapping inside code blocks, horizontal scrolling is implemented. To make sure scrolling is keyboard accessible, code blocks are focusable. An `aria-label` is provided to identify the code block to screen reader users.
{{% /note %}}
