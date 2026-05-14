import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'

export const POST_TITLE = '404: Page Not Found'
export const POST_DESCRIPTION = 'Sorry, the page you’re looking for doesn’t exist.'
export const POST_DATE = '2026-04-20'
export const POST_TAGS = ['404', 'error', 'not-found']

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} | Jenn Tesolin`}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <PostJsonLd
                title={POST_TITLE}
                description={POST_DESCRIPTION}
                date={POST_DATE}
                tags={POST_TAGS}
                pathname="/404"
            />

            <main id="main-content">
                <section>
                    <h1>{POST_TITLE}</h1>
                    <p>
                        Sorry, the page you are looking for cannot be found. If you arrived here
                        from a broken link, feel free to{' '}
                        <a
                            href="https://github.com/jennifert/nextjs-site/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            report it on GitHub
                        </a>.
                    </p>
                    <p>
                        <Link href="/">Back to home</Link>
                    </p>
                </section>
            </main>
        </Layout>
    )
}