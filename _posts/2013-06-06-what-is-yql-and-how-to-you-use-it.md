---
layout: post
title: What is YQL and how to you use it
date: 2013-11-08 19:00:00
categories:
- Tutorial
tags:
- jquery
- javascript
- YQL
summary: YQL refers to the Yahoo Query Language - the SQL like language to query and filter across services. This post described how to get started (YQL Decommissioned).
status: publish
type: post
published: true
---
<p>Yahoo Explains yql as: "an expressive SQL-like language that lets you query, filter, and join data across Web services. With YQL, <i>apps run faster with fewer lines of code and a smaller network footprint.</i>". *YQL Decommissioned <!--more--></p>
<p>To get your feet feet with YQL, surf to the <a href="http://developer.yahoo.com/yql/console/" target="_blank" rel="nofollow">YQL Console</a>. From here you can test queries and see the resulting rest Query (also listed on the developer console, are pre-made requests from other Yahoo services such as flicker).</p>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-06-06-at-7.37.37-PM.png"><img class="alignnone size-medium wp-image-259" alt="Screen Shot 2013-06-06 at 7.37.37 PM" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-06-06-at-7.37.37-PM-293x300.png" width="293" height="300" /></a></p>
<p>In the "Your YQL statement" box, remove "Show tables" and type the below:</p>
<code>select * from rss where url ="http://rss.cbc.ca/lineup/technology.xml"</code>
<p>In the text area beside the JSON radio button, replace “cbfunc” with “?” and uncheck Diagnostics. Once this is completed, click “TEST”. Copy the rest query from the "Rest Query" text input field. For the above example, my rest query is:</p>
<code>http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%22http%3A%2F%2Frss.cbc.ca%2Flineup%2Ftechnology.xml%22&amp;format=json&amp;callback=?</code>
<p>Note: the rest query has a secure option. Just change "http" to "https".</p>
<p>A screenshot of the output is below:</p>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-06-06-at-7.50.04-PM.png"><img class="alignnone size-medium wp-image-261" alt="Image of YQl console with results" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-06-06-at-7.50.04-PM-233x300.png" width="233" height="300" /></a></p>
<p><strong>The jQuery Call</strong></p>
<p>The entire call can be fount in the following GIST:</p>
<script src="https://gist.github.com/jennifert/285154cbb71c1911b94f.js"></script>
<p>Here is a link to my <a href="https://github.com/jennifert/JavaScript-Demos/tree/master/YQL" target="_blank" rel="nofollow">latest YQL Demos</a></p>
<p>Last note: When using jQuery, date functions do not work cross browser. For these functions, please consider using a library such as <a href="http://momentjs.com/" target="_blank" rel="nofollow">Moment.js</a>.</p>
<p>Resources:</p>
<p><a href="http://en.wikipedia.org/wiki/Yahoo_query_language" target="_blank" rel="nofollow">Wikipedia Page</a><br />
<a href="http://developer.yahoo.com/yql/" target="_blank" rel="nofollow">YQL Developers Site</a><br />
<a href="http://developer.yahoo.com/yql/console/" target="_blank" rel="nofollow">YQL Console</a><br />
<a href="http://developer.yahoo.com/yql/guide/select_statement.html" target="_blank" rel="nofollow">DEVELOPER's Guide</a><br />
<a href="http://net.tutsplus.com/tag/yql/ " target="_blank" rel="nofollow">NetTuts+ resources</a><br />
<a href="http://www.ibm.com/developerworks/views/web/libraryview.jsp?search_by=cross+domain+with+JSONP" target="_blank" rel="nofollow">IBM examples</a><br />
<a href="http://api.jquery.com/jQuery.getJSON/ " target="_blank" rel="nofollow">JQuery getJson</a><br />
<a href="http://api.jquery.com/jQuery.noConflict/" target="_blank" rel="nofollow">More on noConflict</a></p>
