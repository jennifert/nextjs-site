
import fs from 'fs';
import path from 'path';
import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout';
import PostJsonLd from '../components/PostJsonLd'
import { SITE_TITLE } from '../lib/constants'

export const POST_TITLE = 'Sitemap';
export const POST_DESCRIPTION = 'All pages and posts located in jenntesolin.com';
export const POST_DATE = '2025-01-01'; // Placeholder
export const POST_TAGS = ['sitemap'];

export async function getStaticProps() {
    const metaPath = path.join(process.cwd(), 'public', 'meta.json');
    const raw = fs.readFileSync(metaPath, 'utf-8');
    const entries = JSON.parse(raw);

    // Group by route prefix
    const grouped = {};
    for (const entry of entries) {
        const group = entry.route.split('/')[1] || 'root';
        if (!grouped[group]) grouped[group] = [];
        grouped[group].push(entry);
    }

    return {
        props: { grouped }
    };
}

export default function SitemapPage({ grouped }) {
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} | ${SITE_TITLE}`}</title>
                <meta name="description" content={POST_DESCRIPTION} />
                <PostJsonLd
                    title={POST_TITLE}
                    description={POST_DESCRIPTION}
                    date={POST_DATE}
                    tags={POST_TAGS}
                    pathname="/sitemap" // or whatever path this is
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">Sitemap</h1>
                <p className="mb-4">A human-readable view of the site structure based on page metadata.</p>
                {Object.entries(grouped).map(([group, pages]) => (
                    <div key={group} className="mb-6">
                        <h2 className="text-xl font-semibold capitalize mb-2">{group}</h2>
                        <ul className="list-disc pl-5">
                            {pages.map((page) => (
                                <li key={page.route + page.title}>
                                    <Link href={page.route} className="underline hover:underline focus:ring-2 focus:ring-white">
                                        {page.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

        </Layout>
    );
}
