import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-patrones-diseno',
  areaId: 'programacion',
  title: 'Patrones de Diseno',
  description: 'Patrones creacionales, estructurales, de comportamiento y MVC para estudio progresivo.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
