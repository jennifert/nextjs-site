import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Custom404() {
    return (
        <Layout>
            <h1>404 - Page not Found</h1>
            <Head>
                <title>404 - {SITE_TITLE}</title>
            </Head>
            <section>
                <p>
                    Sorry, the page you are looking for cannot be found. IF you came here from a link, Feel free to <a href="mailto:me@jenntesolin.com">send me an email</a> from the page you arrived from. Please try the search box above, or check out our latest posts below.
                </p>
            </section>
            <section id="latest-posts" aria-labelledby="post-header">
                <h2 id="post-header" className="text-gray-800">Latest blog posts</h2>
                <div>
                    <h3>Using iOS and Android devices together.</h3>
                    <div>
                        <time dateTime="2018-09-26">Sep 26, 2018</time>
                        <span>Tutorial</span>
                    </div>
                    <p>Using an android in an Apple environment can be a bit tricky, but here are some tricks and resources to help you out. This post is an update to one titled "Moving from an iOS Device to Android iCloud)".</p>
                    <p><a href="#">Read More</a></p>
                </div>
                <div>
                    <h3>Installing Node JS and Grunt</h3>
                    <div>
                        <time dateTime="2018-04-28">Apr 18, 2018</time>
                        <span>Tutorial</span>
                    </div>
                    <p>This tutorial focuses on installing the platform, and provides resources for using Grunt</p>
                    <p><a href="#">Read More</a></p>
                </div>
                <div>
                    <h3>Quick Tip: Highcharts credit in a new window</h3>
                    <div>
                        <time dateTime="2017-05-28">May 28, 2017</time>
                        <span>Tutorial</span>
                    </div>
                    <p>Here is a great fiddle by Torstein Hønsi, that shows how to have highcharts credits open in a new window/tab.</p>
                    <p><a href="#">Read More</a></p>
                </div>
            </section>
        </Layout>
    )
}
