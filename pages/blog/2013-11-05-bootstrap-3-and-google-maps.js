import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

const code = `
$("#myModal").modal({ show: false }).on("shown", function(){
`.trim();

const code2 = `
$("#myModal").on("shown.bs.modal", function () {
//or shown.bs.tab for tabs
`.trim();

export default function BootstrapThreeGmap() {
    const POST_TITLE = 'Bootstrap 3 and Google Maps';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <div className="alert-warning">
                    <p><b>Notes:</b></p>
                    <ol className="list-decimal list-inside m-2">
                        <li>This is an update to the older post using <a className="underline focus:ring-2" href="https://web.archive.org/web/20140921030553/http://jenntesolin.com/blog/2013/04/11/bootstrap-and-google-maps/" rel="nofollow noreferrer">Bootstrap 2 with Google Maps</a>.</li>
                        <li>This post is outdated, and is in the queue for an overhaul. <a className="underline focus:ring-2" href="https://github.com/jennifert/JavaScript-Demos/tree/master/GoogleMaps/" rel="nofollow noreferrer">Check out github repo for the latest code.</a></li>
                    </ol>
                </div>
                
                <p>There are changes in Bootstrap 3 that stops Google maps from displaying correctly in modals, or tabs.  This post described how to update your code from Bootstrap 2.</p>
                
                <p>To use in a tab, change the following:</p>
                <PrismCode
                    code={code}
                    language="javascript"
                    plugins={["line-numbers"]}
                />
                <p>To: </p>
                <PrismCode
                    code={code2}
                    language="javascript"
                    plugins={["line-numbers"]}
                />
                <p>That&apos;s it!</p>
                <p><a className="underline focus:ring-2" href="https://github.com/jennifert/JavaScript-Demos/tree/master/GoogleMaps/BootstrapV3" rel="nofollow noreferrer">Check out a demo on my github account</a> (there is a code for a single point, and multiple).</p>
                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a href="http://stackoverflow.com/questions/19741208/goole-maps-in-navbar-in-bootstrap-3" rel="nofollow noreferrer">Google Maps in Navbar in Bootstrap 3</a></li>
                    <li><a href="https://getbootstrap.com/docs/3.4/" rel="nofollow noreferrer">Bootstrap Documentation: V3</a></li>
                    <li><a href="https://getbootstrap.com/docs/3.4/javascript/#modals" rel="nofollow noreferrer">Bootstrap Documentation: Modals</a></li>
                </ul>

            </section>
        </Layout>
    )
}
