# Ejemplo de estructura de una lección

Este archivo muestra el formato que seguirá todo el material. Cada unidad agrupa una capacidad grande, cada tema desarrolla una idea relacionada y cada sección explica un concepto concreto, con contexto y práctica.

# Unidad 3 — FastAPI y arquitectura del backend

## Tema 6 — Capas y patrones aplicados

### Sección 1 — Rutas, servicios y repositorios

Una ruta recibe una solicitud HTTP y devuelve una respuesta. No debería contener todos los detalles de una reserva, porque mezclar transporte, reglas y consultas vuelve el código difícil de probar. Por eso la ruta delega en un servicio.

El servicio expresa una operación del negocio, por ejemplo `reservar_turno`. Ahí se valida que el prestador exista, que el horario esté disponible y que el cliente tenga permiso. Si necesita datos, el servicio usa un repositorio, que concentra las consultas a PostgreSQL.

Esta división no es obligatoria para una lectura simple, pero es útil cuando aparecen reglas, transacciones o reutilización. La pregunta guía es: “¿esta pieza cambia por la misma razón que las demás?”. Si la respuesta es no, probablemente convenga separarla.

**Ejemplo de estructura:**

```text
app/
  appointments/
    router.py        # HTTP: recibe y responde
    schemas.py       # contratos Pydantic
    service.py       # reglas de reserva
    repository.py    # consultas a PostgreSQL
    models.py        # tablas SQLAlchemy
    test_service.py  # reglas de negocio
```

**Práctica.** Implementa primero una función `reservar_turno` en `service.py` y pruébala. Después crea la ruta que la llama. Así se separa la regla de negocio de FastAPI.

### Sección 2 — Cuándo aplicar un patrón

Un patrón de diseño es un nombre para una solución que aparece repetidamente. En backend no se trata de llenar el proyecto de clases; se trata de reconocer responsabilidades. El patrón Repository puede ser útil si varias reglas necesitan consultar turnos sin conocer SQLAlchemy. Un servicio puede ser útil cuando una operación coordina validación, datos y transacción.

No agregues una abstracción porque “suena profesional”. Si solo existe una consulta simple y no hay una regla asociada, una función directa es más clara. La arquitectura debe reducir el costo de cambiar el sistema, no aumentar el número de carpetas.
