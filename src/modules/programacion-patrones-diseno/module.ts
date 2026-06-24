import markdown from './content.md?raw'
import relevantQuestionsMarkdown from './question-map.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-patrones-diseno',
  areaId: 'programacion',
  title: 'Patrones de Diseno',
  description: 'Patrones creacionales, estructurales, de comportamiento y MVC para estudio progresivo.',
  version: '1.1.0',
  markdown,
  relevantQuestionsMarkdown,
  assets: [],
  theme: 'renal',
  topicVersionOverrides: {
    'tema-1-que-es-un-patron-de-diseno': '1.1.0',
    'tema-2-como-estudiar-un-patron': '1.1.0',
    'tema-3-uso-cuidadoso': '1.1.0',
    'tema-1-how-do-i-create-objects-without-coupling-to-concrete-classes': '1.2.0',
    'tema-2-how-do-i-build-or-clone-complex-objects': '1.2.0',
    'tema-3-how-do-i-control-shared-instance-creation': '1.2.0',
    'tema-1-how-do-i-connect-incompatible-pieces': '1.2.0',
    'tema-2-how-do-i-add-behavior-without-rewriting': '1.2.0',
    'tema-3-how-do-i-represent-or-share-structure': '1.2.0',
    'tema-1-how-do-i-choose-behavior': '1.2.0',
    'tema-2-how-do-objects-talk': '1.2.0',
    'tema-3-how-do-i-encapsulate-flow': '1.2.0',
  },
}
