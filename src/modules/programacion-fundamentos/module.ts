import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-fundamentos',
  areaId: 'programacion',
  title: 'Fundamentos',
  description: 'Conceptos base de programacion organizados para lectura pausada.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
