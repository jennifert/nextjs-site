import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function Blog() {
    return (
        <Layout>
            <Head>
                <title>{BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{BLOG_TITLE}</h1>
                
                <h2>Travel</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="no-underline hover:underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08</time>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}
