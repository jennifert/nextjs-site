import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import Image from 'next/image'

// Metadata for the post
export const POST_TITLE = 'Using RasPlex for your Media Server';
export const POST_DESCRIPTION = 'Currently outdated: A post on building a raspberry pi media centre.';
export const POST_TAGS = ['server', 'pi', 'streaming']

export default function RasPlexOS() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2014-04-24'

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
                    pathname={router?.pathname || '/blog/2014-04-24-rasplex-media-server'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p className="alert-warning">
                    <small>
                        Outdated: This post is currently outdated and in the queue for a full overhaul. It builds on an earlier post about&nbsp;
                        <Link href="/blog/2013-09-05-a-look-at-raspmbc-video-streaming" className="underline focus:ring-2">
                            Raspmbc video streaming
                        </Link>.
                        &nbsp;RasPlex requires Plex Media Server, which is free and includes various online channels.
                    </small>
                </p>

                <p>After trying quite a few Raspberry Pi operating systems and configurations, the new <a className="underline focus:ring-2" href="http://www.RasPlex.com/" rel="nofollow noreferrer">RasPlex</a> is my choice for my home media centre. RasPlex was the best system which supports out of the box: WiFi, Bluetooth, hdmi monitor with analog speakers, and more. The best thing is the entire process took only 15 minutes!</p>

                <h2>Set-up the SD card</h2>
                <p>The first step is to <a className="underline focus:ring-2" href="https://www.rasplex.com/get-started/rasplex-installers.html" rel="nofollow noreferrer">download the installer</a> for your Operating System onto your computer. They have installers available for Mac, Linux, and Windows, please be sure to read the notes on how to mount the installer.</p>
                <p>Now, you select the version of RasPlex you want, and then select your SD card drive (check disk utility for the name if your not sure). Finally, press &quot;update links&quot;, and when that is down &quot;click download&quot;. It will ask you the location of the download, then when will display the download progress in the terminal. Once your all set-up, then press &quot;Write SD card&quot;.</p>
                <Image
                    src="/blog/2014-04-24-rasplex-media-server/rasplex-1.png"
                    alt="A sample of the Installer running"
                    width={636}
                    height={633}
                    priority={false}
                />
                <h2>Set-Up your Raspberry Pi</h2>
                <p>Make sure all your devises (even Bluetooth and Wi-Fi) are connected, then boot your machine. Let it run the initial set-up, and reboot itself.</p>
                <p>Once it reboots, follow the on screen instructions for set-up (note that only your keyboard will work so far). Some of the set-up options include: Blue-tooth, WI-Fi, your Plex Media Server.</p>
                <p>When you see the menu, press the left keyboard arrow to get to your settings, this is where you can set-up your audio settings, ssh access, and more. At set-up it will choose HDMI audio, just select analog to use stereo speakers.</p>
                <Image
                    src="/blog/2014-04-24-rasplex-media-server/RasPlex-2.jpg"
                    alt=""
                    width={500}
                    height={333}
                    priority={false}
                />
                <p>That&apos;s it! This this helps other people as well.</p>

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://github.com/RasPlex/RasPlex/wiki/Guides" rel="nofollow noreferrer">RasPlex Github Guides Pages</a></li>
                    <li><a className="underline focus:ring-2" href="https://www.RasPlex.com/docs/setup.html" rel="nofollow noreferrer">Official RasPlex Set-Up</a></li>
                </ul>
            </section>
        </Layout>
    )
}
