---
layout: post
title: "Jekyll: The configuration file"
date: 2015-08-08 10:00:00
categories:
- Tutorial
tags:
- Jekyll
- YAML
summary: The Jekyll configuration file houses important information for your site. This post highlights some items used in this site.
status: post
type: post
published: true
author: Jennifer Tesolin
---

The Jekyll configuration file houses important information for your site. This post highlights some options being used in this site, with a basic explanation of what it does.<!--more-->

This file has quite a few areas of editing, especially if you want to override some of the [default Jekyll options](http://jekyllrb.com/docs/configuration/#front-matter-defaults). Here is a [jekyll config sample](https://gist.github.com/jennifert/de156dc7b792a3f3a0e4b63aa66e768a) of my <code>_config.yml</code> from my GitHub repository. There are 3 main sections, which are explain in more detail below. 

### Site Settings

This section define what and where your site is.

+ title: This is usually your company name, etc.
+ description: is used to fill in the meta-tag for description.
+ baseurl: As the official docs put it "serves the site from specified URL". Do NOT include your host name.
+ url: the url of your blog
+ timezone: What time zone your in. Be sure to use a format such as: America/Toronto, or America/New_York.

### Build Settings

This section will tell Jekyll how to and what files to sue to generate your production site.

+ exclude:  this section tells Jekyll what not to include in your build. Format is: [file1, file2]
+ markdown: Which markdown flavor you will use with your site
+ markdown_ext:  file extensions you may use for markdown files.
+ permalink: what your website links will look like. For example: /blog/:year/:month/:day/:title/
+ paginate: how many articles do you want to see per page (as an integer number)
+ paginate_path: what site link format your paginated results will be. In format: "blog/page:num"


### Author information

This section is used to display information on the company/site owner using information such as name, email, twitter handle, Github repository, location, etc. The sub information must be 1 tab under "<code>author:</code>"

<code>author :
&nbsp;&nbsp;&nbsp;name : Jennifer Tesolin<br>
&nbsp;&nbsp;&nbsp;email : me@jenntesolin.com<br>
&nbsp;&nbsp;&nbsp;location : Toronto (Canada)<br>
&nbsp;&nbsp;&nbsp;github : jennifert<br>
&nbsp;&nbsp;&nbsp;twitter : jenntes</code>

### Issues encountered
Unfortunately, it seems like new elements can not be created and used in other files. For example, when converting this site to Jekyll, I was unable add other social network item I entered under the author section to then use the links in the footer include and humans.txt file.

### Additional information and elements

The [Configuration Docs](http://jekyllrb.com/docs/configuration/) from the Official JekyllRB site is a must read. They include a ton of useful information and other tags that you can use in your file.

### Bonus: Git ignore for Jekyll

Here is a sample of my git ignore file:

[.gitignore sample](https://gist.github.com/jennifert/cfb4991f5352c67f85291c1047817241)