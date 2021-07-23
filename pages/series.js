import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function Series() {
    return (
        <Layout>
            <Head>
                <title>Dev Series - {SITE_TITLE}</title>
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content">Series</h1>

                <h2>Mac Local Development</h2>

                {/* TODO replace links here with proper ones */}
                <ol className="list-decimal list-inside m-2">
                    <li>
                        <Link href="/blog/2021-01-13-mac-homebrew"><a className="underline focus:ring-2">Installing Homebrew and Fixing Ruby on your Mac</a></Link>
                    </li>
                    <li>
                        <Link href="/blog/2019-12-12-git-github"><a className="underline focus:ring-2">Installing Git and Github on your Mac</a></Link>
                    </li>
                    <li>
                        <Link href="/blog/2015-03-14-IIS7-Development-Environment"><a className="underline focus:ring-2">Node JS</a></Link> on <time dateTime="2015-03-14T19:00">March 14, 2015</time>
                    </li>
                    <li>
                        <Link href="/blog/2019-12-11-Jekyll-Set-Up-Publish"><a className="underline focus:ring-2">Jekyll: Setting up your development environment</a></Link>
                    </li>
                    {/* 
                     Apache
                    ASP.net
                    Composer
                    MySql/Maria DB
                    PHP
                    Python
                    */}
                </ol>

                <h2>Windows Local Development</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2015-03-14-IIS7-Development-Environment"><a className="underline focus:ring-2">Creating a development environment for IIS 7+</a></Link>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}
