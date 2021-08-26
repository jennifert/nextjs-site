import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function WebsiteRevamp() {
    const POST_TITLE = 'Website Revamp';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
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
