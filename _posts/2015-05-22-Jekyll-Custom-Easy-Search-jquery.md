---
layout: post
title: "Jekyll: Easy searching with JSON and jQuery"
date: 2015-05-22 21:34:21
categories:
- Tutorial
tags:
- Jekyll
- JSON
- jQuery
summary: Jekyll is a great tool to build web sites, unfortunately there is no built in search. This post will describe how to create one a basic search using JSON and jQuery.
status: post
type: post
published: true
author: Jennifer Tesolin
---

Jekyll is a great tool to build web sites, unfortunately there is no built in search. This post will describe how to create one a basic search using JSON and jQuery.<!--more-->

This search works great for users using your site to search (like the one above this post). Unfortunately, with this method, Google does not understand that this is a site search. If having your search show up in Google results, this may not be for you. 

### Step 1: Create search.json
There are quite a few methods to create a search.json file. For me, I wanted to use built in Jekyll methods (no plugins). For that, I based the code from [JSONify your Jekyll Site](http://jekyllsnippets.com/excluding-jsonify-your-site/) as well as other aspects of my site. The new code will look for attributes in my post like this sample from my drafts template: 

<script src="https://gist.github.com/jennifert/db65203ca69138aefd9b.js"></script>

Here is a sample of my final code. Pressing on the image will take you to the file in GitHub:

<script src="https://gist.github.com/jennifert/38c507876ee4459abeda.js"></script>

### Step 2: Update your HTML code

Next, we need to update the search form :

<script src="https://gist.github.com/jennifert/87d3263c84d6c0d537f8.js"></script>

### Step 3: Create your search.json page

Thirdly, we need to create a basic html page that basically has our title, and a div to hold the jQuery results. Here is the code:

<script src="https://gist.github.com/jennifert/96c00c28c41360c13350.js"></script>

### Step 4: Add the jQuery to your site

To query the search.json, I used jQuery's <code>getJSON</code> method. For this, you will need the below code first:

+ [Extend inArray to be case insensitive](http://stackoverflow.com/questions/3390930/any-way-to-make-jquery-inarray-case-insensitive)
+ [Get parameter by name](http://stackoverflow.com/questions/9501690/javascript-documentation-on-getparameterbyname)

#### Function 1:
<script src="https://gist.github.com/jennifert/f7fe005c96c5a48a7506.js"></script>

#### Function 2:
<script src="https://gist.github.com/jennifert/2464a76ee1a83da91534.js"></script>

This wrapped up the post on how to easily add a search to your Jekyll site.

### Resources

Below are other search alternatives, and built in jQuery code that helped in my development.

+ [Using Jekyll and GitHub Pages for Our Site](https://developmentseed.org/blog/2011/09/09/jekyll-github-pages/)
+ [Stack overflow: How do I loop through tags](http://stackoverflow.com/questions/11887929/how-do-i-loop-through-tags-in-a-jekyll-post)
+ [jQuery Full-Text Indexing on Jekyll](http://www.marran.com/tech/jquery-full-text-indexing-on-jekyll)
+ [Search a Jekyll Blog With Typeahead.js](http://danreev.es/posts/jekyll-search-with-typeahead/)
+ [JSONify your Jekyll Site](http://jekyllsnippets.com/excluding-jsonify-your-site/)