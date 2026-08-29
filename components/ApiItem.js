export default function ApiItem({ api, project }) {
  const hasDemo = project?.demo && project.demo !== ''

  return (
    <li className="api-item">
      <div className="api-info">
        <h3>
          <a
            href={api.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {api.name}
          </a>
        </h3>

        <p>{api.idea}</p>
      </div>

      <div className="api-status">
        {hasDemo ? (
          <a href={project.demo}>See Demo</a>
        ) : (
          <span>Still in progress</span>
        )}
      </div>
    </li>
  )
}