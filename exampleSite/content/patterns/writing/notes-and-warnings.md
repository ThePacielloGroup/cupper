+++
title = "Notes & warnings"
+++

**Cupper** acknowledges that simple markdown is limiting when it comes to writing compelling documentation, so it provides a number of "shortcodes". Shortcodes offer a simple syntax for including rich content. For example, **Cupper** provides shortcodes for including notes and warnings.

## Notes

You may wish to pick out some content in your pattern's documentation as a note — an aside to the main thrust of the pattern's description. This is possible using the following syntax:

{{<codeBlock>}}
&#x7b;{% note %}}
This is a note! It's something the reader may like to know about but is supplementary to the main content. Use notes when something may be interesting but not critical.
&#x7b;{% /note %}}
{{</codeBlock>}}

Notes render like this:

{{% note %}}
This is a note! It's something the reader may like to know about but is supplementary to the main content. Use notes when something may be interesting but not critical.
{{% /note %}}

## Warnings

Warnings are like notes, but with more urgency.

{{<codeBlock>}}
&#x7b;{% warning %}}
This is a warning! It's about something the reader should be careful to do or to avoid doing. Use warnings when something could go wrong.
&#x7b;{% /warning %}}
{{</codeBlock>}}

Warnings render like this:

{{% warning %}}
This is a warning! It's about something the reader should be careful to do or to avoid doing. Use warnings when something could go wrong.
{{% /warning %}}
