---
collection_id: react-i
collection_title: React
type: content_record
format_version: llm-wiki-record-v1
status: draft
confidence: medium
created: 2026-06-10
updated: 2026-06-10
source_files:
  - wiki/concepts/Interfaz/optimizaciones.md
  - raw/pdfs/Optimización Web en React.pdf
---

# unit: Unidad 1 - Optimizaciones

## theme: Tema 1 - Modelo mental de optimizacion

### section: Optimization

#### block: 1
Optimization is the process of improving how efficiently a system uses time, memory, network, CPU, or rendering resources.

#### block: 2
Optimizar no significa aplicar tecnicas por costumbre.

#### block: 3
Significa encontrar una causa concreta de lentitud y elegir una mejora proporcional.

#### block: 4
Una optimizacion buena mejora la experiencia sin volver el codigo innecesariamente dificil.

#### block: 5
Una optimizacion prematura puede agregar complejidad sin resolver un problema real.

### section: Performance bottleneck

#### block: 1
A performance bottleneck is the part of a system that limits the overall speed, responsiveness, or perceived quality of the experience.

#### block: 2
El cuello de botella puede estar en el renderizado.

#### block: 3
Tambien puede estar en imagenes pesadas, JavaScript inicial, eventos frecuentes, calculos costosos o llamadas de red.

#### block: 4
Si no se identifica el cuello de botella, cualquier tecnica puede parecer correcta.

#### block: 5
Medir ayuda a separar una sensacion de lentitud de una causa concreta.

### section: Measurement first

#### block: 1
Measurement first means diagnosing the problem before choosing an optimization technique.

#### block: 2
Primero se mide que esta pasando.

#### block: 3
Despues se decide si el problema esta en carga inicial, interaccion, red, computo, layout o renderizado.

#### block: 4
Sin medicion, una optimizacion puede mejorar una parte irrelevante de la app.

#### block: 5
Una regla practica es medir primero y optimizar despues.

### section: Work reduction

#### block: 1
Work reduction means making the browser, JavaScript, or React do less unnecessary work.

#### block: 2
Una tecnica puede hacer menos trabajo.

#### block: 3
Otra tecnica puede hacer el trabajo mas tarde.

#### block: 4
Otra puede dividir el trabajo en partes mas pequenas.

#### block: 5
Otra puede mover trabajo fuera del hilo principal.

#### block: 6
Otra puede priorizar lo urgente sobre lo no urgente.

## theme: Tema 2 - Pruebas y metricas de rendimiento

### section: Performance Testing

#### block: 1
Performance Testing is the process of evaluating how a system behaves in terms of speed, responsiveness, stability, and resource usage under defined conditions.

#### block: 2
En espanol, este proceso se conoce como pruebas de rendimiento.

#### block: 3
Sirve para observar como responde una aplicacion cuando se usa bajo ciertas condiciones.

#### block: 4
No mide solamente si la aplicacion funciona.

#### block: 5
Mide que tan rapido, estable y consistente funciona.

#### block: 6
Dentro de una estrategia de optimizacion, las pruebas de rendimiento ayudan a decidir que parte conviene mejorar primero.

### section: Load Testing

#### block: 1
Load Testing is a type of performance testing that measures how a system responds under an expected or normal workload.

#### block: 2
En espanol, se conoce como pruebas de carga.

#### block: 3
Se usa cuando quieres medir tiempos de respuesta bajo una carga de trabajo normal o esperada.

#### block: 4
Por ejemplo, se puede probar como responde una app con una cantidad habitual de usuarios, solicitudes o acciones simultaneas.

#### block: 5
La idea no es romper el sistema.

#### block: 6
La idea es comprobar si el sistema mantiene un rendimiento aceptable bajo uso realista.

### section: Response Time

#### block: 1
Response Time is the total time between sending a request to a system and receiving the complete response.

#### block: 2
En espanol, se conoce como tiempo de respuesta.

#### block: 3
Es el termino tecnico central cuando se habla de cuanto tarda una aplicacion en responder.

#### block: 4
Puede medirse desde la perspectiva del usuario, del navegador, de una API o de un sistema automatizado.

#### block: 5
Un tiempo de respuesta bajo suele sentirse como una app fluida.

#### block: 6
Un tiempo de respuesta alto suele sentirse como espera, retraso o bloqueo.

### section: APDEX

#### block: 1
APDEX, or Application Performance Index, is an open standard for scoring user satisfaction based on application response times.

