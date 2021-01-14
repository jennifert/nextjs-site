---
layout: post
title: 'Quick Tip: MySQL Concat'
date: 2013-08-26 19:00:00
categories:
- Tutorial
tags:
- mySQL
summary: How to join two mySQL table columns in a query instead of your programming language.
status: publish
type: post
published: true
---
<p>While working on a project, I was looking for a way to join to mysql columns without using php or .net. This function is called 'concat' and allows you to join together 2 columns as one.</p>
<p><!--more--></p>
<p>Here is the code:</p>
<p><code>SELECT CONCAT(firstname, ' ', lastname) As fullname FROM table1 ....</code></p>
<p>Hope it helps someone.</p>
