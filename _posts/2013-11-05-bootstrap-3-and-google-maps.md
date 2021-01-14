---
layout: post
title: Bootstrap 3 and Google Maps
date: 2013-11-05 19:00:00
categories:
- Tutorial
tags:
- Bootstrap
- Google maps
- Javascript
summary: There are changes in Bootstrap 3 that stops Google maps from displaying correctly in modals, or tabs.  New demos have been created to show to to utilize in your code.
status: publish
type: post
published: true
---
<p>There are changes in Bootstrap 3 that stops Google maps from displaying correctly in modals, or tabs.  New demos have been created to show to to utilize in your code.<!--more--></p>
<p>Single Map: <a href="http://jenntesolin.com/demos/single-map_bootstrap3.html" target="_blank">http://jenntesolin.com/demos/single-map_bootstrap3.html</a><br />
Multi-Map: <a href="http://jenntesolin.com/demos/multi-map_bootstrap3.html" target="_blank">http://jenntesolin.com/demos/multi-map_bootstrap3.html</a></p>
<p><a href="https://github.com/jennifert/JavaScript-Demos/tree/master/GoogleMaps/BootstrapV3" target="_blank">Download Code</a></p>
<p>To use in a tab, change the following:</p>
<code>$("#mapModal").on("shown.bs.modal", function () {</code>
<p>to</p>
<code>$("#mapTab").on("shown.bs.tab", function () {</code>
<p>Also, in the modal the "hide" class, as well as other changes as per Bootstrap Documentation.</p>
<p>Note:<br />
This is an update to the older post using <a href="http://jenntesolin.com/blog/2013/04/11/bootstrap-and-google-maps/" target="_blank">Bootstrap 2 with Google Maps</a>.</p>
<p>Resources:<br />
<a href="http://stackoverflow.com/questions/19741208/goole-maps-in-navbar-in-bootstrap-3" target="_blank" rel="nofollow">Google Maps in Navbar in Bootstrap 3</a><br />
<a href="http://getbootstrap.com/getting-started/" target="_blank" rel="nofollow">Bootstrap Documentation: V3</a><br />
<a href="http://getbootstrap.com/javascript/#modals" target="_blank" rel="nofollow">Bootstrap Documentation: Modals</a></p>
