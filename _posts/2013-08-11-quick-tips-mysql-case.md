---
layout: post
title: 'Quick tips: MySql Case'
date: 2013-08-11 19:00:00
categories:
- Tip
tags:
- mySQL
summary: mySQL case is like a switch statement. This tip describes how to use it.
status: publish
type: post
published: true
---
<p>One project I worked on had a table with different spellings  between English and French between an individual's title (masculine vs feminine in French). Since I did not want to spend too much time programming in the application itself, I came across the mysql 'case' function during research.<!--more-->:</p>
<code>Case When table1.Gender = 'Female' Then table1.ftitlesfr When table1.Gender = 'Male' Then table1.mtitlesfr End AS titlesfr</code>
<p>You the above in place of a field name as such:.</p>
<code>SELECT table1.name, table1, table1.titleen, Case When table1.Gender = 'Female' Then table1.ftitlesfr When table1.Gender = 'Male' Then table1.mtitlesfr End AS titlesfr FROM table1</code>
<p>Hope this helps someone else!</p>
