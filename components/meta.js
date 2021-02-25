import Head from 'next/head'
import { SITE_TITLE, HOME_OG_IMAGE_URL, SEARCH_URL, SITE_DESCRIPTION, SITE_DOMAIN } from '../lib/constants'
//TODO: try to use SIte COnstant File fir all fields. Then be sure they are properly in the site as well
export default function Meta() {
    return (
        <Head>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width" />
            <meta name="description" content={SITE_DESCRIPTION} />
            <meta name="keywords" content="Keywords" />
            <link type="text/plain" rel="author" href="/humans.txt" />
            <link rel="alternate" type="application/atom+xml" href="/feed.xml" />
            <title>{SITE_TITLE}</title>

            <link rel="manifest" href="/manifest.json" />
            <link
                href="/icons/favicon-16x16.png"
                rel="icon"
                type="image/png"
                sizes="16x16"
            />
            <link
                href="/icons/favicon-32x32.png"
                rel="icon"
                type="image/png"
                sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#317EFB" />
            {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="alternate" type="application/atom+xml" href="/feed.xml" />
      <meta name="description" content={`${SITE_TITLE}'s website for beginners.`} />
      <link type="text/plain" rel="author" href="/humans.txt" />

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
