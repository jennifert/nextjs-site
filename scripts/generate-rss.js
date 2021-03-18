const fs = require("fs");
const globby = require("globby");
// import { SITE_DOMAIN, SITE_TITLE, COPYRIGHT, SITE_DESCRIPTION } from './lib/constants'
//TODO: figure out why vars are not being pulled in from lib constant (even when had require, or type modules)
const HOME_OG_IMAGE_URL = ''
const SITE_TITLE = 'JennTesolin.com'
const SEARCH_URL = '/search/'
const SITE_URL = 'https://jenntesolin-com-sff2s.ondigitalocean.app'
const SITE_AUTHOR = 'Jennifer Tesolin'
const ARTICLE_LICENSE = 'http://creativecommons.org/licenses/by-nc-sa/3.0/'
const SITE_DOMAIN = 'https://jenntesolin-com-sff2s.ondigitalocean.app'
const COPYRIGHT = `&copy; ${new Date().getFullYear()} Jennifer Tesolin.`
const SITE_DESCRIPTION = `${SITE_TITLE}'s website for beginners.`
const getDate = new Date().toUTCString();
// TODO: For posts: new Date(post.date).toUTCString(); Also, replace map with getting posts and pages from script

const generateFeed = async () => {
    const pages = await globby([
        'pages/**/*.js',
        '!pages/_*.js',
        '!pages/**/[id].js',
        '!pages/api',
        'posts/*.mdx'
    ])

    
    const RSS_FEED = `
      <?xml version="1.0" encoding="utf-8"?>
      <rss version="2.0">
        <channel>
            <title>${SITE_TITLE}</title>
            <link>${SITE_DOMAIN}</link>
            <description>${SITE_DESCRIPTION}</description>
            <pubDate>${getDate}</pubDate>
            <lastBuildDate>${getDate}</lastBuildDate>
            <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
            <atom:link href="${`${SITE_DOMAIN}/feed.xml`}" rel="self" type="application/rss+xml"/>
            <language>en</language>
            <copyright>${COPYRIGHT}</copyright>
          ${pages
            .map(page => {
                const path = page
                    .replace('pages', '')
                    .replace('.js', '')
                    .replace('.mdx', '')
            
                //TODO: get titles working
                const route = path === '/index' ? '' : path
                return `
                    <item>
                        <title>${route}</title>
                        <description></description>
                        <pubDate></pubDate>
                        <category></category>
                        <link>${SITE_DOMAIN}${route}</link>
                        <guid isPermaLink="true">${SITE_DOMAIN}${route}</guid>
                    </item>
                  `
            })
        .join('')}
        </channel>
      </rss>
  `
            /*
<title>{{ post.title | xml_escape }}</title>
                        <description>{{ post.content | xml_escape }}</description>
                        <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
                        <category>{{ tag | xml_escape }}</category>



<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>JennTesolin.com</title>
    <link>https://jenntesolin-com-sff2s.ondigitalocean.app</link>
    <description>JennTesolin.com's website for beginners.</description>
    <pubDate>Thu, 18 Mar 2021 20:48:21 GMT</pubDate>
    <lastBuildDate>Thu, 18 Mar 2021 20:48:21 GMT</lastBuildDate>
    <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
    <atom:link href="https://jenntesolin-com-sff2s.ondigitalocean.app/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en</language>
    <copyright>2021 Jennifer Tesolin.</copyright>
        <item>
            <title>Planning a vacation to Japan</title>
            <description>Planning a trip overseas, especially when you are a beginner at speaking a language can be tricky. Here is some information to get you started on planning a trip to Japan.</description>
            <pubDate>Thu, 08 Nov 2012 19:00:21 -0500</pubDate>
            <category>Travel</category>
            <link>https://jenntesolin-com-sff2s.ondigitalocean.app/blog/2012-11-08-japan-trip-2011</link>
            <guid isPermaLink="true">https://jenntesolin-com-sff2s.ondigitalocean.app/blog/2012-11-08-japan-trip-2011</guid>
        </item>
    </channel>
</rss>



            */
    fs.writeFileSync('public/feed.xml', RSS_FEED)

}
module.exports = generateFeed;