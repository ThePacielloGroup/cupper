+++
title = "Tested using..."
+++

When you're an inclusive designer, it's pertinent to do some testing. Following specs is one thing, but you need to verify that your component works okay for users.

**Cupper** provided a `tested` shortcode that lets you show which browsers and assistive technologies you've tried your design out in. Here's an example. Note the commas and "+" signs.

{{<codeBlock>}}
&#x7b;{% tested using="Firefox + JAWS, Chrome, Safari iOS + Voiceover, Edge" %}}
{{</codeBlock>}}

This outputs:

{{% tested using="Firefox + JAWS, Chrome, Safari iOS + Voiceover, Edge" %}}

The value for the `using` attribute follows a specific format: each testing setup is separated by a comma (with a space if you like, but it's not mandatory). If you want to add an assistive technology (or any other "add on") this needs to follow a "+". This additional part can be anything, like "A VR headset I borrowed", but there are only a few browser terms available. These are case sensitive, so you need to write them as below:

* Firefox
* Chrome
* Safari
* IE
* Edge
* Opera
* Chrome Android
* Firefox Android
* Safari iOS

Obviously, this is not a comprehensive list and more may be added over time. But it covers most of the main browsers for pairing with other software — at least for testing purposes.
