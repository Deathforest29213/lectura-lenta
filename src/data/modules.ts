import { moduleDefinition as acidoBase } from '../modules/bioquimica-acido-base/module'
import { moduleDefinition as funcionRenal } from '../modules/bioquimica-funcion-renal/module'
import { moduleDefinition as hidrosalino } from '../modules/bioquimica-hidrosalino/module'
import { moduleDefinition as rompeBarreraNo } from '../modules/libros-rompe-barrera-no/module'
import { moduleDefinition as arquitectura } from '../modules/programacion-arquitectura/module'
import { moduleDefinition as backendFastapi } from '../modules/programacion-backend-fastapi/module'
import { moduleDefinition as fundamentos } from '../modules/programacion-fundamentos/module'
import { moduleDefinition as interfaz } from '../modules/programacion-interfaz/module'
import { moduleDefinition as optimizacion } from '../modules/programacion-optimizacion/module'
import { moduleDefinition as patronesDiseno } from '../modules/programacion-patrones-diseno/module'
import { moduleDefinition as qaTesting } from '../modules/programacion-qa-testing/module'
import { parseMarkdownLibrary } from '../reader/lib/markdownParser'
import { parseRelevantQuestionMap } from '../reader/lib/questionMapParser'
import type { IllustrationLink, ParsedReadingModule, RawReadingModule } from '../reader/types/modules'
import { illustrationLinks } from './illustrationLinks'
import { visualSummaries } from './visualSummaries'

const rawModules: RawReadingModule[] = [
  funcionRenal,
  hidrosalino,
  acidoBase,
  fundamentos,
  arquitectura,
  backendFastapi,
  qaTesting,
  interfaz,
  optimizacion,
  patronesDiseno,
  rompeBarreraNo,
]

export const illustrationSectionKey = (unitId: string, themeId: string | null, sectionId: string) =>
  [unitId, themeId ?? 'unit', sectionId].join(':')

const buildIllustrationsBySection = (links: IllustrationLink[]) =>
  links.reduce<ParsedReadingModule['illustrationsBySection']>((sections, link) => {
    const key = illustrationSectionKey(link.unitId, link.themeId, link.sectionId)
    const current = sections[key]

    sections[key] = {
      unitTitle: link.unitTitle,
      themeTitle: link.themeTitle,
      sectionTitle: link.sectionTitle,
      images: Array.from(new Set([...(current?.images ?? []), ...link.images])),
      sourceParagraphs: Array.from(
        new Set([...(current?.sourceParagraphs ?? []), ...link.sourceParagraphs]),
      ),
    }

    return sections
  }, {})

const buildModule = (module: RawReadingModule): ParsedReadingModule => {
  const moduleVisualSummaries = {
    ...visualSummaries[module.id],
    ...module.visualSummaries,
  }
  const moduleIllustrationLinks = illustrationLinks[module.id] ?? []
  const illustrationAssets = moduleIllustrationLinks.flatMap((link) => link.images)
  const visualSummaryAssets = Array.from(
    new Set([...Object.values(moduleVisualSummaries).flat(), ...illustrationAssets]),
  )
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
    illustrationsBySection: buildIllustrationsBySection(moduleIllustrationLinks),
    relevantQuestions: parseRelevantQuestionMap(module.relevantQuestionsMarkdown),
    topicVersions,
    library: parseMarkdownLibrary(module.markdown, topicVersions, module.version, module.id),
  }
}

export const modules = rawModules.map(buildModule)
