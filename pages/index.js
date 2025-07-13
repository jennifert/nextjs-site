
import Head from 'next/head'
// import Link from 'next/link'
import { SITE_TITLE, HOME_OG_IMAGE_URL, SEARCH_URL, SITE_DESCRIPTION, SITE_DOMAIN } from '../lib/constants'
import Layout from '../components/layout'
import data from '../components/data/portfolio.json';
import PortfolioCard from '../components/portfolio-card'
import LatestPosts from '../components/latest-posts';
import PostJsonLd from '../components/PostJsonLd'

export const POST_TITLE = SITE_TITLE;
export const POST_DESCRIPTION = SITE_DESCRIPTION;
export const POST_DATE = '2025-01-01'; // Placeholder
export const POST_TAGS = ['home'];


function HomePage() {
    return (
        <Layout home>
            <Head>
                <title>{`${POST_TITLE}`}</title>
                <meta name="description" content={POST_DESCRIPTION} />
                <PostJsonLd
                    title={POST_TITLE}
                    description={POST_DESCRIPTION}
                    date={POST_DATE}
                    tags={POST_TAGS}
                    pathname="/index"
                />
            </Head>
            <h1 id="main-content">Home</h1>
            <p>Welcome to my website that features my portfolio consisting of Github Repositories and Photography, as well as tutorials that include tips and tricks for web development and at the odd times traveling.</p>

            <p>
                Feel free to <a href="mailto:me@jenntesolin.com">send me an email</a> if there is any content you want to see, or any issues to fix.
            </p>
            <section id="latest-portfolio" aria-labelledby="about-portfolio">
                <h2 id="about-portfolio">Latest Portfolio Pieces</h2>
                <div className="flex flex-wrap -mx-4">
                    {[...data]
                        .filter(item => item.featured)
                        .sort((a, b) => {
                            const aDate = new Date(a.lastUpdated || a.date)
                            const bDate = new Date(b.lastUpdated || b.date)
                            return bDate - aDate
                        })
                        .slice(0, 3)
                        .map((item, index) => (
                            <div key={item.id} className="xl:w-1/3 md:w-1/2 w-full mb-4 px-4">
                                <PortfolioCard {...item} />
                            </div>
                        ))}
                </div>
            </section>

            <LatestPosts />

        </Layout>
    );
}

export default HomePage