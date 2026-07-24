---
collection_id: qa-testing
collection_title: QA y Testing
type: learning_content
format_version: 1
---

# Unidad 1 — Fundamentos y estrategia de calidad

## Tema 1 — Qué significa calidad de software

### Sección 1 — Calidad como valor para la persona usuaria

La calidad no significa ausencia total de errores. Significa que el producto cumple una necesidad de forma confiable, comprensible y segura dentro de un contexto concreto. Una aplicación de turnos de buena calidad permite reservar sin confusión, evita horarios duplicados y protege la información de cada persona. Una pantalla bonita que pierde reservas sigue siendo un producto de baja calidad.

La calidad tiene varias dimensiones: funcionalidad correcta, rendimiento aceptable, seguridad, accesibilidad, facilidad de uso y mantenibilidad. No todas pesan igual en cada proyecto. Para una aplicación médica, privacidad y trazabilidad son especialmente importantes; para una herramienta interna de lectura, continuidad offline y una interfaz clara pueden ser prioritarias.

**Práctica.** Elige una aplicación que uses y escribe tres comportamientos que, si fallaran, destruirían tu confianza en ella.

### Sección 2 — QA, QC y testing

QA, o aseguramiento de calidad, es el conjunto de prácticas que previene problemas: aclarar requisitos, acordar criterios de aceptación, revisar cambios y mejorar el proceso. QC, o control de calidad, detecta problemas en un producto ya construido. Testing es una técnica de QC: ejecutar el software y comparar su comportamiento con lo esperado.

La distinción importa porque probar al final no compensa un requisito ambiguo. Si una historia dice “el sistema debe ser rápido”, QA pregunta cuánto tarda y en qué condiciones. Si después se descubre que tarda demasiado, una prueba de rendimiento lo evidencia, pero la prevención comenzó al volver medible el requisito.

### Sección 3 — Responsabilidad compartida

La calidad no pertenece solamente a quien tiene el cargo de QA. Producto define el problema y sus reglas; desarrollo implementa y prueba unidades; QA ayuda a visualizar riesgos, escenarios y evidencias; operaciones vigila la entrega. En un equipo pequeño, una misma persona puede asumir varios roles, pero las responsabilidades siguen existiendo.

Trabajar de forma compartida no implica que nadie sea responsable. Implica acordar antes de desarrollar qué significa “listo”, revisar el cambio entre pares y hacer visibles los resultados. Este enfoque de colaboración temprana evita que QA se convierta en una puerta final que recibe todo el riesgo al final del sprint.

## Tema 2 — Estrategia basada en riesgo

### Sección 1 — Riesgo, impacto y probabilidad

Un riesgo es la posibilidad de que algo falle y cause una consecuencia negativa. Para priorizarlo, estima impacto y probabilidad. Un pago duplicado tiene impacto alto aunque ocurra pocas veces; un error de espaciado tiene impacto menor aunque sea común. La prioridad de prueba nace de esa conversación, no de contar pantallas.

Una tabla simple ayuda: describe el riesgo, a quién afecta, qué lo puede provocar y cómo lo detectarás. En una API de turnos, la doble reserva, el acceso a datos de otra persona y la pérdida de una cancelación son riesgos altos. Empieza por ellos antes de automatizar casos decorativos.

### Sección 2 — Cobertura útil, no cobertura total

Cobertura significa qué parte del sistema o de los requisitos está verificada. Ningún equipo puede comprobar todas las combinaciones de datos, dispositivos, permisos y fallas de red. Buscar cobertura total suele consumir tiempo sin aumentar proporcionalmente la confianza.

La cobertura útil protege primero los flujos de mayor valor, los componentes que fallan con frecuencia y las reglas con consecuencias serias. Después amplía la suite de acuerdo con datos reales: defectos encontrados, cambios recientes y uso de las personas. Una prueba se justifica por el riesgo que reduce, no solo porque eleva un porcentaje.

### Sección 3 — Definición de listo y automatización dentro del sprint

La definición de listo es un acuerdo verificable para cerrar una historia. Puede incluir criterios de aceptación cumplidos, pruebas unitarias actualizadas, revisión de código, pruebas manuales de los escenarios críticos y documentación del cambio. No debe ser una frase vaga como “funciona en mi computador”.

