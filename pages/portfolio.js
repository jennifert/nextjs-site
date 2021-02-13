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
    return (
        <Layout>
            <Head>
                <title>Portfolio - {SITE_TITLE}</title>
            </Head>

            <h1 id="main-content">Portfolio</h1>
            <div className="flex flex-wrap">
                {portfoliodata}
            </div>
            
        </Layout>
    )
}
