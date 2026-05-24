import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-arquitectura',
  areaId: 'programacion',
  title: 'Arquitectura',
  description: 'Organizacion, responsabilidades, capas y criterios de diseno de software.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