La automatización más sostenible se construye mientras la funcionalidad aún está fresca. Posponerla crea una deuda: con el tiempo se olvida el comportamiento esperado, cambian las pantallas y se acumulan scripts pendientes. Para equipos pequeños conviene tomar una ruta crítica y terminarla completa antes de intentar una gran plataforma de pruebas.

# Unidad 2 — Diseño y gestión de pruebas manuales

## Tema 3 — De requisitos a escenarios verificables

### Sección 1 — Criterios de aceptación

Un criterio de aceptación traduce una necesidad en una condición observable. “Como cliente, quiero cancelar una reserva hasta dos horas antes para liberar el cupo” puede generar criterios sobre identidad, plazo, estado final y mensaje de confirmación. Cada criterio debe poder revisarse sin conocer detalles internos del código.

Los criterios reducen interpretaciones distintas entre producto, frontend y backend. Antes de probar, pregunta qué ocurre con datos inválidos, permisos insuficientes, horarios pasados y acciones repetidas. Esas preguntas suelen descubrir reglas que nadie había escrito.

### Sección 2 — Casos de prueba

Un caso de prueba define precondiciones, datos, pasos y resultado esperado. Debe ser suficientemente claro para repetirlo, pero no tan rígido que esconda el objetivo. Por ejemplo: con un usuario autenticado y un horario disponible, reservar a las 10:00 debe crear una reserva visible en la agenda; intentar reservar nuevamente el mismo horario debe ser rechazado sin crear una segunda fila.

Nombra los casos según el comportamiento, no según el botón. `Reserva rechazada cuando el horario ya está ocupado` comunica más que `Probar botón reservar`. Agrupar casos por requisito y riesgo facilita saber qué se debe volver a ejecutar después de un cambio.

### Sección 3 — Particiones y valores límite

Las particiones de equivalencia agrupan entradas que deberían comportarse igual. Si un campo acepta edades de 18 a 120, no necesitas probar todos los números: prueba una edad válida, una menor de 18 y una mayor de 120. El análisis de valores límite prueba cerca del borde: 17, 18, 19, 119, 120 y 121.

Esta técnica reduce pruebas redundantes y encuentra errores clásicos de comparación. Aplica el mismo razonamiento a longitudes de texto, límites de paginación, fechas de reserva y cantidad de elementos permitidos. La clave es identificar el límite de la regla, no inventar entradas al azar.

## Tema 4 — Exploración, defectos y trazabilidad

### Sección 1 — Pruebas exploratorias

Las pruebas exploratorias combinan aprendizaje, diseño y ejecución al mismo tiempo. Son útiles cuando la funcionalidad es nueva, el requisito es incompleto o quieres encontrar comportamientos inesperados. No son “hacer clic sin rumbo”: se trabaja con una misión, un tiempo limitado y notas sobre los caminos explorados.

Una misión podría ser “explorar qué sucede al perder conexión durante una reserva”. Durante la sesión observa mensajes, persistencia, duplicados y posibilidad de recuperación. Al final registra lo cubierto, los riesgos descubiertos y los defectos. Esta evidencia permite que la exploración complemente, en vez de reemplazar, los casos repetibles.

### Sección 2 — Reporte de defectos

Un buen reporte permite que otra persona reproduzca y entienda el problema. Incluye título claro, entorno, precondiciones, pasos mínimos, resultado actual, resultado esperado, evidencia y severidad propuesta. Separa hechos de hipótesis: “la API devuelve 500 al cancelar” es un hecho; “probablemente falla la transacción” es una hipótesis que debe marcarse como tal.

La severidad mide el daño técnico o de negocio; la prioridad define cuándo conviene resolverlo. Un error de seguridad es normalmente severo y prioritario. Una incoherencia visual puede ser de baja severidad, pero subir de prioridad si afecta un lanzamiento importante. Hablar de ambas evita discusiones imprecisas.

### Sección 3 — Trazabilidad y regresión

La trazabilidad conecta requisito, riesgo, caso de prueba, resultado, defecto y cambio de código. No exige una herramienta compleja: una tabla o issue bien enlazado puede bastar para un proyecto pequeño. Su propósito es responder qué se validó, por qué y qué falta.