#### block: 2
APDEX traduce tiempos de respuesta en una calificacion de satisfaccion.

#### block: 3
Divide la experiencia en tres zonas: satisfied, tolerating y frustrated.

#### block: 4
Satisfied significa que la aplicacion responde rapido.

#### block: 5
Un ejemplo de umbral satisfied podria ser menos de 1.2 segundos.

#### block: 6
Tolerating significa que el usuario nota retraso, pero todavia puede trabajar.

#### block: 7
Un ejemplo de umbral tolerating podria estar entre 1.2 y 4 segundos.

#### block: 8
Frustrated significa que la aplicacion tarda demasiado, falla o interrumpe el trabajo.

#### block: 9
Un ejemplo de umbral frustrated podria ser mas de 4 segundos.

#### block: 10
Los umbrales exactos dependen del contexto de la aplicacion y de lo que el usuario espera.

## theme: Tema 3 - Cargar menos al inicio

### section: Lazy loading

#### block: 1
Lazy loading is a technique that delays loading non-critical resources until they are needed or close to being needed.

#### block: 2
Las imagenes pueden pesar mas que el codigo JavaScript de una pagina.

#### block: 3
Si el navegador descarga todas las imagenes al inicio, la primera carga puede volverse lenta.

#### block: 4
El lazy loading retrasa imagenes que aun no son necesarias.

#### block: 5
Normalmente se cargan cuando estan cerca del viewport.

#### block: 6
Esto reduce trabajo inicial de red y puede mejorar la percepcion de velocidad.

#### block: 7
Para casos simples, HTML ofrece el atributo `loading="lazy"`.

### section: Critical images

#### block: 1
A critical image is an image that strongly affects the first visible experience or the Largest Contentful Paint.

#### block: 2
No todas las imagenes deberian cargarse de forma perezosa.

#### block: 3
Una imagen importante del primer pantallazo puede afectar el LCP.

#### block: 4
El LCP mide cuando aparece el elemento principal de contenido visible.

#### block: 5
Si se retrasa una imagen critica, la experiencia inicial puede empeorar.

#### block: 6
Por eso el lazy loading se aplica mejor a imagenes fuera del primer pantallazo.

### section: Code splitting

#### block: 1
Code splitting is the practice of breaking a JavaScript bundle into smaller chunks that can be loaded on demand.

#### block: 2
Una aplicacion web puede crecer hasta generar un bundle grande.

#### block: 3
Un bundle grande tarda mas en descargarse, parsearse y ejecutarse.

#### block: 4
El code-splitting divide el JavaScript en fragmentos mas pequenos.

#### block: 5
La idea es cargar al inicio solo lo necesario.

#### block: 6
El resto del codigo se carga cuando el usuario visita una ruta o activa una funcion.

#### block: 7
El beneficio debe medirse, porque demasiados chunks tambien pueden complicar la carga.

## theme: Tema 4 - Controlar frecuencia y carga pesada

### section: High-frequency events

#### block: 1
High-frequency events are events that can fire many times in a short period of time.

#### block: 2
Ejemplos comunes son `scroll`, `resize`, escritura en inputs y movimiento del mouse.

#### block: 3
Si cada evento ejecuta trabajo costoso, la interfaz puede perder fluidez.

#### block: 4
Throttling y debouncing son tecnicas para controlar esa frecuencia.

### section: Throttling

#### block: 1
Throttling is a technique that ensures a function runs at most once within a defined time interval.

#### block: 2
Si el evento ocurre muchas veces dentro del intervalo, algunas ejecuciones se ignoran.

#### block: 3
Esto sirve cuando se necesita responder de forma continua pero controlada.

#### block: 4
Un ejemplo es recalcular algo durante un `resize` como maximo cada 200 ms.

#### block: 5
La experiencia sigue actualizandose, pero sin saturar el hilo principal.

### section: Debouncing

#### block: 1
Debouncing is a technique that delays a function until a period of inactivity has passed.

#### block: 2
Solo ejecuta la funcion despues de que el evento deja de repetirse.

#### block: 3
Esto sirve cuando interesa el resultado final, no cada paso intermedio.

#### block: 4
Un ejemplo comun es un buscador que espera 300 ms despues de la ultima tecla.

#### block: 5
Asi se evita llamar a una API por cada pulsacion.

### section: Web Workers

#### block: 1
Web Workers are browser APIs that run JavaScript in a background thread separate from the main UI thread.

