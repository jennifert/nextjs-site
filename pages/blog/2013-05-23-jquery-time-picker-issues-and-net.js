import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function JqueryTime() {
    const POST_TITLE = 'jQuery time picker issues and .net';
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} - ${BLOG_TITLE} -  ${SITE_TITLE}`}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Recently I was wrestling with an issue with a time picker plugin not firing my custom validator onChange event in Asp.net. Here&apos;s the problem and how it was resolved.</p>
                <p>The problem was that for some reason it did not like control to validate. As suggested by the <a className="underline focus:ring-2" href="http://stackoverflow.com/questions/8649565/do-not-fire-custom-validate-on-onchange-event-of-a-textbox" rel="nofollow noreferrer">this StackOverFlow Question</a>, using a validation group in your custom validation will solve the issue.</p>
            </section>
        </Layout>
    )
}
