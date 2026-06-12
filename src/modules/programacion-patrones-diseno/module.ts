import markdown from './content.md?raw'
import relevantQuestionsMarkdown from './question-map.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-patrones-diseno',
  areaId: 'programacion',
  title: 'Patrones de Diseno',
  description: 'Patrones creacionales, estructurales, de comportamiento y MVC para estudio progresivo.',
  version: '1.0.0',
  markdown,
  relevantQuestionsMarkdown,
  assets: [],
  theme: 'renal',
  topicVersionOverrides: {
    'tema-1-que-es-un-patron-de-diseno': '1.1.0',
    'tema-2-como-estudiar-un-patron': '1.1.0',
    'tema-3-uso-cuidadoso': '1.1.0',
    'tema-1-idea-general': '1.1.0',
    'tema-2-factory-method-y-abstract-factory': '1.1.0',
    'tema-3-builder-y-prototype': '1.1.0',
    'tema-4-singleton': '1.1.0',
  },
}
