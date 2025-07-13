import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

// Metadata for the post
export const POST_TITLE = 'Setting up Bluetooth on the Raspberry Pi';
export const POST_DESCRIPTION = 'Setting up a bluetooth dongle can be quite interesting when using Raspmbc. Here is a guide on setting up.';
export const POST_TAGS = ['pi', 'bluetooth']

export default function BluetoothPi() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2014-03-17'

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
                    pathname={router?.pathname || '/blog/2014-03-17-setting-up-bluetooth-on-the-raspberry-pi'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p className="alert-warning">
                    <small>
                        Outdated: This post is under review for accuracy.
                    </small>
                </p>
                <p>Setting up a bluetooth dongle can be quite interesting when using Raspmbc. Here is a guide on setting up.</p>
                <h2>Requirements:</h2>
                <ul>
                    <li>Raspberry pi</li>
                    <li>Bluetooth dongle</li>
                    <li>Wifi or ethernet connected</li>
                </ul>
                <h2>Steps:</h2>
                <p>I found the <a className="underline focus:ring-2" href="https://web.archive.org/web/20140706151942/http://www.ctheroux.com/2012/08/a-step-by-step-guide-to-setup-a-bluetooth-keyboard-and-mouse-on-the-raspberry-pi/" rel="nofollow noreferrer">following guide</a> very helpful, however kept running into errors.</p>
                <p>To fix it, run the following command after rebooting and before in place of installing bluetooth:</p>
                <p><kbd>apt-get install obex-data-server<br />
                    apt-get ​install bluetooth bluez-utils blueman bluez-compat</kbd></p>
                <p>If you have tried in the past to install bluetooth, but its still broken, run the below command:</p>
                <p><kbd>sudo dpkg --configure -a</kbd></p>
                <p>Unfortunately, there where problems pairing the device with the error message being:</p>
                <i>Creating device failed: org.bluez.Error.AuthenticationRejected: Authentication Rejected</i>
                <p>So following another article, it is recommended to type in:</p>
                <p><kbd>sudo nano /usr/bin/bluez-simple-agent</kbd></p>
                <p>Now, in this file, change &quot;KeyboardDisplay&quot; with &quot;DisplayYesNo&quot;.</p>
                <h2>Note:</h2>
                <p>Some bluetooth items will not work on Raspmbc such as audio. It has been suggested (Raspberry pi official forums) to instead use OpenELEC or Xbian. </p>

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20140706151942/http://www.ctheroux.com/2012/08/a-step-by-step-guide-to-setup-a-bluetooth-keyboard-and-mouse-on-the-raspberry-pi/" rel="nofollow noreferrer">Step by step guide for setting up keyboard and mouse on Pi</a></li>
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20210127000542/http://www.correlatedcontent.com/blog/bluetooth-keyboard-on-the-raspberry-pi/" rel="nofollow noreferrer">Bluetooth keyboard on the Pi</a></li>
                </ul>
            </section>
        </Layout>
    )
}
