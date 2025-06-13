
import React from 'react';

export default function PortfolioCard({ title, summary, repo, demo, tags, tech, date }) {
  return (
    <div className="portfolio-card">
      <h3 className="title-font">{title}</h3>
      <p>{summary}</p>
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
      {date && (
        <p className="mt-1 text-sm text-gray-500">
          <strong>Date:</strong> {new Date(date).toLocaleDateString()}
        </p>
      )}
      <div className="portfolio-card-main mt-4">
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
