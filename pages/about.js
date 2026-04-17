import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'

export const POST_TITLE = 'About'
export const POST_DESCRIPTION = 'About this site.'
export const POST_DATE = '2026-04-20'
export const POST_TAGS = ['about', 'projects', 'photography']

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} | Jenn Tesolin</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <PostJsonLd
                title={POST_TITLE}
                description={POST_DESCRIPTION}
                date={POST_DATE}
                tags={POST_TAGS}
                pathname="/about"
            />

            <main id="main-content">
                <section>
                    <h1>{POST_TITLE}</h1>
                    <p>
                        This site is less about professional branding and more about keeping a home
                        for my projects and interests. I build web apps, experiment with tools and
                        frameworks, and share photography from time to time.
                    </p>

                    <p>
                        It’s currently being rebuilt with a simpler, accessibility-first approach,
                        with more focus on projects and less emphasis on blogging.
                    </p>

                    <p>
                        You’ll mostly find side projects, experiments, notes, and a small collection
                        of photos here.
                    </p>

                    <p>
                        I work across a lot of different parts of web development, but I am
                        definitely more of a builder than a designer. It is less about perfect
                        polish and more about making a useful, personal home for the things I
                        create.
                    </p>
                </section>
            </main>
        </Layout>
    )
}