La regresión consiste en volver a comprobar comportamientos que podían romperse por un cambio. No todo cambio exige toda la suite. Usa el impacto: si cambió autenticación, revisa sesiones, permisos y rutas protegidas; si cambió una migración, revisa integridad, consultas y datos existentes. Con el tiempo, los casos de regresión más repetidos son candidatos naturales a automatización.

# Unidad 3 — Niveles y tipos de prueba

## Tema 5 — Pirámide de pruebas y contratos

### Sección 1 — Pruebas unitarias

Una prueba unitaria verifica una unidad pequeña de comportamiento, normalmente una función o método, sin red, base de datos real ni interfaz. Debe ser rápida y determinista. Una función que decide si se puede cancelar un turno según su hora y estado es una excelente candidata: recibe datos y devuelve una decisión verificable.

Las unitarias dan retroalimentación rápida y localizan errores con precisión. No prueban que FastAPI esté conectada correctamente a PostgreSQL ni que un botón muestre el resultado; por eso son la base, no toda la estrategia. Evita probar detalles internos que cambian sin modificar el comportamiento público.

### Sección 2 — Integración y API

Las pruebas de integración verifican que varios componentes colaboren correctamente: ruta, validación, servicio, repositorio y base de datos de prueba. En una API se comprueba método, estado HTTP, cuerpo de respuesta, persistencia y manejo de error. Son esenciales para verificar contratos que usarán React, Android o iOS.

Una prueba de API debe incluir el caso correcto y los fallos importantes: datos inválidos, identidad ausente, permiso insuficiente, recurso inexistente y conflicto. Utiliza una base aislada o transacciones revertibles para que los datos de una prueba no contaminen la siguiente. Una prueba confiable puede repetirse en local y en CI.

### Sección 3 — Pruebas de contrato

Un contrato define la forma y significado de la comunicación entre servicios o entre frontend y backend. Una prueba de contrato detecta, por ejemplo, que un endpoint cambió `starts_at` por `startDate` y rompería a la app móvil. No basta que el servidor responda 200; la estructura, tipos y errores prometidos también deben conservarse.

FastAPI expone un esquema OpenAPI que facilita documentar y revisar contratos. Puedes validar modelos de respuesta, generar clientes o comparar cambios de esquema. Trata el contrato como parte del producto: una modificación incompatible requiere coordinación, versionado o actualización simultánea de sus consumidores.

## Tema 6 — Pruebas no funcionales y seguridad básica

### Sección 1 — Interfaz, accesibilidad y compatibilidad

Las pruebas de interfaz verifican la experiencia completa desde la perspectiva de la persona usuaria. Un flujo end-to-end puede abrir la aplicación, iniciar sesión, reservar y confirmar el resultado. Son valiosas pero más lentas y frágiles que las unitarias, por lo que deben concentrarse en rutas críticas.

La accesibilidad es parte de calidad. Comprueba navegación por teclado, foco visible, textos alternativos cuando corresponda, etiquetas asociadas a campos y contraste suficiente. La compatibilidad revisa navegadores, tamaños de pantalla y dispositivos relevantes. Define un conjunto realista de destinos soportados en vez de afirmar que se probó “todo”.

### Sección 2 — Rendimiento y confiabilidad

Rendimiento no es solo velocidad máxima; es que los tiempos sean previsibles bajo una carga esperada. Define una meta: por ejemplo, que consultar disponibilidad responda en menos de cierto tiempo con una cantidad razonable de usuarios. Mide primero una línea base y luego investiga consultas lentas, llamadas repetidas, caché y límites de recursos.

La confiabilidad considera qué ocurre ante fallas: red inestable, reintentos, timeout de un servicio externo, datos duplicados y reinicio del proceso. Una buena prueba no solo confirma el camino feliz; comprueba que el sistema falla de forma segura, devuelve un error entendible y no deja datos a medias.

### Sección 3 — Seguridad orientada a pruebas

Las pruebas no sustituyen una auditoría de seguridad, pero ayudan a evitar fallas comunes. Verifica autenticación en rutas protegidas, autorización por propietario o rol, validación de entrada, límites de tamaño y mensajes de error que no filtren secretos. Prueba explícitamente que un usuario no pueda acceder al recurso de otro cambiando un identificador en la URL.

Los datos de prueba no deben usar contraseñas reales ni información personal. Los tokens, claves y configuraciones sensibles se cargan desde variables de entorno o servicios de secretos, nunca desde el repositorio. Cuando encuentres una vulnerabilidad, documenta el impacto con cuidado y compártela por un canal apropiado.

