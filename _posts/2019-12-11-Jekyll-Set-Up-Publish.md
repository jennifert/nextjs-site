---
layout: post
title: "Jekyll: Setting up your development environment"
date: 2019-12-11 20:30:21
categories:
- Tutorial
- Mac_Web
tags:
- Jekyll
- WordPress
- Ruby
summary: A guide that describes how to set up the Jekyll static site generator on desktop.
status: post
type: post
published: true
author: Jennifer Tesolin
---
<p>
  Jekyll is a static site generator that runs on NodeJS. Its a great alternative to WordPress that eliminates the need for databases.<!--more-->
</p>
<p>
  <em>This post was originally written on March 17, 2015. It has been updated for Mac OS Catalina.</em>
</p>
<h3>Requirements</h3>
<ul>
  <li>
    <a href="/blog/2019/12/12/mac-ruby/">Ruby</a>
  </li>
</ul>

<h3>Install Jekyll dependencies:</h3>
<p>
  To install Jekyll, run the command:
</p>

<pre><code>gem install jekyll bundler</code></pre>

<p>
  You can import your current WordPress posts, by first exporting your entire Wordpress blog using the WordPress tool to Export to an XML file.
</p>

<p>
  Once your file is ready, you will need to install the Jekyll Importer by the below command:
</p>

<pre><code>gem install jekyll-import</code></pre>

<p>
  Here is a list of other plugins that may be useful in your blog:
</p>
<ul>
  <li>
    <a href="https://github.com/JesseHerrick/jekyll-angular" target="_blank"  rel="nofollow noreferrer noopener">jekyll-angular</a>
  </li>
  <li>
    <a href="https://github.com/jekyll/jekyll-feed" target="_blank"  rel="nofollow noreferrer noopener">jekyll-feed</a>
  </li>
  <li>
    <a href="https://jekyllrb.com/docs/pagination/" target="_blank"  rel="nofollow noreferrer noopener">jekyll-paginate</a>
  </li>
</ul>

<p>There is a list over on the <a href="https://jekyllrb.com/docs/plugins/" target="_blank" rel="nofollow noreferrer noopener">jekyll website</a> (separated by category).</p>

<h3>A new Jekyll instance</h3>

<p>
  <em>Skip to next section to import your WordPress blog.</em>
</p>

<p>
  First, run the the below command, replacing "my-site-name" with the folder name for your site.
</p>

<pre><code>jekyll new my-site-name<br />cd my-new-site-name<br />bundle exec jekyll serve</code></pre>

<p>
  Sample output for running <code>jekyll new my-site-name</code>.
</p>
<img src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/jekyll-new-cmd1.png" target="Terminal output for commands to serve site" />

<p>
  Jekyll will now generate a site in the folder "<code>my-site-name</code>".
</p>
<p>
  To override the default jekyll theme, you will need ot create two folders as seen in the list below. These are <code>assets</code>, <code>sass</code>, <code>_includes</code> and <code>_layouts</code>. For more information check out <a href="https://jekyllrb.com/docs/themes/#overriding-theme-defaults"  target="_blank" rel="nofollow noreferrer noopener">overriding theme defaults</a>.
</p>
<ul>
  <li>
    <code>_config.yml</code> stores the website configuration data such as site name, description and base address. Check out <a href="https://gist.github.com/jennifert/de156dc7b792a3f3a0e4b63aa66e768a" target="_blank" rel="nofollow noreferrer noopener">my sample config file</a>.
  </li>
  <li>
    <code>_posts</code> is where posts for your site are stored in markdown or HTML format. Check out <a href="https://gist.githubusercontent.com/jennifert/896428b15cd586f91fd36872a0bff1d5/raw/acedbfb817fb90e6ce0fb713043edae79c93f448/jekyll-post.markdown" target="_blank"  rel="nofollow noreferrer noopener">my sample post formatting</a>.
  </li>
  <li>
    <code>_sites</code> This is where the pages will be built into for your production build.
  </li>
  <li>
    <code>about.md</code> is the about page for your site.
  </li>
  <li>
    <code>feed.xml</code> will have your rss feed. This generates on its own.
  </li>
  <li>
    <code>index.md</code> your site's main page.
  </li>
  <li>
    <code>404.html</code> your sites "page not found" file.
  </li>
  <li>
    <code>gemfile</code> a list of ruby plugins installed
  </li>
  <li>
    <code>assets</code> where you can store your js and other files
  </li>
  <li>
    <code>sass</code> your sass code
  </li>
  <li>
    <code>_includes</code> is where you store portions of a file such as your menu, header, footer, and analytics code.
  </li>
  <li>
    <code>_layouts</code>puts the pieces of the includes together for a post, page and index file.
  </li>
