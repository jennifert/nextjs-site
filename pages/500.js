import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'

export const POST_TITLE = '500: Server-side error occurred';
export const POST_DESCRIPTION = 'Sorry, the server is having trouble loading the page';
export const POST_DATE = '2025-01-01'; // Placeholder
export const POST_TAGS = ['500', 'error', 'server-trouble'];

export default function Custom505() {
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} | Jenn Tesolin</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <PostJsonLd
                title={POST_TITLE}
                description={POST_DESCRIPTION}
                date={POST_DATE}
                tags={POST_TAGS}
                pathname="/500"
            />

            <main id="main-content">
                <section>
                    <h1>{POST_TITLE}</h1>
                    <p>
                        Sorry, the server is having trouble loading the page. If you arrived here
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