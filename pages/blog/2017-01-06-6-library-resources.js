import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'

export default function LibraryResources() {
    const POST_TITLE = '6 resources that you may find at your local library';
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} - ${BLOG_TITLE} -  ${SITE_TITLE}`}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>The library has more services than just book or disc lending. This post describes what can be found in the city of Toronto, Canada. Some of which are also available in various Canadian and U.S cities as well.</p>
                
                <ol className="list-decimal list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMEDB0187&R=EDB0187" rel="nofollow noreferrer">LinkedIn Learning</a> (Formerly Lynda Learning): is an online video course centre that covers a few areas of study.  Typically it would cost over 200 per year. One cravat: cannot figure out how to login from phone.</li>
                    <li><a className="underline focus:ring-2" href="https://www.torontopubliclibrary.ca/detail.jsp?R=EDB0099" rel="nofollow noreferrer">O&apos;Reilly Learning</a> (Formerly Safari Tech &amp;Business Books Online): provides access to all of their tech books.</li>
                    <li><a className="underline focus:ring-2" href="https://www.torontopubliclibrary.ca/programs-and-classes/categories/computers-library-training.jsp" rel="nofollow noreferrer">Digital classes:</a> many off the Toronto libraries have classes in: DJIng, green screen, Inkscape, gimp, beginner HTML and CSS, Intro to 3D design and more. What’s pretty cool, is that they use free programs that are great alternatives to paid programs.</li>
                    <li><a className="underline focus:ring-2" href="https://www.torontopubliclibrary.ca/using-the-library/computer-services/innovation-spaces/3D-design-print.jsp" rel="nofollow noreferrer">3D printers</a>: libraries have access to Just take one of their certification classes which are offered for free at various branches. Just be sure to take the certification class first!</li>
                    <li><a className="underline focus:ring-2" href="https://www.torontopubliclibrary.ca/using-the-library/computer-services/innovation-spaces/recording-studio.jsp" rel="nofollow noreferrer">Rent a studio</a>: for Video or Audio production. Some branches have a digital recording studio complete with green screen and computers with software to edit!</li>
                    <li><a className="underline focus:ring-2" href="https://www.torontopubliclibrary.ca/museum-arts-passes/" rel="nofollow noreferrer">Museum and other passes:</a> borrow tickets to the ROM, science centre, AGO, and more. Though its first come first serve, and unfortunately, Casa Loma is not offered. The passes are good for 2 adults and up to 5 children, which can save a lot of money.</li>
                </ol>

                <p>Also, you can use these services even if you work in Toronto, not just live. <a className="underline focus:ring-2" href="http://www.torontopubliclibrary.ca/using-the-library/your-library-card/" rel="nofollow noreferrer">Visit their site to see the requirements for a library card</a>.</p>
                
            </section>
        </Layout>
    )
}
