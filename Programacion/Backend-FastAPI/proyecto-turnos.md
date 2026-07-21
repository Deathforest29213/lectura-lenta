# Proyecto guia: Agenda API

## Alcance de la primera version

Una plataforma generica de turnos. No incluye pagos, notificaciones reales ni calendario externo hasta que la reserva basica sea confiable.

## Modelo de datos inicial

```text
User 1 --- 0..1 ProviderProfile
User 1 --- * Appointment (como cliente)
ProviderProfile 1 --- * AvailabilitySlot
ProviderProfile 1 --- * Appointment (como prestador)
```

| Entidad | Campos esenciales | Reglas |
| --- | --- | --- |
| `users` | id, email, password_hash, role, is_active | email unico; nunca guardar contrasena en texto plano. |
| `provider_profiles` | id, user_id, display_name, timezone | `user_id` unico y con FK a users. |
| `availability_slots` | id, provider_id, starts_at, ends_at | inicio menor que fin; no solapar disponibilidades del mismo prestador. |
| `appointments` | id, client_id, provider_id, starts_at, ends_at, status | no turnos en el pasado ni doble reserva activa para prestador y horario. |

## Endpoints de la primera iteracion

| Metodo | Ruta | Rol | Proposito |
| --- | --- | --- | --- |
| `POST` | `/auth/register` | publico | Crear cuenta. |
| `POST` | `/auth/login` | publico | Obtener token. |
| `GET` | `/providers` | publico | Buscar prestadores. |
| `GET` | `/providers/{id}/availability` | publico | Consultar disponibilidad. |
| `POST` | `/appointments` | client | Reservar turno. |
| `PATCH` | `/appointments/{id}/cancel` | client, admin | Cancelar bajo reglas definidas. |
| `POST` | `/providers/me/availability` | provider | Publicar disponibilidad propia. |
| `GET` | `/appointments/me` | client, provider | Ver agenda propia. |

## Decisiones de arquitectura iniciales

```text
React / movil / escritorio
            |
         FastAPI
   rutas -> servicios -> repositorios -> PostgreSQL
            |
     integraciones externas opcionales
```

- Los esquemas Pydantic son el contrato de entrada y salida.
- Los servicios contienen las reglas de negocio y las transacciones.
- Los repositorios encapsulan consultas SQLAlchemy.
- PostgreSQL protege integridad con FKs, `UNIQUE`, `CHECK` e indices.
- No se agregan microservicios, colas ni cache antes de medir una necesidad real.

## Riesgos que deben tener prueba

1. Dos solicitudes simultaneas no deben crear la misma reserva.
2. Un usuario no puede leer ni modificar turnos ajenos.
3. Un token vencido no concede acceso.
4. Una API externa caida no expone detalles internos ni rompe el flujo principal.
5. Secretos, tokens y hashes no aparecen en respuestas, logs ni repositorio.
