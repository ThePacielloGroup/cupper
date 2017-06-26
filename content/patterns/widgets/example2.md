+++
title = "Menu button and menu"
tags = ["animated", "interactive"]
+++

<p>Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna {{% patternLink "Menu button and menu" %}}, id molestie magna risus ut nunc. Fusce ac sodales <abbr title='Cascading Style Sheets'>CSS</abbr> magna. Nulla auctor eleifend turpis consequat pharetra. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh, iaculis pretium sem orci aliquet mauris.</p>

{{<demo>}}
<button aria-pressed="false">Press</button>
<style>
button {
    background: blue;
    color: white;
    border: 0;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
}

[aria-pressed="true"] {
    box-shadow: inset 0 0 0.5rem #000;
}
</style>
<script>
var toggle = demo.querySelector('[aria-pressed]');
console.log(toggle);

toggle.addEventListener('click', (e) => {  
  let pressed = e.target.getAttribute('aria-pressed') === 'true';
  e.target.setAttribute('aria-pressed', !pressed);
});
</script>
{{</demo>}}

{{<codeBlock lang="css" numbered="true">}}
  .expandable + .expandable {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid;
  }

  .expandable + .expandable {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid;
  }
{{</codeBlock>}}

```html
{{ .Inner }}
```



<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac sodales <code>.generate()</code> magna. Aliquam tincidunt velit sit amet <a href='#'>ante hendrerit</a> tempus. Donec et nisi dictum felis sollicitudin congue.</p>

{{<demo caption="Example caption">}}
<p>You must be having a laugh.</p>
<style>
p {
  color: red !important;
  font-family: cursive;
}
</style>
<script>
  demo.querySelector('p').addEventListener('click', function() {
    alert('hello');
  })
</script>
{{</demo>}}

<p>Nulla vel magna sit &mdash; amet dui lobortis commodo &mdash; vitae vel nulla. Nulla lobortis tempus commodo. </p>

{{<demo>}}
<p>Everyone must not be having a laugh.</p>
<style>
p {
  color: blue !important;
  font-family: cursive;
}
</style>
<script>
  demo.querySelector('p').addEventListener('click', function() {
    alert('fuck');
  })
</script>
{{</demo>}}

{{% ticks %}}
  * Something good
  * Something else good
  * Another great thing
{{% /ticks %}}

<p>Donec et nisi dictum felis sollicitudin congue. Potenti et eros sed justo commodo bibendum non at nunc. Nulla lobortis tempus commodo. Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id molestie magna risus ut nunc. Donec tempus tempus tellus, ac lacinia turpis mattis ac! Fusce ac sodales magna &hellip; </p>

{{% note %}}
Donec et nisi dictum felis sollicitudin congue. Potenti et eros sed justo commodo bibendum non at nunc. Nulla lobortis tempus commodo. Duis sagittis, est sit amet gravida tristique.

Purus lectus venenatis urna, id molestie magna risus ut nunc. Donec tempus tempus tellus, ac lacinia turpis mattis ac! Fusce ac sodales magna &hellip;
{{% /note %}}

<p>Donec et nisi dictum felis sollicitudin congue. Potenti et eros sed justo commodo bibendum non at nunc. Nulla lobortis tempus commodo. Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id molestie magna risus ut nunc. Donec tempus tempus tellus, ac lacinia turpis mattis ac! Fusce ac sodales magna &hellip; </p>

{{% warning %}}
Donec et nisi dictum felis sollicitudin congue. Potenti et eros sed justo commodo bibendum non at nunc. Nulla lobortis tempus commodo. Duis sagittis, est sit amet gravida tristique.

Purus lectus venenatis urna, id molestie magna risus ut nunc. Donec tempus tempus tellus, ac lacinia turpis mattis ac! Fusce ac sodales magna &hellip;
{{% /warning %}}