# Unidad 4 — Automatización pragmática

## Tema 7 — Decidir qué automatizar

### Sección 1 — Valor, frecuencia y estabilidad

Automatiza primero lo que se ejecuta con frecuencia, protege valor alto y tiene un comportamiento estable. Inicio de sesión, reserva, pago, permisos y endpoints centrales son candidatos comunes. Una pantalla temporal o un flujo en constante rediseño puede permanecer manual hasta estabilizarse.

La automatización tiene costo inicial y mantenimiento. Calcula de forma simple: cuántas veces se ejecutará el caso, cuánto tiempo manual ahorra, cuán grave sería un fallo y cuánto cambiará la funcionalidad. El objetivo es aumentar la velocidad de retroalimentación, no acumular scripts para presumir cobertura.

### Sección 2 — Suite saludable y deuda de automatización

Una suite saludable produce señales confiables. Si falla por el mismo producto que pretende verificar, aporta valor; si falla por selectores inestables, datos compartidos o esperas arbitrarias, se vuelve ruido. Un test inestable se llama flaky y erosiona la confianza: las personas dejan de mirar los resultados o repiten pipelines sin investigar.

Reserva tiempo para refactorizar, eliminar duplicados, retirar pruebas obsoletas y corregir flakiness. Mantener es parte del trabajo, no una tarea extra. La deuda de automatización aparece cuando se añaden casos sin estructura ni responsables; crece hasta que la suite es lenta y nadie quiere modificarla.

### Sección 3 — Datos y entornos controlados

Los datos determinan si una prueba puede repetirse. Crea datos sintéticos, únicos por ejecución cuando sea necesario y fáciles de limpiar. Evita depender de una cuenta compartida con estado desconocido o de registros de producción. Para servicios externos, usa mocks o stubs cuando el objetivo no sea probar la integración real.

Los entornos deben tener una finalidad clara: desarrollo para iterar, pruebas para validación aislada y producción para usuarios reales. Mantén configuraciones versionadas sin secretos y registra qué versión se probó. Sin datos y entornos controlados, incluso un buen test puede alternar entre éxito y fracaso sin cambios de código.

## Tema 8 — Herramientas y diseño de pruebas automatizadas

### Sección 1 — Elegir la herramienta adecuada

Elige herramientas según la tecnología, habilidades del equipo y costo de mantenimiento. Para un backend Python con FastAPI, `pytest` y un cliente HTTP de prueba son una base natural. Para una interfaz React, Playwright permite recorrer el navegador; para móvil se requieren herramientas que controlen dispositivos o emuladores. No adoptes una plataforma solo por moda.

La herramienta no reemplaza el diseño. Un framework enorme no arregla requisitos ambiguos ni datos inestables. Empieza con una solución pequeña que el equipo pueda ejecutar localmente, entender y depurar. Luego añade paralelismo, reportes o servicios externos si resuelven una necesidad concreta.

### Sección 2 — Legibilidad, fixtures y dobles de prueba

Cada prueba debe expresar intención: prepara un estado, ejecuta una acción y verifica un resultado. Usa nombres descriptivos como `test_cancelacion_rechazada_despues_del_plazo`. Las fixtures crean datos o dependencias reutilizables sin ocultar el contexto importante. Mantén cada prueba independiente para que su orden no cambie el resultado.

Un doble de prueba reemplaza una dependencia real. Un stub devuelve una respuesta predefinida; un mock permite comprobar una interacción. Úsalos para aislar una regla de negocio de correo, pagos o servicios remotos. No los uses para simular todo el sistema: si el comportamiento real de una integración importa, agrega una prueba de integración específica.

### Sección 3 — Selectores y estructura de interfaz

Las pruebas de interfaz necesitan localizar elementos. Prefiere roles accesibles, etiquetas y atributos intencionales como `data-testid` cuando no haya una alternativa semántica. Evita selectores basados en posición, estilos o texto cambiante; son frágiles y hacen que un cambio visual rompa una prueba funcional.

