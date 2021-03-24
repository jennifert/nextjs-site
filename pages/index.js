
import Head from 'next/head'
import Link from 'next/link'
import { SITE_TITLE } from '../lib/constants'
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
                <title>{SITE_TITLE}</title>
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
                <p>This is still under development. Please check out the blog link in the header to see what posts have been moved over, or <a className="underline focus:ring-2" href="https://jenntesolin.com/blog/" rel="nofollow noreferrer">visit the production site</a>.</p>
                <p>Sample code will look like:</p>
                <PrismCode
                    code={code}
                    language="java"
                    plugins={["line-numbers"]}
                />
            </section>

        </Layout>
    )
}

export default HomePage