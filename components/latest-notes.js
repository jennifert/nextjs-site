import Link from 'next/link'

export default function LatestNotes({ notes = [] }) {
  return (
    <>
      {notes.map((note) => (
        <article key={note.slug}>
          <h3>
            <Link href={`/notes/${note.slug}`}>
              {note.title}
            </Link>
          </h3>

          <p>{note.description}</p>
        </article>
      ))}
    </>
  )
}