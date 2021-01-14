---
layout: post
title: Bootstrap and asp.net 4.0 master pages
date: 2013-04-10 19:00:00
categories:
- Tutorial
tags:
- Bootstrap
- C#
- jQuery
- ASP.net
- javascript
summary: Working with bootstrap in master pages has issues out of the box. This post describes how to resolve issues in your master pages.
status: publish
type: post
published: true
---
<p>Working with bootstrap in master pages has issues out of the box. This post describes how to resolve issues in your master pages.<!--more--></p>
<p>After an extensive search for a demo that includes asp.net inside a master page, I came across a blog post at <a href="http://geekswithblogs.net/JeremyMorgan/archive/2012/09/18/how-to-use-twitter-bootstrap-on-an-asp.net-website.aspx" target="_blank" rel="nofollow">geekswithblogs.net</a>. However, the solution to use Resolve URL did not work correctly. After some debugging, I found a post at Stack overflow using <a href="http://stackoverflow.com/questions/12452109/asp-net-2012-unobtrusive-validation-with-jquery" target="_blank" rel="nofollow">Script Manager</a>. This finally allowed the jQuery and other scripts to work.</p>
<p>I have uploaded the code into my <a href="https://github.com/jennifert/Boostrap-ASP_Net-MasterPages" target="_blank" rel="nofollow"> Github Repository</a>, so hopefully someone will find this demo useful. I have also included the example from Twitter bootstrap called "<a href="http://twitter.github.io/bootstrap/examples/hero.html" target="_blank" rel="nofollow">Basic marketing site</a>".</p>
<p>Please note this example uses web forms, and C#.</p>