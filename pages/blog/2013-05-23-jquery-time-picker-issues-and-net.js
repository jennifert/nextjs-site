import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

const POST_TITLE = 'jQuery time picker issues and .net';
const POST_DESCRIPTION = 'Using jQuery time picker and .net caused issues with control to validate, here is how to fix them.';
export const POST_TAGS = ['javascript', 'jquery', 'asp']

export default function JqueryTime() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2013-05-23'

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
                    pathname={router?.pathname || '/blog/2013-05-23-jquery-time-picker-issues-and-net'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Recently I was wrestling with an issue with a time picker plugin not firing my custom validator onChange event in Asp.net. Here&apos;s the problem and how it was resolved.</p>
                <p>The problem was that for some reason it did not like control to validate. As suggested by the <a className="underline focus:ring-2" href="http://stackoverflow.com/questions/8649565/do-not-fire-custom-validate-on-onchange-event-of-a-textbox" rel="nofollow noreferrer">this StackOverFlow Question</a>, using a validation group in your custom validation will solve the issue.</p>
            </section>
        </Layout>
    )
}
