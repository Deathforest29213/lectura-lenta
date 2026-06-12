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
    'tema-1-alteraciones-del-volumen': '1.1.0',
    'tema-2-alteraciones-de-la-osmolalidad-y-natremia': '1.1.0',
    'tema-3-poliuria-cloruro-y-regulacion-electrolitica': '1.1.0',
    'tema-1-metabolismo-del-potasio': '1.1.0',
    'tema-2-alteraciones-del-potasio': '1.1.0',
    'tema-3-determinacion-de-electrolitos': '1.1.0',
  },
}
