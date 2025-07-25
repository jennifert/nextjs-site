import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
// be sure to require once the API wrapper.
function email_alert() {
    //campaign monitor code
}
add_filter ( 'publish_post', 'email_alert' );
`.trim();

// Metadata for the post
export const POST_TITLE = 'Quick Tip: WordPress and Campaign Monitor';
export const POST_DESCRIPTION = 'Just a quick and easy way to integrate your campaign monitor list.';
export const POST_TAGS = ['php', 'wordpress']

export default function WordpressCm() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2017-01-07'

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
                    pathname={router?.pathname || '/blog/2017-01-07-word-press-and-campaign-monitor'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Just a quick and easy way to integrate your campaign monitor list.</p>
                <h2>Adding a subscribe form to your site</h2>
                <p>The easiest way, is to use the WordPress text widget, and then paste in the campaign monitor built form code into it. To get a form, go to your list in campaign monitor, and click &quot;Grow your audience&quot;. Next, click &quot;Copy/paste a form to your site&quot;. Select the list(s) that you want, and then click generate code.  This will provide the form code to put into your blog. You can later customize the settings like confirmation, thank you note, etc.</p>
                <h2>E-mail subscribers</h2>
                <p>When this post was first typed out, the &quot;automation&quot; functionality was not yet in Campaign Monitor. Integrating with automation is the suggested way to include into WordPress. Its using the Campaign monitor directly, and you are not adding bulk to your theme files and site.</p>
                <h3>Campaign Monitor automation</h3>
                <p>The Automation functionality in Campaign Monitor can read and parse RSS feeds. First, make sure to add the &quot;<a className="underline focus:ring-2" href="https://www.campaignmonitor.com/create/rss-to-email/" rel="nofollow noreferrer">RSS to Email</a>&quot; tags into your template, and <a className="underline focus:ring-2" href="https://help.campaignmonitor.com/create-a-subscriber-list" rel="nofollow noreferrer">create your list</a> (as you normally would). Next <a className="underline focus:ring-2" href="https://help.campaignmonitor.com/recurring-rss-to-email-campaigns" rel="nofollow noreferrer">follow Campaign Monitor&apos;s guide</a> for email automation, using the list and template mentioned earlier. That&apos;s it!</p>
                <h3>No RSS/Atom feed</h3>
                <p>Add the <a title="Campaign Monitor Wrapper for PHP" href="https://campaignmonitor.github.io/createsend-php/" rel="nofollow noreferrer">Campaign Monitor Wrapper for PHP</a> into the themes directory for you to be able to access the functionality. Next, use the &quot;create a draft campaign&quot; and &quot;Sending a draft campaign&quot; to send an email. This code should go into your functions.php file like below:</p>
                <PrismCode
                    code={code}
                    language="php"
                    plugins={["line-numbers"]}
                />

                <h2>Integrating with other languages and systems</h2>
                <p>For the most part, the instructions would be similar. Though, may need to choose a different <a className="underline focus:ring-2" href="https://www.campaignmonitor.com/api/wrappers/" rel="nofollow noreferrer">API Wrapper</a> for the language you will be using (if you are not using an atom/rss feed).</p>

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://wordpress.org/support/topic/add_action-with-publish_post/" rel="nofollow noreferrer">Wordpress.org support: Publish actions</a></li>
                    <li><a className="underline focus:ring-2" href="https://www.campaignmonitor.com/api/" rel="nofollow noreferrer">Campaign Monitor API Documentation</a></li>
                </ul>
            </section>
        </Layout>
    )
}
