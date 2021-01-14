---
layout: post
title: Creating the Sticky footer with fixed navbar example with Bootstrap 3 using Emmet.IO
date: 2014-03-28 19:00:00
categories:
- Tutorial
tags:
- Bootstrap
- emmet
summary: A quick look at using Emmet.IO short codes to build a Bootstrap example page in a flash.
status: publish
type: post
published: true
---
<p>This post described how to use <a href="http://emmet.io/" target="_blank" rel="nofollow">Emmet</a> short codes to quickly create the bootstrap example: <a href="http://getbootstrap.com/examples/sticky-footer-navbar/" target="_blank" rel="nofollow">Sticky footer with fixed navbar</a> using Bootstrap 3.  Feel free to read and implement suggestions.<br />
<!--more--><br />
<small>
<p><em>In Sublime, select the Emmet code and press control + E (both Mac and PC)</em></p>
<p></small></p>
<p><strong>Step 1: Set up: Set up html, and body content, js</strong></p>
<p>A) Emmet Code</p>
<p><code>html:5&gt;(div.navbar.navbar-default.navbar-fixed-top&gt;div.container&gt;div.navbar-header&gt;btn:r.navbar-toggle&gt;span.sr-only{Toggle navigation}+span.icon-bar+span.icon+span.icon^a.navbar-brand{Welcome!}^div.collapse.navbar-collapse&gt;ul.nav.navbar-nav&gt;li*3&gt;a^li.dropdown&gt;a.dropdown-toggle{Dropdown }&gt;b.caret^ul.dropdown-menu&gt;li*3&gt;a^li.divider+li.dropdown-header{Nav Header}+li*3&gt;a^^^^^^^div.container&gt;div.page-header&gt;h1{Page Header Heer}^p.lead&gt;lorem^^div#footer&gt;div.container&gt;p.text-muted{Copy Right Info}^^script:src{js/jquery-1.11.0.min.js}+script:src{js/bootstrap.min.js})</code></p>
<p>Gist Location: <a href="https://gist.github.com/jennifert/9846832" target="_blank" rel="nofollow">https://gist.github.com/jennifert/9846832</a></p>
<p><small>
<p><em>Note: Could not find Emmet tag to define JavaScript source location, so just moved it between script tags. Please see step 8 at 1B below.</em></p>
<p></small></p>
<p>B) Fill in the missing items/editing places:</p>
<p>1) Add role=navigation to : navbar.navbar-default.navbar-fixed-top<br />
  2) At the toggle navigation &lt;button&gt; add: data-toggle=&quot;collapse&quot; data-target=&quot;.navbar-collapse&quot;<br />
  3) Add link # or otherwise at: navbar-brand<br />
  4) Add link, text and active item to: nav.navbar-nav remove<br />
  5) In same class as above but in dropdown dropdown-toggle, add data-toggle=&quot;dropdown&quot;<br />
  6) Edit h1 tag in: page-header class div<br />
  7) Update Copy right Info<br />
  8) Move js path that's between script tags to src=&quot;&quot;</p>
<p><strong>Step 2: Insert the rest of the header information</strong></p>
<p>A) Emmet Code: Place course on line under &lt;title&gt;...&lt;/title&gt;</p>
<p><code>meta:vp+link:favicon+meta:compat+link:css{css/bootstrap.min.css}+link:css</code></p>
<p>Gist Location: <a href="https://gist.github.com/jennifert/9846855" target="_blank" rel="nofollow">https://gist.github.com/jennifert/9846855</a></p>
<p>B) Edit the following items:<br />
  1) Favicon.ico if needed<br />
  2) Change ie=7 to ie=edge in meta tag.<br />
  3) In the style.css where you bootstrap is nested in, cut and paste the bootstrap style sheet in place of styles.css.<br />
  4) In between the updated bootstrap css and styles.css, paste your conditional comments.</p>
<p><code>&lt;!--[if lt IE 9]&gt;<br />
  &lt;script src=&quot;https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js&quot;&gt;&lt;/script&gt;<br />
  &lt;script src=&quot;https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js&quot;&gt;&lt;/script&gt;<br />
  &lt;![endif]--&gt;</code></p>
<p>5) In the file styles.css paste the bootstrap example styles from: http://getbootstrap.com/examples/sticky-footer-navbar/sticky-footer-navbar.css</p>
