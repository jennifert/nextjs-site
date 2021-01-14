---
layout: post
title: 'Quick Tip: WordPress and Campaign Monitor'
date: 2017-01-06 17:30:30
categories:
- Tip
tags:
- wordpress
- PHP
summary: Campaign monitor can be integrated into WordPress. This post explains how to add a subscription form and auto email
status: post
type: post
published: true
author: Jennifer Tesolin
---
<p>Just a quick and easy way to integrate your campaign monitor list. Note: this post first appeared Apr 18, 2013, and has been updated to reflect the most recent information.<!--more--></p>
<h3>Adding a subscribe form to your site</h3>
<p>The easiest way, is to use the WordPress text widget, and then paste in the campaign monitor built form code into it. To get a form, go to your list in campaign monitor, and click "Grow your audience". Next, click "Copy/paste a form to your site". Select the list(s) that you want, and then click generate code.  This will provide the form code to put into your blog. You can later customize the settings like confirmation, thank you note, etc.</p>
<h3>E-mail subscribers</h3>
<p><b>Campaign Monitor automation (suggested)</b></p>
<p>When this post was first typed out, the "automation" functionality was not yet in Campaign Monitor. The Automation functionality in Campaign Monitor can read and parse RSS feeds. First, make sure to add the "<a href="https://www.campaignmonitor.com/create/rss-to-email/" target="_blank" rel="nofollow">RSS to Email"</a> tags into your template, and <a href="https://help.campaignmonitor.com/topic.aspx?t=868" target="_blank" rel="nofollow">create your list</a> (as you normally would). Next <a href="https://help.campaignmonitor.com/topic.aspx?t=212" target="_blank" rel="nofollow">follow Campaign Monitor's guide</a> for email automation, using the list and template mentioned earlier. That's it!</p>
<p>This way is suggested, as its using the Campaign monitor directly, and you are not adding bulk to your theme files and site.</p>
<p><b>Older way (not suggested)</b></p>
<p>Add the <a title="Campaign Monitor Wrapper for PHP" href="http://campaignmonitor.github.io/createsend-php/" target="_blank" rel="nofollow">api wrapper</a> into the themes directory for you to be able to access the functionality. Next, use the "create a draft campaign" and "Sending a draft campaign to send an email. This code should go into your functions.php file like below:</p>
<code>function email_alert()  {<br>
    //campaign monitor code<br>
}<br>
add_filter ( 'publish_post', 'email_alert' );</code>
<p>Resource:</p>
<p><a href="http://wordpress.org/support/topic/add_action-with-publish_post" target="_blank" rel="nofollow">Wordpress.org support: Publish actions</a></p>
