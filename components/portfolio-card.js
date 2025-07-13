
// import React from 'react';

export default function PortfolioCard({ title, summary, repo, demo, tags, tech, date,lastUpdated }) {
    return (
        <div className="border border-gray-300 p-6 rounded-lg h-full flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-medium title-font mb-2">{title}</h3>
                <p className="leading-relaxed text-base">{summary}</p>

                {tags && (
                    <div className="mt-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {tech && (
                    <p className="mt-2 text-sm text-gray-600">
                        <strong>Tech:</strong> {tech.join(', ')}
                    </p>
                )}

                {(lastUpdated || date) && (
                    <p className="mt-1 text-sm text-gray-500">
                        <strong>{lastUpdated ? 'Updated' : 'Date'}:</strong>{' '}
                        {new Date(lastUpdated || date).toLocaleDateString()}
                    </p>
                )}
            </div>

            <div className="mt-4">
                {repo && (
                    <a href={repo} className="text-blue-600 underline hover:underline focus:ring-2 focus:ring-black">
                        View Repo
                    </a>
                )}
                {demo && demo !== "" && (
                    <a href={demo} className="text-blue-600 underline hover:underline focus:ring-2 focus:ring-black ml-4">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}
