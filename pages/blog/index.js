import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function Blog() {
    return (
        <Layout>
            <Head>
                <title>{BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{BLOG_TITLE}</h1>
                
                {/* <h2>Apple</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul> */}

                <h2>Asp.Net</h2>

                <ul>
                    <li>
                        <Link href="/blog/2013-05-23-jquery-time-picker-issues-and-net"><a className="underline focus:ring-2">jQuery time picker issues and .net</a></Link> on <time datetime="2013-05-23T19:00">May 23, 2013</time>
                    </li>
                    <li>
                        <Link href="/blog/2013-04-10-bootstrap-and-asp-net-4-0-master-pages"><a className="underline focus:ring-2">Bootstrap and asp.net 4.0 master pages</a></Link> on <time datetime="2013-04-10T19:00">April 10, 2013</time>
                    </li>
                </ul>

                {/* 

                <h2>JavaScript</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>

                <h2>Jekyll</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>

                <h2>Lists</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>

                <h2>MySql</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>

                <h2>PHP</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>
                
                <h2>Raspberri Pi</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>

                <h2>Servers</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>
                */}

                <h2>Travel</h2>
                <ul>
                    <li>
                        <Link href="/blog/2012-11-08-japan-trip-2011"><a className="underline focus:ring-2">Planning a vacation to Japan</a></Link> on <time datetime="2012-11-08T19:00">November 08, 2012</time>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}
