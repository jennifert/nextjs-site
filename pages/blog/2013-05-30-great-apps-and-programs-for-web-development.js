import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function TwentyThirteenWebApps() {
    const POST_TITLE = 'Great apps and programs for web development';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p><small className="alert-warning">Note from March 24, 2021: This is an older post, and has been flagged for an update as there are quite a few more apps out there. All links have been validated as working. Outdated links have been removed.</small></p>
                <p className="my-5">Below is a list of different applications I use to create my projects. While most have probably been seen before, I hope at least one is new...... Does anyone else want a sublime or notepadd++ mobile app?</p>
                <h2>Cross Platform Apps</h2>
                <ul className="list-disc px-5">
                    <li><a className="underline focus:ring-2" href="https://www.sourcetreeapp.com/"  rel="nofollow noreferrer">Source tree </a>- source code app</li>
                    <li><a className="underline focus:ring-2" href="https://www.sublimetext.com/"  rel="nofollow noreferrer">Sublime</a> - awesome text editor</li>
                    <li><a className="underline focus:ring-2" href="https://netbeans.apache.org/"  rel="nofollow noreferrer">Netbeans</a> - an IDE, currently use it in a Java course. Also has excellent php integration as well as JavaScript support</li>
                </ul>
                <h2>Windows Specific:</h2>
                <ul className="list-disc px-5">
                    <li><a className="underline focus:ring-2" href="https://notepad-plus-plus.org/"  rel="nofollow noreferrer">Notepad++</a></li>
                    <li><a className="underline focus:ring-2" href="https://winscp.net/"  rel="nofollow noreferrer">WinSCP</a></li>
                </ul>
                <h2>Mac Specific:</h2>
                <ul className="list-disc px-5">
                    <li><a className="underline focus:ring-2" href="https://codekitapp.com/"  rel="nofollow noreferrer">Code kit</a></li>
                    <li><a className="underline focus:ring-2" href="http://www.binarynights.com/"  rel="nofollow noreferrer">Fork Lift</a></li>
                    <li><a className="underline focus:ring-2" href="https://www.raynersw.com/netshade"  rel="nofollow noreferrer">Netshade</a></li>
                </ul>
                <h2>Web Apps and automation:</h2>
                <ul className="list-disc px-5">
                    <li><a className="underline focus:ring-2" href="https://yeoman.io/"  rel="nofollow noreferrer">Yeoman</a></li>
                    <li><a className="underline focus:ring-2" href="https://pastebin.com/"  rel="nofollow noreferrer">Paste bin</a></li>
                </ul>
                <h2>iOS apps:</h2>
                <ul className="list-disc px-5">
                    <li>JS anywhere</li>
                    <li>Pastebin</li>
                    <li>Evernote</li>
                    <li>Textastic</li>
                </ul>
                <h2>Guide:</h2>
                <ul className="list-disc px-5">
                    <li><a className="underline focus:ring-2" href="https://coolestguidesontheplanet.com/install-configure-apache-mysql-php-phpmyadmin-osx-10-8-mountain-lion/"  rel="nofollow noreferrer">Enabling built in Mountain lion web tools</a>: PHP, MySQL, Apache</li>
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20151024074313/http://apacheguide.org/"  rel="nofollow noreferrer">Apache Guide</a>: First and most comprehensive guide to install Apache, MySQL, etc. Please note that while its a great guide, some of the versions may be out dated. Its always recommended to use the latest stable version.</li>
                </ul>
            </section>
        </Layout>
    )
}
