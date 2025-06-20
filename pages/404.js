import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Custom404() {
    const POST_TITLE = '404';
    const POST_DESCRIPTION = 'Sorry, the page you are looking for cannot be found';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content">404 - Page not Found</h1>
                <p>
                    Sorry, the page you are looking for cannot be found. If you came here from a link, Feel free to <a href="mailto:me@jenntesolin.com">send me an email</a> from the page you arrived from. Please try the search box above, or alternatively, <a href="https://web.archive.org/web/*/jenntesolin.com" rel="nofollow noreferrer">check the way back machine for a copy</a>.
                </p>
            </section>
            
        </Layout>
    )
}
