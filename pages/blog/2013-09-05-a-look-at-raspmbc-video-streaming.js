import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function RaspMBC() {
    const POST_TITLE = 'A look at Raspmbc video streaming';
    const POST_DESCRIPTION = 'Outdated: A guide to video streaming on a raspberry pi.';
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
                        Outdated: This post is outdated, and is in the queue for an overhaul.
                    </small>
                </p>
                <p>The <a className="underline focus:ring-2" href="http://www.raspberrypi.org/faqs" rel="nofollow noreferrer">Raspberry Pi Foundation</a> described the pi as &quot;The Raspberry Pi is a credit-card sized computer that plugs into your TV and a keyboard. It&apos;s a capable little PC which can be used for many of the things that your desktop PC does, like spreadsheets, word-processing and games. It also plays high-definition video.&quot;. This post is to assist in setting up your Raspberry Pi With an XMBC build called Raspmbc.</p>
                <h2>Choosing the Modal</h2>
                <p>If you are going to be doing video streaming (especially over HDMI), it is recommended to buy the Version B. This is because. the modal has more memory than previous model, and has better video streaming. It can be purchased at any of the following sites:</p>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://www.amazon.ca/Raspberry-Pi-Model-Quad-Bluetooth/dp/B0899VXM8F/ref=sr_1_7?dchild=1&keywords=Raspberry+Pi+4+Model+B&qid=1619209356&s=electronics&sr=1-7" rel="nofollow noreferrer">Amazon.ca</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.farnell.com/pi/" rel="nofollow noreferrer">Element 14</a></li>
                    <li><a className="underline focus:ring-2" href="http://uk.rs-online.com/web/generalDisplay.html?id=raspberrypi" rel="nofollow noreferrer">RS</a></li>
                    <li>Also, be sure to check your local computer shop. While these are currently not being sold in big box stores, other smaller computer shops may have some in.</li>
                </ul>
                <h2>Storage/Operating System &quot;Drive&quot;</h2>
                <p>This mini computer does not have a traditional hard drive. Instead, it uses SD cards to house the operating system. It is also recommended to pick up a class 10 SD card (if you do not opt for the <a className="underline focus:ring-2" href="http://www.element14.com/community/docs/DOC-55184/l/raspberry-pi-8gb-sd-card-pre-installed-with-noobs" rel="nofollow noreferrer">noob package</a>). If your just using the machine for streaming, an 8 GB one should suffice, otherwise I believe the highest supported is 32 GB.</p>
                <p>Like me, you may have luck finding the other components needed to use the device around your house - the key is to mix and match. For example,  I found an old mini USB cable to USB port from an old hard drive, then connected that to my iPhone USB to wall plug (but for safely, when not in use, I power down the machine).</p>
                <p>Here is a list of all components.</p>
                <h3>Analog Tv Use:</h3>
                <ul className="list-disc list-inside m-2">
                    <li>Composite video cable</li>
                    <li>RCA audio cable</li>
                </ul>
                <h3>With HDMI:</h3>
                <ul className="list-disc list-inside m-2">
                    <li>HDMI cable only</li>
                    <li>HDMI (to __ device sold separately)</li>
                </ul>
                <h3>Everything:</h3>
                <ul className="list-disc list-inside m-2">
                    <li>Ethernet cable or Wireless USB</li>
                    <li>MicroUSB Cord</li>
                    <li>Optional: Usb to wall outlet</li>
                </ul>
                <h2>Install Raspmbc on your card.</h2>
                <p>Adding Raspmbc to your SD Card: <a className="underline focus:ring-2" href="https://osmc.tv/" rel="nofollow noreferrer">OSMBC site</a>.</p>
                <p>Now, plug your ad card into the slot on your Pi, and let it run. For some reason it did no like the mouse, so I went through the install steps with just a keyboard - USB worked great after.</p>
                <p>Now, for initial set-up, its recommended to use ssh to make initial configurations.</p>
                <h2>Initial commands</h2>
                <pre><kbd>
                    sudo apt-get update<br />
                    sudo apt-get upgrade<br />
                    sudo apt-get install ffmpeg
                </kbd></pre>
                <h2>Optional</h2>
                <p>Add your license keys to config.txt.</p>
                <h3>Some other settings to tweak on raspmbc are:</h3>
                <p>Video resolution: Settings &gt; System &gt; Video Output &gt; Resolution<br />
                Over clock: rograms &gt; Raspbmc Settings &gt; System Configuration &gt; System Performance Profile &gt; Fast<br />
                Enable airplay: System &gt; Network &gt; “Allow XBMC to receive <em>AirPlay</em> content<br />
                Turn of thumbnails: Settings &gt; Video &gt; File lists &gt; disable “Extract thumbnail and video information</p>
                <h3>Set-up PlayOn</h3>
                <p>Unfortunately, <a className="underline focus:ring-2" href="http://forum.xbmc.org/showthread.php?pid=1375570" rel="nofollow noreferrer">plex media centre</a> did not work with my set up, so for Netflix and other channels, I used playOn. It was around $50 (CAD) (about 30 US) and can work well on an XP virtual machine. I recommend testing only my media (free) before purchasing. The below is based on <a className="underline focus:ring-2" href="https://www.playon.tv/faq" rel="nofollow noreferrer">playOn&apos;s parallel&apos;s guide</a>.</p>
                <h4>Need:</h4>
                <h4>Set up Virtual Machine:</h4>
                <ol>
                    <li>Create an XP machine with 2GB RAM in &quot;bridge Networking - Auto-detect&quot; Mode and a static virtual disk (not expanding). Use at least a 16GB virtual disk. Playon Suggests utilizing 2 cores to stream.</li>
                    <li>Once XP is loaded, uninstall everything you don&apos;t need (MSN Browser, paint, games, etc.).</li>
                    <li>Right click on &quot;My computer&quot;, select Advanced settings - and set your settings to &quot;Best performance&quot;</li>
                    <li>Install the latest service packs and windows updates</li>
                    <li>Stop and disable indexing service.</li>
                    <li>Install PlayOn with default settings.</li>
                    <li>Restart your machine</li>
                </ol>
                <h4>Enable in Raspmbx:</h4>
                <ol>
                    <li>Basic: Files &gt; Add Videos... &gt; Browse &gt; UPnP Devices &gt; PlayOn... &gt; OK</li>
                </ol>
                <p>That&apos;s it. Hope it helps someone.</p>
                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a title="Used for extra info" href="http://elinux.org/RPi_Hardware_Basic_Setup#Typical_Hardware_You_Will_Need" rel="nofollow noreferrer">Equipment</a></li>
                    <li><a className="underline focus:ring-2" href="https://www.raspberrypi.com/documentation/" rel="nofollow noreferrer">Quick start guide</a></li>
                    <li><a className="underline focus:ring-2" href="https://www.rasplex.com/" rel="nofollow noreferrer">Rasplex</a></li>
                    <li><a className="underline focus:ring-2" href="https://osmc.tv/" rel="nofollow noreferrer">osmc</a></li>
                    <li>Setting up a Raspberry Pi as an XBMC Device using RaspBM</li>
                    <li><a className="underline focus:ring-2" href="http://www.raspberrypi.org/phpBB3/viewtopic.php?f=35&amp;t=31102&amp;start=25" rel="nofollow noreferrer">Discussion: Netflix on Raspbmc</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.makeuseof.com/tag/the-raspberry-pi-home-theater-what-you-can-and-cannot-do/" rel="nofollow noreferrer">The Raspberry Pi Home Theater: What You Can And Cannot Do</a></li>
                    <li><a className="underline focus:ring-2" href="http://wiki.xbmc.org/?title=Add-on%3aPleXBMC" rel="nofollow noreferrer">Raspmbc add on: plexmbx</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.playon.tv/" rel="nofollow noreferrer">PlayOn: For RaspMBC netflix and hulu Streaming (without Plex)</a></li>
                    <li><a className="underline focus:ring-2" href="http://lifehacker.com/5900626/create-a-kickass-seamless-play+everything-media-center-the-complete-guide" rel="nofollow noreferrer">Create a Kickass, Seamless, Play-Everything Media Center: The Complete Guide</a></li>
                </ul>
            </section>
        </Layout>
    )
}
