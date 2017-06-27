+++
title = "Installation"
+++

**Infusion** is built using the static site engine, [Hugo](https://gohugo.io/), and NPM. The codebase is available to download on Github. Let's get set up step-by-step.

## 1. Install Hugo

First we need to install Hugo globally.

### OSX users

If you are a Mac user and have [Homebrew](https://brew.sh/) on your system, installing Hugo is simple:

{{<cmd>}}brew install hugo{{</cmd>}}

Alternatively, you can manually [install Hugo from a package](https://github.com/gohugoio/hugo/releases). You can verify the installation was successful by typing:

{{<cmd>}}hugo version{{</cmd>}}

### Windows users

Installing on Windows is a bit more involved than on OSX. The authors of Hugo provide [a guide](https://gohugo.io/tutorials/installing-on-windows/) with instructions for technical and less technical users.

## 2. Install Node & NPM

It is entirely likely you already have Node and NPM installed on your system. If so, you can skip this step. Otherwise, [refer to NPM's own guide](https://docs.npmjs.com/getting-started/installing-node), which includes a video tutorial.

## 3. Getting the files

**Infusion** is hosted on Github. To start using it, you'll need to get the files from there. If you are comfortable with the command line, just fork the [github.com/heydon/inclusive-pattern-library](https://github.com/heydon/inclusive-pattern-library) repository, then do a `git clone` to your local system. Replace `[your username]` in the following:

{{<cmd>}}git clone https://github.com/[your username]/infusion-builder.git{{</cmd>}}

If the command line is not your thing, fork  [github.com/heydon/inclusive-pattern-library](https://github.com/heydon/inclusive-pattern-library) in the browser and choose **Open in Desktop** from **Clone or download** (see figure 1, below).

{{% figure caption="The Github web interface" %}}
![The open in desktop option, revealed when clicking clone or download](/images/open_in_desktop.png)
{{% /figure %}}

{{% note %}}
If you do not have a version of the Github desktop client installed, follow the prompts after clicking **Open in Desktop**.
{{% /note %}}

Once you have your local copy of the files, move to the root of that folder and in your terminal run an npm installation:

{{<cmd>}}npm install{{</cmd>}}

Now it's time to consult the {{% patternLink "Library setup" %}} pattern.
