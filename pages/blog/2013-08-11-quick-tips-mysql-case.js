import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

const code = `
Case When
    table1.Gender = 'Female'
Then
  table1.titlef
When
  table1.Gender = 'Male'
Then
  table1.titlem
End AS titlefr
`.trim();
export default function MySqlCase() {
    const POST_TITLE = 'Quick tips: MySql Case';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>One project I worked on had a table with different spellings  between English and French between an individual&apos;s title (masculine vs feminine in French). Since I did not want to spend too much time programming in the application itself, I came across the mysql &quot;case&quot; function during research.:</p>
                <p>mySQL case is like a switch statement. Check out the official  <a className="underline focus:ring-2" href="https://dev.mysql.com/doc/refman/5.7/en/case.html" rel="nofollow noreferrer">Manual Reference</a> for a more through explanation.</p>
                <PrismCode
                    code={code}
                    language="sql"
                    plugins={["line-numbers"]}
                />
                <p>Hope this helps someone else!</p>
            </section>
        </Layout>
    )
}
