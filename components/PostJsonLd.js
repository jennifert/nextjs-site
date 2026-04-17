export default function PostJsonLd({ title, description, date, tags, pathname }) {
  const SITE_AUTHOR = 'Jenn Tesolin'
  const SITE_URL = 'https://jenntesolin.com'

  const cleanPath = `/${(pathname || '').replace(/^\/+/, '')}`

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
      "@id": `${SITE_URL}${cleanPath}`
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