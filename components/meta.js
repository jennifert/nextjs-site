import Head from 'next/head'
import { SITE_DESCRIPTION, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link type="text/plain" rel="author" href="/humans.txt" />
      <link rel="alternate" type="application/atom+xml" href="/feed.xml" />
      <meta name="theme-color" content="#317EFB" />
      {/* You can add OG tags here later if needed */}
    </>
  )
}
