# Proyecto práctico — Plan de calidad para una Agenda API

## Propósito

Aplica el módulo a una API de reservas de turnos con un cliente web o móvil. El resultado es una evidencia pequeña pero profesional de que sabes transformar requisitos en una estrategia de calidad.

## Entregables

1. Una lista de riesgos ordenada por impacto y probabilidad.
2. Casos de prueba manuales para registro, inicio de sesión, búsqueda de disponibilidad, reserva y cancelación.
3. Pruebas automatizadas de al menos una regla de negocio, un endpoint y un flujo crítico de interfaz.
4. Un pipeline que ejecute las pruebas relevantes en cada pull request.
5. Un informe corto de defectos, resultados y mejoras pendientes.

## Criterio de éxito

Una reserva no debe duplicarse, un usuario no debe leer ni modificar turnos ajenos y una falla debe producir un mensaje útil sin revelar datos internos. El proyecto se considera listo cuando las pruebas pueden repetirse con datos controlados, sus resultados son comprensibles y el equipo sabe qué revisar antes de publicar.
