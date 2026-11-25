import { statusLabels } from './projectStatuses'

export default function ProjectStatus({ status }) {
    if (!status || !Object.hasOwn(statusLabels, status)) {
        return null
    }

    return (
        <span className={`status-label status-${status}`}>
      {statusLabels[status]}
    </span>
    )
}