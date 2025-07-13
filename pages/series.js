import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'

const POST_TITLE = 'Dev Series';
const POST_DESCRIPTION = 'Connected blog posts such as chromebook development, mac local development.';
export const POST_DATE = '2025-01-01'; // Placeholder
export const POST_TAGS = ['Series', 'development'];

export default function Series() {
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} | ${SITE_TITLE}`}</title>
                <meta name="description" content={POST_DESCRIPTION} />
                <PostJsonLd
                    title={POST_TITLE}
                    description={POST_DESCRIPTION}
                    date={POST_DATE}
                    tags={POST_TAGS}
                    pathname="/series" // or whatever path this is
                />
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content">Series</h1>

                <h2>Chromebooks</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link href="/blog/2022-06-29-chromebook-dev" className="underline focus:ring-2">A Guide for Setting Up a Chromebook for Web Development</Link>
                    </li>
                </ul>

                <h2>Mac Local Development</h2>

                <ul className="list-disc list-inside m-2">

                    <li>
                        <Link href="/blog/2021-01-13-mac-homebrew" className="underline focus:ring-2">Installing Homebrew and Fixing Ruby on your Mac</Link>
                    </li>
                    <li>
                        <Link href="/blog/2019-12-12-git-github" className="underline focus:ring-2">Installing Git and Github on your Mac</Link>
                    </li>
                    <li>
                        <Link
                            href="/blog/2015-03-14-IIS7-Development-Environment"
                            className="underline focus:ring-2">Node JS</Link>
                    </li>
                    <li>
                        <Link
                            href="/blog/2019-12-11-Jekyll-Set-Up-Publish"
                            className="underline focus:ring-2">Jekyll: Setting up your development environment</Link>
                    </li>
                </ul>

                <h2>Windows Local Development</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <Link
                            href="/blog/2015-03-14-IIS7-Development-Environment"
                            className="underline focus:ring-2">Creating a development environment for IIS 7+</Link>
                    </li>
                </ul>

            </section>
        </Layout>
    );
}
