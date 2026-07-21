---
collection_id: backend-fastapi-i
collection_title: Backend y FastAPI
type: learning_content
format_version: 1
---

# Unidad 1 — Backend, HTTP y APIs

## Tema 1 — El rol del backend

### Sección 1 — Cliente, servidor y base de datos

Una aplicación moderna suele dividirse en cliente, servidor y base de datos. El cliente es la parte con la que una persona interactúa: una web en React, una aplicación de escritorio o una app móvil. El servidor, o backend, recibe solicitudes del cliente, aplica las reglas del negocio y decide qué información devolver. La base de datos conserva los datos que deben sobrevivir al cierre de la aplicación.

Por ejemplo, al reservar un turno, React no debería escribir directamente en PostgreSQL. React solicita la reserva al backend; el backend valida que el horario exista, que el cliente esté autenticado y que no haya otra reserva activa. Solo entonces guarda el turno. Esta separación protege los datos y permite que el mismo backend atienda a web, Android, iOS y escritorio.

**Práctica.** Dibuja el recorrido de una reserva desde el botón del frontend hasta la fila creada en PostgreSQL. Identifica qué responsabilidad pertenece a cada parte.

### Sección 2 — Una API como contrato

Una API es un contrato de comunicación. Define qué ruta se puede llamar, con qué método HTTP, qué datos recibe, qué formato devuelve y qué errores pueden ocurrir. Un contrato claro evita que el frontend dependa de detalles internos del servidor.

El contrato de `POST /appointments` puede indicar que recibe `provider_id`, `starts_at` y `ends_at`, y que devuelve un turno creado con su identificador y estado. Si falta un campo, la API responde con un error de validación; si el horario ya está ocupado, devuelve un error de negocio. FastAPI ayuda a expresar este contrato mediante modelos Pydantic y lo documenta automáticamente en `/docs`.

**Práctica.** Escribe en palabras el contrato de `GET /providers/{id}/availability`: entrada, respuesta esperada, respuesta cuando el prestador no existe y respuesta para fechas inválidas.

## Tema 2 — HTTP y estilo REST

### Sección 1 — Recursos, URLs y métodos HTTP

REST organiza una API alrededor de recursos: usuarios, prestadores, disponibilidad y turnos. La URL identifica el recurso; el método HTTP expresa la intención. `GET` consulta, `POST` crea, `PATCH` modifica parcialmente y `DELETE` elimina o, cuando la trazabilidad importa, inicia una cancelación lógica.

La ruta debe describir el recurso, no la implementación. `POST /appointments` comunica mejor la intención que `/createAppointment`. Cuando se necesita una acción con regla de negocio específica, una ruta como `PATCH /appointments/{id}/cancel` es aceptable porque cancelar no siempre equivale a borrar: puede cambiar el estado, registrar el motivo y liberar un horario.

**Práctica.** Clasifica las operaciones crear usuario, consultar agenda propia, publicar disponibilidad y cancelar turno con un método y una ruta coherentes.

### Sección 2 — Solicitud, respuesta y códigos de estado

Una solicitud HTTP tiene método, URL, cabeceras y, en algunos casos, cuerpo. Las cabeceras transportan metadatos como `Content-Type: application/json` y `Authorization: Bearer <token>`. El cuerpo contiene datos estructurados, normalmente JSON. Una respuesta incluye un código de estado y un cuerpo que debe ser útil para el cliente, pero que no revele detalles internos.

Usa `200 OK` para consultas o actualizaciones correctas, `201 Created` al crear, `204 No Content` solo cuando no hay contenido de respuesta, `401 Unauthorized` cuando falta una identidad válida, `403 Forbidden` cuando existe identidad pero no permiso, `404 Not Found` si el recurso no existe y `409 Conflict` si una reserva choca con otra. Elegir bien estos códigos hace que los clientes puedan manejar errores sin adivinar.

**Práctica.** Define el código de estado y un mensaje seguro para: token vencido, turno ocupado, prestador inexistente y error inesperado de base de datos.

### Sección 3 — Filtros, paginación y versionado

Las colecciones crecen. `GET /appointments` no debe devolver todos los turnos de todos los tiempos. Agrega filtros explícitos como `?date=2026-07-21`, `?provider_id=42` y paginación mediante `limit` y `offset` o cursores. Los límites deben estar validados para impedir respuestas excesivamente costosas.

El versionado permite evolucionar una API sin romper clientes existentes. Para un proyecto inicial basta con diseñar contratos cuidadosos; cuando haya consumidores externos, una ruta como `/api/v1/appointments` permite introducir cambios incompatibles en una versión nueva. No uses versionado como excusa para conservar errores: úsalo cuando exista una incompatibilidad real.

