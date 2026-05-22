import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'libros-rompe-barrera-no',
  areaId: 'libros',
  title: 'Rompe la barrera del NO',
  description: 'Capitulos, conceptos y frases para repasar el libro de Chris Voss.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
