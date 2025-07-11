import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function AndroidAndIos() {
    const POST_TITLE = 'Using iOS and Android devices together';
    const POST_DESCRIPTION = 'Using an Android in an Apple environment can be a bit tricky, but here are some tricks and resources to help you out.';
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
                        Note: This is an updated version of a&nbsp;
                        <a className="underline focus:ring-2" href="https://web.archive.org/web/20250711152322/https://jenntesolin.com/blog/2018-09-26-using-ios-and-android-together.html">
                            post from Sept. 26, 2018
                        </a>
                    </small>
                </p>
                <p>Using an Android in an Apple environment can be a bit tricky, but here are some tricks and resources to help you out. This post is an update to one titled &quot;Moving from an iOS Device to Android (iCloud)&quot;.</p>
                <p>I am not in partnership or sponsored in anyway by the below programs, they are what I have researched and used over the years.</p>
                <h2>Calendar and Contacts</h2>
                <p>
                    The most reliable way to sync your calendar and contacts between Apple and Android devices is to use your Google account as the central source, rather than syncing directly with iCloud.
                </p>
                <p>
                    On your Apple devices, you can add your Google account in:
                </p>
                <ul className="list-disc list-inside m-2">
                    <li><strong>Calendar:</strong> Go to <em>Settings &gt; Calendar &gt; Accounts</em> and add your Google account. Your Google calendar events will appear directly in the iOS/macOS Calendar app.</li>
                    <li><strong>Contacts:</strong> Go to <em>Settings &gt; Contacts &gt; Accounts</em> and add your Google account. You can choose to sync Google Contacts directly into your Contacts app.</li>
                </ul>
                <p>
                    Once this is set up, all events and contacts will sync automatically across Android and Apple devices through your Google account — no third-party apps needed. This method avoids compatibility issues with older CalDAV/CardDAV sync tools, which may no longer work reliably.
                </p>
                <p>
                    <strong>Note:</strong> Older apps like SmoothSync for Contacts and Calendar previously allowed iCloud sync on Android via CalDAV/CardDAV, but most are no longer reliable or supported as of recent Android and iOS versions.
                </p>
                <h2>iCloud Mail Sync</h2>
                <p>The easiest way to sync  your settings is to use this <a className="underline focus:ring-2" href="https://support.apple.com/en-us/HT202304" title="Imap settings for iCloud" rel="nofollow noreferrer">IMAP email guide</a> from apple. You will need to generate an app-specific password for your client. <a className="underline focus:ring-2" href="https://www.androidcentral.com/how-set-your-icloud-email-account-android" rel="nofollow noreferrer">AndroidCentral</a> has a few notes on getting around any SSL issues (try TSL)</p>

                <h2>iTunes / Apple Music on Android</h2>
                <h3>Apple Music</h3>
                <p>
                    If you use Apple Music or have an iTunes library and are using an Android device, there are two main ways to access your music:
                </p>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <a className="underline focus:ring-2" href="https://play.google.com/store/apps/details?id=com.apple.android.music" rel="nofollow noreferrer">Apple Music for Android</a>
                    </li>
                </ul>
                <p>This official app from Apple lets you stream your Apple Music subscription and access your purchased tracks from iTunes (if iCloud Music Library is enabled).</p>
                <h3>iTunes Library Sync</h3>
                <p>
                    To sync your iTunes library, there are still functional tools originally created by JRT Studio that let you transfer and play your music on Android.  These programs also work if installed from the <a className="underline focus:ring-2" href="https://www.howtogeek.com/232726/how-to-install-the-google-play-store-on-your-amazon-fire-tablet/" rel="nofollow noreferrer">Google Play Store on an Amazon Fire device (2014+)</a>, or directly from the Amazon Appstore.
                </p>

                <p>
                    <strong>Ownership note:</strong> <a className="underline focus:ring-2" href="https://mumastudios.com/" rel="nofollow noreferrer">MumaStudios</a> acquired the iSyncr and Rocket Player apps from JRT Studio in 2022 and now handles their support and development.
                </p>

                <ul className="list-disc list-inside m-2">
                    <li>
                        <a className="underline focus:ring-2" href="https://play.google.com/store/apps/details?id=iTunes.Sync.Android" rel="nofollow noreferrer">iSyncr</a>: Used to move files, playlists, and metadata from your iTunes library to your Android device. Requires installation on both your Mac and Android.
                    </li>
                    <li>
                        <a className="underline focus:ring-2" href="https://play.google.com/store/apps/details?id=com.jrtstudio.AnotherMusicPlayer" rel="nofollow noreferrer">Rocket Player</a>: A full-featured music player that integrates with iSyncr. Supports casting and a wide range of formats, though some require a premium license (ALAC, TTA, APE, MPC, WAV, FLAC, WV, WMA).
                    </li>
                </ul>

                <p>
                    <strong>Note:</strong> DRM-protected video files from iTunes still won’t play on Android devices. Only audio files that are DRM-free or synced via Apple Music/iCloud Music Library will work cross-platform.
                </p>

            </section>
        </Layout>
    )
}
