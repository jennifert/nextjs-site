import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

// Metadata for the post
export const POST_TITLE = 'Bootstrap and asp.net 4.0 master pages';
export const POST_DESCRIPTION = 'Working with bootstrap in master pages has issues out of the box. This post describes how to resolve issues in your master pages.';
export const POST_TAGS = ['bootstrap', 'asp']

export default function BootstrapMasterPages() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2013-04-10'

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
                    pathname={router?.pathname || '/blog/2013-04-10-bootstrap-and-asp-net-4-0-master-pages'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Working with bootstrap in master pages has issues out of the box. This post describes how to resolve issues in your master pages.</p>
                <p>After an extensive search for a demo that includes asp.net inside a master page, I came across a blog post at <a className="underline focus:ring-2" href="http://geekswithblogs.net/JeremyMorgan/archive/2012/09/18/how-to-use-twitter-bootstrap-on-an-asp.net-website.aspx" rel="nofollow noreferrer">geekswithblogs.net</a>. However, the solution to use Resolve URL did not work correctly. After some debugging, I found a post at Stack overflow using <a className="underline focus:ring-2" href="http://stackoverflow.com/questions/12452109/asp-net-2012-unobtrusive-validation-with-jquery" rel="nofollow noreferrer">Script Manager</a>. This finally allowed the jQuery and other scripts to work.</p>
                <p>I have uploaded the code into my <a className="underline focus:ring-2" href="https://github.com/jennifert/Boostrap-ASP_Net-MasterPages" rel="nofollow noreferrer"> Github Repository</a>, so hopefully someone will find this demo useful.</p>
                <p>Please note this example uses web forms, and C#.</p>
            </section>
        </Layout>
    )
}
