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

          <div className="card-grid">
            {allProjects.map(item => (
              <ProjectCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="api-section">
          <h2>Fun APIs & Ideas in Progress</h2>

          <p>
            Interesting APIs, datasets, and developer tools I&apos;ve found,
            along with ideas for things I might build with them.
          </p>

          {Object.entries(apiCategories).map(([category, apis]) => (
            <div key={category} className="api-category">
              <h3>{category}</h3>

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
            </div>
          ))}
        </section>
      </main>
    </Layout>
  )
}