#### block: 2
JavaScript ejecuta gran parte del trabajo de la pagina en el hilo principal.

#### block: 3
El hilo principal tambien atiende interacciones, renderizado y respuesta visual.

#### block: 4
Si una tarea pesada ocupa ese hilo, la interfaz puede congelarse.

#### block: 5
Un Web Worker ayuda con calculos largos, procesamiento de datos o tareas intensivas.

#### block: 6
Un worker no puede manipular directamente el DOM.

#### block: 7
La comunicacion entre la app y el worker ocurre mediante mensajes.

#### block: 8
Mover trabajo a un worker tambien puede tener costo si se transfieren muchos datos.

## theme: Tema 5 - Evaluacion de la fuente

### section: Lo que cubre bien

#### block: 1
El PDF sirve como introduccion a tecnicas comunes de optimizacion.

#### block: 2
Presenta ocho ideas importantes y da una motivacion general para cada una.

#### block: 3
Es util para construir un mapa inicial de estudio.

#### block: 4
Tambien ayuda a nombrar problemas frecuentes: listas grandes, imagenes, renders, eventos, bundles, DOM extra, computo pesado y prioridad de actualizaciones.

### section: Lo que falta

#### block: 1
La explicacion no esta completa como guia profesional.

#### block: 2
Falta un flujo de diagnostico basado en medicion.

#### block: 3
Faltan herramientas como React DevTools Profiler, Performance panel, Lighthouse y Core Web Vitals.

#### block: 4
Faltan ejemplos de codigo completos.

#### block: 5
Faltan criterios para decidir cuando aplicar cada tecnica.

#### block: 6
Faltan riesgos y costos de cada optimizacion.

#### block: 7
Falta distinguir mejor entre optimizar carga inicial, renderizado, red, imagenes, calculo e interacciones.

# unit: Unidad 2 - Optimizaciones React

## theme: Tema 1 - Renderizar menos en React

### section: List virtualization

#### block: 1
List virtualization is a rendering technique that displays only the visible portion of a large list instead of rendering every item at once.

#### block: 2
Una lista grande puede contener cientos o miles de elementos.

#### block: 3
Si React intenta renderizar todos esos elementos al mismo tiempo, el DOM crece demasiado.

#### block: 4
Un DOM demasiado grande puede volver lento el renderizado, el layout y el scroll.

#### block: 5
La virtualizacion de listas resuelve esto renderizando solo una ventana visible.

#### block: 6
Cuando el usuario hace scroll, la ventana cambia.

#### block: 7
La app parece tener una lista enorme, pero React mantiene montada solo una parte pequena.

### section: When to virtualize

#### block: 1
Virtualization is useful when the number of rendered items is large enough to affect responsiveness.

#### block: 2
Es comun en tablas, resultados de busqueda, logs, feeds y paneles administrativos.

#### block: 3
No suele ser necesaria para listas pequenas.

#### block: 4
Si una lista tiene pocos elementos, virtualizar puede agregar mas complejidad que beneficio.

#### block: 5
La fuente cruda menciona `react-virtualized` como libreria recomendada.

#### block: 6
Tambien existen alternativas como `react-window`, `@tanstack/react-virtual` o `react-virtuoso`.

### section: React Fragments

#### block: 1
React Fragments let a component group multiple children without adding an extra DOM node.

#### block: 2
React necesita que un componente devuelva una sola unidad renderizable.

#### block: 3
A veces se agregan `div` solo para envolver elementos hermanos.

#### block: 4
Los fragments permiten agrupar elementos sin agregar un nodo extra al DOM.

#### block: 5
La sintaxis corta es `<>...</>`.

#### block: 6
La sintaxis explicita es `<React.Fragment>...</React.Fragment>`.

#### block: 7
Como optimizacion de rendimiento, su impacto suele ser menor que virtualizacion, memoizacion medida o code-splitting.

## theme: Tema 2 - Memoizacion en React

### section: Memoization

#### block: 1
Memoization is a technique that caches a result or reference so it can be reused when the inputs have not changed.

#### block: 2
En React, la memoizacion suele aparecer en renders, calculos y funciones pasadas por props.

#### block: 3
Estas herramientas no hacen que todo sea automaticamente mas rapido.

#### block: 4
Tambien agregan comparaciones, dependencias y complejidad mental.

#### block: 5
La memoizacion debe responder a un problema observable.

