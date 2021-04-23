import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

const code = `
SELECT
    CONCAT(firstname, ' ', lastname) As fullname
FROM examples
`.trim();
export default function MysqlConcat() {
    const POST_TITLE = 'Quick Tip: MySQL Concat';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>While working on a project, I was looking for a way to join to mysql columns without using php or .Net. This function is called '<code>concat</code>' and allows you to join together 2 columns as one.</p>
                <PrismCode
                    code={code}
                    language="sql"
                    plugins={["line-numbers"]}
                />
                <p>Check out out the official  <a className="underline focus:ring-2" href="https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_concat" rel="nofollow noreferrer">Manual Reference</a> for more examples and information.</p>
                <p>Hope this helps someone else!</p>
            </section>
        </Layout>
    )
}
