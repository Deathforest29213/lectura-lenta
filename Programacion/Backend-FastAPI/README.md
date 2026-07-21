# Ruta de Backend y FastAPI

Esta carpeta contiene una ruta intensiva de dos semanas (28 horas) para construir una API de gestion de turnos generica. El resultado esperado no es "dominar" todo el backend, sino terminar con una base profesional, desplegada y verificable sobre la cual profundizar.

## Proyecto guia

**Agenda API**: una API para que clientes reserven turnos con prestadores, y para que administradores gestionen horarios y reservas.

- Clientes: crean cuenta, consultan disponibilidad y reservan o cancelan turnos.
- Prestadores: administran sus franjas disponibles y ven su agenda.
- Administradores: gestionan usuarios, prestadores y turnos.

El frontend React existente en `lectura-lenta/` puede convertirse mas adelante en un cliente de esta API. El backend debe vivir como proyecto independiente para mantener responsabilidades claras.

## Calendario de 14 horas por semana

| Semana | Horas | Resultado verificable |
| --- | ---: | --- |
| 1 | 14 | API FastAPI local con PostgreSQL, modelo relacional, CRUD de usuarios/prestadores/turnos y pruebas iniciales. |
| 2 | 14 | Autenticacion y autorizacion por roles, pruebas de integracion, Docker Compose, cliente React basico y despliegue en Google Cloud Run. |

Distribucion sugerida de cada semana: 4 h fundamentos y diseno, 8 h implementacion, 2 h pruebas, revision y bitacora.

## Orden de estudio

1. Lee `sources/contenido-completo.md`, que contiene las unidades, temas, secciones, explicaciones y practicas.
2. Usa `ejemplo-estructura.md` como referencia del formato de una leccion.
3. Diseña el modelo de `proyecto-turnos.md` antes de crear tablas o endpoints.
4. Implementa por incrementos: modelo y migraciones, reglas de negocio, API, seguridad, pruebas, contenedores y despliegue.
5. Tras cada bloque, registra que aprendiste, que fallo y que duda queda pendiente.

## Criterios de termino

- La API documenta sus endpoints en `/docs`.
- Las relaciones se aplican con claves foraneas y restricciones, no solo en codigo Python.
- Las rutas protegidas rechazan usuarios no autenticados o sin rol.
- Los secretos viven en variables de entorno y nunca en el repositorio.
- Las pruebas cubren reglas de reserva, permisos y errores principales.
- La aplicacion corre igual con Docker Compose y queda desplegada en Google Cloud Run.
