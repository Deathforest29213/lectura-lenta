---
collection_id: arquitectura-y-patrones-i
collection_title: Arquitectura y Patrones
type: content_record
format_version: llm-wiki-record-v1
status: draft
confidence: medium
updated: 2026-06-07
source_files:
  - wiki/concepts/Patrones-de-Diseno/patrones-de-diseno.md
  - wiki/concepts/Patrones-de-Diseno/patrones-creacionales.md
  - wiki/concepts/Patrones-de-Diseno/patrones-estructurales.md
  - wiki/concepts/Patrones-de-Diseno/patrones-de-comportamiento.md
  - raw/markdowns/arquitectura-y-patrones/refactoring-guru-design-patterns.md
---

# unit: Unidad 2 - Patrones de diseno

## theme: Tema 1 - Que es un patron de diseno

### section: Idea central

#### block: 1
Un patron de diseno es una solucion habitual para un problema recurrente de diseno de software.

#### block: 2
No es una pieza de codigo lista para copiar.

#### block: 3
Es una forma conocida de organizar responsabilidades, objetos, funciones o colaboraciones.

#### block: 4
La implementacion concreta cambia segun lenguaje, framework y contexto.

#### block: 5
Por eso conviene entender el problema antes de memorizar una estructura.

### section: Problema y vocabulario

#### block: 1
Un patron tiene sentido cuando el mismo tipo de problema aparece varias veces.

#### block: 2
Por ejemplo, elegir entre varios algoritmos, adaptar una API externa o crear objetos sin acoplarse a clases concretas.

#### block: 3
Si el problema no existe, el patron puede ser solo complejidad adicional.

#### block: 4
Los patrones tambien ayudan a nombrar soluciones.

#### block: 5
Decir "esto parece Strategy" comunica una estructura de colaboracion.

#### block: 6
El nombre no reemplaza la explicacion, pero la hace mas corta y precisa.

## theme: Tema 2 - Como estudiar un patron

### section: Intencion, motivacion y estructura

#### block: 1
La intencion resume que problema resuelve el patron.

#### block: 2
Debe poder explicarse antes de mirar diagramas o pseudocodigo.

#### block: 3
La motivacion muestra una situacion concreta donde el patron ayuda.

#### block: 4
Sin motivacion, el patron se vuelve una forma abstracta sin necesidad real.

#### block: 5
La estructura muestra participantes y relaciones.

#### block: 6
Puede incluir cliente, contrato, implementaciones concretas, adaptadores, observadores o comandos.

#### block: 7
La estructura debe leerse como colaboracion, no como lista de clases obligatorias.

### section: Aplicabilidad y consecuencias

#### block: 1
La aplicabilidad responde cuando conviene usar el patron.

#### block: 2
Tambien deberia indicar cuando no conviene usarlo.

#### block: 3
Un patron bien entendido incluye sus limites.

#### block: 4
Todo patron trae ventajas y costos.

#### block: 5
Puede reducir acoplamiento, pero agregar indirecciones.

#### block: 6
Puede ordenar un flujo, pero fragmentar la lectura.

#### block: 7
Las consecuencias importan tanto como la solucion.

## theme: Tema 3 - Uso cuidadoso

### section: Cuando usar patrones

#### block: 1
Usa un patron cuando el problema que resuelve esta presente.

#### block: 2
Tambien cuando esperas variacion razonable y quieres aislarla.

#### block: 3
Por ejemplo, varias politicas de descuento pueden justificar Strategy.

#### block: 4
El objetivo no es usar patrones.

#### block: 5
El objetivo es escribir codigo mas claro, flexible y mantenible.

### section: Sobrediseno y abstracciones

#### block: 1
Sobrediseno es agregar estructura que el problema todavia no necesita.

#### block: 2
Puede hacer que el codigo parezca mas avanzado, pero sea mas dificil de cambiar.

#### block: 3
Un patron usado sin necesidad puede ocultar una solucion simple.

#### block: 4
Una abstraccion es innecesaria cuando no reduce complejidad real.

#### block: 5
Si solo hay una implementacion y no se espera variacion, una interfaz puede ser ruido.

#### block: 6
La abstraccion debe pagar su costo.

# unit: Unidad 3 - Patrones creacionales

## theme: Tema 1 - Idea general

### section: Problema e intencion

