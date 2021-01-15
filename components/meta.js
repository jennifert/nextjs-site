import Head from 'next/head'
import { SITE_TITLE, HOME_OG_IMAGE_URL, SEARCH_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
      {/*
      <link rel="manifest" href="/site.webmanifest" />
      */}
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="alternate" type="application/atom+xml" href="/feed.xml" />
      <meta name="description" content={`${SITE_TITLE}'s website for beginners.`} />
      <link type="text/plain" rel="author" href="/humans.txt" />
      
      {/* TODO: COme back and fix 
      
    <link rel="canonical" href="CURRENT LINK">
    <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="application-name" content={`${SITE_TITLE}'s website for beginners.`} />
    
    <meta name="msapplication-TileColor" content="#000000"/>
    <meta name="msapplication-square70x70logo" content="imgs/tiny.png"/>
    <meta name="msapplication-square150x150logo" content="imgs/square.png"/>
    <meta name="msapplication-wide310x150logo" content="imgs/wide.png"/>
    <meta name="msapplication-square310x310logo" content="imgs/large.png"/>


      <!--Social Media-->
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jenntes" />
      <meta name="og:type" content="article" />
      <meta name="og:title" content="Search Results" />
      <meta name="og:url" content="/search/" />
      <meta name="og:description" content="" />
      <meta name="og:site_name" content="Jennifer Tesolin's Blog" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jenntes" />
      <meta name="og:type" content="article" />
      <meta name="og:title" content="Jennifer Tesolin's Blog" />
      <meta name="og:url" content="https://jenntesolin.com" />
      <meta name="og:description" content="This is Jennifer Tesolin's personal web site. Located on this site are tutorials and tips for web developers." />
      <meta name="og:site_name" content="Jennifer Tesolin's Blog" />
      */}
    </Head>
  )
}
