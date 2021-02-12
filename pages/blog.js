import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Blog() {
    return (
        <Layout>
            <Head>
                <title>Blog Posts - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content" className="py-5">Blog Posts</h1>
                <p>posts will be here</p>
            </section>
        </Layout>
    )
}
