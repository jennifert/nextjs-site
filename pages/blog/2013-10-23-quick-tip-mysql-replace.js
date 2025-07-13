import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
SELECT field1,
      REPLACE(stringVar, 'search for', 'string to replace with') AS field2,
      field3
FROM testdb
`.trim();

const code2 = `
UPDATE testDB2
SET stringVar = REPLACE (stringVar, 'search for', 'string to replace with')
WHERE id=1
`.trim();

// Metadata for the post
export const POST_TITLE = 'Quick Tip: MySql Replace';
export const POST_DESCRIPTION = 'This post shows are to use replace in INSERT, and UPDATE SQL queries.';
export const POST_TAGS = ['mysql', 'tips']

export default function MysqlReplace() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2013-10-23'

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
                    pathname={router?.pathname || '/blog/2013-10-23-quick-tip-mysql-replace'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>While looking for ways to improve my MySQL queries, I can across the REPLACE function. This post shows are to use replace in INSERT, and UPDATE SQL queries.</p>
                <h2>Insert Statement</h2>
                <PrismCode
                    code={code}
                    language="sql"
                    plugins={["line-numbers"]}
                />
                <h2>Update Statement</h2>
                <PrismCode
                    code={code2}
                    language="sql"
                    plugins={["line-numbers"]}
                />
            </section>
        </Layout>
    )
}