#### block: 1
Los patrones creacionales organizan la forma de crear objetos, instancias o configuraciones.

#### block: 2
Aparecen cuando crear algo directamente acopla demasiado el codigo a detalles concretos.

#### block: 3
El problema comun es que el cliente conoce demasiada informacion sobre como construir un objeto.

#### block: 4
Tambien aparece cuando hay varias familias, variantes o pasos de construccion.

#### block: 5
```text
cliente:
  si metodo == tarjeta crear pago_tarjeta
  si metodo == transferencia crear pago_transferencia
  si metodo == credito crear pago_credito
```

### section: Estructura y tradeoffs

#### block: 1
Suele existir un contrato que el cliente usa.

#### block: 2
Tambien existe una pieza encargada de decidir o construir la implementacion concreta.

#### block: 3
```text
cliente -> contrato
fabrica -> implementacion concreta
```

#### block: 4
La ventaja principal es reducir dependencia directa a clases concretas.

#### block: 5
El riesgo principal es agregar indirecciones cuando la creacion era simple.

#### block: 6
Una fabrica innecesaria puede ser mas dificil que una construccion directa.

## theme: Tema 2 - Factory Method y Abstract Factory

### section: Comparacion conceptual

#### block: 1
Factory Method delega la creacion de objetos a una operacion especializada.

#### block: 2
El codigo que usa el objeto trabaja con un contrato, no con cada clase concreta.

#### block: 3
```text
crear_pasarela(tipo):
  si tipo es tarjeta retornar pasarela_tarjeta
  si tipo es transferencia retornar pasarela_transferencia
```

#### block: 4
Abstract Factory crea familias de objetos relacionados.

#### block: 5
Es util cuando varias piezas deben pertenecer a la misma variante.

#### block: 6
Factory Method suele enfocarse en crear un producto.

#### block: 7
Abstract Factory suele enfocarse en crear una familia de productos compatibles.

### section: Pseudocodigo conceptual

#### block: 1
```text
caso de uso PagarPedido:
  pasarela = fabrica_pagos.crear(metodo_de_pago)
  pasarela.cobrar(pedido.total)
```

#### block: 2
El caso de uso no necesita conocer el detalle de cada medio de pago.

#### block: 3
La decision de creacion queda concentrada.

#### block: 4
Si solo necesitas una variante aislada, Abstract Factory puede ser demasiado.

## theme: Tema 3 - Builder y Prototype

### section: Construccion por pasos y copias

#### block: 1
Builder construye objetos complejos paso a paso.

#### block: 2
Es util cuando un objeto necesita muchas partes opcionales o reglas de construccion.

#### block: 3
Un objeto complejo no es solo un objeto grande.

#### block: 4
Es un objeto cuya construccion tiene pasos, variantes o reglas que conviene expresar.

#### block: 5
Prototype crea nuevos objetos copiando un objeto existente.

#### block: 6
Puede servir cuando crear desde cero es costoso o cuando hay plantillas base.

### section: Pseudocodigo conceptual

#### block: 1
```text
pedido = constructor_pedido
  .para_cliente(cliente)
  .con_items(items)
  .con_envio(direccion)
  .con_descuento(politica)
  .construir()
```

#### block: 2
El pseudocodigo muestra intencion de construccion.

#### block: 3
No importa la sintaxis exacta; importa separar pasos.

#### block: 4
```text
plantilla_reporte_mensual.clonar()
ajustar_periodo(nuevo_reporte)
```

#### block: 5
Prototype parte de una configuracion existente y la adapta.

## theme: Tema 4 - Singleton

### section: Intencion y usos posibles

#### block: 1
Singleton busca asegurar una unica instancia compartida.

#### block: 2
Tambien ofrece un punto de acceso global a esa instancia.

#### block: 3
Puede aparecer en configuracion, registro de servicios o recursos compartidos.

#### block: 4
Tambien aparece cuando una instancia representa un recurso unico del proceso.

### section: Riesgos y alternativas

#### block: 1
Singleton puede convertirse en estado global.

#### block: 2
El estado global dificulta pruebas, paralelismo y razonamiento.

#### block: 3
Puede ocultar dependencias que deberian ser explicitas.

#### block: 4
Una alternativa es inyectar dependencias desde el punto de composicion de la aplicacion.

#### block: 5
```text
aplicacion crea configuracion
aplicacion crea servicios
caso de uso recibe servicios necesarios
```

