---
module_id: programacion-arquitectura
format: lectura-lenta-question-map-v1
---

# Preguntas relevantes

## unit: Unidad 1 - Fundamentos de arquitectura de software

### question: arquitectura-u1-q1
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-1-que-es-arquitectura.idea-central.b1
prompt: ¿Qué es la arquitectura de software según la Unidad 1?
A: La elección del lenguaje de programación principal
B: La organización de alto nivel de un sistema
C: La cantidad de carpetas dentro del proyecto
D: El diseño visual de una aplicación

### question: arquitectura-u1-q2
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-1-que-es-arquitectura.idea-central.b2
prompt: ¿Qué define la arquitectura además de las partes del sistema?
A: Los colores de la interfaz
B: Las responsabilidades y formas de comunicación
C: El nombre exacto de cada archivo
D: La velocidad del computador donde se ejecuta

### question: arquitectura-u1-q3
difficulty: media
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-1-que-es-arquitectura.idea-central.b4
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-1-que-es-arquitectura.idea-central.b5
prompt: ¿Por qué la arquitectura no es solamente una estructura de carpetas?
A: Porque las carpetas no pueden organizar código
B: Porque la arquitectura real aparece en dependencias, contratos, límites y flujo de cambio
C: Porque toda arquitectura debe usar microservicios
D: Porque las carpetas solo existen en frontend

### question: arquitectura-u1-q4
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-1-que-es-arquitectura.decisiones-y-tradeoffs.b2
prompt: ¿Cuál de estas es una decisión arquitectónica?
A: Cambiar el tamaño de una fuente
B: Separar dominio e infraestructura
C: Renombrar una variable local
D: Escribir un comentario más largo

### question: arquitectura-u1-q5
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-1-que-es-arquitectura.decisiones-y-tradeoffs.b4
prompt: ¿Qué implica toda arquitectura?
A: Que no habrá errores
B: Que siempre será compleja
C: Que existen renuncias o tradeoffs
D: Que no se necesitan pruebas

### question: arquitectura-u1-q6
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-2-separacion-de-responsabilidades.responsabilidad-principal.b1
prompt: ¿Qué significa separar responsabilidades?
A: Que cada parte del sistema tenga un trabajo principal claro
B: Que todo el código esté en una sola función
C: Que cada archivo tenga exactamente diez líneas
D: Que se evite usar módulos

### question: arquitectura-u1-q7
difficulty: media
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-2-separacion-de-responsabilidades.responsabilidad-principal.b3
prompt: ¿Qué indica que una pieza cambia por muchas razones distintas?
A: Que probablemente tiene buena cohesión
B: Que probablemente está mezclando responsabilidades
C: Que siempre debe convertirse en una base de datos
D: Que no necesita pruebas

### question: arquitectura-u1-q8
difficulty: media
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-2-separacion-de-responsabilidades.separacion-en-backend.b2
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-2-separacion-de-responsabilidades.separacion-en-backend.b3
prompt: En un backend, ¿qué problema tiene un flujo que valida campos, calcula total, guarda pedido, envía email y responde al cliente en una sola pieza?
A: Junta entrada, regla, persistencia, notificación y respuesta
B: Usa demasiados nombres cortos
C: No permite escribir código en TypeScript
D: Convierte automáticamente el sistema en distribuido

### question: arquitectura-u1-q9
difficulty: media
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-2-separacion-de-responsabilidades.senales-de-alerta.b3
prompt: ¿Cuál es una señal de mala separación de responsabilidades?
A: Una prueba simple puede ejecutarse sin dependencias externas
B: Una regla de negocio está escondida en código de interfaz, framework o persistencia
C: Una clase tiene métodos con un propósito común
D: Un módulo expone una entrada clara

### question: arquitectura-u1-q10
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-3-acoplamiento-y-cohesion.conceptos-principales.b1
prompt: ¿Qué mide el acoplamiento?
A: Cuánto tarda en compilar el sistema
B: Cuánto depende una parte del sistema de otra
C: Cuántos archivos tiene un proyecto
D: Cuántas funciones tiene una clase

### question: arquitectura-u1-q11
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-3-acoplamiento-y-cohesion.conceptos-principales.b2
prompt: ¿Qué significa alto acoplamiento?
A: Que una pieza conoce demasiados detalles de otra
B: Que todas las piezas son independientes de cualquier contrato
C: Que el código no tiene dependencias
D: Que el sistema tiene alta cohesión automáticamente

### question: arquitectura-u1-q12
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-3-acoplamiento-y-cohesion.conceptos-principales.b4
prompt: ¿Qué mide la cohesión?
A: La cantidad de servidores usados por el sistema
B: Qué tan relacionadas están las responsabilidades internas de una pieza
C: La cantidad de endpoints HTTP disponibles
D: El número de tecnologías externas usadas

### question: arquitectura-u1-q13
difficulty: media
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-3-acoplamiento-y-cohesion.contratos-para-reducir-acoplamiento.b4
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-3-acoplamiento-y-cohesion.contratos-para-reducir-acoplamiento.b5
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-3-acoplamiento-y-cohesion.contratos-para-reducir-acoplamiento.b7
prompt: ¿Cuál es el objetivo de usar contratos en una arquitectura mantenible?
A: Eliminar todas las dependencias del sistema
B: Depender de detalles frágiles
C: Definir qué se espera de una colaboración y reducir acoplamiento
D: Evitar que existan interfaces o funciones

### question: arquitectura-u1-q14
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-4-modularidad.que-es-un-modulo.b1
prompt: ¿Qué es la modularidad?
A: Dividir un sistema en partes relativamente independientes
B: Poner todo el código en una sola capa
C: Usar solamente carpetas técnicas
D: Evitar que el código tenga límites claros

### question: arquitectura-u1-q15
difficulty: media
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-4-modularidad.criterios-para-dividir.b1
prompt: ¿Cuándo suele aparecer un límite modular?
A: Donde hay una razón de cambio distinta
B: Donde dos piezas siempre cambian juntas
C: Donde hay menos vocabulario propio
D: Donde no existen reglas ni datos propios

### question: arquitectura-u1-q16
difficulty: basica
blocks:
- programacion-arquitectura.unidad-1-fundamentos-de-arquitectura-de-software.tema-5-capas.capas-principales.b7
prompt: ¿Qué contiene la capa de infraestructura?
A: Las reglas centrales del problema
B: Los casos de uso del sistema
C: Los detalles técnicos externos como base de datos, archivos, clientes HTTP, email, colas, cachés y frameworks
D: Las intenciones principales del usuario final
