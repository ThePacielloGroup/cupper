+++
title = "Tables of contents"
+++

Pattern pages in **Cupper** that have two or more subheadings (`<h2>`s) automatically get a **table of contents**: a list of links to the main subsections for the page. This feature is made accessible as a navigation region with the "Table of contents" label and uses an ordered list. The table of contents markup for the {{% pattern "Setup" %}} page looks something like this:

```html
<nav class="toc" aria-labelledby="toc-heading">
  <h2 id="toc-heading">Table of contents</h2>
  <ol>
    <li>
      <a href="#cleaning-the-content-folder">“Cleaning” the content folder</a>
    </li>
    <li>
      <a href="#the-setup-command">The setup command</a>
    </li>
    <li>
      <a href="#the-config-file">The config file</a>
    </li>
    <li>
      <a href="#including-a-logo">Including a logo</a>
    </li>
  </ol>
</nav>
```

Tables of content are a neat way to break down the content of the page and give users a navigable overview. However, they may not be to your taste. Never fear, you can turn tables of content off by adding `toc = false` to the TOML metadata for your pattern:

```
+++
title = "My page with a few headings"
toc = false
+++
```
