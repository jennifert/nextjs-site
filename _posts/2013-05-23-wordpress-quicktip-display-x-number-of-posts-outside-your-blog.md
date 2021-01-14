---
layout: post
title: 'WordPress Quick-tip: Display x number of posts outside your blog.'
date: 2013-05-23 19:00:00
categories:
- Tip
tags:
- wordpress
- PHP
summary: Describes how to display posts outside of the WordPress system.
status: publish
type: post
published: true
---
<p>Sometime, you want to display posts outside of WordPress. Here are some resources to help.<!--more--></p>
<p>From the <a href="http://codex.wordpress.org/Integrating_WordPress_with_Your_Website" target="_blank" rel="nofollow">Integrating WordPress in your Website</a> codex file, the first place you start is to include a WordPress header file:</p>
<code>&lt;?php<br>
define('WP_USE_THEMES', false);<br>
require('/the/path/to/your/wp-blog-header.php'); //found in the root of your WordPress install. <br>
?&gt;</code>
<p>If you are using a multi-site blog, you will also need to add the below under the include:</p>
<code>
switch_to_blog($blogID);
</code>
<p>From the codex, the quickest example of showing a postis the following code:</p>
<code>$posts = get_posts('numberposts=10&order=ASC&orderby=post_title');<br>
foreach ($posts as $post) : start_wp();<br>
the_date(); echo "&lt;br /&gt;";
the_title();<br>
the_excerpt();<br>
endforeach;</code>
<p>Using the <a href="http://codex.wordpress.org/Class_Reference/WP_Query" target="_blank" rel="nofollow">WPQuery</a> function, you can target the number of days to show. The codex has the example code:</p>
<code>// Create a new filtering function that will add our where clause to the query<br>
//from: http://codex.wordpress.org/Class_Reference/WP_Query#Time_Parameters<br>
$args = array(<br>
    'post_status' => 'publish'<br>
);<br>
function filter_where( $where = '' ) {<br>
	// posts in the last 30 days<br>
	$where .= " AND post_date > '" . date('Y-m-d', strtotime('-30 days')) . "'"; //change 30 to the number of days you want<br>
	return $where;<br>
}<br>
add_filter( 'posts_where', 'filter_where' );<br>
$query = new WP_Query( $args );<br>
remove_filter( 'posts_where', 'filter_where' );<br>

while ($query->have_posts()) {<br>
   $the_query->the_post();<br>
   echo '&lt;li&gt;' . get_the_title() . '&lt;/li&gt;';<br>
}
</code>
<p>Unfortunately, the number seemed to bit off. To fit it, I used the idea in the following post (<a href="http://stackoverflow.com/questions/9010693/wordpress-display-posts-newer-than-30-days" target="_blank" rel="nofollow">StackOverflow</a>) to add in my argument, -1.  Now, your same code should be similar to below:</p>
<code>//updated args<br>
$args = array(<br>
    'posts_per_page' => -1,<br>
     'post_status' => 'publish'<br>
);</code>
<p>Full source code:</p>
<code>&lt;?php<br>
define('WP_USE_THEMES', false);<br>
require('/the/path/to/your/wp-blog-header.php'); //found in the root of your WordPress install.<br>
switch_to_blog($blogID);<br>
//updated args<br>
$args = array(<br>
    'posts_per_page' => -1,<br>
     'post_status' => 'publish'<br>
);<br>
function filter_where( $where = '' ) {<br>
	// posts in the last 30 days<br>
	$where .= " AND post_date > '" . date('Y-m-d', strtotime('-30 days')) . "'"; //change 30 to the number of days you want<br>
	return $where;<br>
}<br>
add_filter( 'posts_where', 'filter_where' );<br>
$query = new WP_Query( $args );<br>
remove_filter( 'posts_where', 'filter_where' );<br>
<br>
while ($query->have_posts()) {<br>
   $the_query->the_post();<br>
   if (get_the_title()<>''){<br>
      echo get_the_title().'&lt;br /&gt;';<br>
   }<br>
}<br>
?&gt;</code>
<p>Other Resources:</p>
<p><a href="http://wordpress.stackexchange.com/questions/99265/display-posts-of-the-last-7-days" target="_blank" rel="nofollow">StackExchange post</a> <br /><a href="http://codex.wordpress.org/WPMU_Functions/switch_to_blog" target="_blank">Switch Blog in MultiSite</a></p>
