import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
SELECT
    CONCAT(firstname, ' ', lastname) As fullname
FROM examples
`.trim();
export default function MysqlConcat() {
    const POST_TITLE = 'Quick Tip: MySQL Concat';
    const POST_DESCRIPTION = 'While working on a project, I was looking for a way to join to mysql columns without using php or .Net, this function can do it in MYSQL.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>While working on a project, I was looking for a way to join to mysql columns without using php or .Net. This function is called &quot;<code>concat</code>&quot; and allows you to join together 2 columns as one.</p>
                <PrismCode
                    code={code}
                    language="sql"
                    plugins={["line-numbers"]}
                />
                <p>Check out out the <a className="underline focus:ring-2" href="https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_concat" rel="nofollow noreferrer">Official Manual Reference</a> for more examples and information.</p>
                <p>Hope this helps someone else!</p>
            </section>
        </Layout>
    )
}
