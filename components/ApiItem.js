import ProjectStatus from './ProjectStatus'

export default function ApiItem({ api, project }) {
    const hasDemo = Boolean(project?.demo?.trim())

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
                <ProjectStatus status={api.status || 'idea'} />

                {hasDemo && (
                    <a href={project.demo}>See Demo</a>
                )}
            </div>
        </li>
    )
}