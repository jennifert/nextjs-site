import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Gallery() {
    return (
        <Layout>
            <Head>
                <title>Gallery - {SITE_TITLE}</title>
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content" className="py-5">Gallery</h1>
                <p>
                    Photo gallery will be here.
                </p>
            </section>
        </Layout>
    )
}
