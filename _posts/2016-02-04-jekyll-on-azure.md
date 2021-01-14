---
layout: post
title: "Configure Jekyll on Microsoft Azure or Github pages"
date: 2016-02-04 12:38:21
categories:
- Tutorial
tags:
- Jekyll
- Github Pages
- Azure
summary: This post describes how to use a Jekyll site with Microsoft Azure or Github Pages.

status: post
type: post
published: true
author: Jennifer Tesolin
---

Sometimes hosting can be expensive, and some reputable hosts have free but limited hosting. This post described how to configure Github pages and Microsoft Azure.<!--more--> 

Just a note before getting started, personally I use plugins with Jekyll, so I have 2 repositories: 1) For development (which I connect to Azure), and 2) For the live site (Github pages). This is because when using the built in Jekyll server my custom JSON/jQuery search does not work there. Also, azure does not allow domain names to be configured for free.

## GitHub Pages

If your using a custom/personal domain with Github pages, you will need a "CNAME" file. It should have your domain written like the below example.

<code>www.jenntesolin.com</code>

The Github pages are the best to follow for setting up, so please for the rest of Github Pages guide:

[https://pages.github.com/](https://pages.github.com/)

This walks you through with prompts and changes with your Github set-up.

## Azure

First, make sure you have a ".deployment" file pointing to your final complied website. If your using the basic Jekyll set-up, it would be:

<code>[config]<br>
project = _site</code>

[.deployment Gist Sample](https://gist.github.com/jennifert/24cae4c07a69fe6be9207b578b1c7e2b)

Also, I have a [web.config](https://gist.github.com/jennifert/27e1c3e587e64fb75149f1bb3b1b340c) file set up to read JSON, media and font file media types. Alternatively, you can check out this list of [common MIME types](http://www.serverintellect.com/support/iis/mime-types/).

To set-up your host, head on over to the [Azure site](https://azure.microsoft.com/en-us/free/) and click "Start now". This will bring you to a sign in page which will require you to sign up with your Microsoft Account (Outlook, Hotmail, etc.).

Next, follow the prompts to set up your free offer. Unfortunately, at the time of writing mine had already expired so I just clicked on the "Portal button".

From the left hand menu click "App services" to get to the screen to "Add". Now, enter in your web site name, and choose a server close to you. Once your information is entered, click "Create".

You will need to wait a bit for your host to be created, so maybe grab a coffee and come back. The new site will be on the dashboard. to see your server information click on the website name you created.

In this example, I am connecting to my Github account that I use for development. If you wish, you can always just configure FTP (and other things like programming versions of languages like .Net, PHP, etc.) by accessing it in your [panel](https://azure.microsoft.com/en-us/documentation/articles/web-sites-configure/).

Click on "Publishing" under "Continuous deployment" to set up your web application and it will being up various providers. Pick Github then follow the prompts to authorize Microsoft to access your Github account.

Next, select which repository you would like to connect to and click "OK". In this example, I chose my "jekyll-site" repository. Grab another coffee or give your email a quick check, as the two services will need a bit of time to connect and serve from the branch you connected to (in my case, I just chose "Master").

Finally, once its connected, check out the site at the URL provided.