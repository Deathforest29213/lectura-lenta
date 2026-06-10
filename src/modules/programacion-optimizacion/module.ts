import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-optimizacion',
  areaId: 'programacion',
  title: 'Optimizacion',
  description: 'Tecnicas para mejorar rendimiento, uso de recursos y eficiencia del software.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
