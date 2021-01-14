---
layout: post
title:  "Moving a WordPress blog"
date:   2014-09-24 19:00:00
categories:
- Tutorial
tags:
- wordpress
- jekyll
- php
summary: Various ways to move WordPress - for example between hosts or to Jekyll.
status: publish
type: post
published: true
---
This post will describe various ways to move WordPress, either to a different server or to Jekyll. <!--more-->

## Steps to make an exact copy

This includes all plugins, theses, posts, etc.

- download a copy of the database and save somewhere. Make a copy as a backup.
- do a search in the sql file for the current domain URL and replace with the new domain or 'localhost'
- update the site location in the wp-config file.
- import the MySQL database and add the user at the new location.
- upload your WordPress files and test.

I have tried other various methods including web applications, but those have caused problems such as not completely disconnecting the databases. In one instance WordPress core upgrade to the copied version, had also upgraded the first one as well.

## The safest way to move (but not exact)

- download a copy of your themes, and plugins
- download an export of your post files. If your using a multi-site, you will need to do this for each blog.
- download a fresh copy of WordPress, and set up your plug-ins and themes.
- import posts, map users making sure to check the box to download linked media.

## Moving to Jekyll

Check out my latest blog post for an in-depth look at moving to Jekyll.

[Jekyll: Setting up your development environment](/blog/2015/03/17/Jekyll-Set-Up-Publish/)
