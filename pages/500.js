import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Custom404() {
    return (
        <Layout>
            <Head>
            <title>{`500 -  ${SITE_TITLE}`}</title>
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