Organiza acciones repetidas en componentes o páginas reutilizables, pero no escondas toda la lógica detrás de abstracciones genéricas. Una prueba debe seguir leyendo como un escenario de negocio. Espera estados observables —un botón habilitado, una respuesta terminada, un mensaje visible— en lugar de usar pausas fijas que vuelven lenta e inestable la suite.

# Unidad 5 — Calidad en el ciclo de entrega

## Tema 9 — CI/CD y puertas de calidad

### Sección 1 — Pipeline de retroalimentación

La integración continua ejecuta validaciones automáticas cuando se crea un pull request o se integra un cambio. Un pipeline básico puede instalar dependencias, aplicar formato y lint, ejecutar pruebas unitarias y de API, construir la aplicación y publicar reportes. Su valor está en descubrir errores antes de que lleguen a otra persona o a producción.

Ordena las validaciones por velocidad: primero formato, tipos y unitarias; luego integración; por último los flujos end-to-end más costosos. Una falla debe mostrar suficiente contexto para corregirse: nombre del test, salida relevante, captura o traza. No conviertas el pipeline en una caja negra que solo muestra rojo.

### Sección 2 — Pull requests y revisión de calidad

Un pull request es una conversación sobre un cambio. Antes de aprobar, revisa si existe requisito claro, si los casos de error están cubiertos, si hay pruebas proporcionales al riesgo y si la documentación o migraciones necesitan actualización. La revisión no busca encontrar cada error a mano; busca compartir comprensión y prevenir decisiones difíciles de revertir.

Incluye en la descripción qué cambió, cómo se probó y qué quedó fuera de alcance. Para cambios visuales, añade evidencia; para una API, describe el contrato; para una migración, explica impacto y reversibilidad. Esto hace que QA y desarrollo tengan una base común sin depender de memoria oral.

### Sección 3 — Versiones, despliegue y observabilidad

Una entrega segura conecta pruebas previas con observación posterior. Etiqueta o identifica la versión desplegada, conserva el resultado de las validaciones y vigila errores, tiempos de respuesta y comportamiento del flujo crítico. Las pruebas reducen riesgo, pero no predicen todas las condiciones reales de producción.

Define una respuesta ante un problema: detener el despliegue, revertir si es seguro, desactivar una funcionalidad o corregir con urgencia. Los logs deben tener contexto suficiente para diagnosticar sin exponer datos sensibles. La observabilidad transforma un incidente en información para mejorar pruebas, requisitos y monitoreo.

## Tema 10 — Métricas y mejora continua

### Sección 1 — Métricas que orientan decisiones

Una métrica sirve si provoca una conversación útil. El tiempo de regresión, confiabilidad de la suite, defectos que escapan a producción, tiempo de corrección y porcentaje de flakiness pueden revelar cuellos de botella. Interprétalas junto con el contexto: aumentar la cantidad de tests no siempre mejora la calidad.

Evita usar métricas como castigo individual. Si una persona oculta defectos por miedo a empeorar una gráfica, el sistema pierde información. Mide tendencias y usa los datos para decidir dónde invertir: una ruta con muchos defectos puede necesitar mejor diseño, más pruebas de contrato o una revisión de requisitos.

### Sección 2 — Análisis de causa y acciones correctivas

Cuando aparece un defecto importante, pregunta qué condiciones permitieron que llegara allí. No busques culpables; reconstruye el sistema: ¿el requisito era ambiguo?, ¿faltaba un caso límite?, ¿el entorno no representaba producción?, ¿la revisión no vio un cambio de contrato? Técnicas como los cinco porqués ayudan a profundizar sin asumir una respuesta prematura.

Una acción correctiva resuelve la causa inmediata; una preventiva reduce la posibilidad de repetición. Por ejemplo, corregir una autorización rota es correctivo; agregar una prueba de acceso cruzado y una regla de revisión de permisos es preventivo. Da responsable y fecha a la acción, y luego verifica que realmente produjo la mejora esperada.

### Sección 3 — Calidad sostenible en equipos pequeños

Un equipo pequeño no necesita copiar el proceso de una empresa grande. Necesita disciplina proporcional: una lista de riesgos, pocos flujos críticos automatizados, datos de prueba previsibles, una revisión consciente y tiempo reservado para mantenimiento. La estrategia mejora cuando el equipo hace menos cosas, pero las termina y mide bien.

