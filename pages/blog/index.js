import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function Blog() {
    return (
        <Layout>
            <Head>
                <title>{BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{BLOG_TITLE}</h1>
                <p>All blog posts are visible in this page separated by category. Check out the <Link href="/series" className="underline focus:ring-2">series</Link> page to show step by step how to set up a development environment.</p>
                <h2>Apple</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2016-06-12-itunes-view-change"
                            className="underline focus:ring-2">Change your iTunes media view mode</Link> on <time dateTime="2016-06-12T19:00">June 12, 2016</time>
                    </li>
                </ul>

                <h2>Android</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2022-06-29-chromebook-dev" className="underline focus:ring-2">A Guide for Setting Up a Chromebook for Web Development</Link> on <time dateTime="2022-06-30T18:00">June 30, 2022</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2018-09-26-using-ios-and-android-together"
                            className="underline focus:ring-2">Using iOS and Android devices together</Link> on <time dateTime="2018-09-26T19:00">September 09, 2018</time>
                    </li>
                </ul>

                <h2>Asp.Net</h2>

                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2013-11-07-asp-net-menu-control-styling-with-bootstrap-nav"
                            className="underline focus:ring-2">Asp.net Menu Control - Styling with Bootstrap</Link> on <time dateTime="2013-11-07T19:00">November 7, 2013</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-05-23-jquery-time-picker-issues-and-net"
                            className="underline focus:ring-2">jQuery time picker issues and .net</Link> on <time dateTime="2013-05-23T19:00">May 23, 2013</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-04-10-bootstrap-and-asp-net-4-0-master-pages"
                            className="underline focus:ring-2">Bootstrap and asp.net 4.0 master pages</Link> on <time dateTime="2013-04-10T19:00">April 10, 2013</time>
                    </li>
                </ul>

                <h2>CSS</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2013-11-06-quick-tip-using-font-awesome-with-bootstrap-3"
                            className="underline focus:ring-2">Quick Tip: Using Font Awesome 4 With Bootstrap 3</Link> on <time dateTime="2013-11-06T19:00">November 06, 2013</time>
                    </li>
                </ul>

                <h2>HTML</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2014-03-28-sticky-footer-with-fixed-navbar-example-with-bootstrap-3-and-emmet"
                            className="underline focus:ring-2">Creating the Sticky footer with fixed navbar example with Bootstrap 3 using Emmet.IO</Link> on <time dateTime="2014-03-28T19:00">March 28, 2014</time>
                    </li>
                </ul>

                <h2>JavaScript</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2018-04-18-installing-node-js-and-grunt"
                            className="underline focus:ring-2">Installing Node JS and Grunt</Link> on <time dateTime="2018-04-18T20:00">April 18, 2018</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2017-05-27-highcharts-new-window"
                            className="underline focus:ring-2">Quick Tip: Highcharts credit in a new window</Link> on <time dateTime="2017-05-27T20:00">May 27, 2017</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-11-06-using-require-js-with-bootstrap-google-maps-and-more"
                            className="underline focus:ring-2">Using Require JS with Bootstrap, Google maps, and more</Link> on <time dateTime="2013-11-06T20:00">November 06, 2013</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-11-05-bootstrap-3-and-google-maps"
                            className="underline focus:ring-2">Bootstrap 3 and Google Maps</Link> on <time dateTime="2013-11-05T19:00">November 05, 2013</time>
                    </li>
                </ul>

                <h2>Jekyll</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2021-03-11-jekyll-on-digital-ocean"
                            className="underline focus:ring-2">Jekyll Static Sites on the Digital App Platform</Link> on <time dateTime="2021-03-11T19:00">March 03, 2021</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2019-12-11-Jekyll-Set-Up-Publish"
                            className="underline focus:ring-2">Jekyll: Setting up your development environment</Link> on <time dateTime="2019-12-11T19:00">December 11, 2019</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2016-02-04-jekyll-on-azure-or-github"
                            className="underline focus:ring-2">Configure Jekyll on Microsoft Azure or Github pages</Link> on <time dateTime="2016-02-04T19:00">February 04, 2016</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2015-10-28-fix-jekyll-pagination-upgrade-to-3"
                            className="underline focus:ring-2">Fix pagination after upgrading to Jekyll 3</Link> on <time dateTime="2015-10-28T19:00">August 28, 2015</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2015-08-08-jekyll-config-file"
                            className="underline focus:ring-2">Jekyll: The configuration file</Link> on <time dateTime="2015-08-08T19:00">August 08, 2015</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2015-05-22-Jekyll-Custom-Easy-Search-jQuery"
                            className="underline focus:ring-2">Jekyll: Easy searching with JSON and jQuery</Link> on <time dateTime="2015-05-22T19:00">May 22, 2015</time>
                    </li>
                </ul>
                
                <h2>Lists</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2017-01-06-6-library-resources"
                            className="underline focus:ring-2">6 resources that you may find at your local library</Link> on <time dateTime="2017-01-06T19:00">January 06, 2017</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2016-08-24-5-console-additions-pokemon-go"
                            className="underline focus:ring-2">5 additions from the console games that would improve Pokemon Go</Link> on <time dateTime="2016-08-24T19:00">August 24, 2016</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-07-06-quick-tips-firefox-notepad"
                            className="underline focus:ring-2">Quick Tips: Firefox and Notepad++</Link> on <time dateTime="2013-05-30T19:00">July 06, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-05-24-ios-7-wishlist" className="underline focus:ring-2">iOS 7 Wishlist</Link> on <time dateTime="2013-05-24T19:00">May 24, 2013</time>
                    </li>
                </ul>
                
                <h2>MySql</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2013-10-23-quick-tip-mysql-replace"
                            className="underline focus:ring-2">Quick Tip: MySql Replace</Link> on <time dateTime="2013-08-26T19:00">October 23, 2013</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-08-26-quick-tip-mysql-concat"
                            className="underline focus:ring-2">Quick tips: MySql Concat</Link> on <time dateTime="2013-08-26T19:00">August 26, 2013</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-08-11-quick-tips-mysql-case"
                            className="underline focus:ring-2">Quick tips: MySql Case</Link> on <time dateTime="2013-08-11T19:00">August 11, 2013</time>
                    </li>
                </ul>
               
                
                <h2>PHP</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2017-01-07-word-press-and-campaign-monitor"
                            className="underline focus:ring-2">Quick Tip: WordPress and Campaign Monitor</Link> on <time dateTime="2017-01-07T19:00">January 07, 2017</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2016-06-14-compare-integars-php"
                            className="underline focus:ring-2">Comparing integer variables using PHP</Link> on <time dateTime="2016-06-14T19:00">June 14, 2016</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2014-01-20-wordpress-development-tips"
                            className="underline focus:ring-2">WordPress Development Tips</Link> on <time dateTime="2014-01-20T19:00">January 20, 2014</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-05-25-php-and-utf8-encoding-issues-tips-and-tricks-to-resolve"
                            className="underline focus:ring-2">PHP and UTF8 encoding issues - Tips and tricks to resolve</Link> on <time dateTime="2013-05-25T19:00">May 25, 2013</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-05-23-wordpress-quicktip-display-x-number-of-posts-outside-your-blog"
                            className="underline focus:ring-2">WordPress Quick-tip: Display x number of posts outside your blog</Link> on <time dateTime="2013-05-23T19:30">May 23, 2013</time>
                    </li>
                </ul>
                
                
                <h2>Raspberri Pi</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2014-04-24-rasplex-media-server"
                            className="underline focus:ring-2">Using RasPlex for Your Media Server</Link> on <time dateTime="2014-03-24T19:00">April 24, 2014</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2014-03-17-setting-up-bluetooth-on-the-raspberry-pi"
                            className="underline focus:ring-2">Setting up Bluetooth on the Raspberry Pi</Link> on <time dateTime="2014-03-17T19:00">March 17, 2014</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-09-05-raspberry-pi-list-of-projects-and-resources"
                            className="underline focus:ring-2">Raspberry Pi: List of Projects and resource</Link> on <time dateTime="2013-09-05T19:00">September 05, 2013</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2013-09-05-a-look-at-raspmbc-video-streaming"
                            className="underline focus:ring-2">A look at Raspmbc video streaming</Link> on <time dateTime="2013-09-05T19:00">September 05, 2013</time>
                    </li>
                </ul>

                <h2>Software</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2021-01-13-mac-homebrew" className="underline focus:ring-2">Installing Homebrew and Fixing Ruby on your Mac</Link> on <time dateTime="2021-01-13T19:00">January 13, 2021</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2020-10-14-great-apps-and-programs-for-web-development"
                            className="underline focus:ring-2">Great apps and programs for web development</Link> on <time dateTime="2013-05-30T19:00">October 14, 2020</time>
                    </li>
                    <li>
                        <Link href="/blog/2019-12-12-git-github" className="underline focus:ring-2">Installing Git and Github on your Mac</Link> on <time dateTime="2019-12-12T19:00">December 12, 2019</time>
                    </li>
                </ul>

                <h2>Servers</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2015-03-14-IIS7-Development-Environment"
                            className="underline focus:ring-2">Creating a development environment for IIS 7+</Link> on <time dateTime="2015-03-14T19:00">March 14, 2015</time>
                    </li>
                    <li>
                        <Link
                            href="/blog/2014-01-09-fixing-ubuntu-12-04-network-issue"
                            className="underline focus:ring-2">Fixing Ubuntu 12.04 network issue</Link> on <time dateTime="2014-01-09T19:00">January 09, 2014</time>
                    </li>
                </ul>

                <h2>Site News</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2021-08-26-website-revamp" className="underline focus:ring-2">Website Revamp</Link> on <time dateTime="2021-08-26T18:00">August 26, 2021</time>
                    </li>
                </ul>

                <h2>Travel</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2012-11-08-japan-trip-2011"
                            className="underline focus:ring-2">Planning a vacation to Japan</Link> on <time dateTime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>

                <p>All articles are: <a className="underline focus:ring-2" href="https://creativecommons.org/licenses/by-nc-sa/3.0/" rel="nofollow noreferrer">Attribution-NonCommercial-ShareAlike 3.0 Unported (CC BY-NC-SA 3.0)</a></p>
            </section>
        </Layout>
    );
}
