import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'bioquimica-funcion-renal',
  areaId: 'bioquimica',
  title: 'Funcion renal',
  description: 'Fisiologia renal, sistema urinario, enfermedades y analitos de laboratorio.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
