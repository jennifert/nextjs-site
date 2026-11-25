import Head from 'next/head'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'
import data from '../components/data/portfolio.json'
import apiData from '../components/data/apis.json'
import ProjectCard from '../components/project-card'
import ApiItem from '../components/ApiItem'

export const POST_TITLE = 'Projects'
export const POST_DESCRIPTION =
  'A list of projects, gists, APIs, and development ideas that Jennifer Tesolin has worked on.'
export const POST_DATE = '2026-04-20'
export const POST_TAGS = ['projects', 'development']

export default function Projects() {
    const allProjects = [...data].sort((a, b) => {
        const aDate = new Date(a.lastUpdated || a.date)
        const bDate = new Date(b.lastUpdated || b.date)

        return bDate - aDate
    })

    const currentProjects = allProjects.filter(
        project => project.status !== 'archived'
    )

    const archivedProjects = allProjects.filter(
        project => project.status === 'archived'
    )

    const apiCategories = Object.groupBy(
        apiData,
        api => api.category
    )

    return (
    <Layout>
      <Head>
        <title>{`${POST_TITLE} | Jenn Tesolin`}</title>
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
           
            <h2>From &quot;That&apos;s a Cool API&quot; to a Full-Blown Project</h2>

            <p>
                Many of my personal projects start with a simple thought: &quot;Oh, that&apos;s a cool API. I wonder what I
                could do with it?&quot;
            </p>

            <p>
                Three days later, there&apos;s a GitHub repository, a 20-page project document, a database design, and a
                development roadmap.
            </p>

            <p>
                That&apos;s part of the fun! These projects are my playground for learning, experimenting, and building
                things that interest me.
            </p>

            <p>
                <small><em>
                    Powered by curiosity, documented extensively, and occasionally a victim of scope creep.
                </em></small>
            </p>

            <p>
                <small>
                    {currentProjects.length} current projects
                    {' · '}
                    {archivedProjects.length} archived projects
                    {' · '}
                    {apiData.length} API discoveries
                    {' · '}
                    Unlimited potential for scope creep.
                </small>
            </p>

            <h2>Current Projects</h2>

            <div className="card-grid">
                {currentProjects.map(item => (
                    <ProjectCard key={item.id} {...item} />
                ))}
            </div>

            {archivedProjects.length > 0 && (
                <>
                    <h2>Archived & Earlier Projects</h2>

                    <p>
                        Earlier projects preserved as part of my development
                        journey. Some use older technologies but remain
                        available for reference and exploration.
                    </p>

                    <div className="card-grid">
                        {archivedProjects.map(item => (
                            <ProjectCard key={item.id} {...item} />
                        ))}
                    </div>
                </>
            )}
        </section>

        <section className="api-section">
          <h2>Fun APIs & Ideas in Progress</h2>

          <p>
              A collection of interesting APIs, datasets, and developer tools I&apos;ve discovered, along with ideas for 
              things I might build with them. Some are becoming actual projects, some are experiments, and others are 
              waiting for their turn.
          </p>
            <p>
                Consider this my ever-growing collection of creative side quests.
            </p>

            {Object.entries(apiCategories).map(([category, apis]) => (
                <details key={category} className="api-category">
                    <summary>
                        {category} ({apis.length})
                    </summary>

                    <ul className="api-list">
                        {apis.map(api => {
                            const project = api.portfolioId
                                ? data.find(
                                    project => project.id === api.portfolioId
                                )
                                : null

                            return (
                                <ApiItem
                                    key={api.id}
                                    api={api}
                                    project={project}
                                />
                            )
                        })}
                    </ul>
                </details>
            ))}
        </section>
      </main>
    </Layout>
  )
}