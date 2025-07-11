import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function PiProjects() {
    const POST_TITLE = 'Raspberry Pi: List of Projects and resource';
    const POST_DESCRIPTION = 'This post contains a list of resources and tips and tricks found while putting together my Raspmbc media centre.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p className="alert-warning">
                    <small>
                        Outdated: This post is outdated, and is in the queue for an overhaul. The links below have been double checked for accuracy, but are not the latest content.
                    </small>
                </p>
                <p>This post contains a list of resources and tips and tricks found while putting together my Raspmbc media centre.  Please note all links below are leaving this site.</p>
                <h2>Raspberry PI Info</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/"rel="nofollow noreferrer">RaspberryPi.org</a></li>
                    <li><a className="underline focus:ring-2" href="http://elinux.org/RPi_Hardware_Basic_Setup#Typical_Hardware_You_Will_Need">Typical Equipment</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/quick-start-guide">Quick start guide</a></li>
                    <li><a className="underline focus:ring-2" href="http://elinux.org/RPi_Hub"rel="nofollow noreferrer">RPI Hub</a></li>
                </ul>
                <h2>Other Guides</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="http://lifehacker.com/5976912/a-beginners-guide-to-diying-with-the-raspberry-pi"rel="nofollow noreferrer">A Beginner&apos;s Guide to DIYing</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/phpBB3/viewforum.php?f=15"rel="nofollow noreferrer">Raspberry Pi: Project listings</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/phpBB3/viewtopic.php?f=76&amp;t=48364"rel="nofollow noreferrer">Without Monitor - setup</a></li>
                    <li><a className="underline focus:ring-2" href="http://lifehacker.com/5978594/turn-a-raspberry-pi-into-an-airplay-receiver-for-streaming-music-in-your-living-room">Airplay Receiver with iOS6 support</a></li>
                    <li><a className="underline focus:ring-2" href="http://lifehacker.com/build-your-own-portable-raspberry-pi-emulation-machine-836727686"rel="nofollow noreferrer">Build Your Own Portable Raspberry Pi Emulation Machine</a></li>
                    <li><a className="underline focus:ring-2" href="http://lifehacker.com/roll-your-own-anonymizing-tor-proxy-with-a-raspberry-pi-513525281"rel="nofollow noreferrer">Roll Your Own Anonymizing Tor Proxy with a Raspberry Pi</a></li>
                    <li><a className="underline focus:ring-2" href="http://lifehacker.com/5993735/get-your-retro-game-on-with-a-raspberry-pi+powered-gaming-machine"rel="nofollow noreferrer">Relive Your Favorite DOS Games with a Raspberry Pi-Powered Gaming Machine</a></li>
                    <li><a className="underline focus:ring-2" href="http://arstechnica.com/information-technology/2012/12/10-raspberry-pi-creations-that-show-how-amazing-the-tiny-pc-can-be/"rel="nofollow noreferrer">10 Raspberry Pi creations that show how amazing the tiny PC can be</a></li>
                    <li><a className="underline focus:ring-2" href="http://arstechnica.com/gaming/2012/11/yes-the-raspberry-pi-will-run-minecraft/"rel="nofollow noreferrer">Yes, the Raspberry Pi will run Minecraft</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/phpBB3/viewtopic.php?t=31808&amp;p=360958"rel="nofollow noreferrer">Air Video Server - Stream Video to IPad</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.makeuseof.com/tag/three-ways-to-display-your-raspberry-pi-on-a-monitor-or-tv/"rel="nofollow noreferrer">3 Ways to Display Your Raspberry Pi On a Monitor Or TV</a></li>
                    <li><a className="underline focus:ring-2" href="http://jack.minardi.org/raspberry_pi/replace-dropbox-with-bittorrent-sync-and-a-raspberry-pi/"rel="nofollow noreferrer">Replace Dropbox with BitTorrent Sync and a Raspberry Pi</a></li>
                </ul>
                <h2>Troubleshooting</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/phpBB3/viewtopic.php?f=30&amp;t=15327">omxplayer download &amp; install</a> (and how to use via command line)</li>
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/phpBB3/viewtopic.php?t=17598#p176433"rel="nofollow noreferrer">Playing DVD&apos;s (and Bluray)</a></li>
                    <li><a className="underline focus:ring-2" href="http://raspi.tv/2012/watch-encrypted-dvd-on-raspberry-pi-by-streaming-to-omxplayer"rel="nofollow noreferrer">Watch encrypted DVD on Raspberry Pi by streaming to omxplayer</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/phpBB3/viewtopic.php?f=35&amp;t=17877"rel="nofollow noreferrer">Play DVD disks on RaspBMC - HOWTO</a></li>
                </ul>
                <h2>Kits and Accesses</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://thepihut.com/collections/raspberry-pi-store"rel="nofollow noreferrer">Basic Raspberry Pi Set-Up Kit</a></li>
                    <li><a className="underline focus:ring-2" href="http://arstechnica.com/gadgets/2012/05/raspberry-pi-foundation-demos-14mp-camera-module-for-35-computer/"rel="nofollow noreferrer">Raspberry Pi foundation demos 14MP camera module for $35 computer</a></li>
                </ul>
                <h2>Media Streaming Info and resources</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="http://rasplex.com/"rel="nofollow noreferrer">Rasplex</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.raspbmc.com/"rel="nofollow noreferrer">Raspmbc</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.macocd.com/styled/styled-4/index.html"rel="nofollow noreferrer">Setting up a Raspberry Pi as an XBMC Device using RaspBMC</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/phpBB3/viewtopic.php?f=35&amp;t=31102&amp;start=25"rel="nofollow noreferrer">Discussion: Netflix on Raspbmc</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.makeuseof.com/tag/the-raspberry-pi-home-theater-what-you-can-and-cannot-do/"rel="nofollow noreferrer">The Raspberry Pi Home Theater: What You Can And Cannot Do</a></li>
                    <li><a className="underline focus:ring-2" href="http://wiki.xbmc.org/?title=Add-on%3aPleXBMC"rel="nofollow noreferrer">Raspmbc add on: plexmbx</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.playon.tv/"rel="nofollow noreferrer">PlayOn: For RaspMBC netflix and Hulu Streaming (without Plex)</a></li>
                </ul>
                <h2>Other Builds (please read all Build Documentation)</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="http://androidpi.wikia.com/wiki/Android_Pi_Wiki"rel="nofollow noreferrer">Android Pi</a></li>
                </ul>
            </section>
        </Layout>
    )
}
