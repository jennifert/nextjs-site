---
layout: post
title: PHP and UTF8 encoding issues - Tips and tricks to resolve
date: 2013-05-25 19:00:00
categories:
- Tutorial
tags:
- php
- mySQL
- utf8
summary: Working with special characters can be a pain in php. Here are some tips to ease these difficulties.
status: publish
type: post
published: true
---
<p>Typically, having the proper character encoding on a page can be a bit of a pain, even if you have the right meta-tag. Here are some tips on how to ease the issue.<!--more--></p>
<p>1. <strong>Add the following to the top of your php page:</strong></p>
<code>ini_set('default_charset', 'UTF-8');
header('content-type: text/html; charset: utf-8');
mb_language('uni');
mb_internal_encoding('UTF-8');
</code>
<p>2. <strong>Database in MySQL</strong></p>
<p>Be sure that your databases in tables in mysql have a utf-8 correlation. This can be changed in phpMyAdmin under the options tab.</p>
<p>3. <strong>Make sure your MySQL query declares UTF-8</strong></p>
<code>if ($db = @mysql_connect($host, $username, $password)) {
		mysql_select_db($databasename, $db);
		mysql_set_charset("utf8");
		mysql_query('SET NAMES utf8');
//code here
}
</code>
<p>4. <strong>Make sure the php file is in UTF-8, not ASCII</strong></p>
<p>Text editors such as sublime, can convert the page to UTF-8 for you, as post editors (and IDE's) may actually use ASCII. To convert the file to UTF-8 in sublime Text, go to file > Save with encoding > UTF-8.</p>