#### block: 6
Asi las dependencias quedan visibles.

# unit: Unidad 4 - Patrones estructurales

## theme: Tema 1 - Idea general

### section: Composicion estructural

#### block: 1
Los patrones estructurales organizan como se componen piezas del sistema.

#### block: 2
Ayudan a conectar objetos, modulos o servicios sin acoplarlos de forma rigida.

#### block: 3
Componer significa construir comportamiento combinando piezas.

#### block: 4
En vez de modificar una clase grande, se puede envolver, adaptar o delegar.

### section: Adaptar, envolver y simplificar

#### block: 1
Adapter traduce una interfaz.

#### block: 2
Decorator envuelve para agregar comportamiento.

#### block: 3
Facade simplifica un subsistema.

#### block: 4
Proxy controla el acceso a otro objeto.

#### block: 5
La ventaja principal es proteger limites entre piezas.

#### block: 6
El riesgo es esconder demasiados efectos detras de wrappers.

## theme: Tema 2 - Adapter, Facade y Proxy

### section: Comparacion conceptual

#### block: 1
Adapter convierte una interfaz existente en otra que el sistema espera.

#### block: 2
Es comun al integrar APIs externas.

#### block: 3
Facade ofrece una entrada simple a un subsistema complejo.

#### block: 4
El cliente usa una operacion clara y no conoce todos los pasos internos.

#### block: 5
Proxy controla el acceso a otro objeto.

#### block: 6
Puede agregar cache, permisos, logging, reintentos o lazy loading.

### section: Pseudocodigo conceptual

#### block: 1
```text
caso de uso:
  pagos.cobrar(pedido, total)

adaptador:
  traducir pedido a formato del proveedor
  ejecutar llamada externa
```

#### block: 2
El caso de uso conserva su lenguaje interno.

#### block: 3
El adaptador absorbe el lenguaje externo.

#### block: 4
```text
fachada_checkout:
  reservar inventario
  cobrar pago
  crear pedido
  publicar evento
```

#### block: 5
La fachada ofrece una entrada simple a una coordinacion compleja.

## theme: Tema 3 - Decorator, Composite y Bridge

### section: Comparacion conceptual

#### block: 1
Decorator agrega comportamiento envolviendo un objeto.

#### block: 2
Sirve cuando quieres extender una operacion sin modificar la implementacion original.

#### block: 3
Composite permite tratar objetos individuales y grupos de forma uniforme.

#### block: 4
Es util cuando una estructura tiene forma de arbol.

#### block: 5
Bridge separa una abstraccion de su implementacion.

#### block: 6
Permite que ambas cambien de forma independiente.

### section: Pseudocodigo conceptual

#### block: 1
```text
notificador_base = notificador_email
notificador_seguro = decorador_reintentos(notificador_base)
notificador_observable = decorador_metricas(notificador_seguro)

notificador_observable.enviar(mensaje)
```

#### block: 2
Cada decorador agrega una responsabilidad alrededor de la misma operacion.

#### block: 3
```text
categoria contiene productos
categoria contiene subcategorias
calcular_total funciona para ambos niveles
```

#### block: 4
Composite permite operar sobre hojas y grupos de manera uniforme.

#### block: 5
```text
reporte usa formato_salida
formato_salida puede ser pdf, csv o html
```

#### block: 6
Bridge permite cambiar reporte y formato de salida por separado.

## theme: Tema 4 - Flyweight

### section: Problema e intencion

#### block: 1
Flyweight aparece cuando hay muchos objetos similares y el costo de memoria importa.

#### block: 2
Busca compartir estado comun entre objetos.

#### block: 3
El estado compartido vive fuera de cada instancia individual.

#### block: 4
El estado variable se pasa desde afuera cuando se necesita.

### section: Pseudocodigo y criterio

#### block: 1
```text
tipo_producto compartido:
  nombre
  categoria

item concreto:
  tipo_producto
  cantidad
  precio_en_pedido
```

#### block: 2
Vale la pena cuando hay muchisimas instancias parecidas.

#### block: 3
No suele ser el primer patron que se necesita en aplicaciones backend comunes.

#### block: 4
Si el problema de memoria no existe, Flyweight probablemente no aporta.

# unit: Unidad 5 - Patrones de comportamiento

