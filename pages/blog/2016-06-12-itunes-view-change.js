import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'

export default function ItunesView() {
    const POST_TITLE = 'Change your iTunes media view mode';
    const POST_DESCRIPTION = 'In the latest iTunes release, there has been quite a few tweaks to the interface. One option that has moved is the change view in playlist.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>In the latest iTunes release, there has been quite a few tweaks to the interface. One option that has moved is the change view in playlist. This post describes how to change this.</p>
                <p>The latest version defaults all playlist views to “playlist”, which is fine for most people, but I am not a fan of cover art so the “songs view” (which is basically a list) is my favorite.</p>
                <p>To change this click on “View” &gt; “View as” &gt; “Songs”. After songs is selected, you should see just a list of songs.</p>

                <Image
                    src="/blog/2016-06-12-itunes-view-change/itunes-View-Thumb.png"
                    alt="Preview of instructions"
                    width={400}
                    height={426}
                    priority={true}
                />
                
            </section>
        </Layout>
    )
}
