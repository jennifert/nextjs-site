import Head from 'next/head'
import { SITE_TITLE, HOME_OG_IMAGE_URL, SEARCH_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" /> */}

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="alternate" type="application/atom+xml" href="/feed.xml" />
      <meta name="description" content={`${SITE_TITLE}'s website for beginners.`} />
      <link type="text/plain" rel="author" href="/humans.txt" />
      
      {/* TODO: COme back and fix 
      
    <link rel="canonical" href="CURRENT LINK">
    <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="application-name" content={`${SITE_TITLE}'s website for beginners.`} />
    
      <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">

  <meta name="theme-color" content="#fafafa">
      */}
    </Head>
  )
}
