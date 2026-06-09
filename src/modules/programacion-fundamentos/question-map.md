---
module_id: programacion-fundamentos
format: lectura-lenta-question-map-v1
---

# Preguntas relevantes

## unit: Unidad 1 - Bases del lenguaje

### question: fundamentos-u1-q1
difficulty: basica
blocks:
- programacion-fundamentos.unidad-1-bases-del-lenguaje.tema-variables-y-constantes.ideas-clave.b1
prompt: En TypeScript, ¿cuándo conviene usar `const`?
A: Cuando el valor será reasignado muchas veces
B: Cuando el nombre no será reasignado
C: Solo para números
D: Solo dentro de funciones

### question: fundamentos-u1-q2
difficulty: media
blocks:
- programacion-fundamentos.unidad-1-bases-del-lenguaje.tema-variables-y-constantes.errores-comunes.b1
- programacion-fundamentos.unidad-1-bases-del-lenguaje.tema-variables-y-constantes.errores-comunes.b2
prompt: ¿Qué error común se menciona sobre `const`?
A: Pensar que impide ejecutar funciones
B: Creer que vuelve inmutable profundamente un objeto
C: Usarlo solo con strings
D: Usarlo en lugar de tipos

### question: fundamentos-u1-q3
difficulty: basica
blocks:
- programacion-fundamentos.unidad-1-bases-del-lenguaje.tema-tipos-de-datos.ideas-clave.b1
prompt: ¿Para qué sirven los tipos en TypeScript?
A: Para eliminar todos los errores de lógica
B: Para detectar ciertos errores antes de ejecutar el programa
C: Para evitar escribir funciones
D: Para convertir automáticamente Python en JavaScript

### question: fundamentos-u1-q4
difficulty: basica
blocks:
- programacion-fundamentos.unidad-1-bases-del-lenguaje.tema-tipos-de-datos.errores-comunes.b1
prompt: ¿Cuál de estos es un mal uso de los tipos?
A: Usar `number` para valores numéricos
B: Usar `boolean` para verdadero/falso
C: Usar `any` para evitar pensar el modelo de datos
D: Usar interfaces para objetos

### question: fundamentos-u1-q5
difficulty: basica
blocks:
- programacion-fundamentos.unidad-1-bases-del-lenguaje.tema-operadores.ideas-clave.b1
prompt: ¿Qué devuelven los operadores de comparación?
A: Strings
B: Arreglos
C: Booleanos
D: Objetos

### question: fundamentos-u1-q6
difficulty: media
blocks:
- programacion-fundamentos.unidad-1-bases-del-lenguaje.tema-operadores.errores-comunes.b1
prompt: ¿Qué problema puede causar confiar demasiado en la precedencia de operadores?
A: Que el código sea menos claro
B: Que TypeScript deje de compilar siempre
C: Que las variables se borren
D: Que no se puedan usar funciones

## unit: Unidad 2 - Control de flujo y soluciones

### question: fundamentos-u2-q1
difficulty: basica
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-condicionales.ideas-clave.b1
prompt: ¿Qué hace `else` en un condicional?
A: Repite una acción
B: Cubre el caso alternativo
C: Declara una variable
D: Recorre una colección

### question: fundamentos-u2-q2
difficulty: basica
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-condicionales.ideas-clave.b1
prompt: ¿Cuándo puede ser útil `switch`?
A: Cuando se comparan múltiples casos discretos
B: Cuando se quiere crear una clase
C: Cuando se quiere evitar todo tipo de condición
D: Cuando se recorren arreglos

### question: fundamentos-u2-q3
difficulty: basica
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-bucles.ideas-clave.b1
prompt: ¿Qué tipo de bucle suele usarse cuando se conoce el rango o índice?
A: `while`
B: `for`
C: `switch`
D: `try`

### question: fundamentos-u2-q4
difficulty: basica
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-bucles.errores-comunes.b1
prompt: ¿Cuál es una causa común de bucles infinitos?
A: Usar demasiados nombres descriptivos
B: No actualizar la condición de término
C: Usar `const`
D: Usar funciones pequeñas

### question: fundamentos-u2-q5
difficulty: basica
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-funciones.ideas-clave.b1
prompt: ¿Qué describen los parámetros de una función?
A: Qué datos necesita la función
B: Qué archivo ejecuta el programa
C: Qué clase hereda de otra
D: Qué errores se deben ignorar

### question: fundamentos-u2-q6
difficulty: basica
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-funciones.ideas-clave.b1
prompt: ¿Cuál es una característica de una función clara?
A: Hace muchas tareas al mismo tiempo
B: Depende siempre de variables externas
C: Hace una tarea principal
D: No retorna nada nunca

### question: fundamentos-u2-q7
difficulty: basica
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-estructuras-de-datos.ideas-clave.b1
prompt: ¿Qué estructura almacena valores únicos?
A: `Array`
B: `Object`
C: `Map`
D: `Set`

### question: fundamentos-u2-q8
difficulty: media
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-estructuras-de-datos.ideas-clave.b1
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-estructuras-de-datos.errores-comunes.b1
prompt: Si se harán búsquedas frecuentes por id, ¿qué estructura puede ser más clara que un arreglo?
A: `Map`
B: `boolean`
C: `while`
D: `switch`

### question: fundamentos-u2-q9
difficulty: basica
blocks:
- programacion-fundamentos.unidad-2-control-de-flujo-y-soluciones.tema-algoritmos-basicos.ideas-clave.b1
prompt: ¿Qué debe tener un algoritmo según el contenido?
A: Solo entrada
B: Entrada, proceso y salida
C: Solo salida
D: Una clase obligatoria

## unit: Unidad 3 - Diseno, calidad y mantenimiento

### question: fundamentos-u3-q1
difficulty: media
blocks:
- programacion-fundamentos.unidad-3-diseno-calidad-y-mantenimiento.tema-errores-y-debugging.ideas-clave.b1
- programacion-fundamentos.unidad-3-diseno-calidad-y-mantenimiento.tema-errores-y-debugging.errores-comunes.b1
prompt: En debugging, ¿qué práctica ayuda a corregir mejor un error?
A: Cambiar código al azar
B: Ocultar el síntoma sin investigar
C: Reproducir el error de forma mínima
D: Ignorar el mensaje de error
