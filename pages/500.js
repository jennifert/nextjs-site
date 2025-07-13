// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'


export const POST_TITLE = '500 - Server-side error occurred';
export const POST_DESCRIPTION = 'Sorry, the server is having trouble loading the page';
export const POST_DATE = '2025-01-01'; // Placeholder
export const POST_TAGS = ['405', 'error', 'server-trouble'];

export default function Custom500() {
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
                    pathname="/500"
                />
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content">500 - Server-side error occurred</h1>
                <p>
                    Sorry, the server is having trouble loading the page. Feel free to <a href="https://github.com/jennifert/nextjs-site/issues" rel="nofollow noreferrer">create an issue on GitHub</a>. You can try the search box above, or alternatively, <a href="https://web.archive.org/web/*/jenntesolin.com" rel="nofollow noreferrer">check the way back machine for a copy</a>.
                </p>
            </section>

        </Layout>
    )
}
