import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.no-icons.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
`.trim();

const code2 = `
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
`.trim();

export default function FontAwesomeBootstrapThree() {
    const POST_TITLE = 'Quick Tip: Using Font Awesome 4 With Bootstrap 3';
    const POST_DESCRIPTION = 'This is a quick post on how to use Font Awesome 4 With Bootstrap 3 on your pages.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This is a quick post on how to use <a className="underline focus:ring-2" href="http://fontawesome.io/" rel="nofollow noreferrer">Font Awesome</a> with Bootstrap 3.</p>
                <p>First, these examples will be using the Font Awesome CDN. Alternatively, there are many other ways to include in your project. Visit their website at: <a className="underline focus:ring-2" href="https://fontawesome.com/v4.7/get-started/" rel="nofollow noreferrer">fontawesome.com Getting Started</a> page.</p>
                <p>To use font-awesome, you will need to have a customized version of the latest version of Bootstrap 3 &quot;Without icons&quot;. This blog shows two ways to you can accomplish this.</p>
                <h2>Bootstrap CDN:</h2>
                <p>The first way is to use the Official bootstrap CDN with no Glyphicons included.</p>
                <PrismCode
                    code={code}
                    language="html"
                    plugins={["line-numbers"]}
                />

                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://github.com/jennifert/JavaScript-Demos/blob/master/Bootstrap/fontawesome_bootstrap3.html" rel="nofollow noreferrer">Download full page code on JavaScript Github Repo</a></li>
                </ul>

                <h2>Custom Bootstrap CSS</h2>
                <p>The second way is to <a className="underline focus:ring-2" href="https://getbootstrap.com/docs/3.4/customize/">configure your own download</a>. The steps are under: &quot;LESS files&quot; &gt; &quot;Components&quot; (middle column) &gt; Uncheck &quot;Glyphicons&quot;.</p>
                <p>Enter in any other information (or remove JS not being used), and then scroll to the bottom of the page and click &quot;Compile and download&quot;.</p>
                <PrismCode
                    code={code2}
                    language="html"
                    plugins={["line-numbers"]}
                />

                <h2>Notes:</h2>
                <p>Bootstrap 3 requires IE9+ or latest Safari, Chrome, or Firefox. Font Awesome 5 has issues with @font-face in IE 8 and does not support IE 7 (read the  <a className="underline focus:ring-2" href="https://fontawesome.com/v4.7/get-started/" rel="nofollow noreferrer">Getting Started</a> page near the bottom to read more).</p>
                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://getbootstrap.com/docs/3.4/css/#forms" rel="nofollow noreferrer">Bootstrap 3: forms</a></li>
                    <li><a className="underline focus:ring-2" href="https://fontawesome.com/v4.7/examples/" rel="nofollow noreferrer">Font-Awesome 4: Examples</a></li>
                    <li><a className="underline focus:ring-2" href="https://github.com/MaxCDN/bootstrap-cdn/issues/180" rel="nofollow noreferrer">Found CDN for no icons from github Issue Post.</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.bootstrapcdn.com/" rel="nofollow noreferrer">Bootstrap CDN</a></li>
                </ul>
            </section>
        </Layout>
    )
}
