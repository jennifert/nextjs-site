---
layout: post
title: jQuery time picker issues and .net
date: 2013-05-23 19:00:00
categories:
- Tip
tags:
- jQuery
- time picker
- ASP.net
- Javascript
summary: Issues with custom fields of JAvaScript time pickers in ASP.net and a way to resolve them.
status: publish
type: post
published: true
---
<p>Recently I was wrestling with an issue with a time picker plugin not firing my custom validator onChange event in Asp.net. Here's the problem and how it was resolved.<!--more--></p>

<p>The problem was that for some reason it did not like control to validate. As suggested by the below post, using a validation group in my custom validation solved the issue.</p>
<p><a href="http://stackoverflow.com/questions/8649565/do-not-fire-custom-validate-on-onchange-event-of-a-textbox" target="_blank" rel="nofollow">http://stackoverflow.com/questions/8649565/do-not-fire-custom-validate-on-onchange-event-of-a-textbox</a></p>