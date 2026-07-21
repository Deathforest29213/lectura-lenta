import markdown from '../../../Programacion/Backend-FastAPI/sources/contenido-completo.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-backend-fastapi',
  areaId: 'programacion',
  title: 'Backend y FastAPI',
  description: 'APIs, PostgreSQL, seguridad, pruebas, Docker y despliegue para construir servicios profesionales.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
}
