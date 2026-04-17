import { useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import PostJsonLd from '../components/PostJsonLd';

export const POST_TITLE = 'Search';
export const POST_DESCRIPTION = 'Search for a post or page, by title or tags.';
export const POST_DATE = '2025-01-01';
export const POST_TAGS = ['search'];

export async function getStaticProps() {
    const entries = require('../public/meta.json');
    return { props: { entries } };
}

export default function SearchPage({ entries }) {
    const [searchTerm, setSearchTerm] = useState('');
    const resultsRef = useRef(null);

    const results = useMemo(() => {
        const q = searchTerm.trim().toLowerCase();

        if (!q) {
            return entries;
        }

        return entries.filter((entry) =>
            entry.title.toLowerCase().includes(q) ||
            entry.description.toLowerCase().includes(q) ||
            (entry.tags || []).some((tag) => tag.toLowerCase().includes(q))
        );
    }, [searchTerm, entries]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            resultsRef.current?.focus();
        }
    };

    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} | Jenn Tesolin</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <PostJsonLd
                title={POST_TITLE}
                description={POST_DESCRIPTION}
                date={POST_DATE}
                tags={POST_TAGS}
                pathname="/search"
            />

            <main id="main-content">
                <section>
                    <h1>{POST_TITLE}</h1>
                    <p>Search blog posts and pages using title, description, or tags.</p>

                    <div className="site-search">
                        <form
                            role="search"
                            onSubmit={(e) => e.preventDefault()}
                            className="search-form"
                        >
                            <label htmlFor="search" className="visually-hidden">Search site content</label>
                            <input
                                id="search"
                                type="search"
                                name="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </form>
                    </div>

                    {results.length > 0 ? (
                        <ul
                            className="search-list"
                            aria-live="polite"
                            aria-label="Search results"
                            ref={resultsRef}
                            tabIndex={-1}
                        >
                            {results.map((entry) => (
                                <li
                                    key={`${entry.route}-${entry.title}`}
                                    className="search-list-item"
                                >
                                    <Link href={entry.route}>{entry.title}</Link>
                                    <p className="search-description">{entry.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p aria-live="polite">No results found.</p>
                    )}
                </section>
            </main>
        </Layout>
    );
}