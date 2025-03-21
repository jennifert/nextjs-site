import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'

const blogLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/blog${src}?w=${width}&q=${quality || 75}`
}

export default function RasPlexOS() {
    const POST_TITLE = 'Using RasPlex for your Media Server';
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} - ${BLOG_TITLE} -  ${SITE_TITLE}`}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p><b>Important:</b> This post is outdated, and is in the queue for an overhaul.</p>
                <p>After trying quite a few Raspberry Pi operating systems and configurations, the new <a className="underline focus:ring-2" href="http://www.RasPlex.com/" rel="nofollow noreferrer">RasPlex</a> is my choice for my home media centre. RasPlex was the best system which supports out of the box: WiFi, Bluetooth, hdmi monitor with analog speakers, and more. The best thing is the entire process took only 15 minutes!</p>
                <p><small>Note: This is an update to the <a className="underline focus:ring-2" href="https://web.archive.org/web/20210318194931/http://jenntesolin.com/blog/2013/09/05/a-look-at-raspmbc-video-streaming/" rel="nofollow noreferrer">Raspmbc set-up article</a>. RasPlex also requires the use of Plex Media Server which is also free, and easily connects to iTunes and various channels.<br /></small></p>
                <h2>Set-up the SD card</h2>
                <p>The first step is to <a className="underline focus:ring-2" href="https://www.rasplex.com/get-started/rasplex-installers.html" rel="nofollow noreferrer">download the installer</a> for your Operating System onto your computer. They have installers available for Mac, Linux, and Windows, please be sure to read the notes on how to mount the installer.</p>
                <p>Now, you select the version of RasPlex you want, and then select your SD card drive (check disk utility for the name if your not sure). Finally, press &quot;update links&quot;, and when that is down &quot;click download&quot;. It will ask you the location of the download, then when will display the download progress in the terminal. Once your all set-up, then press &quot;Write SD card&quot;.</p>
                <Image
                    loader={blogLoader}
                    src="/rasplex-1_u1zwoh.png"
                    alt="A sample of the Installer running"
                    width={636}
                    height={633}
                />
                <h2>Set-Up your Raspberry Pi</h2>
                <p>Make sure all your devises (even Bluetooth and Wi-Fi) are connected, then boot your machine. Let it run the initial set-up, and reboot itself.</p>
                <p>Once it reboots, follow the on screen instructions for set-up (note that only your keyboard will work so far). Some of the set-up options include: Blue-tooth, WI-Fi, your Plex Media Server.</p>
                <p>When you see the menu, press the left keyboard arrow to get to your settings, this is where you can set-up your audio settings, ssh access, and more. At set-up it will choose HDMI audio, just select analog to use stereo speakers.</p>
                <Image
                    loader={blogLoader}
                    src="/RasPlex-2_hnoita.jpg"
                    alt=""
                    width={500}
                    height={333}
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
