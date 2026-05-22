import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'bioquimica-acido-base',
  areaId: 'bioquimica',
  title: 'Acido-base',
  description: 'Regulacion del pH, buffers, gases y lectura de trastornos acido-base.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