</ul>

<pre><code>cd my-site-name<br>bundle exec jekyll serve</code></pre>

<p>
  Then, browse to: <a href="http://localhost:4000" target="_blank" rel="nofollow noreferrer noopener">http://localhost:4000</a>.  You can edit files, and Jekyll will make those updates behind the scene as soon as you save...just refresh to see your changes.
</p>

<p>
  Below is what the directory will look like in the terminal, as well as the ouput running the <code>serve</code>command to preview your site locally:
</p>
<img src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/jekyll-new-cmd2.png" alt="Jekyll serve command terminal output" />

<h3>WordPress Import instructions (wordpress.com and self hosted)</h3>
<p>
  Click one of the links below to check out the awesome docs at Jekyll RB.
</p>

<ul>
  <li>
    <a href="http://import.jekyllrb.com/docs/wordpressdotcom/" rel="nofollow noreferrer noopener" target="_blank">Jekyll Import Docs: Wordpress.com</a>
  </li>
  <li>
    <a href="http://import.jekyllrb.com/docs/wordpress/" rel="nofollow noreferrer noopener" target="_blank">Jekyll Import Docs: Wordpress (self install)</a>
  </li>
</ul>

<h3>Drafts</h3>

<p>
  To wok on a post locally, but not moving it live, create a folder at the root called <code>_drafts</code>. Next, add a markdown or html file without the address. Finally, run the below in your terminal:
</p>

<pre><code>bundle exec jekyll serve --drafts</code></pre>

<img src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/jekyll5.png" alt="Terminal screen output showing draft folder">

<p>
  Changes can be made on the fly using this method as well. When ready to publish, move the file to <code>_posts</code> and add a date.
</p>

<h3>Publishing your new site</h3>

<p>
  The last step is in this process is to push your files on-line. First, instead of <code>jekyll serve</code> you will want to run <code>jekyll build</code> like below. This replaces all of your development links with what your production link. <a href="/blog/2015/08/08/jekyll-config-file/">Check out how to set your configuration.</a>
</p>

<pre><code>bundle exec jekyll build</code></pre>

<p>
  Move into the root of <code>_site</code>. These are the production ready files that should be moved to your server.
</p>

<p>
  The first chunk of files below shows the root of my Jekyll site, while the second shows the production ready files. Note that some files from the root of the Jekyll site are not included. These are excluded in <code>_config.yml</code>
</p>

<img src="https://jenntesolin.nyc3.digitaloceanspaces.com/blog/jekyll-build-cmd.png" alt="Terminal screen output showing production folder contents">

<p>
  Note that if you use GitHub pages, you will need to compile the files on your computer first  then commit your files to the master branch.
</p>

<h3>Resources</h3>

<p>
  Check out these Jekyll tutorials for more on working with the Jekyll static site generator:
</p>

<ul>

  <li>
    <a href="/blog/2016/02/04/jekyll-on-azure/">Configure on Azure or Github Pages</a>
  </li>
  <li>
    <a href="/blog/2015/08/08/jekyll-config-file/">The configuration file</a>
  </li>
  <li>
    <a href="/blog/2015/10/28/fix-jekyll-pagination-upgrade-to-3/">Fix pagination after upgrading (V2 to V3)</a>
  </li>
  <li>
    <a href="/blog/2015/05/22/Jekyll-Custom-Easy-Search-jquery/">Easy searching with JSON and jQuery</a>
  </li>
  <li>
    <a href="http://stackoverflow.com/a/4920620" target="_blank" rel="nofollow noreferrer noopener">Jekyll on Stack Overflow</a>
  </li>
  <li>
    <a href="http://import.jekyllrb.com/docs/wordpressdotcom/" rel="nofollow noreferrer noopener" target="_blank">Jekyll Import Docs: Wordpress.com</a>
  </li>
  <li>
    <a href="http://import.jekyllrb.com/docs/wordpress/" rel="nofollow noreferrer noopener" target="_blank">Jekyll Import Docs: Wordpress (self install)</a>
  </li>
  <li>
    <a href="http://jekyllrb.com/docs/drafts/" rel="nofollow noreferrer noopener" target="_blank">Jekyll Docs - Working with drafts</a>
  </li>
  <li>
    <a href="http://jekyllrb.com/docs/troubleshooting/#installation-problems" rel="nofollow noreferrer noopener" target="_blank">Jekyll Docs - Installation Problems</a>
  </li>
</ul>
