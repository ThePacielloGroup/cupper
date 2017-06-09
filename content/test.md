+++
title = "Test content node"
wcag = ["1-1-1"]
+++

Here is the content of "test content node", including a `code` example and a <kbd>Space</kbd> key mention. Below is the use of a special shortcode for providing a note:

{{% note %}}
  I just wanted to say&hellip; yeah, **why not**!

  Here is the content of "test content node", including a `code` example and a <kbd>Space</kbd> key mention. Below is the use of a special shortcode for providing a note:
{{% /note %}}

The following is similar, but a warning:

{{% warning %}}
  I just wanted to say&hellip; **NO NO NO**!
{{% /warning %}}

## Code block

### Markdown version

```js
var button = document.getElementById('button')

button.addEventListener('click', function() {
  alert('well hey')
})
```

### Shortcode version

{{<codeblock lang="js" numbered="true">}}
var button = document.getElementById('button')

button.addEventListener('click', function() {
  alert('well hey')
})
{{</codeblock>}}

## Expandable sections

{{% expandable level="2" open="true" %}}
Here it is then!
{{% /expandable %}}
