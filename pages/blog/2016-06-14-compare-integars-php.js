import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
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

export default function PhpCompareInt() {
    const POST_TITLE = 'Comparing integer variables using PHP';
    const POST_DESCRIPTION = 'This post describes how to compare variables that have integers using PHP.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
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
