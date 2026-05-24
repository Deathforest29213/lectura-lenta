import { moduleDefinition as acidoBase } from '../modules/bioquimica-acido-base/module'
import { moduleDefinition as funcionRenal } from '../modules/bioquimica-funcion-renal/module'
import { moduleDefinition as hidrosalino } from '../modules/bioquimica-hidrosalino/module'
import { moduleDefinition as rompeBarreraNo } from '../modules/libros-rompe-barrera-no/module'
import { moduleDefinition as arquitectura } from '../modules/programacion-arquitectura/module'
import { moduleDefinition as fundamentos } from '../modules/programacion-fundamentos/module'
import { moduleDefinition as patronesDiseno } from '../modules/programacion-patrones-diseno/module'
import { parseMarkdownLibrary } from '../reader/lib/markdownParser'
import type { ParsedReadingModule, RawReadingModule } from '../reader/types/modules'

const rawModules: RawReadingModule[] = [
  funcionRenal,
  hidrosalino,
  acidoBase,
  fundamentos,
  arquitectura,
  patronesDiseno,
  rompeBarreraNo,
]

const buildModule = (module: RawReadingModule): ParsedReadingModule => {
  const initialLibrary = parseMarkdownLibrary(module.markdown, {}, module.version)
  const generatedTopicVersions = Object.fromEntries(
    initialLibrary.flatMap((unit) =>
      unit.themes.map((theme) => [theme.id, module.version] as const),
    ),
  )
  const topicVersions = {
    ...generatedTopicVersions,
    ...module.topicVersionOverrides,
  }

  return {
    ...module,
    topicVersions,
    library: parseMarkdownLibrary(module.markdown, topicVersions, module.version),
  }
}

export const modules = rawModules.map(buildModule)
