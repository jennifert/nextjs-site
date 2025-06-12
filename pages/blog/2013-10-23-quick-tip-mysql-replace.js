import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

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

export default function MysqlReplace() {
    const POST_TITLE = 'Quick Tip: MySql Replace';
    const POST_DESCRIPTION = 'This post shows are to use replace in INSERT, and UPDATE SQL queries.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
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
