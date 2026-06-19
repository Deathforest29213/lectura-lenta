import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-interfaz',
  areaId: 'programacion',
  title: 'Interfaz de Programacion',
  description: 'Componentes, layouts y patrones de interfaz para construir apps React.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
  topicVersionOverrides: {},
}
