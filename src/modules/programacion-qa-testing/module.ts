import markdown from '../../../Programacion/QA-Testing/sources/contenido-completo.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-qa-testing',
  areaId: 'programacion',
  title: 'QA y Testing',
  description: 'Estrategia de calidad, pruebas manuales y automatizadas, CI/CD y práctica profesional.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