### section: React.memo

#### block: 1
React.memo is a React API that skips re-rendering a component when its props are considered unchanged.

#### block: 2
`React.memo` es util cuando un componente hijo recibe las mismas props muchas veces.

#### block: 3
Si el padre se renderiza pero las props del hijo son equivalentes, React puede saltarse el render del hijo.

#### block: 4
Esto es mas valioso cuando el hijo es costoso de renderizar.

#### block: 5
Si el hijo es simple, el beneficio puede ser pequeno.

#### block: 6
`React.memo` se rompe facilmente si las props incluyen objetos o funciones nuevas en cada render.

### section: useMemo

#### block: 1
useMemo is a React Hook that caches the result of a calculation between renders until its dependencies change.

#### block: 2
`useMemo` se usa para conservar el resultado de un calculo.

#### block: 3
Tiene sentido cuando el calculo es costoso y depende de valores concretos.

#### block: 4
No conviene usarlo para calculos triviales.

#### block: 5
El costo mental de mantener dependencias tambien cuenta.

### section: useCallback

#### block: 1
useCallback is a React Hook that caches a function reference between renders until its dependencies change.

#### block: 2
`useCallback` se usa para conservar una funcion.

#### block: 3
Esto ayuda cuando esa funcion se pasa a un componente memoizado.

#### block: 4
La fuente explica correctamente que `useCallback` y `React.memo` suelen trabajar juntos.

#### block: 5
Pero no conviene envolver todas las funciones en `useCallback`.

#### block: 6
Primero debe existir una razon observable para hacerlo.

### section: React Compiler

#### block: 1
React Compiler is a React build-time tool that can automatically apply memoization-like optimizations to compatible components.

#### block: 2
React Compiler cambia parte del panorama de memoizacion.

#### block: 3
Su objetivo es aplicar optimizaciones automaticamente en componentes compatibles.

#### block: 4
Esto puede reducir la necesidad de memoizacion manual.

#### block: 5
No elimina la necesidad de entender renders, props estables y calculos costosos.

#### block: 6
Una app con reglas de React rotas puede no beneficiarse correctamente de esas optimizaciones.

## theme: Tema 3 - Priorizar actualizaciones en React

### section: useTransition

#### block: 1
useTransition is a React Hook that marks state updates as non-urgent so React can keep urgent interactions responsive.

#### block: 2
`useTransition` permite marcar actualizaciones de estado como no urgentes.

#### block: 3
React puede priorizar actualizaciones urgentes, como escribir en un input o responder a una interaccion.

#### block: 4
Las actualizaciones no urgentes pueden esperar sin bloquear tanto la experiencia.

#### block: 5
Esto es util cuando una accion produce una actualizacion visual pesada.

#### block: 6
La fuente cruda describe esta idea como procesamiento en segundo plano.

#### block: 7
Esa frase debe leerse con cuidado.

#### block: 8
`useTransition` no convierte automaticamente un calculo pesado en trabajo paralelo real.

#### block: 9
Su valor principal es permitir actualizaciones no bloqueantes e interrumpibles dentro del modelo de React.

### section: useDeferredValue

#### block: 1
useDeferredValue is a React Hook that lets a value lag behind the latest urgent update so slower UI can update later.

#### block: 2
`useDeferredValue` no aparece en la fuente cruda, pero esta relacionado con la misma familia de problemas.

#### block: 3
Permite diferir una parte no critica de la UI.

#### block: 4
Puede servir cuando una entrada cambia rapido y una zona pesada de la pantalla puede actualizarse despues.

#### block: 5
La UI urgente se mantiene mas responsiva.

## theme: Tema 4 - Cierre operativo

### section: Elegir tecnica segun problema

#### block: 1
The right optimization depends on the actual bottleneck, not on the popularity of the technique.

#### block: 2
Si el problema es una lista enorme, considerar virtualizacion.

#### block: 3
Si el problema son recursos iniciales pesados, considerar lazy loading o code-splitting.

#### block: 4
Si el problema son renders o calculos repetidos, considerar memoizacion medida.

#### block: 5
Si el problema son eventos muy frecuentes, considerar throttling o debouncing.

#### block: 6
Si el problema es computo pesado, considerar Web Workers.

#### block: 7
Si el problema es prioridad de actualizaciones visuales, considerar `useTransition` o `useDeferredValue`.

#### block: 8
La tecnica correcta depende del cuello de botella real.
