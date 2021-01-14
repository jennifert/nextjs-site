---
layout: post
title: 'Quick Tip: MySql Replace'
date: 2013-10-23 19:00:00
categories:
- Tutorial
tags:
- mySQL
summary: Perform a search and replace within a string from your mySQL statement instead on your code.
status: publish
type: post
published: true
---
<p>While looking for ways to improve my MySQL queries, I can across the REPLACE function.<!--more--></p>
<p><strong>Example code:</strong><br />
Select Statement:</p>
<code>
SELECT field1,
      REPLACE(yourstring, 'searchfor', 'stringtoreplacewith' ) AS field2,
      field3
FROM testdb
</code>
<p>Update Statement:</p>
<code>
UPDATE testDB2
SET aColumn = REPLACE (aColumn, 'searchfor', 'stringtoreplacewith')
WHERE id=1
</code>
<p>Hope this helps someone.</p>
<p><strong>References:</strong><br />
<a href="http://stackoverflow.com/questions/5956993/mysql-string-replace" target="_blank" rel="nofollow">Stackoverflow Post: MySQL string replace</a></p>
