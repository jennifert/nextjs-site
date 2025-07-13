import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

// Metadata for the post
export const POST_TITLE = 'Quick Tips: Firefox and Notepad++';
export const POST_DESCRIPTION = 'This posting is just to highlight some tips and tricks I found while working on sites.';
export const POST_TAGS = ['tips', 'editor', 'firefox']

export default function Template() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2013-07-06'

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
                    pathname={router?.pathname || '/blog/2013-07-06-quick-tips-firefox-notepad'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This posting is just to highlight some tips and tricks I found while working on sites.</p>
                <h2>Firefox</h2>
                <p>While working, I came across a portion of my work where I wanted to disable JavaScript. Usually in Firefox, I can go to the preferences &gt; General then uncheck JavaScript, however, this option was removed in the latest beta of Firefox. After searching on the Mozilla wiki, I would that you need to toggle a setting in your about:config. Filter for: JavaScript.enabled then set to false to disable JavaScript.</p>
                <h2>Notepad++</h2>
                <p>There is a neat trick - if you select an tag or a word in your file and press control and left or right key, your cursor will automatically be moved too next tag or word. Control up and down will scroll view up and down.</p>
                <p>Hope someone will find these useful.</p>
            </section>
        </Layout>
    )
}
