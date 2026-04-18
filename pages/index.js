import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import data from '../components/data/portfolio.json'
import ProjectCard from '../components/project-card'
import LatestNotes from '../components/latest-notes'
import PostJsonLd from '../components/PostJsonLd'
import { photoItems } from '../components/data/photoData'
import PhotographyItem from '../components/PhotographyItem'
import { getAllNotesMeta } from '../lib/notes'

export const POST_TITLE = "Jenn Tesolin | Web projects, photography, and creative side quests"
export const POST_DESCRIPTION = "A personal site by Jenn Tesolin featuring web projects, photography, notes, and other creative side quests."
export const POST_DATE = '2026-04-18'
export const POST_TAGS = ['home']

export async function getStaticProps() {
  const latestNotes = getAllNotesMeta().slice(0, 3)

  return {
    props: {
      latestNotes,
    },
  }
}

function HomePage({ latestNotes }) {
  const featuredProjects = [...data]
    .filter((item) => item.featured)
    .sort((a, b) => {
      const aDate = new Date(a.lastUpdated || a.date)
      const bDate = new Date(b.lastUpdated || b.date)
      return bDate - aDate
    })

  return (
    <Layout home>
      <Head>
        <meta name="google-site-verification" content="Q8UByE2wXyZ401kKeeWvvOkSSx3fW_vaGE-UO0Q_uDA" />
        <title>{`${POST_TITLE}`}</title>
        <meta name="description" content={POST_DESCRIPTION} />
        <PostJsonLd
          title={POST_TITLE}
          description={POST_DESCRIPTION}
          date={POST_DATE}
          tags={POST_TAGS}
          pathname="/index"
        />
      </Head>

      <main id="main-content">
        <section className="home-hero">
          <h1>Jenn Tesolin</h1>
          <p>
            <em>A personal site for web projects, photography, and creative side quests.</em>
          </p>
          <p>
            A home for the things I build, explore, and occasionally write about.
          </p>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <p>Recent builds, experiments, and rebuilds.</p>

          <p><Link href="/projects">See all projects</Link></p>

          <h3>Featured Projects</h3>
          <div className="card-grid">
            {featuredProjects.slice(0, 3).map((item) => (
              <ProjectCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section id="photography">
          <h2>Photography</h2>
          <p>A small selection of photos, with full galleries hosted on Flickr.</p>

          <p>
            <a
              href="https://www.flickr.com/photos/203901042@N06/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full Flickr gallery
            </a>
          </p>

          <h3>Featured Photos</h3>
          <div className="card-grid">
            {photoItems.slice(0, 2).map((item, index) => (
              <PhotographyItem
                key={index}
                title={item.title}
                desc={item.desc}
                src={item.src}
                index={index}
              />
            ))}
          </div>
        </section>

        <section id="notes" aria-labelledby="notes-heading">
          <h2 id="notes-heading">Notes</h2>
          <p>
            I don’t write as often as I build, but I still like keeping a few posts
            and write-ups around.
          </p>

          <p><Link href="/notes">See all notes</Link></p>

          <h3>Featured Notes</h3>
          <div className="card-grid">
            <LatestNotes notes={latestNotes} />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default HomePage