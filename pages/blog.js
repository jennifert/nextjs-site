import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Blog() {
    return (
        <Layout>
            <h1>Blog Posts</h1>
            <Head>
                <title>Blog Posts - {SITE_TITLE}</title>
            </Head>
            <section>
                <p>posts will be here</p>
            </section>
        </Layout>
    )
}
