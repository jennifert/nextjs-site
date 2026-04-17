import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import { getAllNoteSlugs } from '../../lib/notes'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import MdxImage from '../../components/mdx-image'
import SafeIframe from '../../components/safe-iframe'

export async function getStaticPaths() {
  const slugs = getAllNoteSlugs()

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(
    process.cwd(),
    'content',
    'notes',
    `${params.slug}.mdx`
  )

  const source = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(source)

  const mdxSource = await serialize(content)

  return {
    props: {
      slug: params.slug,
      frontmatter: {
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        tags: data.tags || [],
      },
      mdxSource,
    },
  }
}

export default function NotePage({ frontmatter, slug, mdxSource }) {
  const { title, description, date, tags } = frontmatter

  return (
    <Layout>
      <Head>
        <title>{title} | Jenn Tesolin</title>
        <meta name="description" content={description} />
      </Head>

      <PostJsonLd
        title={title}
        description={description}
        date={date}
        tags={tags}
        pathname={`/notes/${slug}`}
      />

      <main id="main-content">
        <article>
          <h1>{title}</h1>
          {date && (
            <p>
              <small>
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </small>
            </p>
          )}
          <MDXRemote
            {...mdxSource}
            components={{
              Image: MdxImage,
              SafeIframe,
            }}
          />
        </article>
      </main>
    </Layout>
  )
}