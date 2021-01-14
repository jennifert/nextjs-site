---
layout: post
title: "Quick tip: Comparing integer variables using PHP"
date: 2016-06-14 19:00:21
categories:
- Tutorial
tags:
- php
summary: This post describes how to compare variables that have integers using PHP.

status: post
type: post
published: true
author: Jennifer Tesolin
---

This post describes how to compare variables that have integers using PHP.<!--more--> 

To properly compare variables in PHP, we are taking a look at the <code>intval</code> function. If you try to compare variables without this function, you can run into troubles, such as your script returning that they are <b>NOT</b> the same.

<code>
&lt;?php<br />
$a=5;<br />
$b='5';<br />
if (intval($a)==intval($b)){ <br />
	echo 'it's the same'; <br />
}<br />
?&gt;</code>

### Resources

<ul>
  <li><a href="http://php.net/manual/en/function.intval.php" target="_blank">intval Function on Php.net</a></li>
</ul>