# Unidad 2 — PostgreSQL y modelado relacional

## Tema 3 — Modelar el dominio de turnos

### Sección 1 — Entidades y reglas del negocio

Una entidad representa algo que el sistema necesita identificar a lo largo del tiempo. En Agenda API, `users`, `provider_profiles`, `availability_slots` y `appointments` son entidades. Antes de escribir una tabla, formula una frase: “un usuario puede reservar muchos turnos” o “un prestador publica muchos bloques de disponibilidad”. Estas frases revelan las relaciones necesarias.

Las reglas del negocio no son solo nombres de columnas. “No se puede reservar una fecha pasada” y “un prestador no puede tener dos reservas activas en el mismo horario” describen comportamientos que la aplicación debe asegurar. Es importante distinguir la disponibilidad publicada de una reserva confirmada: la primera expresa una oferta; la segunda, un compromiso con un cliente.

### Sección 2 — Relaciones y claves foráneas

Una clave primaria identifica una fila de forma única. Una clave foránea conecta una fila con otra y permite que PostgreSQL proteja la relación. Por ejemplo, `appointments.client_id` y `appointments.provider_id` deben referenciar usuarios o perfiles de prestador existentes. Una relación uno a muchos usa la clave foránea en el lado “muchos”; una relación muchos a muchos necesita una tabla intermedia.

Las claves foráneas impiden referencias inválidas incluso si aparece otro programa, un script o un bug que no pasa por la interfaz. La validación de FastAPI mejora la experiencia, pero no sustituye la integridad de la base de datos. En una aplicación real ambas capas se complementan.

### Sección 3 — Restricciones, índices y transacciones

Una restricción expresa una verdad que la base de datos debe mantener. `NOT NULL` exige un dato; `UNIQUE` evita correos duplicados; `CHECK (starts_at < ends_at)` rechaza intervalos inválidos. Los índices aceleran consultas frecuentes, por ejemplo los turnos de un prestador dentro de un rango de fechas. Sin embargo, cada índice también aumenta costo al escribir, por lo que debe responder a una consulta real.

Una transacción agrupa cambios que deben ocurrir juntos. Reservar un turno debe validar disponibilidad y crear la reserva como una sola operación: si una parte falla, ninguna debe persistir. La concurrencia es importante: dos solicitudes pueden llegar casi al mismo tiempo. Por eso la prevención de doble reserva necesita una transacción y una protección en base de datos, no únicamente una consulta previa en Python.

**Práctica.** Diseña las cuatro tablas iniciales, sus claves y sus restricciones. Escribe cuál índice usarías para consultar la agenda semanal de un prestador.

## Tema 4 — SQLAlchemy y migraciones

### Sección 1 — ORM sin olvidar SQL

Un ORM como SQLAlchemy representa tablas y relaciones mediante clases Python. Reduce repetición y aporta tipado, pero no elimina la necesidad de entender SQL. Debes poder explicar qué consulta se ejecuta, qué relación se carga y por qué un índice ayuda. El ORM es una herramienta para expresar el modelo; PostgreSQL sigue siendo quien garantiza los datos.

Mantén los modelos de persistencia separados de los esquemas de API. Un modelo SQLAlchemy describe cómo se guarda una fila; un esquema Pydantic describe qué acepta o devuelve un endpoint. Separarlos evita exponer accidentalmente campos internos como `password_hash`.

### Sección 2 — Migraciones con Alembic

Una migración es una modificación versionada del esquema: crear una tabla, agregar una columna o introducir un índice. Alembic guarda ese historial para que cada entorno evolucione en el mismo orden. Nunca dependas de crear las tablas manualmente en cada máquina: eso vuelve imposible reproducir producción y revisar cambios.

Una migración debe poder aplicarse desde una base vacía y, cuando sea posible, revertirse. Antes de cambiar una columna en producción, piensa en los datos existentes y en un plan de compatibilidad. Por ejemplo, una columna obligatoria nueva suele requerir primero un valor por defecto o una etapa de relleno.

# Unidad 3 — FastAPI y arquitectura del backend

## Tema 5 — Rutas, esquemas y dependencias

### Sección 1 — Rutas y modelos Pydantic

Una ruta FastAPI traduce HTTP a una operación del sistema. Recibe parámetros, los valida con Pydantic, llama a una regla de negocio y serializa una respuesta. Debe ser pequeña: si una ruta contiene autenticación, SQL, reglas de agenda y formato de respuesta mezclados, será difícil probarla y modificarla.

