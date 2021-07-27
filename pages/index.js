
import Head from 'next/head'
import Link from 'next/link'
import { SITE_TITLE, HOME_OG_IMAGE_URL, SEARCH_URL, SITE_DESCRIPTION, SITE_DOMAIN } from '../lib/constants'
import Layout from '../components/layout'
import data from '../components/data/portfolio.json';
import PorfolioCard from '../components/portfoliocard'
import { PrismCode } from '../components/prism'

const code = `
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`.trim();

const portfoliodata = data.slice(0, 3).map((data) => {
    return (

        <PorfolioCard key={data.id} title={data.title} summary={data.summary} repo={data.repo} demo={data.demo} />

    )
}
)

function HomePage() {
    return (
        <Layout home>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link type="text/plain" rel="author" href="/humans.txt" />
                <link rel="alternate" type="application/atom+xml" href="/feed.xml" />
                <title>{SITE_TITLE}</title>
                <link rel="manifest" href="/manifest.json" />
                {/* <link
                    href="/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                /> */}
                {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}
                <meta name="theme-color" content="#317EFB" />

                <meta name="description" content={SITE_DESCRIPTION} />
                <meta name="keywords" content="Keywords" />
                <link rel="manifest" href="/site.webmanifest" />
                {/*  
                    <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link type="text/plain" rel="author" href="/humans.txt" />

                    <link rel="canonical" href="CURRENT LINK" />
                    <meta property="og:image" content={HOME_OG_IMAGE_URL} />
                    <meta name="application-name" content={`${SITE_TITLE}'s website for beginners.`} />

                    <meta property="og:title" content="" />
                    <meta property="og:type" content="" />
                    <meta property="og:url" content="" />
                    <meta property="og:image" content="" />      
                */}
            </Head>
            <h1 id="main-content">Home</h1>
            <p>Welcome to my website that features my portfolio consisting of Github Repositories and Photography, as well as tutorials that include tips and tricks for web development and at the odd times traveling.</p>

            <p>
                Feel free to <a href="mailto:me@jenntesolin.com">send me an email</a> if there is any content you want to see, or any issues to fix.
            </p>
            <section id="latest-portfolio" aria-labelledby="about-portfolio">
                <h2 id="about-portfolio">Latest Portfolio Pieces</h2>
                <div className="flex flex-wrap">
                    {portfoliodata}
                </div>
            </section>
            <section id="latest-blogs" aria-labelledby="blogs-heading">
                <h2 id="blogs-heading">Latest Blog Posts</h2>
                {/* TODO: put in Own componnet - try to pull from rss feed. if not, run script to convert rss to json on build. */}
                <div className="flex flex-wrap">
                    <div className="xl:w-1/3 md:w-1/2 px-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <h2 className="text-lg  font-medium title-font mb-2"><Link href="/blog/2021-03-11-jekyll-on-digital-ocean"><a className="underline hover:underline focus:ring-2 focus:ring-white">Jekyll Static Sites on the Digital App Platform</a></Link></h2>
                            <p className="leading-relaxed text-base">Learn how to host your Jekyll static site (including plugins) on the new Digital Ocean App Platform.</p>
                            <div className="text-center mt-2 leading-none flex justify-between w-full">
                                <span className="mr-3 inline-flex items-center leading-none text-sm  py-1">
                                    <time dateTime="2021-03-11T19:00">March 03, 2021</time>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 px-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <h2 className="text-lg font-medium title-font mb-2"><Link href="/blog/2021-01-13-mac-homebrew"><a className="underline hover:underline focus:ring-2 focus:ring-white">Installing Homebrew and Fixing Ruby on your Mac</a></Link></h2>
                            <p className="leading-relaxed text-base">Post that describes how to fix the default Ruby install on your Mac and install Homebrew.</p>
                            <div className="text-center mt-2 leading-none flex justify-between w-full">
                                <span className="mr-3 inline-flex items-center leading-none text-sm  py-1">
                                    <time dateTime="2021-01-13T19:00">January 13, 2021</time>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 px-4">
                        <div className="border border-gray-300 p-6 rounded-lg">
                            <h2 className="text-lg font-medium title-font mb-2"><Link href="/blog/2020-10-14-great-apps-and-programs-for-web-development"><a className="underline hover:underline focus:ring-2 focus:ring-white">Great apps and programs for web development</a></Link></h2>
                            <p className="leading-relaxed text-base">Learn how to host your Jekyll static site (including plugins) on the new Digital Ocean App Platform.</p>
                            <div className="text-center mt-2 leading-none flex justify-between w-full">
                                <span className="mr-3 inline-flex items-center leading-none text-sm  py-1">
                                    <time dateTime="2013-05-30T19:00">October 14, 2020</time>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default HomePage