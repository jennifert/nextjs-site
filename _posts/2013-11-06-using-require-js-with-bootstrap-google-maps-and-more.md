---
layout: post
title: Using Require JS with Bootstrap, Google maps, and more
date: 2013-11-06 19:00:00
categories:
- Tutorial
tags:
- Bootstrap
- Google maps
- requirejs
- Javascript
summary: A way to integrate Google maps in a bootstrap framework which has been loaded by RequireJS
status: publish
type: post
published: true
---
<p>Require JS is a JavaScript file and module loader. Its a great tool for including JavaScript on your website.<!--more--></p>
<p>This post described how to move the previous Google Maps with bootstrap code into a 'config' file for use with require JS.</p>
<p><strong>Note: </strong><br />
Assumes the following directory structure:<br />
<a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/directory-structure.jpg"><img class="alignnone size-medium wp-image-466" alt="RequireJS Directory Structure" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/directory-structure-250x300.jpg" width="250" height="300" /></a></p>
<p>Works off previous Post: <a href="http://jenntesolin.com/blog/2013/11/05/bootstrap-3-and-google-maps/" target="_blank">Bootstrap 3 and Google Maps</a></p>
<p><strong>Step 1</strong>: Download the latest version (at the time of writing its 2.1.9)</p>
<code>http://requirejs.org/docs/download.html#requirejs</code>
<p><strong>Step 2</strong>: Download plugins from github<br />
Plugins are necessary to load items such as items from the Google api (maps, fonts, etc).</p>
<code>https://github.com/millermedeiros/requirejs-plugins/</code>
<p><strong>Step 3</strong>: Remove all current javascript, and replace with:</p>
<code>&lt;script data-main="js/config" src="js/require.js"&gt;&lt;/script&gt;</code>
<p>For the "data-main" use the path to the javascript config file, but do not add the ".js" extension.</p>
<p><strong>Step 4</strong>: create a file called config.js and place in js directory.<br />
The first part of the file is configuring the locations of the files your going to use:</p>
<p>Javascript files should be in the same directory as require.js and config.js. When referencing a path, do not add .js extension. The below is whats minimal for Google V3 with Bootstrap 3.</p>
<code>require.config({
paths: {
'jquery': 'http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.8.3',
'jquery.bootstrap': 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min',
'async': 'async',
'goog': 'goog',
'propertyParser' : 'propertyParser'
},
shim: {
'jquery.bootstrap': ['jquery']
}
});</code>
<p>Shims: will make sure jquery loads before bootstrap.</p>
<p><strong>Step 5</strong>: Require the items under your config</p>
<code>//require.config code from above here
require(['jquery','jquery.bootstrap','goog!maps,3,other_params:sensor=false'], function($) {
//jquery code will be moved here
});</code>
<p><strong>Step 6</strong>: Alter the jquery/bootstrap code to load maps in modal.</p>
<code>var myLatlng = new google.maps.LatLng(43.65644,-79.380686);

$(function() {

//start of modal google map
$('#mapmodals').on('shown.bs.modal', function () {
var mapOptions = {
center: myLatlng,
zoom: 14,
mapTypeControl: false,
center:myLatlng,
panControl:false,
rotateControl:false,
streetViewControl: false,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById("map_canvas"),
mapOptions);

var contentString = '&lt;div id="mapInfo"&gt;'+
'&lt;p&gt;&lt;strong&gt;Cineplex Odeon Yong &amp; Dundas&lt;/strong&gt;&lt;br&gt;'+
'Suite 402&lt;br&gt;10 Dundas Street East&lt;br&gt;' +
'Toronto, ON&lt;br&gt;'+
'P: (416) 977-9262&lt;/p&gt;'+
'&lt;a href="http://www.google.ca/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;ved=0CF4QFjAA&amp;url=http%3A%2F%2Fwww.cineplex.com%2FTheatres%2FTheatreDetails%2FCineplex-Odeon-Yonge-Dundas-Cinemas-formerly-AMC-.aspx&amp;ei=wVxnUdfWM8GtqgGc5YGoCQ&amp;usg=AFQjCNFrLpCFDXGjtGx6y1GSkSNvhdrMpA&amp;bvm=bv.45107431,d.aWM" target="_blank"&gt;Now Playing&lt;/a&gt;'+
'&lt;/div&gt;';

var infowindow = new google.maps.InfoWindow({
content: contentString
});

var marker = new google.maps.Marker({
position: myLatlng,
map: map,
title:"Cineplex Odeon Yong &amp; Dundas",
maxWidth: 200,
maxHeight: 200
});
google.maps.event.addListener(marker, 'click', function() {
infowindow.open(map,marker);
});

google.maps.event.addDomListener(window, 'load');
google.maps.event.trigger(map, "resize");
map.setCenter(myLatlng);
});
//end of modal google map
}); //end jquery functions</code>
<p><strong>Full demo:</strong><br />
View the full demo: <a href="http://jenntesolin.com/demos/requirejs.html" target="_blank">http://jenntesolin.com/demos/requirejs.html</a><br />
View the full config file: <a href="http://jenntesolin.com/demos/js/config.js" target="_blank">http://jenntesolin.com/demos/js/config.js</a><br />
View the source code: <a href="https://github.com/jennifert/JavaScript-Demos/tree/master/RequireJs" target="_blank">https://github.com/jennifert/JavaScript-Demos/tree/master/RequireJs</a><a title="Github url" href="https://github.com/jennifert/JavaScript-Demos/blob/master/RequireJs/requirejs.html" target="_blank"><br />
</a></p>
<p><strong>Resources:</strong><br />
<a href="http://requirejs.org" target="_blank" rel="nofollow">RequireJS Site</a><br />
<a href="http://requirejs.org/docs/why.html" target="_blank" rel="nofollow">Why use Web Modules</a><br />
<a href="http://blog.millermedeiros.com/requirejs-2-0-delayed-module-evaluation-and-google-maps/" target="_blank" rel="nofollow">How to load Google Maps with Require JS</a><br />
<a href="https://github.com/millermedeiros/requirejs-plugins" target="_blank" rel="nofollow">RequireJS Jquery Plugins</a></p>
