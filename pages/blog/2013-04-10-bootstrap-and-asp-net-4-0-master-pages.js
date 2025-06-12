import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function BootstrapMasterPages() {
    const POST_TITLE = 'Bootstrap and asp.net 4.0 master pages';
    const POST_DESCRIPTION = 'Working with bootstrap in master pages has issues out of the box. This post describes how to resolve issues in your master pages.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Working with bootstrap in master pages has issues out of the box. This post describes how to resolve issues in your master pages.</p>
                <p>After an extensive search for a demo that includes asp.net inside a master page, I came across a blog post at <a  className="underline focus:ring-2" href="http://geekswithblogs.net/JeremyMorgan/archive/2012/09/18/how-to-use-twitter-bootstrap-on-an-asp.net-website.aspx" rel="nofollow noreferrer">geekswithblogs.net</a>. However, the solution to use Resolve URL did not work correctly. After some debugging, I found a post at Stack overflow using <a  className="underline focus:ring-2" href="http://stackoverflow.com/questions/12452109/asp-net-2012-unobtrusive-validation-with-jquery" rel="nofollow noreferrer">Script Manager</a>. This finally allowed the jQuery and other scripts to work.</p>
                <p>I have uploaded the code into my <a  className="underline focus:ring-2" href="https://github.com/jennifert/Boostrap-ASP_Net-MasterPages" rel="nofollow noreferrer"> Github Repository</a>, so hopefully someone will find this demo useful.</p>
                <p>Please note this example uses web forms, and C#.</p>
            </section>
        </Layout>
    )
}
