import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function AndroidAndIos() {
    const POST_TITLE = 'Using iOS and Android devices together';
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} - ${BLOG_TITLE} -  ${SITE_TITLE}`}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Using an android in an Apple environment can be a bit tricky, but here are some tricks and resources to help you out. This post is an update to one titled &quot;Moving from an iOS Device to Android (iCloud)&quot;.</p>
                <p>I am not in partnership or sponsored in anyway by the below programs, they are what I have researched and used over the years.</p>
                <h2>Calendar</h2>
                <p><a className="underline focus:ring-2" href="https://play.google.com/store/apps/details?id=org.dmfs.caldav.icloud" rel="nofollow noreferrer">SmoothSync for Cloud Calendar</a>: SmoothSync for Cloud Calendar syncs your iCloud calendars and reminders. Please note this is for Apple Calendars, it will not sync events from your Google Calendar to your Mac.</p>
                <p>Note from July 21, 2021: Recent reviews are poor for this app, and similar competing ones. For now, you may need to export and import between them.</p>
                <h2>Contacts</h2>
                <p><a className="underline focus:ring-2" href="https://play.google.com/store/apps/details?id=org.dmfs.carddav.icloud" rel="nofollow noreferrer">SmoothSync for Cloud Contacts</a>: SmoothSync for Cloud Contacts syncs your iCloud contacts.</p>
                <p>Note from July 21, 2021: Recent reviews are poor for this app, and similar competing ones. For now, you may need to export and import between them.</p>
                <h2>iCloud Mail Sync</h2>
                <p>The easiest way to sync  your settings is to use this <a className="underline focus:ring-2" href="https://support.apple.com/en-us/HT202304" title="Imap settings for iCloud" rel="nofollow noreferrer">IMAP email guide</a> from apple. You will need to generate an app-specific password for your client. <a className="underline focus:ring-2" href="https://www.androidcentral.com/how-set-your-icloud-email-account-android" rel="nofollow noreferrer">AndroidCentral</a> has a few notes on getting around any SSL issues (try TSL)</p>
                <h2>iTunes Library Sync</h2>
                <p>To sync your library, there are excellent products from JRT Studio to sync and play your files. Please note though, that the video files purchased in the iTunes store will not play on your android device due to the DRM used. The program also works when you install from <a className="underline focus:ring-2" href="https://www.howtogeek.com/232726/how-to-install-the-google-play-store-on-your-amazon-fire-tablet/" rel="nofollow noreferrer">Google Play store on an Amazon Fire device (2014+)</a> (its also on the Amazon Store).</p>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://www.jrtstudio.com/iSyncr-iTunes-for-Android" rel="nofollow noreferrer">iSyncer</a>: This program is used to move the files from your iTunes library to your device. You will need to download a copy on your android and a copy on your Mac.</li>
                    <li><a className="underline focus:ring-2" href="https://www.jrtstudio.com/RocketPlayer/Free-vs-premium-and-cloud" rel="nofollow noreferrer">Rocket player</a>: this program will allow you to play your files and cast them, though you will need to have the also install a premium license to play all file formats (alac, tta, ape, mpc, wav, flac, wv, wma).</li>
                </ul>
            </section>
        </Layout>
    )
}
