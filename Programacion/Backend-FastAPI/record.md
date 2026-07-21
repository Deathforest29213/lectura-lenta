---
collection_id: backend-fastapi-i
collection_title: Backend y FastAPI
type: content_record
format_version: llm-wiki-record-v1
source_files:
  - contenido-completo.md
  - proyecto-turnos.md
---

# unit: Unidad 1 - Fundamentos de backend y APIs

## theme: Tema 1 - HTTP, REST y contratos

### section: Objetivo

#### block: 1
Una API es un contrato para que clientes como React, una aplicacion movil o una aplicacion de escritorio se comuniquen con el backend.

#### block: 2
El contrato define rutas, metodos HTTP, datos de entrada, respuestas y errores esperados.

## theme: Tema 2 - Consumo de APIs externas

### section: Seguridad y resiliencia

#### block: 1
Al consumir una API externa se deben leer sus endpoints, parametros, limites de tasa y formatos de error.

#### block: 2
Las claves se cargan desde variables de entorno. No se escriben en codigo, apuntes publicados ni repositorios.

#### block: 3
Cada llamada debe usar timeout y manejo explicito de errores antes de persistir datos.

# unit: Unidad 2 - Datos, diseno y FastAPI

## theme: Tema 3 - Modelo relacional

### section: Relaciones

#### block: 1
Las tablas se relacionan con claves foraneas. Una relacion debe expresar una regla del dominio y tener restricciones en la base de datos.

## theme: Tema 4 - Arquitectura por capas

### section: Separacion

#### block: 1
Las rutas HTTP reciben y responden. Los servicios aplican reglas de negocio. Los repositorios acceden a la base de datos.

#### block: 2
Esta separacion permite probar una regla sin depender de FastAPI o PostgreSQL.

# unit: Unidad 3 - Seguridad, calidad y entrega

## theme: Tema 5 - Seguridad minima viable

### section: Controles

#### block: 1
El backend valida toda entrada, cifra contrasenas con hash, autentica con tokens y autoriza por rol.

#### block: 2
CORS se limita a los origenes del frontend autorizado y nunca se configura como comodin en produccion.

## theme: Tema 6 - Pruebas y despliegue

### section: Calidad

#### block: 1
Las pruebas automatizadas verifican reglas de negocio, permisos, respuestas HTTP e integracion con datos.

#### block: 2
Docker estandariza la ejecucion local y Cloud Run publica un contenedor sin depender de la maquina de desarrollo.
