import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Sitemap() {
    return (
        <Layout>
            <Head>
                <title>{`Sitemap -  ${SITE_TITLE}`}</title>
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
