import Link from 'next/link'
import meta from '../public/meta.json'

export default function LatestNotes() {
  const posts = meta
    .filter(
      (post) =>
        post.route.startsWith('/blog') &&
        !post.route.includes('template')
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <>
      {posts.map((post) => (
        <article key={post.route}>
          <h3>
            <Link href={post.route}>
              {post.title}
            </Link>
          </h3>

          <p>{post.description}</p>
        </article>
      ))}
    </>
  )
}