import { moduleDefinition as acidoBase } from '../modules/bioquimica-acido-base/module'
import { moduleDefinition as funcionRenal } from '../modules/bioquimica-funcion-renal/module'
import { moduleDefinition as hidrosalino } from '../modules/bioquimica-hidrosalino/module'
import { moduleDefinition as rompeBarreraNo } from '../modules/libros-rompe-barrera-no/module'
import { moduleDefinition as arquitectura } from '../modules/programacion-arquitectura/module'
import { moduleDefinition as fundamentos } from '../modules/programacion-fundamentos/module'
import { moduleDefinition as patronesDiseno } from '../modules/programacion-patrones-diseno/module'
import { parseMarkdownLibrary } from '../reader/lib/markdownParser'
import { parseRelevantQuestionMap } from '../reader/lib/questionMapParser'
import type { ParsedReadingModule, RawReadingModule } from '../reader/types/modules'
import { visualSummaries } from './visualSummaries'

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
  const moduleVisualSummaries = {
    ...visualSummaries[module.id],
    ...module.visualSummaries,
  }
  const visualSummaryAssets = Object.values(moduleVisualSummaries).flat()
  const initialLibrary = parseMarkdownLibrary(module.markdown, {}, module.version, module.id)
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
    assets: [...module.assets, ...visualSummaryAssets],
    visualSummaries: moduleVisualSummaries,
    relevantQuestions: parseRelevantQuestionMap(module.relevantQuestionsMarkdown),
    topicVersions,
    library: parseMarkdownLibrary(module.markdown, topicVersions, module.version, module.id),
  }
}

export const modules = rawModules.map(buildModule)
