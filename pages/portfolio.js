import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
import data from '../components/data/portfolio.json';
import PorfolioCard from '../components/portfoliocard'

const portfoliodata = data.map((data) => {
    return (

            <PorfolioCard key={data.id} title={data.title} summary={data.summary} repo={data.repo} demo={data.demo} />

    )
}
)


export default function Portfolio() {
    const POST_TITLE = 'Portfolio';
    const POST_DESCRIPTION = 'A list of projects and gists that Jennifer Tesolin has worked on.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <h1 id="main-content">Portfolio</h1>
            <div className="flex flex-wrap">
                {portfoliodata}
            </div>
            
        </Layout>
    )
}
