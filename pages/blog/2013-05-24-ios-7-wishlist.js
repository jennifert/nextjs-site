import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

// Metadata for the post
export const POST_TITLE = 'iOS 7 Wishlist';
export const POST_DESCRIPTION = 'Here is a wishlist of things that would be great to have in iOS 7.';
export const POST_TAGS = ['ios', 'wishlist']

export default function IosListSeven() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2013-05-24'

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
                    pathname={router?.pathname || '/blog/2013-05-24-ios-7-wishlist'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Here is a wishlist of things that would be great to have in iOS 7.</p>
                <h2>Videos:</h2>
                <ul className="list-disc list-inside m-2">
                    <li>bring back playlists</li>
                    <li>allow video playback when app minimized</li>
                    <li>allow others video apps to playback files that have DRM.</li>
                    <li>allow editing of tv episode date added, etc.</li>
                </ul>
                <h2>Built in apps:</h2>
                <ul className="list-disc list-inside m-2">
                    <li>give ability to turn off or hides apps like stocks, weather, contacts separate app (which is already in the phone portion)</li>
                    <li>move clock app to when you touch the time on screen</li>
                </ul>
                <h2>Camera roll:</h2>
                <ul className="list-disc list-inside m-2">
                    <li>Bulk delete pictures....enough said.</li>
                </ul>
                <h2>Books</h2>
                <ul className="list-disc list-inside m-2">
                    <li>In iTunes sync, button to uncheck/recheck all checkboxes</li>
                </ul>

            </section>
        </Layout>
    )
}
