// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
import data from '../components/data/portfolio.json';
import PortfolioCard from '../components/portfolio-card'
import PostJsonLd from '../components/PostJsonLd'

export const POST_TITLE = 'Portfolio';
export const POST_DESCRIPTION = 'A list of projects and gists that Jennifer Tesolin has worked on.';
export const POST_DATE = '2025-01-01'; // Placeholder
export const POST_TAGS = ['Portfolio', 'projects', 'development'];

export default function Portfolio() {
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} | ${SITE_TITLE}`}</title>
                <meta name="description" content={POST_DESCRIPTION} />
                <PostJsonLd
                    title={POST_TITLE}
                    description={POST_DESCRIPTION}
                    date={POST_DATE}
                    tags={POST_TAGS}
                    pathname="/portfolio"
                />
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
