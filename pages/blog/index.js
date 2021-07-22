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
                
                <h2>Apple</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2016-06-12-itunes-view-change"><a className="underline focus:ring-2">Change your iTunes media view mode</a></Link> on <time dateTime="2016-06-12T19:00">June 12, 2016</time>
                    </li>
                </ul>

                <h2>Asp.Net</h2>

                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2013-11-07-asp-net-menu-control-styling-with-bootstrap-nav"><a className="underline focus:ring-2">Asp.net Menu Control - Styling with Bootstrap</a></Link> on <time dateTime="2013-11-07T19:00">November 7, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-05-23-jquery-time-picker-issues-and-net"><a className="underline focus:ring-2">jQuery time picker issues and .net</a></Link> on <time dateTime="2013-05-23T19:00">May 23, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-04-10-bootstrap-and-asp-net-4-0-master-pages"><a className="underline focus:ring-2">Bootstrap and asp.net 4.0 master pages</a></Link> on <time dateTime="2013-04-10T19:00">April 10, 2013</time>
                    </li>
                </ul>

                <h2>CSS</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2013-11-06-quick-tip-using-font-awesome-with-bootstrap-3"><a className="underline focus:ring-2">Quick Tip: Using Font Awesome 4 With Bootstrap 3</a></Link> on <time dateTime="2013-11-06T19:00">November 06, 2013</time>
                    </li>
                </ul>

                <h2>HTML</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2014-03-28-sticky-footer-with-fixed-navbar-example-with-bootstrap-3-and-emmet"><a className="underline focus:ring-2">Creating the Sticky footer with fixed navbar example with Bootstrap 3 using Emmet.IO</a></Link> on <time dateTime="2014-03-28T19:00">March 28, 2014</time>
                    </li>
                </ul>

                <h2>JavaScript</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2013-11-06-using-require-js-with-bootstrap-google-maps-and-more"><a className="underline focus:ring-2">Using Require JS with Bootstrap, Google maps, and more</a></Link> on <time dateTime="2013-11-06T20:00">November 06, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-11-05-bootstrap-3-and-google-maps"><a className="underline focus:ring-2">Bootstrap 3 and Google Maps</a></Link> on <time dateTime="2013-11-05T19:00">November 05, 2013</time>
                    </li>
                </ul>

                <h2>Jekyll</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2016-02-04-jekyll-on-azure-or-github"><a className="underline focus:ring-2">Configure Jekyll on Microsoft Azure or Github pages</a></Link> on <time dateTime="2016-02-04T19:00">February 04, 2016</time>
                    </li>
                    <li>
                        <Link href="/blog/2015-10-28-fix-jekyll-pagination-upgrade-to-3"><a className="underline focus:ring-2">Fix pagination after upgrading to Jekyll 3</a></Link> on <time dateTime="2015-10-28T19:00">August 28, 2015</time>
                    </li>
                    <li>
                        <Link href="/blog/2015-08-08-jekyll-config-file"><a className="underline focus:ring-2">Jekyll: The configuration file</a></Link> on <time dateTime="2015-08-08T19:00">August 08, 2015</time>
                    </li>
                    <li>
                        <Link href="/blog/2015-05-22-Jekyll-Custom-Easy-Search-jQuery"><a className="underline focus:ring-2">Jekyll: Easy searching with JSON and jQuery</a></Link> on <time dateTime="2015-05-22T19:00">May 22, 2015</time>
                    </li>
                </ul>
                
                <h2>Lists</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2016-08-24-top-5-console-additions-pokemon-go"><a className="underline focus:ring-2">Top 5 additions from the console games that would improve Pokemon Go</a></Link> on <time dateTime="2016-08-24T19:00">August 24, 2016</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-07-06-quick-tips-firefox-notepad"><a className="underline focus:ring-2">Quick Tips: Firefox and Notepad++</a></Link> on <time dateTime="2013-05-30T19:00">July 06, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-05-30-great-apps-and-programs-for-web-development"><a className="underline focus:ring-2">Great apps and programs for web development</a></Link> on <time dateTime="2013-05-30T19:00">May 30, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-05-24-ios-7-wishlist"><a className="underline focus:ring-2">iOS 7 Wishlist</a></Link> on <time dateTime="2013-05-24T19:00">May 24, 2013</time>
                    </li>
                </ul>
                
                <h2>MySql</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2013-10-23-quick-tip-mysql-replace"><a className="underline focus:ring-2">Quick Tip: MySql Replace</a></Link> on <time dateTime="2013-08-26T19:00">October 23, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-08-26-quick-tip-mysql-concat"><a className="underline focus:ring-2">Quick tips: MySql Concat</a></Link> on <time dateTime="2013-08-26T19:00">August 26, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-08-11-quick-tips-mysql-case"><a className="underline focus:ring-2">Quick tips: MySql Case</a></Link> on <time dateTime="2013-08-11T19:00">August 11, 2013</time>
                    </li>
                </ul>
               
                
                <h2>PHP</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2016-06-14-compare-integars-php"><a className="underline focus:ring-2">Comparing integer variables using PHP</a></Link> on <time dateTime="2016-06-14T19:00">June 14, 2016</time>
                    </li>
                    <li>
                        <Link href="/blog/2014-01-20-wordpress-development-tips"><a className="underline focus:ring-2">WordPress Development Tips</a></Link> on <time dateTime="2014-01-20T19:00">January 20, 2014</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-05-25-php-and-utf8-encoding-issues-tips-and-tricks-to-resolve"><a className="underline focus:ring-2">PHP and UTF8 encoding issues - Tips and tricks to resolve</a></Link> on <time dateTime="2013-05-25T19:00">May 25, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-05-23-wordpress-quicktip-display-x-number-of-posts-outside-your-blog"><a className="underline focus:ring-2">WordPress Quick-tip: Display x number of posts outside your blog</a></Link> on <time dateTime="2013-05-23T19:30">May 23, 2013</time>
                    </li>
                </ul>
                
                
                <h2>Raspberri Pi</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2014-04-24-rasplex-media-server"><a className="underline focus:ring-2">Using RasPlex for Your Media Server</a></Link> on <time dateTime="2014-03-24T19:00">April 24, 2014</time>
                    </li>
                    <li>
                        <Link href="/blog/2014-03-17-setting-up-bluetooth-on-the-raspberry-pi"><a className="underline focus:ring-2">Setting up Bluetooth on the Raspberry Pi</a></Link> on <time dateTime="2014-03-17T19:00">March 17, 2014</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-09-05-raspbeerri-pi-list-of-projects-and-resources"><a className="underline focus:ring-2">Raspberry Pi: List of Projects and resource</a></Link> on <time dateTime="2013-09-05T19:00">September 05, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-09-05-a-look-at-raspmbc-video-streaming"><a className="underline focus:ring-2">A look at Raspmbc video streaming</a></Link> on <time dateTime="2013-09-05T19:00">September 05, 2013</time>
                    </li>
                </ul>

                <h2>Servers</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2015-03-14-IIS7-Development-Environment"><a className="underline focus:ring-2">Creating a development environment for IIS 7+</a></Link> on <time dateTime="2015-03-14T19:00">March 14, 2015</time>
                    </li>
                    <li>
                        <Link href="/blog/2014-01-09-fixing-ubuntu-12-04-network-issue"><a className="underline focus:ring-2">Fixing Ubuntu 12.04 network issue</a></Link> on <time dateTime="2014-01-09T19:00">January 09, 2014</time>
                    </li>
                </ul>

                <h2>Travel</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time dateTime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}
