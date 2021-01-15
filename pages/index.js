
import Head from 'next/head'
import Link from 'next/link'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

function HomePage() {
    return (
        <Layout home>
            <Head>
                <title>{SITE_TITLE}</title>
            </Head>
            <h1>Home</h1>
            <section id="latest-portfolio" aria-labelledby="about-portfolio">
                <h2 id="about-portfolio">Featured Portfolio Pieces</h2>
                <div class="portfolio-block">
                    <h3>Archer CMS</h3>
                    <p>My project for the FullStack Master Class at Hacker You. Its a MERN Stack CMS.</p>
                    <p><a href="https://github.com/jennifert/archer-cms" target="_blank" rel="nofollow">View repo</a></p>
                </div>
                <div class="portfolio-block">
                    <h3>Beginner Examples</h3>
                    <p>JavaScript demos to get started. Topics include: Google Maps, Bootstrap, Fetch, TypeScript, with more coming soon.</p>
                    <p><a href="https://github.com/jennifert/JavaScript-Demos" target="_blank" rel="nofollow">View repo</a><br />
                        <a href="#">View demos</a></p>
                </div>
                <div class="portfolio-block">
                    <h3>Slim 3 API to Search YAML</h3>
                    <p>
                        A web service built using slim 3 and the "mnapoli/front-yaml" composer library to search in Yaml tags in a folder _post. 
                    </p>
                    <p><a href="https://github.com/jennifert/slim_yaml_service_client_ts" target="_blank" rel="nofollow">View repo</a></p>
                </div>
                <p>View more <a href="/portfolio">Portfolio</a> pieces</p>
            </section>
            <section id="latest-posts" aria-labelledby="post-header">
                <h2 className="text-gray-800">Latest blog posts</h2>
                <div>
                    <h3>Using iOS and Android devices together.</h3>
                    <div>
                        <time datetime="2018-09-26">Sep 26, 2018</time>
                        <span>Tutorial</span>
                    </div>
                    <p>Using an android in an Apple environment can be a bit tricky, but here are some tricks and resources to help you out. This post is an update to one titled "Moving from an iOS Device to Android iCloud)".</p>
                    <p><a href="#">Read More</a></p>
                </div>
                <div>
                    <h3>Installing Node JS and Grunt</h3>
                    <div>
                        <time datetime="2018-04-28">Apr 18, 2018</time>
                        <span>Tutorial</span>
                    </div>
                    <p>This tutorial focuses on installing the platform, and provides resources for using Grunt</p>
                    <p><a href="#">Read More</a></p>
                </div>
                <div>
                    <h3>Quick Tip: Highcharts credit in a new window</h3>
                    <div>
                        <time datetime="2017-05-28">May 28, 2017</time>
                        <span>Tutorial</span>
                    </div>
                    <p>Here is a great fiddle by Torstein Hønsi, that shows how to have highcharts credits open in a new window/tab.</p>
                    <p><a href="#">Read More</a></p>
                </div>
            </section>

        </Layout>
    )
}

export default HomePage

/*
<div className="py-20">
                    <h1 className="text-5xl text-center text-accent-1">
                        JennTesolin.com
                    </h1>
                </div>
*/