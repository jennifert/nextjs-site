import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'

export const POST_TITLE = 'Privacy'
export const POST_DESCRIPTION = 'Sorry, the page you’re looking for doesn’t exist.'
export const POST_DATE = '2026-04-20'
export const POST_TAGS = ['Privacy']

export default function PrivacyPage() {
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
                pathname="/privacy"
            />

            <main id="main-content">
                <section>
                    <h1>{POST_TITLE}</h1>
                    <p>This site does not currently use contact forms, analytics, or advertising trackers.</p>

                    <p>Site search runs locally in the browser against a static JSON file and does not send search queries to me.</p>

                    <p>If any cookies are set by the hosting platform or site framework, they are intended only for basic site delivery or functionality.</p>

                    <p>If this changes in the future, this page will be updated.</p>

                    <p>
                        If you notice content on this site that should not be public or believe something sensitive has
                        been exposed, please report it through the&nbsp;
                        <a
                            href="https://github.com/jennifert/nextjs-site/security"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            repository security page
                        </a>.
                    </p>
                </section>
            </main>
        </Layout>
    )
}