---
layout: post
title: Installing Node JS and Grunt (on Mountain Lion)
date: 2013-05-08 19:00:00
categories:
- Tutorial
tags:
- Grunt
- node js
summary: Node JS is a new generation of server side software. This tutorial focuses on installing the platform, and provides resources for using Grunt.
status: publish
type: post
published: true
---

<p>Node JS is a new generation of server side software. This tutorial focuses on installing the platform, and provides resources for using Grunt.<!--more--></p>
<div class="alert alert-danger" role="alert">
  <p><span class="fa fa-exclamation" aria-hidden="true"></span> <span class="sr-only">Warning:</span> This was originally from May 8, 2013 and is currently being re-written (this version will be removed once completed).</p><p>For the latest Gruntfile.js and Package.json, check out my <a href="https://github.com/jennifert/site-skeleton" target="_blank" rel="nofollow">site skeleton</a> at github.</p>
</div>
<p>Step 1: Download the latest stable binary from <a title="Node JS web site" href="http://nodejs.org/" target="_blank" rel="nofollow">nodejs.org</a>. At the time of writing its 0.10.5. For this tutorial, I just used the default settings.</p>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-9.48.27-PM.png"><img class="alignnone size-medium wp-image-169" alt="Image of Node Settings" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-9.48.27-PM-300x279.png" width="300" height="279" /></a></p>
<p>Step 2: Verify your path as per installer message: Make sure that <strong>/usr/local/bin</strong> is in your $PATH.</p>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-9.38.02-PM.png"><img class="alignnone size-medium wp-image-167" alt="Iage showing the path" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-9.38.02-PM-300x211.png" width="300" height="211" /></a></p>
<p>Note: I found this post useful: <a href="http://architectryan.com/2012/10/02/add-to-the-path-on-mac-os-x-mountain-lion/" target="_blank" rel="nofollow">architectryan.com/2012/10/02/add-to-the-path-on-mac-os-x-mountain-lion/</a>. Please note to check that the path in the installer is shown in case it differs between versions. For my install, the path was correctly set.</p>
<p><strong>GRUNT SET-UP</strong></p>
<p>Step 1: Installing Grunt on your machine globally.</p>
<p>This section uses grunt <em>0.4.x</em></p>
<p>This guide was made from referring to the official getting started documentation: <a href="http://gruntjs.com/getting-started" target="_blank" rel="nofollow">http://gruntjs.com/getting-started</a>. The sections referred to in this blog are: "<a href="http://gruntjs.com/getting-started#installing-the-cli" target="_blank" rel="nofollow" name="installing-the-cli">Installing the CLI</a>" and "<a href="http://gruntjs.com/getting-started#preparing-a-new-grunt-project" target="_blank" rel="nofollow" name="preparing-a-new-grunt-project">Preparing a new grunt project</a>". Grunt JS is installed by what node js refers to as NPM, or Node Package Manager. To install Grunt from NPM, you will need to use the command line.</p>
<p>Type following command into the terminal:</p>
<code>sudo npm install -g grunt-cli</code>
<p>Step 2: Create a package.json file</p>
<p>go into your project directory, and run the below command. You can use the default settings, as the text file will be edited. My output is below.</p>
<code>npm init</code>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-10.53.38-PM.png"><img class="alignnone size-medium wp-image-182" alt="run npm init" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-10.53.38-PM-300x158.png" width="300" height="158" /></a></p>
<p>Open your favourite text editor, and edit the file "package.json" replace the text so it reads similar to the below:</p>
<code>{<br>
  "name": "demo-project",<br>
  "version": "0.0.1",<br>
  "author": "Jennifer Tesolin"<br>
}</code>
<p>Now, using the terminal, run the below command in your project directory:</p>
<code>npm install grunt --save-dev<br>
npm install</code>
<p>This will install grunt into your locally in your package folder. If you open your package.json, you will find a new section added:</p>
<code>,<br>
"devDependencies": {<br>
    "grunt": "~0.4.1"<br>
 }</code>
<p><strong>Associating plugins with Grunt/package.json</strong></p>
<p>Run the below command to use the plugin npm.</p>
<code>npm install grunt-contrib --save-dev</code>
<p><strong>Create your grunt file</strong></p>
<p>In your text editor, create a file called "Gruntfile.js" and save this into your project directory. A sample copy is below:</p>
<code>module.exports = function(grunt) {<br>
<br>
  // Project configuration.<br>
  grunt.initConfig({<br>
<br>
  });<br>
<br>
  // Load call for plugins<br>
<br>
  // Default task(s).<br>
<br>
};</code>
<p>Check out the plugin's you can configure here: <a href="http://gruntjs.com/sample-gruntfile" target="_blank" rel="nofollow">http://gruntjs.com/sample-gruntfile</a>.</p>
<p><strong>Additional sources used</strong></p>
<p>For more grunt resources, check out the below.</p>
<p><a href="https://chrome.google.com/webstore/detail/grunt-devtools/fbiodiodggnlakggeeckkjccjhhjndnb?hl=en" target="_blank" rel="nofollow">Google Chrome Grunt dev tools.</a></p>
<p><a href="http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Grunt" target="_blank" rel="nofollow">A tutorial for getting started with Grunt</a> for plugin section.</p>
<p>"Developing with Grunt" by Dan Heberden (from jqueryTO conference): <a href="https://dl.dropbox.com/u/8471652/jqueryto-2013/Developing_with_Grunt_-_Dan_Heberden.m4a" target="_blank" rel="nofollow">Audio</a> | Slides.</p>
<p><a href="http://net.tutsplus.com/tutorials/javascript-ajax/meeting-grunt-the-build-tool-for-javascript/" target="_blank" rel="nofollow">Meet Grunt: The Build Tool for JavaScript</a></p>
<p><a href="http://dailyjs.com/2012/11/29/backbone-tutorial-1/" target="_blank" rel="nofollow">DailyJS: Backbone.js Tutorial: Build Environment</a></p>
