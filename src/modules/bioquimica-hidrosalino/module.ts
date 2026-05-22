import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'bioquimica-hidrosalino',
  areaId: 'bioquimica',
  title: 'Hidrosalino',
  description: 'Equilibrio hidrosalino desde bases fisiologicas hasta lectura clinica.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
