---
layout: post
title: "Fix pagination after upgrading from Jekyll 2 to Jekyll 3"
date: 2015-10-28 6:58:21
categories:
- Tutorial
tags:
- Jekyll
summary: In Jekyll 3, pagination is deprecated. This post describes how to resolve the error if you upgraded Jekyll from an older version.

status: post
type: post
published: true
author: Jennifer Tesolin
---

In Jekyll 3, pagination is deprecated. This post describes how to resolve the error: "**Deprecation: You appear to have pagination turned on, but you haven't included the `jekyll-paginate` gem. Ensure you have `gems: [jekyll-paginate]` in your configuration file**." <!--more-->

First, make sure you have the gem installed by typing in your terminal:
<code>gem install jekyll-paginate</code>

Next, open <code>_config.yml</code>, add add the following line:

<code>gems :<br>
&nbsp;&nbsp;- jekyll-paginate</code>

Now, when you run <code>jekyll serve</code> or <code>jekyll build</code> the error message should no longer be there.