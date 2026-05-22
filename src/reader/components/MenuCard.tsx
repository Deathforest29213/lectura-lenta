import { WarningIcon } from './WarningIcon'

type MenuCardProps = {
  title: string
  description?: string
  meta?: string
  progress?: number
  status?: string
  ready?: boolean
  warning?: boolean
  onClick: () => void
}

export function MenuCard({
  title,
  description,
  meta,
  progress,
  status,
  ready = false,
  warning = false,
  onClick,
}: MenuCardProps) {
  return (
    <button className="menu-card panel-outline" onClick={onClick} type="button">
      <span className="card-accent" />
      <span className="card-glow" />
      <span className="card-content">
        <span>
          <span className="card-title">
            {title} {warning && <WarningIcon />}
          </span>
          {description && <span className="card-description">{description}</span>}
        </span>
        <span className="card-meta">
          {meta && <span className="status-pill">{meta}</span>}
          {typeof progress === 'number' && <span className="progress-pill">{progress}% leido</span>}
          {status && <span className={`status-pill ${ready ? 'is-ready' : ''}`}>{status}</span>}
        </span>
      </span>
    </button>
  )
}
