---
layout: post
title: 'Quick Tip: WordPress Development Tips'
date: 2014-01-20 19:00:00
categories:
- Tip
tags:
- php
- wordpress
summary: Some quick tips for developing in WordPress.
status: publish
type: post
published: true
---
<p><strong>1. Stop WordPress updater by ftp.</strong></p>
<p>As per the following post, "<a href="http://www.sixfive.com.au/2012/10/wordpress-needs-to-access-your-web-server-please-enter-your-ftp-credentials-to-proceed/" target="_blank" rel="nofollow">WordPress needs access to your web server</a>", you can prevent work press for asking for your ftp credentials when requesting an update.</p>
<p>Add the below lines to your wp.config.php file.</p>
<p><code><br />
....<br />
$method = 'direct';<br />
define('FS_METHOD','direct');</p>
<p>/* That's all, stop editing! Happy blogging. */<br />
...<br />
</code></p>
<p><strong>2. Fix any issues with your (or another) plugin</strong></p>
<p>There is a great plugin called "<a href="http://wordpress.org/extend/plugins/log-deprecated-notices/" target="_blank" rel="nofollow">Log Deprecated Notices</a>" that aids in WordPress development.</p>
<p>Just turn change WP_DEBUG to 'true" and download the latest version from the above link. Once installed, it will be under: Tools > Deprecated Calls.</p>
<p>The deprecated call and line number will be displayed, along with an alternative to fix.</p>
<p>Note: This was only performed on a development machine. It is only recommended to do the above in a development environment.</p>
