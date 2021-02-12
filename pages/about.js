import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About - {SITE_TITLE}</title>
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content" className="py-5">About</h1>
                <p>
                    Hello my name is Jennifer Tesolin, and I have been a professional web developer since 2006 (and as a hobbyist since since 2000). Some web technologies I have worked with include PHP, ASP.net, JavaScript, Wordpress, Digital Ocean, Node, React, and HTML emails.
                </p>
                <p>
                    Other hobbies I enjoy are traveling, visiting with family and friends, watching Anime, and tinkering with my Raspberry Pi computer.
                </p>
                <p>
                    Feel free to <a href="mailto:me@jenntesolin.com">send me an email</a> if there is any content you want to see, or any issues to fix.
                </p>
            </section>
        </Layout>
    )
}
