import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link type="text/plain" rel="author" href="/humans.txt" />
            <link rel="alternate" type="application/atom+xml" href="/feed.xml" />
            <meta name="color-scheme" content="light dark" />
        </Head>
    );
}
