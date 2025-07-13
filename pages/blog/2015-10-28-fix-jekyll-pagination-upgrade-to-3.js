import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
gem install jekyll-paginate
`.trim();

const code2 = `
gems :
    - jekyll-paginate
`.trim();

// Metadata for the post
export const POST_TITLE = 'Fix pagination after upgrading to Jekyll 3';
export const POST_DESCRIPTION = 'In Jekyll 3, pagination is deprecated. This post describes how to resolve the error.';
export const POST_TAGS = ['jekyll']

export default function PaginationJekyllThree() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2015-10-28'

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
                    pathname={router?.pathname || '/blog/2015-10-28-fix-jekyll-pagination-upgrade-to-3'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>In Jekyll 3, pagination is deprecated. This post describes how to resolve the error:</p>
                <code>**Deprecation: You appear to have pagination turned on, but you haven&apos;t included the `jekyll-paginate` gem. Ensure you have `gems: [jekyll-paginate]` in your configuration file**.</code>
                <p>First, make sure you have the gem installed by typing in your terminal:</p>
                <PrismCode
                    code={code}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Next, open <code>_config.yml</code>, add add the following line:</p>
                <PrismCode
                    code={code2}
                    language="yaml"
                    plugins={["line-numbers"]}
                />

                <p>Now, when you run <kbd>bundle exec jekyll serve</kbd> or <kbd>bundle exec jekyll build</kbd> the error message should no longer be there.</p>

            </section>
        </Layout>
    )
}
