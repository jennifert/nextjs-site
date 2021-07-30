import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

const code = `
gem install jekyll-paginate
`.trim();

const code2 = `
gems :
    - jekyll-paginate
`.trim();

export default function PaginationJekyllThree() {
    const POST_TITLE = 'Fix pagination after upgrading to Jekyll 3';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
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
