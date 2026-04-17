export default function ProjectCard({
  title,
  summary,
  repo,
  demo,
  tags,
  tech,
  date,
  lastUpdated
}) {
  const displayDate = lastUpdated || date

  return (
    <article>
      <h3>{title}</h3>

      <p>{summary}</p>

      {tags && tags.length > 0 && (
        <p>
          <strong>Tags:</strong> {tags.join(', ')}
        </p>
      )}

      {tech && tech.length > 0 && (
        <p>
          <strong>Tech:</strong> {tech.join(', ')}
        </p>
      )}

      {displayDate && (
        <p>
          <strong>{lastUpdated ? 'Updated' : 'Date'}:</strong>{' '}
          {new Date(displayDate).toLocaleDateString()}
        </p>
      )}

      <p className="link-row">
        {demo && demo !== '' && <a href={demo}>View Project</a>}
        {repo && <a href={repo}>Source</a>}
      </p>
    </article>
  )
}