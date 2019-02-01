+++
title = "File trees"
+++

Representing folder/file structures is simple and accessible in **Cupper**. Which is just as well, because some components may need to conform to a certain folder structure.

The file tree is described using a markdown nested list structure:

{{<codeBlock>}}
&#x7b;{% fileTree %}}
* Level 1 folder
    * Level 2 file
    * Level 2 folder
        * Level 3 file
        * Level 3 folder
            * Level 4 file
        * Level 3 folder
            * Level 4 file
            * Level 4 file
        * Level 3 file
    * Level 2 folder
        * Level 3 file
        * Level 3 file
        * Level 3 file
    * Level 2 file
* Level 1 file
&#x7b;{% /fileTree %}}
{{</codeBlock>}}

This is drawn in the following fashion, but preserves the underlying nested list structure for assistive technologies such as screen readers:

{{% fileTree %}}
* Level 1 folder
    * Level 2 file
    * Level 2 folder
        * Level 3 file
        * Level 3 folder
            * Level 4 file
        * Level 3 folder
            * Level 4 file
            * Level 4 file
        * Level 3 file
    * Level 2 folder
        * Level 3 file
        * Level 3 file
        * Level 3 file
    * Level 2 file
* Level 1 file
{{% /fileTree %}}

{{% warning %}}
The only reliable way to nest unordered lists in markdown is to indent the nested item by exactly four spaces. Using tabs or less than four spaces are unreliable methods.
{{% /warning %}}
