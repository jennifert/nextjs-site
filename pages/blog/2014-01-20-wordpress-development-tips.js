import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
$method = 'direct';
define('FS_METHOD','direct');
`.trim();

const code2 = `
define( 'WP_DEBUG', true );
`.trim();

// Metadata for the post
export const POST_TITLE = 'WordPress Development Tips';
export const POST_DESCRIPTION = 'A bunch of (possibly now outdated) WordPress Tips.';
export const POST_TAGS = ['php', 'wordpress']


export default function WordpressDevTips() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2014-01-20'

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
                    pathname={router?.pathname || '/blog/2014-01-20-wordpress-development-tips'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <h2>Stop WordPress updating by ftp message</h2>
                <p>As per the following post, &quot;<a className="underline focus:ring-2" href="https://sixfive.io/wordpress-needs-to-access-your-web-server-please-enter-your-ftp-credentials-to-proceed/" rel="nofollow noreferrer">WordPress needs access to your web server</a>&quot;, you can prevent WordPress for asking for your ftp credentials when requesting an update.</p>
                <p>Add the below lines to your wp.config.php file, just above &quot;/* That&apos;s all, stop editing! Happy blogging. *&quot;</p>
                <PrismCode
                    code={code}
                    language="php"
                    plugins={["line-numbers"]}
                />
                <h2>Fix any issues with your (or another) plugin</h2>
                <p>There is a great plugin called &quot;Log Deprecated Notices&quot; that aids in WordPress development.</p>
                <p>First, turn change WP_DEBUG to &quot;true&quot; in your wp.config.php file.</p>
                <PrismCode
                    code={code2}
                    language="php"
                    plugins={["line-numbers"]}
                />
                <p>Next, download the latest version from the <a className="underline focus:ring-2" href="http://wordpress.org/extend/plugins/log-deprecated-notices/" rel="nofollow noreferrer">Log Deprecated Notices plugin page</a>. Once installed, it will be under: Tools &gt; Deprecated Calls.</p>
                <p>The deprecated call and line number will be displayed, along with an alternative to fix.</p>
                <p>Note: It is only recommended to do the above in a development environment.</p>
            </section>
        </Layout>
    )
}
