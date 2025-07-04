
import { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

export async function getStaticProps() {
  const meta = await import('../public/meta.json');
  return {
    props: {
      entries: meta.default
    }
  };
}

export default function SearchPage({ entries }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(entries);
  const resultsRef = useRef();

  useEffect(() => {
    if (!searchTerm) {
      setResults(entries);
      return;
    }

    const q = searchTerm.toLowerCase();
    setResults(
      entries.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        (e.tags || []).some(tag => tag.toLowerCase().includes(q))
      )
    );
  }, [searchTerm, entries]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (resultsRef.current) {
        resultsRef.current.focus();
      }
    }
  };

  return (
    <Layout>
      <h1 id="main-content">Search</h1>
      <p className="mb-4">Search blog posts and pages using title, description, or tags.</p>
      <div className="relative w-full">
      <form role="search"
        onSubmit={e => e.preventDefault()}
        className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto"
      >
        <label htmlFor="search" className="sr-only">Search for:</label>
        <div className="flex w-full">
          <input
            type="search"
            name="search"
            id="search"
            required
            className="form-input px-2 py-2 h-10 border border-solid rounded-full text-sm leading-snug text-black bg-indigo-100 shadow-none outline-none w-full font-normal border-l-0 mr-2 focus:ring-2 focus:ring-black"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search..."
            onKeyDown={handleKeyDown}
            aria-label="Search site content"
          />
        </div>
      </form>
    </div>

      <ul
        className="mt-6 list-disc pl-6"
        aria-live="polite"
        aria-label="Search results"
        tabIndex="-1"
        ref={resultsRef}
      >
        {results.length > 0 ? results.map(entry => (
          <li key={`${entry.route}-${entry.title}`} className="mb-2">
            <Link href={entry.route} className="underline hover:underline focus:ring-2 focus:ring-white">
              {entry.title}
            </Link>
            <p className="text-sm text-gray-700">{entry.description}</p>
          </li>
        )) : (
          <p className="mt-4">No results found.</p>
        )}
      </ul>
    </Layout>
  );
}
