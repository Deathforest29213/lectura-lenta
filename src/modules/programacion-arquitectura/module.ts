import markdown from './content.md?raw'
import relevantQuestionsMarkdown from './question-map.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-arquitectura',
  areaId: 'programacion',
  title: 'Arquitectura',
  description: 'Organizacion, responsabilidades, capas y criterios de diseno de software.',
  version: '1.0.0',
  markdown,
  relevantQuestionsMarkdown,
  assets: [],
  theme: 'renal',
  topicVersionOverrides: {
    'tema-1-que-es-arquitectura': '1.1.0',
    'tema-2-separacion-de-responsabilidades': '1.1.0',
    'tema-3-acoplamiento-y-cohesion': '1.1.0',
    'tema-4-modularidad': '1.1.0',
    'tema-5-capas': '1.1.0',
    'tema-1-clean-code': '1.1.0',
    'tema-2-paradigmas-de-programacion': '1.1.0',
    'tema-3-principios-solid': '1.1.0',
    'tema-4-principios-arquitectonicos': '1.1.0',
  },
}
