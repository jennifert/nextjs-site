---
layout: post
title: Removing cData from YQL queries
date: 2014-03-29 19:00:00
categories:
- Tutorial
tags:
- yql
summary: How to use the feed normalizer table to parse ccData in YQL queries. *YQL Decommissioned
status: publish
type: post
published: true
---
<p>When pulling data from xml items using YQL and getJSON, your application will unfortunately not parse tags that have cdata. This post describe show to use the <a href="http://www.yqlblog.net/blog/category/tutorial/" target="_blank" rel="nofollow">feed normalizer table</a> to call all elements including those with cdata. *YQL Decommissioned</p>
<p><!--more--></p>
<h3>YQl Feed Normalizer</h3>
<p>To use this table in my application, I worked off of the second example given on the YQL blog entry:<br />
<code><br />
SELECT * FROM feednormalizer<br />
WHERE url='<strong>http://rss.news.yahoo.com/rss/topstories</strong>'<br />
AND output='<strong>atom_1.0</strong>'<br />
</code><br />
<small>Note: the portion in bold beside the url is where your atom feed will go. Here is a list of valid outputs for the second bold portion:</small><br />
<code><small>'rss_0.91N'|'rss_0.93'|'rss_0.92'|'rss_1.0'|'rss_0.94'|'rss_2.0'|'rss_0.91U\rss_0.9'|'atom_1.0'|'atom_0.3'</small></code></p>
<h3>Final Code</h3>
<p>Now, I added limit after the output field, and replaced * with the fields I wanted. The bold portions are the portions I personalized for my site.</p>
<p><strong>YQL :</strong><br />
<code>SELECT <strong>entry.title,entry.link.href,entry.published,entry.category.term,entry.summary</strong> FROM feednormalizer WHERE url= &quot;<strong>http://jenntesolin.com/blog/feed/atom/</strong>&quot; AND output=&quot;<strong>atom_1.0</strong>&quot; <strong>LIMIT 1</strong></code></p>
<p><strong>The full javaScript:</strong></p>
<p><code>//declare vars<br />
  var blogLink = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('SELECT entry.title,entry.link.href,entry.published,entry.category.term,entry.summary FROM feednormalizer WHERE url= &quot;http://jenntesolin.com/blog/feed/atom/&quot; AND output=&quot;atom_1.0&quot; LIMIT 1')+'&amp;format=json&amp;diagnostics=false&amp;callback=?';<br />
  //end variable declare</p>
<p>jQuery.noConflict();<br />
  jQuery(document).ready(function($){</p>
<p> //Call blog feed<br />
$.getJSON(blogLink, function(data){<br />
  //get data<br />
  var title =data.query.results.feed.entry.title.content;<br />
  var link =data.query.results.feed.entry.link.href;<br />
  var category =data.query.results.feed.entry.category.term;<br />
  var published=data.query.results.feed.entry.published;<br />
  var summary =data.query.results.feed.entry.summary.content;</p>
<p> //display<br />
  $('.blog-header').html(title);<br />
  $('.blog-summary').html(summary);<br />
  $('.blog-date').html(published);<br />
  $('.blog-category').html(category);<br />
  $('.blog-link').html('&lt;a href=&quot;'+link+'&quot; target=&quot;_blank&quot;&gt;Read more&lt;/a&gt;');<br />
  });<br />
  //end blog feed<br />
  });</code></p>
<p><strong>HTML Bootstrap 3.1 code</strong></p>
<p><code>&lt;!-- Blog --&gt;<br />
&lt;div class=&quot;row&quot;&gt;<br />
&lt;div class=&quot;col-md-12&quot;&gt;<br />
&lt;h1 class=&quot;blog-header&quot;&gt;&lt;/h1&gt;<br />
&lt;p class=&quot;blog-summary&quot;&gt;&lt;/p&gt;<br />
&lt;div&gt;<br />
&lt;span class=&quot;badge blog-date&quot;&gt;&lt;/span&gt;<br />
&lt;div class=&quot;pull-right&quot;&gt;<br />
&lt;span class=&quot;label label-default blog-category&quot;&gt;&lt;/span&gt;<br />
&lt;span class=&quot;label label-primary blog-link&quot;&gt;&lt;/span&gt; <br />
&lt;/div&gt; <br />
&lt;/div&gt;<br />
&lt;/div&gt;<br />
&lt;/div&gt;<br />
&lt;!-- /.Blog --&gt;</code></p>
<p><strong>Resources</strong><br />
<a href="http://www.yqlblog.net/blog/category/tutorial/" target="_blank" rel="nofollow">YQL Feed Normalizer Table</a><br />
<a href="https://github.com/jennifert/JavaScript-Demos/blob/master/YQL/cdata_blog_example.html" target="_blank" rel="nofollow">Code on GitHub</a><br />
<a href="/demos/cdata_blog_example.html" target="_blank" rel="nofollow">View demo</a></p>
