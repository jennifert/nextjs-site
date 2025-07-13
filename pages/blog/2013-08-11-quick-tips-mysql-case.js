import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

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


export const POST_TITLE = 'Quick tips: MySql Case';
export const POST_DESCRIPTION = 'How to change the case in a sql statement using MySQL.';
export const POST_TAGS = ['mysql', 'tips']

export default function MySqlCase() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2013-08-11'

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
                    pathname={router?.pathname || '/blog/2013-08-11-quick-tips-mysql-case'}
                />
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