Pydantic convierte JSON no confiable en datos validados. Un modelo puede exigir que una fecha incluya zona horaria, que un correo tenga forma válida y que la duración no sea negativa. Validar en el borde de la aplicación evita propagar datos ambiguos a las capas internas.

### Sección 2 — Dependencias e inyección

Una dependencia es una pieza reutilizable que FastAPI entrega a una ruta: sesión de base de datos, usuario actual, configuración o verificación de rol. Esto evita repetir código y facilita reemplazar componentes en pruebas. Una prueba puede inyectar una base aislada o un usuario falso sin alterar el código de producción.

No conviertas cada clase en una dependencia por costumbre. Úsalas en los límites repetidos y estables: autenticación, sesión, configuración y permisos. La claridad vale más que una arquitectura ceremonial.

## Tema 6 — Capas y patrones aplicados

### Sección 1 — Rutas, servicios y repositorios

Las rutas manejan HTTP. Los servicios contienen las reglas del negocio, como decidir si un horario se puede reservar. Los repositorios encapsulan el acceso a PostgreSQL. Esta separación permite probar “reservar turno” directamente, sin levantar un servidor, y cambiar una consulta sin alterar el contrato público.

El límite no debe ser rígido: para una consulta simple de lectura, una ruta puede llamar a una función de consulta clara. Introduce un servicio cuando existe una regla, una transacción, una combinación de datos o una lógica que merece un nombre propio. La meta es alta cohesión y bajo acoplamiento.

### Sección 2 — Diseño de la operación reservar

Reservar un turno es una operación de negocio, no solo un `INSERT`. El servicio debe comprobar autenticación, existencia del prestador, validez del intervalo, pertenencia a una franja disponible, ausencia de conflictos y una política de cancelación o estados. Luego debe escribir dentro de una transacción y devolver una representación segura del resultado.

Los estados hacen explícito el ciclo de vida: `confirmed`, `cancelled` y, más adelante, `completed` o `no_show`. En vez de borrar una reserva cancelada, conservar el estado ayuda a auditoría, estadísticas y soporte.

# Unidad 4 — Seguridad y autorización

## Tema 7 — Contraseñas, sesiones y tokens

### Sección 1 — Hash de contraseñas

Una contraseña nunca se guarda ni se registra en texto plano. Al crear una cuenta, el backend aplica un algoritmo de hash adaptativo, como Argon2 o bcrypt, con salt. Al iniciar sesión, verifica la contraseña contra el hash almacenado. El hash no es cifrado reversible: está diseñado para que una filtración de la base no revele inmediatamente las contraseñas.

Las claves de APIs externas y las claves de firma de tokens también son secretos. Se reciben mediante variables de entorno, se excluyen de Git y se cargan desde un gestor de secretos en producción. Un archivo `.env.example` solo muestra nombres y valores ficticios.

### Sección 2 — Autenticación y autorización

Autenticar responde “quién es esta persona”; autorizar responde “qué puede hacer”. Un JWT firmado puede transportar el identificador del usuario y su rol durante un periodo corto. El servidor debe verificar firma, vencimiento y datos mínimos antes de confiar en él.

Los roles iniciales son `admin`, `provider` y `client`, pero el rol no sustituye la autorización por recurso. Un prestador con rol `provider` puede editar su propia disponibilidad, no la de cualquier prestador. Un cliente puede cancelar su propia reserva, no la de otra persona. Estas reglas se prueban igual que una regla de datos.

## Tema 8 — Superficie mínima segura

### Sección 1 — Validación, CORS y errores

Valida toda entrada aunque venga de tu propio frontend; un atacante puede llamar a la API directamente. Define tamaños máximos, formatos de fechas, tipos de archivos y valores permitidos. CORS debe listar los orígenes reales que pueden llamar desde un navegador; `*` combinado con credenciales no es una configuración de producción segura.

Los errores enviados al cliente deben explicar qué puede corregir, no exponer una traza, una consulta SQL, tokens o configuración. Registra detalles técnicos en el servidor con cuidado de no registrar datos sensibles.

### Sección 2 — Amenazas iniciales

Tu primera revisión de seguridad debe preguntar: ¿quién puede leer este dato?, ¿quién puede modificarlo?, ¿qué ocurre con una entrada maliciosa?, ¿qué secreto podría filtrarse? No es necesario implementar todo un programa de ciberseguridad para comenzar, pero sí cubrir autenticación, autorización, validación, secretos, dependencias actualizadas y copias de seguridad de datos.

# Unidad 5 — Pruebas y calidad

