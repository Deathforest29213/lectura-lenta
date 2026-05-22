import type { Area, ParsedReadingModule, VersionAlert } from '../types/modules'
import type { Theme, Unit } from '../types/reading'

export const themeBlockCount = (theme: Theme) =>
  theme.sections.reduce((total, section) => total + section.blocks.length, 0)

export const unitBlockCount = (unit: Unit) =>
  unit.themes.reduce((total, theme) => total + themeBlockCount(theme), 0)

export const moduleBlockCount = (module: ParsedReadingModule) =>
  module.library.reduce((total, unit) => total + unitBlockCount(unit), 0)

export const moduleThemeCount = (module: ParsedReadingModule) =>
  module.library.reduce((total, unit) => total + unit.themes.length, 0)

export const areaHasAlert = (area: Area, modules: ParsedReadingModule[], alerts: VersionAlert[]) =>
  modules.some((module) => module.areaId === area.id && alerts.some((alert) => alert.moduleId === module.id))

export const moduleHasAlert = (moduleId: string, alerts: VersionAlert[]) =>
  alerts.some((alert) => alert.moduleId === moduleId)

export const unitHasAlert = (moduleId: string, unitId: string, alerts: VersionAlert[]) =>
  alerts.some((alert) => alert.moduleId === moduleId && alert.unitId === unitId)

export const themeHasAlert = (moduleId: string, themeId: string, alerts: VersionAlert[]) =>
  alerts.some((alert) => alert.moduleId === moduleId && alert.themeId === themeId)
