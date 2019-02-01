+++
title = "Color palettes"
+++

There's no reason why your **Cupper**-powered pattern library has to be all about functionality. You can include style guide-like information such as color palettes too. The `colors` shortcode makes it easy to exhibit colors and their values together. Just supply a comma-separated list of CSS color values.

{{<codeBlock>}}
&#x7b;{% colors "#111111, #cccccc, #ffffff" %}}
{{</codeBlock>}}

The result is a one row strip showing each color supplied in order. The colors for **Cupper** are greyscale:

{{% colors "#111111, #cccccc, #ffffff" %}}

{{% note %}}
If you're wondering whether you need to put a space after the commas in the shortcode, don't worry: `"#254f7b, #579a6d, #666666"` and `"#254f7b,#579a6d,#666666"` are both accepted. Any CSS color value is acceptable, not just hex colors.
{{% /note %}}
