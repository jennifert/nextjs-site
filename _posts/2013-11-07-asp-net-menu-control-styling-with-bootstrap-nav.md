---
layout: post
title: Asp.net menu control - styling with bootstrap nav
date: 2013-11-07 19:00:00
categories:
- Tutorial
tags:
- Bootstrap
- ASP.net
summary: Styling a Bootstrap nav bar in ASP.net.
status: publish
type: post
published: true
---
<p>Thanks to an interesting post titled "<a href="http://techbrij.com/responsive-menu-twitter-bootstrap-asp-net" target="_blank" rel="nofollow">Responsive ASP.NET Menu Control With Twitter Bootstrap</a>", I was able to update the Bootstrap with master pages example with asp.net menu controls instead of being hard coded.<!--more--></p>
<p>For the menu control, you basically add the below code in lace of the div with "nav-collapse collapse". The menu in this code is based off the Bootstrap Example "<a href="http://getbootstrap.com/2.3.2/examples/hero.html">Basic marketing site</a>".</p>
<p>Here is a link to the <a href="https://github.com/jennifert/Boostrap-ASP_Net-MasterPages/blob/master/BootstrapASP.Master" target="_blank" rel="nofollow">raw code in GitHub</a>. It starts at line 43.</p>
<p>The one downside to the menu control is that the control will inject inline styles.  Also, to display the search form in the menu bar, use the code from the <a href="http://getbootstrap.com/2.3.2/components.html#navbar" target="_blank" rel="nofollow">bootstrap documentation</a>, then change the &lt;form&gt; to a &lt;span&gt;.</p>
<p>Before:</p>
<code>&lt;form class="navbar-search pull-left"&gt;
&lt;input type="text" class="search-query" placeholder="Search"&gt;
&lt;/form&gt;</code>
<p>After:</p>
<code>&lt;span class="navbar-search pull-left"&gt;
&lt;input type="text" placeholder="Search"&gt;
&lt;/span&gt;</code>
