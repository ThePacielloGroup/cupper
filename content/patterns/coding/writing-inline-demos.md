+++
title = "Writing inline demos"
weight = 3
+++

There are some issues with {{% pattern "CodePen embedding" %}}, like them not working offline. They also come with CodePen branding, which will clash with the pattern you're trying to illustrate.

**Infusion** offers another option: a special `demo` shortcode that allows you to write HTML, CSS, and JavaScript directly into the markdown file. The outputted demo is encapsulated using Shadow DOM, so you don't have to worry about broken styles and global JS.

Here's the example code for an inline demo of a toggle button:

{{<codeBlock lang="html" numbered="true">}}
&#x7b;{&lt;demo>}}
&lt;button aria-pressed="false">Toggle Me&lt;/button>
&lt;style>
button {
    background: DarkCyan;
    color: white;
    border: 0;
    font-size: 1.5rem;
    padding: 0.5em 1em;
    border-right: 5px solid #000;
    border-bottom: 5px solid #000;
}

[aria-pressed="true"] {
  border: 0;
  border-top: 5px solid #000;
  border-left: 5px solid #000;
}
&lt;/style>
&lt;script>
var toggle = demo.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {  
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', !pressed);
});
&lt;/script>
&#x7b;{&lt;/demo>}}
{{</codeBlock>}}

Note the `demo.querySelector` on line `21`. **Infusion** automatically provides `demo`, representing the root node of the demo. It's like the `document` keyword but for a demo's subtree.

Here's a live demo of&hellip; the demo:

{{<demo>}}
<button aria-pressed="false">Toggle Me</button>
<style>
button {
    background: DarkCyan;
    color: white;
    border: 0;
    font-size: 1.5rem;
    padding: 0.5em 1em;
    border-right: 5px solid #000;
    border-bottom: 5px solid #000;
}

[aria-pressed="true"] {
  border: 0;
  border-top: 5px solid #000;
  border-left: 5px solid #000;
}
</style>
<script>
var toggle = demo.querySelector('[aria-pressed]');

toggle.addEventListener('click', (e) => {  
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', !pressed);
});
</script>
{{</demo>}}

{{% note %}}
Firefox does not currently support Shadow DOM and **Infusion** does not include a polyfill. Firefox will output an error message. These demos function correctly in Chrome, Safari, and Opera.
{{% /note %}}

## Captioned demos

It's possible to give your demo a caption using an accessible `<figure>` and `<figcaption>` structure. All _you_ need to do is supply a `caption` attribute. For example:

{{<codeBlock lang="html" numbered="true">}}
&#x7b;{&lt;demo caption="A basic button element">}}
&lt;!-- demo code here -->
&#x7b;{&lt;/demo>}}
{{</codeBlock>}}

Along with the standard `figure` shortcodes (described in {{% pattern "Including images" %}}), demo figures are numbered automatically according to their order in the page. You can use markdown syntax in the caption text value.
