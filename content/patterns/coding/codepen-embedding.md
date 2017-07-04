+++
title = "CodePen embedding"
weight = 2
+++

Sometimes just pictures of the pattern you're documenting aren't enough. Interactive patterns benefit from live demos, so that readers can test their functionality.

**Infusion** offers a couple of ways to do this. The first is by embedding CodePen demos into the content. The `codePen` shortcode takes just one argument: the codePen's `ID`.

{{<codeBlock>}}
&#x7b;{% codePen VpVNKW %}}
{{</codeBlock>}}

This will embed the identified codePen into the content wherever you placed the shortcode, with the result view showing by default:

{{% codePen VpVNKW %}}

{{% warning %}}
The compiled site will output an error if your `config.toml` does not include your CodePen username (in the  `codePenUser` parameter). This is needed to construct the embed URL.
{{% /warning %}}

**Infusion** also supports the ability to write inline demos directly in markdown files. See {{% pattern "Writing inline demos" %}}.
