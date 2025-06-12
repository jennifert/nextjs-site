import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function DevPrograms() {
    const POST_TITLE = 'Great apps and programs for web development';
    const POST_DESCRIPTION = 'A updated list of different applications that you an use to create your projects in. Separate for paid, free, and subscriptions.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p className="my-5">Below is an updated list of different applications that you an use to create your projects in. This time, I tried to separate for paid, free, and subscriptions.</p>
                <p><small className="alert-warning">This post is an updated version from: <a className="underline focus:ring-2" href="https://web.archive.org/web/20210318195843/https://jenntesolin.com/blog/2013/05/30/great-apps-and-programs-for-web-development/">May 30, 2013</a>.</small></p>
                <h2>Cross Platform Apps</h2>
                <h3>Free</h3>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://www.sourcetreeapp.com/" rel="nofollow noreferrer">Source tree </a>- app to commit your source code</li>
                    <li><a className="underline focus:ring-2" href="https://code.visualstudio.com/" rel="nofollow noreferrer">Visual Studio Code</a> - powerful text editor</li>
                    <li><a className="underline focus:ring-2" href="https://netbeans.apache.org/download/index.html" rel="nofollow noreferrer">Netbeans</a> - an IDE primarily used for Java, but can also be used for web applications with PHP and HTML. You cam add extensions to do all types of work.</li>
                    <li><a className="underline focus:ring-2" href="https://www.virtualbox.org/" rel="nofollow noreferrer">Virtual Box</a>: Virtual PC creator</li>
                </ul>
                <h3>Subscription</h3>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://www.adobe.com/creativecloud.html" rel="nofollow noreferrer">Adobe Creative Suite</a> - create/edit text, pdfs, videos, and more.</li>
                    <li><a className="underline focus:ring-2" href="https://www.jetbrains.com/phpstorm/" rel="nofollow noreferrer">PHP Storm</a> - an IDE for php</li>
                    <li><a className="underline focus:ring-2" href="https://www.jetbrains.com/webstorm/" rel="nofollow noreferrer">Web Storm</a>. an ide for web development (can be added as an extension to PHP Storm.</li>
                    <li><a className="underline focus:ring-2" href="https://nordvpn.com/" rel="nofollow noreferrer">NordVPN</a>: VPN Service provider.</li>
                </ul>
                <h3>Paid</h3>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://cyberduck.io/" rel="nofollow noreferrer">Cyberduck</a> - file transfer program.</li>
                    <li><a className="underline focus:ring-2" href="http://www.sublimetext.com/" rel="nofollow noreferrer">Sublime</a> - text editor</li>
                </ul>

                <h2>Windows Specific</h2>
                <h3>Free</h3>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="http://notepad-plus-plus.org/" rel="nofollow noreferrer">Notepad++</a> - a slim text editor.</li>
                    <li><a className="underline focus:ring-2" href="http://winscp.net/eng/index.php" rel="nofollow noreferrer">WinSCP</a> - file transfer program.</li>
                </ul>
                <h2>Mac Specific</h2>
                <h3>Paid</h3>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://www.sketch.com/" rel="nofollow noreferrer">Sketch</a> - a design toolkit. After 1 year, if you want to update, you need to pay.</li>
                    <li><a className="underline focus:ring-2" href="https://affinity.serif.com/" rel="nofollow noreferrer">Affinity Suite</a> - Non subscription alternative to Adobe. Upgrades are included.</li>
                    <li><a className="underline focus:ring-2" href="http://www.binarynights.com/" rel="nofollow noreferrer">Fork Lift</a> - file manager and transfer client</li>
                </ul>
                <h2>Web Apps and automation:</h2>
                <h3>Free</h3>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="http://yeoman.io/" rel="nofollow noreferrer">Yeoman</a></li>
                    <li><a className="underline focus:ring-2" href="http://pastebin.com/" rel="nofollow noreferrer">Paste bin</a></li>
                    <li><a className="underline focus:ring-2" href="https://www.db-fiddle.com/" rel="nofollow noreferrer">DB Fiddle</a></li>
                    <li><a className="underline focus:ring-2" href="https://github.com/cdr/code-server#code-server" rel="nofollow noreferrer">Code Server - VS Code</a></li>
                </ul>

                <h3>Paid</h3>
                <p>
                    These web apps have a free option, but they have more features with their paid plan.
                </p>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://codesandbox.io/" rel="nofollow noreferrer">Code Sandbox</a></li>
                    <li><a className="underline focus:ring-2" href="https://codepen.io/" rel="nofollow noreferrer">CodePen</a></li>
                </ul>
                <h2>iOS apps:</h2>
                <h3>Free</h3>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://apps.apple.com/us/app/javascript-anywhere-jsanywhere/id363452277" rel="nofollow noreferrer">JS anywhere</a></li>
                </ul>

                <h3>Paid</h3>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://apps.apple.com/us/app/draftcode-offline-php-ide/id593757593" rel="nofollow noreferrer">Draftcode</a></li>
                    <li><a className="underline focus:ring-2" href="https://apps.apple.com/us/app/pythonista-3/id1085978097" rel="nofollow noreferrer">Pythonista</a></li>
                    <li><a className="underline focus:ring-2" href="https://apps.apple.com/us/app/textastic-code-editor-9/id1049254261" rel="nofollow noreferrer">Textastic</a></li>
                </ul>
            </section>
        </Layout>
    )
}
