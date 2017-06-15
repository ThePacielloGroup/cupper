+++
title = "Landmark Example 2"
wcag = ["1-1-1"]
+++

<p>Nulla vel magna sit amet dui lobortis commodo vitae vel nulla sit amet ante hendrerit tempus. Maecenas sit amet tellus nec mi gravida posuere non pretium magna. <strong>Donec a congue leo. </strong></p>

{{< codePen VpVNKW >}}

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit <em>amet tellus</em> nec mi gravida posuere non <a href='#'>pretium magna</a>. Nulla vel magna sit amet dui lobortis commodo vitae vel nulla sit amet ante hendrerit tempus. Donec tempus tempus tellus, ac <abbr title='Hypertext Markup Language'>HTML</abbr> lacinia turpis mattis ac. Suspendisse potenti. Nunc iaculis risus vel orci ornare dignissim sed vitae nulla. Donec a congue leo? Fusce ac sodales <abbr title='Cascading Style Sheets'>CSS</abbr> magna. </p>

[Link to widgets example 1]({{< ref "patterns/widgets/example1.md" >}})

## Figure example

{{% figure caption="You are <em>wrong</em>." %}}
  I LOVE FASCISM!?
{{% /figure %}}

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit <em>amet tellus</em> nec mi gravida posuere non <a href='#'>pretium magna</a>. Nulla vel magna sit amet dui lobortis commodo vitae vel nulla sit amet ante hendrerit tempus. Donec tempus tempus tellus, ac <abbr title='Hypertext Markup Language'>HTML</abbr> lacinia turpis mattis ac. Suspendisse potenti. Nunc iaculis risus vel orci ornare dignissim sed vitae nulla. Donec a congue leo? Fusce ac sodales <abbr title='Cascading Style Sheets'>CSS</abbr> magna. </p>

{{% figure caption="This is good news." %}}
  I HATE FASCISM!?
{{% /figure %}}

## Code block example

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

  .expandable + .expandable {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid;
  }
{{</codeBlock>}}

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit <em>amet tellus</em> nec mi gravida posuere non <a href='#'>pretium magna</a>. Nulla vel magna sit amet dui lobortis commodo vitae vel nulla sit amet ante hendrerit tempus. Donec tempus tempus tellus, ac <abbr title='Hypertext Markup Language'>HTML</abbr> lacinia turpis mattis ac. Suspendisse potenti. Nunc iaculis risus vel orci ornare dignissim sed vitae nulla. Donec a congue leo? Fusce ac sodales <abbr title='Cascading Style Sheets'>CSS</abbr> magna. </p>

## External refs examples

### WCAG

{{% wcag include="1.1.1, 4.1.2, 1.3.1" descriptions="true" %}}

### Inclusive Design Principles

{{% principles include="add value, Be consistent" descriptions="true" %}}

{{% expandable level="2" label="Another expandable" %}}
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit <em>amet tellus</em> nec mi gravida posuere non <a href='#'>pretium magna</a>. Nulla vel magna sit amet dui lobortis commodo vitae vel nulla sit amet ante hendrerit tempus. Donec tempus tempus tellus, ac <abbr title='Hypertext Markup Language'>HTML</abbr> lacinia turpis mattis ac. Suspendisse potenti. Nunc iaculis risus vel orci ornare dignissim sed vitae nulla.</p>
{{% /expandable %}}
