import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
import data from '../components/data/portfolio.json';
import PortfolioCard from '../components/portfolio-card'

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
            <div className="flex flex-wrap -mx-4">
                {[...data]
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((item, index) => (
                        <div key={item.id} className="xl:w-1/3 md:w-1/2 w-full mb-4 px-4">
                            <PortfolioCard {...item} />
                        </div>
                    ))}
            </div>

        </Layout>
    )
}
