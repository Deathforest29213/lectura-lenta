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
  topicVersionOverrides: {
    'tema-1-sodio-natremia-y-volumen-extracelular': '1.1.0',
    'tema-2-regulacion-renal-y-hormonal-del-sodio': '1.1.0',
    'tema-3-osmorregulacion-sed-y-adh': '1.1.0',
    'tema-4-balance-de-agua-y-concentracion-dilucion-urinaria': '1.1.0',
  },
}