Comparte el resultado de las pruebas con producto y desarrollo. Si todos ven qué está protegido, qué falló y qué riesgo se acepta, QA deja de ser un informe aislado. Esa visibilidad permite elegir con honestidad entre publicar, corregir o reducir el alcance.

# Unidad 6 — Proyecto aplicado y portafolio profesional

## Tema 11 — Plan de pruebas para una Agenda API

### Sección 1 — Mapa de riesgos y alcance

Para una Agenda API, comienza con los flujos: registro, autenticación, disponibilidad, reserva, cancelación y consulta de agenda. Asigna prioridad alta a identidad, permisos, doble reserva y consistencia de horarios. Define lo que no cubrirás todavía, como todos los navegadores antiguos o carga masiva, para que el alcance sea honesto.

El mapa debe enlazar cada riesgo a una forma de verificación. Una regla de cancelación puede tener una unitaria; la reserva completa, integración de API; y el recorrido de cliente, un flujo end-to-end. Esta combinación evita depender solo de pruebas lentas de interfaz para encontrar errores de negocio.

### Sección 2 — Matriz de pruebas mínima viable

Construye una matriz con columnas de requisito, riesgo, tipo de prueba, caso, estado y evidencia. Incluye camino feliz, validaciones, permisos y conflictos. Por ejemplo, `POST /appointments` debe crear una reserva válida, rechazar datos incompletos, rechazar un horario ocupado y bloquear a un usuario no autenticado.

La matriz no es burocracia: sirve para detectar huecos y decidir qué automatizar. Si un caso crítico solo se prueba manualmente antes de cada publicación, anótalo como candidato. Si una prueba automatizada no se vincula a ningún riesgo o requisito, cuestiona si sigue pagando su costo de mantenimiento.

### Sección 3 — Ejecución y evidencia

Ejecuta primero verificaciones rápidas y luego las que necesitan entorno: lint, unitarias, API e interfaz. Anota versión, entorno, fecha, datos usados y resultado. Cuando un caso falle, crea un defecto o una nota de investigación; no lo marques simplemente como “rojo” y continúes.

La evidencia puede ser un reporte de CI, salida de pruebas, captura de la interfaz o una consulta controlada a la base de datos de prueba. Debe permitir que otra persona entienda qué se validó sin repetir toda la investigación. Evita adjuntar datos reales de clientes.

## Tema 12 — Presentar calidad de forma profesional

### Sección 1 — Repositorio y documentación

Un portafolio de QA gana valor cuando alguien puede ejecutarlo. Explica cómo instalar dependencias, preparar variables de entorno seguras, crear datos de prueba y lanzar cada nivel de prueba. Mantén los tests cerca del código que verifican y usa convenciones de nombres claras. Un README breve pero preciso vale más que una lista de herramientas sin contexto.

Documenta decisiones: qué flujos automatizaste primero, qué riesgos aceptaste y por qué. Esta reflexión demuestra criterio profesional, especialmente en proyectos propios donde no existe un equipo de QA separado. También te ayuda a retomar el proyecto meses después sin depender de tu memoria.

### Sección 2 — Comunicación de resultados

Comunicar calidad no es decir “todo pasó”. Resume alcance, resultados, defectos abiertos, riesgos conocidos y recomendación. Un ejemplo honesto es: “las reservas y permisos críticos pasan en API; la prueba de red lenta sigue manual; no recomendamos publicar la migración hasta validar datos existentes”.

Adapta el detalle a quien recibe el informe. Producto necesita impacto y decisión; desarrollo necesita pasos y evidencia; una persona usuaria necesita un mensaje claro y una alternativa. La transparencia aumenta la confianza incluso cuando hay problemas.

### Sección 3 — Ruta de práctica posterior

Después de este módulo, profundiza en pruebas de FastAPI con `pytest`, migraciones y base de datos temporal; pruebas de React con Testing Library y Playwright; pruebas de aplicaciones móviles; rendimiento con herramientas de carga; y seguridad con guías reconocidas. Avanza por proyectos: cada técnica debe proteger una necesidad real, no ser un ejercicio aislado.

Tu siguiente desafío es tomar una funcionalidad de Lectura Lenta o de la Agenda API, escribir tres riesgos, diseñar cinco casos y automatizar uno de alto valor. Repite el ciclo cuando cambie la funcionalidad. La práctica continua es lo que convierte conceptos de QA en criterio profesional.
