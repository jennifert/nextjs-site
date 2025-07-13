import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
<?php
$a=5;
$b='5';

if (intval($a)==intval($b)){
    echo 'it's the same';
}
?>
`.trim();


// Metadata for the post
export const POST_TITLE = 'Comparing integer variables using PHP';
export const POST_DESCRIPTION = 'This post describes how to compare variables that have integers using PHP.';
export const POST_TAGS = ['php']

export default function PhpCompareInt() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2016-06-14'

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
                    pathname={router?.pathname || '/blog/2016-06-14-compare-integars-php'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This post describes how to compare variables that have integers using PHP.</p>
                <p>To properly compare variables in PHP, we are taking a look at the <code>intval</code> function. If you try to compare variables without this function, you can run into troubles. For example, your script returning that they are <b>NOT</b> the same.</p>
                <PrismCode
                    code={code}
                    language="php"
                    plugins={["line-numbers"]}
                />

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://www.php.net/manual/en/function.intval.php" rel="nofollow noreferrer">intval Function on Php.net</a></li>
                </ul>
            </section>
        </Layout>
    )
}
