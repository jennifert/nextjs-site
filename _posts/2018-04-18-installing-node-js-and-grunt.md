---
layout: post
title: Installing Node JS and Grunt
date: 2018-04-18 19:00:00
categories:
- Tutorial
- Mac_Web
tags:
- Grunt
- Node JS
summary: An update to al older post with updated Node JS and Grunt docs and set-up files.
status: publish
type: post
published: true
---
<p>This tutorial focuses on installing the platform, and provides resources for using Grunt.<!--more--></p>
<p>
  <em>This was originally from May 8, 2013 and has been re-written for the latest version of Node and Grunt.</em>
</p>
<p>Step 1: Download the latest stable binary from <a title="Node JS web site" href="https://nodejs.org/en/download/" target="_blank" rel="nofollow">nodejs.org</a>. On production servers is recommended to use the latest STABLE version. The default settings will be fine.</p>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/nodejs-home.png"><img alt="NodeJS.com homepage" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/nodejs-home_thumb.png" border="0" /></a></p>
<p>Step 2: Verify your path as per installer message: Make sure that <strong>/usr/local/bin</strong> is in your $PATH.</p>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-9.38.02-PM.png"><img class="alignnone size-medium wp-image-167" alt="Installer screenshot after install is successful" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-9.38.02-PM-300x211.png" width="300" height="211" /></a></p>
<p>Note: I found this Stackoverflow post useful: <a href="https://stackoverflow.com/questions/42323485/set-environment-variables-on-mac-os-x-sierra#42323635" target="_blank" rel="nofollow">https://stackoverflow.com</a>. Please note to check that the path in the installer is shown in case it differs between versions. For my install, the path was correctly set.</p>
<p><strong>USE A PROXY WITH NODE</strong></p>
<p>If you require the use of a proxy with node, you set it with the below (this to this post <a href="https://jjasonclark.com/how-to-setup-node-behind-web-proxy/" target="_blank" rel="nofollow">How to setup Node.js and Npm behind a corporate web proxy</a>).</p>
<p><code>npm config set proxy http://proxy.example.org:8080<br>npm config set https-proxy http://proxy.example.org:8080</code></p>
<p><strong>GRUNT SET-UP</strong></p>
<p>Step 1: Installing Grunt on your machine globally.</p>
<p>This section uses grunt <em>0.4.x</em></p>
<p>This guide was made from referring to the official getting started documentation: <a href="http://gruntjs.com/getting-started" target="_blank" rel="nofollow">http://gruntjs.com/getting-started</a>. The sections referred to in this blog are: "<a href="http://gruntjs.com/getting-started#installing-the-cli" target="_blank" rel="nofollow" name="installing-the-cli">Installing the CLI</a>" and "<a href="http://gruntjs.com/getting-started#preparing-a-new-grunt-project" target="_blank" rel="nofollow" name="preparing-a-new-grunt-project">Preparing a new grunt project</a>". Grunt JS is installed by what node js refers to as NPM, or Node Package Manager. To install Grunt from NPM, you will need to use the command line.</p>
<p>Type following command into the terminal:</p>
<code>npm install -g grunt-cli</code>
<p>Step 2: Create a package.json file</p>
<p>go into your project directory, and run the below command. You can use the default settings, as the text file will be edited. My output is below.</p>
<code>npm init</code>
<p><a href="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-10.53.38-PM.png"><img class="alignnone size-medium wp-image-182" alt="run npm init" src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/Screen-Shot-2013-05-07-at-10.53.38-PM-300x158.png" width="300" height="158" /></a></p>
<p>Open your favorite text editor, and edit the file "package.json" replace the text so it reads similar to the below:</p>
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
<p>
  My current grunt file:<br />
  <a href="https://gist.github.com/jennifert/9037731119d3b7200bb17229822c4fb8" target="_blank" rel="nofollow">https://gist.github.com/jennifert/9037731119d3b7200bb17229822c4fb8</a>
</p>

<p><strong>Re-install devDependencies or dependencies</strong></p>
<p>With the new package.lock file, npm update may not get the latest version if its a major update. Use the below to pick up the latest package. With Thanks to stack overflow (please let me know if you see the post, it was deleted from my notes).</p>
<p><code>npm uninstall jshint<br>npm cache clean -f<br>npm install --save-dev jshint</code></p>
<p><strong>Resources, and Additional sources used</strong></p>
<p>For more grunt resources, check out the below.</p>
<p>
  <a href="https://tutsplus.com/tutorials/search/grunt" target="_blank" rel="nofollow">Tutsplus.com's How-to tutorials</a>
</p>
<p>
  <a href="https://www.sitepoint.com/?s=grunt" target="_blank" rel="nofollow">Sitepoint.com's How-to tutorials</a>
</p>
<p>
  <a href="https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt" target="_blank" rel="nofollow">A Simple Guide to Getting Started With Grunt ― Scotch</a>
</p>
<p><a href="https://chrome.google.com/webstore/detail/grunt-devtools/fbiodiodggnlakggeeckkjccjhhjndnb?hl=en" target="_blank" rel="nofollow">Google Chrome Grunt dev tools.</a></p>
<p><a href="http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Grunt" target="_blank" rel="nofollow">A tutorial for getting started with Grunt</a> for plugin section.</p>
<p><a href="http://net.tutsplus.com/tutorials/javascript-ajax/meeting-grunt-the-build-tool-for-javascript/" target="_blank" rel="nofollow">Meet Grunt: The Build Tool for JavaScript</a></p>
<p><a href="https://web.archive.org/web/20170606003354/http://dailyjs.com/post/backbone-tutorial-1" target="_blank" rel="nofollow">DailyJS: Backbone.js Tutorial: Build Environment</a></p>
