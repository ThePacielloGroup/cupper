+++
title = "References"
+++

## Cross-references

**Cupper** identifies the main content files in your documentation as _patterns_, and they're kept in the **content/ patterns** folder. It's easy to cross-reference patterns using the `pattern` shortcode. For example, I can reference the {{% pattern "Notes & warnings" %}} pattern. Here's what the markdown looks like, including the shortcode:

{{<codeBlock>}}
I can reference the &#x7b;{% pattern "Notes & warnings" %}} pattern here.
{{</codeBlock>}}

This saves you having to worry about pathing and decorates the generated link with a bookmark icon, identifying the link as a pattern reference visually.

{{% note %}}
The title argument you supply to the shortcode must be exactly the same as the referenced pattern's `title` metadata value and is case sensitive.
{{% /note %}}

## WCAG References

[WCAG 2.0](https://www.w3.org/TR/WCAG/) is the _de facto_ standard for accessible interfaces. When writing about inclusive interfaces, sometimes you'll want to refer to WCAG to highlight which success criteria the pattern meets.

Instead of having to copy and paste content and links to WCAG, **Cupper** provides a shortcode mechanism that lets you simply list the success criteria by number:

{{<codeBlock>}}
&#x7b;{% wcag include="1.2.1, 1.3.1, 4.1.2" %}}
{{</codeBlock>}}

This generates a list of references that includes the names of each criterion and links to them directly. Like this:

{{% wcag include="2.1.1, 4.1.2" %}}

{{% note %}}
You don't have to leave spaces after the comma separators. They are optional.
{{% /note %}}

### Full descriptions

Sometimes, you'll want to include the full descriptions of the success criteria inline. This is possible by setting `descriptions` to `true`:

{{<codeBlock>}}
&#x7b;{% wcag include="1.3.1, 4.1.2" descriptions="true" %}}
{{</codeBlock>}}

Here's the more verbose output:

{{% wcag include="2.1.1, 4.1.2" descriptions="true" %}}

{{% note %}}
Both omitting the `descriptions` attribute and including it with a "false" value will omit descriptions. If it is included it _must_ have a value. A boolean attribute will break the output.
{{% /note %}}

## Inclusive Design Principle references

Some inclusive design concepts are not reducible to success or fail criteria. This is why The Paciello Group wrote the [Inclusive Design Principles](http://inclusivedesignprinciples.org/). These can be listed by name.

{{<codeBlock>}}
&#x7b;{% principles include="Add value, Be consistent" descriptions="true" %}}
{{</codeBlock>}}

Here's the output with `descriptions="true"`:

{{% principles include="Add value,Be consistent" descriptions="true" %}}
