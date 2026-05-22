import type { ParsedReadingModule } from '../types/modules'
import type { useOfflineModules } from '../hooks/useOfflineModules'
import { WarningIcon } from './WarningIcon'

type OfflineApi = ReturnType<typeof useOfflineModules>

type DownloadManagerPanelProps = {
  modules: ParsedReadingModule[]
  offline: OfflineApi
}

const statusText = (status: string) => {
  if (status === 'downloaded') return 'Disponible sin conexion'
  if (status === 'outdated') return 'Actualizacion pendiente'
  return 'No descargado'
}

export function DownloadManagerPanel({ modules, offline }: DownloadManagerPanelProps) {
  const downloadedCount = modules.filter((module) => offline.getStatus(module.id) !== 'not-downloaded').length

  return (
    <section className="download-band">
      <div className="download-band-header">
        <div>
          <h2>
            Descargas {offline.versionAlerts.length > 0 && <WarningIcon />}
          </h2>
          <p>
            {downloadedCount} de {modules.length} modulos disponibles para uso offline.
          </p>
        </div>
        <div className="download-actions">
          <button className="small-action panel-outline" onClick={offline.downloadAll} type="button">
            Descargar todo
          </button>
          <button className="small-action panel-outline" onClick={offline.removeAll} type="button">
            Quitar todo
          </button>
        </div>
      </div>

      <div className="download-list">
        {modules.map((module) => {
          const status = offline.getStatus(module.id)
          const isDownloaded = status !== 'not-downloaded'
          const isOutdated = status === 'outdated'

          return (
            <div className="download-row" key={module.id}>
              <div>
                <strong>
                  {module.title} {isOutdated && <WarningIcon />}
                </strong>
                <span>{statusText(status)}</span>
              </div>
              <span>{module.version}</span>
              <button
                className="small-action panel-outline"
                onClick={() => (isDownloaded && !isOutdated ? offline.removeModule(module.id) : offline.downloadModule(module))}
                type="button"
              >
                {isDownloaded && !isOutdated ? 'Quitar' : isOutdated ? 'Actualizar' : 'Descargar'}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