## theme: Tema 1 - Idea general

### section: Comportamiento dinamico

#### block: 1
Los patrones de comportamiento organizan algoritmos, decisiones y comunicacion.

#### block: 2
Se enfocan en como colaboran las partes durante la ejecucion.

#### block: 3
Algunos patrones encapsulan algoritmos intercambiables.

#### block: 4
Otros organizan notificaciones, comandos, estados o cadenas de procesamiento.

### section: Ventajas y riesgos

#### block: 1
Una responsabilidad dinamica cambia segun contexto, estado o evento.

#### block: 2
Por ejemplo, una politica de descuento puede depender del cliente, fecha o campana.

#### block: 3
La ventaja es separar flujos que crecerian como condicionales largos.

#### block: 4
El riesgo es fragmentar demasiado el comportamiento.

#### block: 5
Observer y eventos pueden dificultar saber quien reacciona a cada cambio.

## theme: Tema 2 - Strategy, State y Template Method

### section: Comparacion conceptual

#### block: 1
Strategy permite intercambiar algoritmos sin cambiar quien los usa.

#### block: 2
Es util cuando hay varias formas de resolver una operacion.

#### block: 3
State cambia el comportamiento de un objeto segun su estado interno.

#### block: 4
Evita condicionales repetidos sobre el estado.

#### block: 5
Template Method define la estructura general de un algoritmo.

#### block: 6
Algunos pasos quedan abiertos para variantes concretas.

### section: Pseudocodigo conceptual

#### block: 1
```text
caso de uso CrearPedido:
  politica = seleccionar_politica(cliente, fecha)
  descuento = politica.calcular(pedido)
  pedido.aplicar_descuento(descuento)
```

#### block: 2
El caso de uso no necesita conocer todas las reglas de descuento.

#### block: 3
Cada politica encapsula una variante.

#### block: 4
```text
procesar_archivo:
  validar
  leer
  transformar
  guardar
```

#### block: 5
Template Method conserva una estructura fija con pasos variables.

## theme: Tema 3 - Observer, Mediator y Chain of Responsibility

### section: Comunicacion entre partes

#### block: 1
Observer permite que varias partes reaccionen cuando ocurre un cambio.

#### block: 2
El emisor no necesita conocer todos los interesados.

#### block: 3
Mediator centraliza comunicacion entre objetos que no deberian conocerse directamente.

#### block: 4
Puede reducir conexiones directas, pero tambien volverse un centro demasiado grande.

#### block: 5
Chain of Responsibility pasa una solicitud por una cadena de manejadores.

#### block: 6
Cada manejador decide si procesa, rechaza o delega.

### section: Pseudocodigo conceptual

#### block: 1
```text
PedidoPagado notifica:
  enviar email
  actualizar estadisticas
  solicitar despacho
```

#### block: 2
Observer separa el evento de sus reacciones.

#### block: 3
```text
pipeline_solicitud:
  autenticacion.manejar(solicitud)
  permisos.manejar(solicitud)
  validacion.manejar(solicitud)
  caso_de_uso.manejar(solicitud)
```

#### block: 4
Cada paso tiene una responsabilidad clara.

#### block: 5
La cadena evita que una sola funcion concentre todas las verificaciones.

## theme: Tema 4 - Command, Iterator, Memento y Visitor

### section: Acciones, recorridos y estado

#### block: 1
Command encapsula una accion como una unidad.

#### block: 2
Puede guardarse, ejecutarse despues, reintentarse o auditarse.

#### block: 3
Iterator recorre una coleccion sin exponer su estructura interna.

#### block: 4
Memento guarda una version del estado para restaurarla despues.

#### block: 5
Visitor permite agregar operaciones sobre una estructura de objetos sin modificar esas clases.

#### block: 6
Visitor puede ser util cuando hay una estructura estable y muchas operaciones nuevas.

### section: Pseudocodigo conceptual

#### block: 1
```text
comando:
  tipo = cancelar_pedido
  datos = pedido_id, motivo
```

#### block: 2
```text
cola_de_comandos.agregar(CancelarPedido)
cola_de_comandos.agregar(ReembolsarPago)

worker:
  tomar siguiente comando
  ejecutar
  registrar resultado
```

#### block: 3
Command permite tratar acciones como datos procesables.

#### block: 4
Esto ayuda con colas, auditoria y reintentos.
