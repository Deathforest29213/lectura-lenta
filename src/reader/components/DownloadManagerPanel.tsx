import type { useOfflineModules } from '../hooks/useOfflineModules'
import { moduleHasAlert } from '../lib/moduleStats'
import type { Area, ModuleDownloadStatus, ParsedReadingModule } from '../types/modules'
import { TitleBar } from './TitleBar'
import { TopButton } from './TopButton'
import { WarningIcon } from './WarningIcon'

type OfflineApi = ReturnType<typeof useOfflineModules>

type DownloadManagerPanelProps = {
  areas: Area[]
  modules: ParsedReadingModule[]
  offline: OfflineApi
  onBack: () => void
}

const statusText = (status: ModuleDownloadStatus) => {
  if (status === 'downloaded') return 'Disponible sin conexion'
  if (status === 'downloading') return 'Descargando'
  if (status === 'outdated') return 'Actualizacion pendiente'
  if (status === 'error') return 'Error de descarga'
  return 'No descargado'
}

const actionText = (status: ModuleDownloadStatus) => {
  if (status === 'downloaded') return 'Quitar'
  if (status === 'downloading') return 'Descargando'
  if (status === 'outdated') return 'Actualizar'
  if (status === 'error') return 'Reintentar'
  return 'Descargar'
}

const areaStatusText = (statuses: ModuleDownloadStatus[]) => {
  if (statuses.some((status) => status === 'error')) return 'Error de descarga'
  if (statuses.some((status) => status === 'outdated')) return 'Actualizacion pendiente'
  if (statuses.every((status) => status === 'downloaded')) return 'Descargada'
  if (statuses.some((status) => status === 'downloaded' || status === 'downloading')) {
    return 'Parcialmente descargada'
  }
  return 'No descargada'
}

const outdatedThemeTitles = (module: ParsedReadingModule, offline: OfflineApi) => {
  const alertThemeIds = new Set(
    offline.versionAlerts
      .filter((alert) => alert.moduleId === module.id)
      .map((alert) => alert.themeId),
  )

  if (!alertThemeIds.size) return []

  return module.library.flatMap((unit) =>
    unit.themes
      .filter((theme) => alertThemeIds.has(theme.id))
      .map((theme) => `${module.title} / ${unit.title} / ${theme.shortTitle}`),
  )
}

const downloadedVersionText = (module: ParsedReadingModule, offline: OfflineApi) =>
  offline.getRecord(module.id)?.moduleVersion ?? '-'

export function DownloadManagerPanel({
  areas,
  modules,
  offline,
  onBack,
}: DownloadManagerPanelProps) {
  const downloadArea = async (areaModules: ParsedReadingModule[]) => {
    for (const module of areaModules) {
      await offline.downloadModule(module)
    }
  }

  const removeArea = (areaModules: ParsedReadingModule[]) => {
    areaModules.forEach((module) => offline.removeModule(module.id))
  }

  return (
    <div className="download-menu">
      <div className="top-row">
        <TopButton onClick={onBack}>Inicio</TopButton>
      </div>

      <TitleBar warning={offline.versionAlerts.length > 0}>Descargas</TitleBar>
      <p className="intro">
        Administra el contenido offline por area. Las alertas amarillas indican temas descargados
        con una version antigua.
      </p>

      <div className="download-area-list" aria-label="Descargas por area">
        {areas.map((area) => {
          const areaModules = modules.filter((module) => module.areaId === area.id)
          const statuses = areaModules.map((module) => offline.getStatus(module.id))
          const downloadedCount = statuses.filter(
            (status) => status === 'downloaded' || status === 'outdated',
          ).length
          const isWorking = statuses.some((status) => status === 'downloading')
          const hasAlert = areaModules.some((module) =>
            moduleHasAlert(module.id, offline.versionAlerts),
          )

          return (
            <section className="download-area-card panel-outline" key={area.id}>
              <div className="download-area-header">
                <div>
                  <h2>
                    {area.title} {hasAlert && <WarningIcon />}
                  </h2>
                  <p>{area.description}</p>
                  <div className="download-area-meta">
                    <span className="status-pill">{areaStatusText(statuses)}</span>
                    <span className="status-pill">
                      {downloadedCount} de {areaModules.length} modulos offline
                    </span>
                  </div>
                </div>

                <div className="download-actions">
                  <button
                    className="small-action panel-outline"
                    disabled={isWorking}
                    onClick={() => void downloadArea(areaModules)}
                    type="button"
                  >
                    Descargar area
                  </button>
                  <button
                    className="small-action panel-outline"
                    disabled={isWorking || downloadedCount === 0}
                    onClick={() => removeArea(areaModules)}
                    type="button"
                  >
                    Quitar area
                  </button>
                </div>
              </div>

              <div className="download-table" role="table" aria-label={`Modulos de ${area.title}`}>
                <div className="download-table-row download-table-head" role="row">
                  <span role="columnheader">Modulo</span>
                  <span role="columnheader">Estado</span>
                  <span role="columnheader">Actual</span>
                  <span role="columnheader">Descargada</span>
                  <span role="columnheader">Accion</span>
                </div>
                {areaModules.map((module) => {
                  const status = offline.getStatus(module.id)
                  const isDownloaded = status === 'downloaded'
                  const isWorkingModule = status === 'downloading'

                  return (
                    <div className="download-table-row" key={module.id} role="row">
                      <span className="download-module-cell" role="cell">
                        <strong>
                          {moduleHasAlert(module.id, offline.versionAlerts) && <WarningIcon />}
                          {module.title}
                        </strong>
                      </span>
                      <span role="cell">{statusText(status)}</span>
                      <span role="cell">{module.version}</span>
                      <span role="cell">{downloadedVersionText(module, offline)}</span>
                      <span role="cell">
                        <button
                          className="small-action panel-outline"
                          disabled={isWorkingModule}
                          onClick={() =>
                            isDownloaded
                              ? offline.removeModule(module.id)
                              : void offline.downloadModule(module)
                          }
                          type="button"
                        >
                          {actionText(status)}
                        </button>
                      </span>
                    </div>
                  )
                })}
              </div>

              {areaModules.some((module) => moduleHasAlert(module.id, offline.versionAlerts)) && (
                <div className="download-outdated-list">
                  <h3>Temas con version antigua:</h3>
                  <ul>
                    {areaModules.flatMap((module) =>
                      outdatedThemeTitles(module, offline).map((title) => (
                        <li key={title}>
                          <WarningIcon label="Tema descargado desactualizado" />
                          <span>{title}</span>
                        </li>
                      )),
                    )}
                  </ul>
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
