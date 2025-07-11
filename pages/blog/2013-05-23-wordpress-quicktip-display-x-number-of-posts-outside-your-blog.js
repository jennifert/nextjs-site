import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
<?php
define('WP_USE_THEMES', false);
require('/the/path/to/your/wp-blog-header.php'); //found in the root of your WordPress install.
?>;
`.trim();

const code2 = `
switch_to_blog($blogID);
`.trim();

const code3 = `
$posts = get_posts('numberposts=10&order=ASC&orderby=post_title');
foreach ($posts as $post) : start_wp();
the_date(); echo "<br>";
the_title();
the_excerpt
`.trim();

const code4 = `
$args = array(
    'post_status' => 'publish'
);
function filter_where( $where = '' ) {
	// posts in the last 30 days
	$where .= " AND post_date > '" . date('Y-m-d', strtotime('-30 days')) . "'"; //change 30 to the number of days you want
	return $where;
}<br>
add_filter( 'posts_where', 'filter_where' );
$query = new WP_Query( $args );
remove_filter( 'posts_where', 'filter_where' );

while ($query->have_posts()) {
   $the_query->the_post();
   echo '<li>' . get_the_title() . '</li>';
}
`.trim();

const code5 = `
//update args with:
$args = array(
    'posts_per_page' => -1,
     'post_status' => 'publish'
);
`.trim();

const code6 = `
<?php
define('WP_USE_THEMES', false);
require('/the/path/to/your/wp-blog-header.php'); //found in the root of your WordPress install.
switch_to_blog($blogID);

$args = array(
    'posts_per_page' => -1,
     'post_status' => 'publish'
);
function filter_where( $where = '' ) {
	$where .= " AND post_date > '" . date('Y-m-d', strtotime('-30 days')) . "'"; //change 30 to the number of days you want
	return $where;
}
add_filter( 'posts_where', 'filter_where' );
$query = new WP_Query( $args );
remove_filter( 'posts_where', 'filter_where' );

while ($query->have_posts()) {
   $the_query->the_post();
   if (get_the_title()<>''){
        echo '<li>' . get_the_title() . '</li>';
   }
}
?>;
`.trim();

export default function TipDisplayWordpress() {
    const POST_TITLE = 'WordPress Quick-tip: Display x number of posts outside your blog.';
    const POST_DESCRIPTION = 'Sometime, you want to display posts outside of WordPress. Here are some resources to help.';
   return (
      <Layout>
         <Head>
            <title>{`${POST_TITLE} - ${BLOG_TITLE} -  ${SITE_TITLE}`}</title>
         </Head>
         <section aria-labelledby="main-content">
            <h1 id="main-content">{POST_TITLE}</h1>
               <p>Sometime, you want to display posts outside of WordPress. Here are some resources to help.</p>
               
               <p>From the <a  className="underline focus:ring-2" href="http://codex.wordpress.org/Integrating_WordPress_with_Your_Website" rel="nofollow noreferrer">Integrating WordPress in your Website</a> codex file, the first place you start is to include a WordPress header file:</p>
            <PrismCode
                   code={code}
               language="php"
               plugins={["line-numbers"]}
               />
               <p>If you are using a multi-site blog, you will also need to add the below under the require:</p>
               <PrismCode
                   code={code2}
                   language="php"
                   plugins={["line-numbers"]}
               />
               <p>From the codex, the quickest example of showing a post is the following code:</p>
               <PrismCode
                   code={code3}
                   language="php"
                   plugins={["line-numbers"]}
               />
               <p>Using the <a  className="underline focus:ring-2" href="http://codex.wordpress.org/Class_Reference/WP_Query" rel="nofollow noreferrer">WPQuery</a> function, you can target the number of days to show. The codex has the example code:</p>
               <PrismCode
                   code={code4}
                   language="php"
                   plugins={["line-numbers"]}
               />
               <p>Unfortunately, the number seemed to bit off. To fit it, I used the idea in the following post (<a  className="underline focus:ring-2" href="http://stackoverflow.com/questions/9010693/wordpress-display-posts-newer-than-30-days" rel="nofollow noreferrer">StackOverflow: Display posts newer than 30 days</a>) to add in my argument, -1.  Now, your same code should be similar to below:</p>
               <PrismCode
                   code={code5}
                   language="php"
                   plugins={["line-numbers"]}
               />
               <p>Full source code:</p>
               <PrismCode
                   code={code6}
                   language="php"
                   plugins={["line-numbers"]}
               />
         </section>
      </Layout>
   )
}
