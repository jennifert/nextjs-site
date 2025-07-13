import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

export const POST_TITLE = 'Moving a WordPress blog';
export const POST_DESCRIPTION = 'This post will describe various ways to move WordPress, either to a different server or to Jekyll.';
export const POST_TAGS = ['php', 'wordpress', 'migrate']

export default function MovingWordpress() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2014-09-24'

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
                    pathname={router?.pathname || '/blog/2014-09-24-Moving-a-WordPress-Blog'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This post will describe various ways to move WordPress, either to a different server or to Jekyll.</p>

                <h2>Steps to make an exact copy</h2>

                <p>This includes all plugins, themes, posts, etc.</p>

                <ol className="list-decimal list-inside m-2">
                    <li>download a copy of the database and save somewhere. Once downloaded, make a copy as a backup in case something goes wrong.</li>
                    <li>do a search in the sql file for the current domain URL and replace with the new domain</li>
                    <li>update the site location in the wp-config file.</li>
                    <li>import the MySQL database and add the user at the new location.</li>
                    <li>upload your WordPress files and test.</li>
                </ol>

                <p>I have tried other various methods including web applications, but those have caused problems such as not completely disconnecting the databases - You will need to be sure that ALL URL references have been changed. In one instance WordPress core upgrade to the copied version, had also upgraded the first one as well since one reference was missed.</p>

                <h2>The safest way to move (but not exact)</h2>

                <ol className="list-decimal list-inside m-2">
                    <li>download a copy of your themes, and plugins</li>
                    <li>download an export of your post files. If your using a multi-site, you will need to do this for each blog.</li>
                    <li>download a fresh copy of WordPress, and set up your plug-ins and themes.</li>
                    <li>import posts, map users making sure to check the box to download linked media.</li>
                </ol>

                <h2>Moving to Jekyll</h2>

                Check out&nbsp;
                <Link href="/blog/2019-12-11-Jekyll-Set-Up-Publish" className="underline focus:ring-2">
                    Jekyll: Setting up your development environment
                </Link>.
            </section>
        </Layout>
    )
}
