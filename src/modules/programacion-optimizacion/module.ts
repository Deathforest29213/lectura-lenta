import markdown from './content.md?raw'
import type { RawReadingModule } from '../../reader/types/modules'

export const moduleDefinition: RawReadingModule = {
  id: 'programacion-optimizacion',
  areaId: 'programacion',
  title: 'Optimizacion',
  description: 'Tecnicas para mejorar rendimiento, uso de recursos y eficiencia del software.',
  version: '1.0.0',
  markdown,
  assets: [],
  theme: 'renal',
  topicVersionOverrides: {
    'tema-1-modelo-mental-de-optimizacion': '1.1.0',
    'tema-2-pruebas-y-metricas-de-rendimiento': '1.1.0',
    'tema-3-cargar-menos-al-inicio': '1.1.0',
    'tema-4-controlar-frecuencia-y-carga-pesada': '1.1.0',
  },
}
