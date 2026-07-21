---
collection_id: backend-fastapi-i
collection_title: Backend y FastAPI
type: content_record
format_version: llm-wiki-record-v1
source_files:
  - backend-fastapi.md
  - proyecto-turnos.md
---

# unit: Semana 1 - Fundamentos, datos y API local

## theme: Bloque 1 - Contrato HTTP y FastAPI (3 horas)

### section: Conceptos

#### block: 1
Estudia recursos, URLs, metodos HTTP, codigos de estado, cabeceras, JSON, paginacion y filtros.

#### block: 2
En FastAPI practica `path`, `query`, cuerpos Pydantic, respuestas tipadas, dependencias y documentacion automatica en `/docs`.

### section: Ejercicio

#### block: 1
Crea en memoria los endpoints `GET /health`, `GET /providers`, `POST /appointments` y `GET /appointments/{id}`. Define para cada uno entrada, salida, estados de exito y errores.

## theme: Bloque 2 - PostgreSQL y relaciones (4 horas)

### section: Conceptos

#### block: 1
Repasa claves primarias, claves foraneas, relaciones uno a muchos y muchos a muchos, `NOT NULL`, `UNIQUE`, indices y transacciones.

#### block: 2
Usa SQLAlchemy y Alembic para que el modelo evolucione mediante migraciones revisables, en vez de crear tablas manualmente sin historial.

### section: Ejercicio

#### block: 1
Implementa primero las tablas de `proyecto-turnos.md`. Inserta datos de ejemplo y responde con SQL: cuales son los turnos de un prestador para un dia y que horarios siguen libres.

## theme: Bloque 3 - Arquitectura y reglas (3 horas)

### section: Conceptos

#### block: 1
Organiza el backend por dominio y capas ligeras: rutas, esquemas, servicios, repositorios y modelos. Evita una abstraccion nueva hasta que una necesidad concreta la justifique.

#### block: 2
La regla "no puede existir doble reserva para el mismo prestador y horario" debe estar en el servicio y reforzada por una restriccion en la base de datos.

### section: Ejercicio

#### block: 1
Escribe y prueba la funcion de reserva antes de exponerla como endpoint.

## theme: Bloque 4 - Pruebas iniciales (2 horas)

### section: Ejercicio

#### block: 1
Configura `pytest` y `httpx`. Prueba una reserva valida, un horario ocupado, un prestador inexistente y una fecha pasada.

## theme: Bloque 5 - APIs externas desde Python (2 horas)

### section: Integracion de apuntes de Notion

#### block: 1
Los apuntes existentes cubren consumo de APIs de datos bursatiles con `requests`, consulta de documentacion, API keys, `response.json()`, `raise_for_status()`, limites de tasa, pausas y almacenamiento en PostgreSQL.

#### block: 2
Lleva esos conceptos al proyecto de turnos con una integracion externa inocua, por ejemplo un servicio de feriados. Usa `timeout`, captura errores de red, registra fallos y no bloquees una reserva si el proveedor externo falla.

#### block: 3
Nunca repitas una clave real vista en un apunte. Crea `.env.example` con nombres de variables y conserva el valor real solo en tu entorno local o en un gestor de secretos.

# unit: Semana 2 - Seguridad, contenedores, frontend y nube

## theme: Bloque 6 - Identidad y permisos (4 horas)

### section: Conceptos

#### block: 1
Implementa registro, hash de contrasenas con Argon2 o bcrypt, login y tokens JWT de corta duracion. La autenticacion identifica al usuario; la autorizacion decide si puede ejecutar una accion.

#### block: 2
Define los roles `admin`, `provider` y `client`. Verifica permisos en cada accion protegida, no solamente en el frontend.

### section: Ejercicio

#### block: 1
Prueba que un cliente no pueda crear disponibilidad de otro prestador y que un prestador no pueda administrar turnos ajenos.

## theme: Bloque 7 - Calidad e integracion con React (3 horas)

### section: Ejercicio

#### block: 1
Amplia las pruebas de API y crea un cliente React minimo: iniciar sesion, listar disponibilidad y reservar un turno. Configura CORS solo para el origen de desarrollo del frontend.

## theme: Bloque 8 - Docker y Google Cloud (5 horas)

### section: Conceptos

#### block: 1
Docker Compose levanta API y PostgreSQL localmente con las variables de entorno necesarias. Google Cloud Run despliega la imagen de la API; Cloud SQL aloja PostgreSQL cuando el proyecto requiera persistencia gestionada.

#### block: 2
Antes de desplegar, verifica que la configuracion de produccion no exponga secretos, que las migraciones tengan un flujo definido y que los logs no incluyan contrasenas ni tokens.

### section: Ejercicio

#### block: 1
Despliega primero una version con `GET /health`. Luego conecta una base de datos administrada solo cuando los tests y las migraciones locales sean estables.

## theme: Bloque 9 - Revision profesional (2 horas)

### section: Checklist

#### block: 1
Revisa README, arquitectura, diagrama de datos, variables de entorno, migraciones, pruebas, decisiones pendientes y costos estimados de nube.
