+++
title = "Demo embedding"
weight = 2
+++

Sometimes just pictures of the pattern you're documenting aren't enough. Interactive patterns benefit from live demos, so that readers can test their functionality.

## CodePen

**Cupper** offers a couple of ways to do this. The first is by embedding CodePen demos into the content. The `codePen` shortcode takes just one argument: the codePen's `ID`.

{{<codeBlock>}}
&#x7b;{% codePen VpVNKW %}}
{{</codeBlock>}}

This will embed the identified codePen into the content wherever you placed the shortcode, with the result view showing by default:

{{% codePen VpVNKW %}}

{{% warning %}}
The compiled site will output an error if your `config.toml` does not include your CodePen username (in the  `codePenUser` parameter). This is needed to construct the embed URL.
{{% /warning %}}

## jsBin

You can embed JS Bins just like CodePens, supplying a single `id` parameter.

{{<codeBlock>}}
&#x7b;{% jsBin juwowaq %}}
{{</codeBlock>}}

However, you can also have finer control over which panes are displayed. Use two parameters: one for the `id` and another, `show`,  listing the panes you want to include.

{{<codeBlock>}}
&#x7b;{% jsBin id="juwowaq" show="css,output" %}}
{{</codeBlock>}}

The options for the `show` parameter are:

* html
* css
* js
* console
* output

(Note that, under some circumstances, the `html` pane is added whether you select it or not.)

{{% jsBin id="juwowaq" show="css,output" %}}


## Inline demos

**Cupper** also supports the ability to write inline demos directly in markdown files. See {{% pattern "Writing inline demos" %}}.
