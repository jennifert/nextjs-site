import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

export const POST_TITLE = 'Website Revamp';
export const POST_DESCRIPTION = 'After awhile of toiling, the revamped website has finally been launched.';
export const POST_TAGS = ['news']

export default function WebsiteRevamp() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2021-08-26'

    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} - ${BLOG_TITLE} - ${SITE_TITLE}`}</title>
                <meta name="description" content={POST_DESCRIPTION} />
                <PostJsonLd
                    title={POST_TITLE}
                    description={POST_DESCRIPTION}
                    date={POST_DATE}
                    tags={POST_TAGS}
                    pathname={router?.pathname || '/blog/2021-08-26-website-revamp'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>After awhile of toiling, the revamped website has finally been launched.</p>

                <p>As part of the move:</p>

                <ul className="list-disc list-inside m-2">
                    <li>All articles have been checked over for accuracy, spelling, grammar, and proper images</li>
                    <li>Some posts have been marked as outdated, which the post may be useful as a guide, but there could be newer ways of doing things</li>
                    <li>All code snippets are now using the syntax highlighter called <a className="underline focus:ring-2" href="https://prismjs.com/">Prism JS</a>.</li>
                    <li>The codebase has been moved from Jekyll RB to <a className="underline focus:ring-2" href="https://nextjs.org/">Next JS</a>.</li>
                    <li>Removed Bootstrap Framework for <a className="underline focus:ring-2" href="https://tailwindcss.com/">Tailwind CSS</a></li>
                </ul>

                <p>There are still some pieces of the site still in development, so you may see new items appear, and other items being improved.</p>
                <p>Check out <a className="underline focus:ring-2" href="https://github.com/jennifert/nextjs-site">the site Github Repo</a> to file any issues, or check out how it was built.</p>
            </section>
        </Layout>
    )
}
