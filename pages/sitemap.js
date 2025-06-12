import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Sitemap() {
    const POST_TITLE = 'Sitemap';
    const POST_DESCRIPTION = 'A list of all pages and posts on my website.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content">Sitemap</h1>
                <p>
                    Sitemap will be here.
                </p>
            </section>
        </Layout>
    )
}
