import { SITE_AUTHOR, SITE_URL } from '../lib/constants'

export default function PostJsonLd({ title, description, date, tags, pathname }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": SITE_AUTHOR
    },
    "datePublished": date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}${pathname.replace(/^\/+/, '')}`
    },
    "keywords": tags?.join(', ')
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
