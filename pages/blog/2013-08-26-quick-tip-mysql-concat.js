import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
SELECT
    CONCAT(firstname, ' ', lastname) As fullname
FROM examples
`.trim();

// Metadata for the post
    const POST_TITLE = 'Quick Tip: MySQL Concat';
    const POST_DESCRIPTION = 'While working on a project, I was looking for a way to join to mysql columns without using php or .Net, this function can do it in MYSQL.';
export const POST_TAGS = ['mysql', 'tips']

export default function MysqlConcat() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2013-08-26'

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
                    pathname={router?.pathname || '/blog/2013-08-26-quick-tip-mysql-concat'}
                />
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
