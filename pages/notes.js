import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'
import { getAllNotesMeta } from '../lib/notes'

export const POST_TITLE = 'Notes'
export const POST_DESCRIPTION =
  'Notes, write-ups, and older blog posts on development, devices, and other interests.'
export const POST_DATE = '2026-04-20'
export const POST_TAGS = ['notes', 'writing']

export async function getStaticProps() {
  const notes = getAllNotesMeta()

  return {
    props: {
      notes,
    },
  }
}

export default function NotesPage({ notes }) {
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
        pathname="/notes"
      />

      <main id="main-content">
        <section>
          <h1>{POST_TITLE}</h1>
          <p>
            I don’t write as often as I build, but I still like keeping a few
            posts and write-ups around.
          </p>

          <div className="card-grid">
            {notes.map((note) => (
              <article key={note.slug}>
                <h3>
                  <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                </h3>
                <p>{note.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}