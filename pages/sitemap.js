
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '../components/layout';

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
            <h1 id="main-content">Sitemap</h1>
            <p className="mb-4">A human-readable view of the site structure based on page metadata.</p>
            {Object.entries(grouped).map(([group, pages]) => (
                <div key={group} className="mb-6">
                    <h2 className="text-xl font-semibold capitalize mb-2">{group}</h2>
                    <ul className="list-disc pl-5">
                        {pages.map((page) => (
                            <li key={page.route}>
                                <Link href={page.route} className="underline hover:underline focus:ring-2 focus:ring-white">
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Layout>
    );
}
