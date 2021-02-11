
import Head from 'next/head'
import Link from 'next/link'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
import data from '../components/data/portfolio.json';
import PorfolioCard from '../components/portfoliocard'

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
            <h1 id="main-content" className="py-5">Home</h1>
            <p>Welcome to my website that features my portfolio consisting of Github Repositories and Photography, as well as tutorials that include tips and tricks for web development and at the odd times traveling.</p>
            <section id="latest-portfolio" aria-labelledby="about-portfolio" className="py-5">
                <h2 id="about-portfolio">Latest Portfolio Pieces</h2>
                <div className="flex flex-wrap">
                    {portfoliodata}
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