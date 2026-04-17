import Head from 'next/head'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'
import data from '../components/data/portfolio.json'
import ProjectCard from '../components/project-card'

export const POST_TITLE = 'Projects'
export const POST_DESCRIPTION = 'A list of projects and gists that Jennifer Tesolin has worked on.'
export const POST_DATE = '2026-04-20'
export const POST_TAGS = ['projects', 'development']

export default function Projects() {
    const allProjects = [...data].sort((a, b) => {
        const aDate = new Date(a.lastUpdated || a.date)
        const bDate = new Date(b.lastUpdated || b.date)
        return bDate - aDate
    })

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
                pathname="/projects"
            />

            <main id="main-content">
                <section>
                    <h1>{POST_TITLE}</h1>

                    <div className="card-grid">
                        <div className="card-grid">
                            {allProjects.map((item) => (
                                <ProjectCard key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}