## Tema 9 — Pruebas automatizadas

### Sección 1 — Pruebas unitarias e integración

Una prueba unitaria verifica una regla aislada y rápida, por ejemplo que una reserva en el pasado sea rechazada. Una prueba de integración comprueba que componentes reales colaboren, como FastAPI, la base de datos de prueba y autenticación. Las dos son necesarias: las unitarias localizan errores; las de integración detectan desajustes entre capas.

Con `pytest` y `httpx` puedes llamar a la API sin abrir un navegador. Cada prueba debe preparar sus propios datos y no depender del orden de ejecución. Usa una base de pruebas separada y limpia para no alterar datos de desarrollo.

### Sección 2 — Casos importantes para Agenda API

Prueba creación válida, fecha pasada, intervalo inválido, turno duplicado, token vencido y acceso a recurso ajeno. También prueba la condición más valiosa: dos solicitudes simultáneas para el mismo horario solo deben producir una reserva. Esta prueba obliga a diseñar bien la transacción y las restricciones.

La cobertura porcentual es una señal, no el objetivo. Es mejor cubrir las reglas que pueden dañar datos o seguridad que alcanzar una cifra alta con pruebas triviales.

## Tema 10 — Observabilidad y revisión

### Sección 1 — Logs y diagnósticos

Los logs responden qué ocurrió sin necesitar entrar a la base de datos. Registra eventos relevantes, duración, identificador de solicitud y errores controlados. No registres contraseñas, tokens, cabeceras `Authorization` ni datos personales innecesarios.

Un endpoint `GET /health` sirve para que Docker y Cloud Run sepan si el proceso responde. No debe revelar secretos ni realizar operaciones costosas. Más adelante puedes distinguir entre salud del proceso y disponibilidad de dependencias.

### Sección 2 — Revisión profesional

Antes de abrir un PR, verifica formato, tipado, pruebas, migraciones, variables de entorno y documentación. La revisión de código debe preguntar qué regla se protege, qué falla posible se cubre y si el cambio mantiene el contrato. El código fácil de revisar suele ser pequeño, nombrado con precisión y acompañado de una prueba relevante.

# Unidad 6 — Integración, Docker y Google Cloud

## Tema 11 — Clientes React, móviles y escritorio

### Sección 1 — Un contrato para varios clientes

React, Android, iOS y una aplicación de escritorio pueden consumir el mismo contrato HTTP. El backend no debe depender de detalles visuales de un cliente. Devuelve datos estables, fechas con zona horaria explícita y errores con una estructura consistente para que cada plataforma pueda presentarlos a su manera.

Comienza integrando React con tres flujos: iniciar sesión, consultar disponibilidad y reservar. El frontend guarda solo lo necesario para la sesión y siempre trata la respuesta del backend como autoridad final: aunque muestre un horario libre, otro usuario pudo reservarlo antes de confirmar.

## Tema 12 — Contenedores y nube

### Sección 1 — Docker y Docker Compose

Docker empaqueta aplicación y dependencias en una imagen reproducible. Docker Compose coordina servicios locales, por ejemplo API y PostgreSQL, mediante una red y variables de entorno declaradas. Esto reduce diferencias entre máquinas y acerca desarrollo a producción.

El contenedor debe recibir configuración desde el entorno, no desde valores escritos en la imagen. Agrega archivos de ejemplo, ignora `.env` y evita copiar claves durante el build. Ejecuta las migraciones de forma controlada; no las ocultes como un efecto secundario difícil de depurar.

### Sección 2 — Google Cloud Run y Cloud SQL

Cloud Run ejecuta un contenedor HTTP escalable. La API debe escuchar el puerto indicado por el entorno y ser sin estado: no debe depender de archivos locales persistentes ni de memoria compartida entre instancias. Cloud SQL ofrece PostgreSQL administrado para los datos persistentes.

El despliegue mínimo empieza con `/health` y una imagen verificada. Después configura secretos, conexión segura a Cloud SQL, variables de entorno y observabilidad. Revisa costos y límites antes de exponer un servicio público; la nube facilita desplegar, pero no elimina la responsabilidad de vigilar consumo y seguridad.

### Sección 3 — Definición de terminado

El primer hito está terminado cuando una persona puede registrarse, iniciar sesión, ver disponibilidad, reservar y cancelar según sus permisos; las reglas tienen pruebas; el proyecto se inicia con Docker Compose; y una versión equivalente responde en Cloud Run. Lo que queda fuera se registra como siguiente iteración: notificaciones, pagos, sincronización con calendarios, métricas y mejoras de disponibilidad.
