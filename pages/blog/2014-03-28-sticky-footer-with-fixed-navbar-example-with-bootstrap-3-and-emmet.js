import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
html:5>(div.navbar.navbar-default.navbar-fixed-top>div.container>div.navbar-header>btn:r.navbar-toggle>span.sr-only{Toggle navigation}+span.icon-bar+span.icon+span.icon^a.navbar-brand{Welcome!}^div.collapse.navbar-collapse>ul.nav.navbar-nav>li*3>a^li.dropdown>a.dropdown-toggle{Dropdown }>b.caret^ul.dropdown-menu>li*3>a^li.divider+li.dropdown-header{Nav Header}+li*3>a^^^^^^^div.container>div.page-header>h1{Page Header Heer}^p.lead>lorem^^div#footer>div.container>p.text-muted{Copy Right Info}^^script:src{js/jquery-1.11.0.min.js}+script:src{js/bootstrap.min.js})
`.trim();

const code2 = `
meta:vp+link:favicon+meta:compat+link:css{css/bootstrap.min.css}+link:css
`.trim();

const code3 = `
<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
`.trim();

// Metadata for the post
export const POST_TITLE = 'Creating the Sticky footer with fixed navbar example with Bootstrap 3 using Emmet.IO';
export const POST_DESCRIPTION = 'This post describes how to use Emmet short codes to quickly create the bootstrap example Sticky footer with fixed navbar.';
export const POST_TAGS = ['css', 'bootstrap', 'emmet']

export default function EmmetBootStrapStickyFooter() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2014-03-28'

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
                    pathname={router?.pathname || '/blog/2014-03-28-sticky-footer-with-fixed-navbar-example-with-bootstrap-3-and-emmet'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This post describes how to use <a className="underline focus:ring-2" href="https://emmet.io/" rel="nofollow noreferrer">Emmet</a> short codes to quickly create the bootstrap example: <a className="underline focus:ring-2" href="https://getbootstrap.com/docs/3.4/examples/sticky-footer-navbar/" rel="nofollow noreferrer">Sticky footer with fixed navbar</a> using Bootstrap 3.  Feel free to read and implement suggestions.</p>

                <h2>Step 1: Set up: Set up html, and body content, js</h2>
                <h3>Emmet Code</h3>
                
                <PrismCode
                    code={code}
                    language="textile"
                    plugins={["line-numbers"]}
                />
                <p>There are some limitations with Emmet, such as not being able to define JavaScript source location. We will need to make some tweaks.</p>

                <h3>Tweaking the output</h3>
                <p>For this specific code, we will need to:</p>
                <ol className="list-decimal list-inside m-2">
                    <li>Add <code>role=navigation</code> to: navbar.navbar-default.navbar-fixed-top</li>
                    <li>At the toggle navigation <code>&lt;button&gt;</code> add: <code>data-toggle=&quot;collapse&quot; data-target=&quot;.navbar-collapse&quot;</code></li>
                    <li>Add your link to under: navbar-brand</li>
                    <li>Add link, text and active item to: nav.navbar-nav remove</li>
                    <li>In same class as above but in dropdown dropdown-toggle, add data-toggle=&quot;dropdown&quot;</li>
                    <li>Edit h1 tag in: page-header class div</li>
                    <li>Update copyright information</li>
                    <li>Move js path that&apos;s between script tags to src=&quot;&quot;</li>
                </ol>

                <h2>Step 2: Insert the rest of the header information</h2>
                <h3>Emmet Code</h3>
                <p>Next, we will be using some edit code to fill in the header tags. Please note that you will need to place your courser under the <b>title</b> tag.</p>
                <PrismCode
                    code={code2}
                    language="textile"
                    plugins={["line-numbers"]}
                />
                <h3>Tweaking the output</h3>
                <p>Now we will need to make some tweaks to our code.</p>
                <ol className="list-decimal list-inside m-2">
                    <li>Favicon.ico if needed</li>
                    <li>Change <code>ie=7</code> to <code>ie=edge</code> in meta tag.</li>
                    <li>In the style.css where you bootstrap is nested in, cut and paste the bootstrap style sheet in place of styles.css.</li>
                    <li>In between the updated bootstrap css and styles.css, paste your conditional comments.
                        <PrismCode
                            code={code3}
                            language="html"
                            plugins={["line-numbers"]}
                        />
                    </li>
                    <li>In the file styles.css paste the bootstrap example styles from the <a className="underline focus:ring-2" href="https://getbootstrap.com/docs/3.4/examples/sticky-footer-navbar/sticky-footer-navbar.css" rel="nofollow noreferrer">Bootstrap example css file</a></li>
                    {/* https://wayback-api.archive.org/web/20250711171355/https://getbootstrap.com/docs/3.4/examples/sticky-footer-navbar/sticky-footer-navbar.css */}
                </ol>
            </section>
        </Layout>
    )
}
