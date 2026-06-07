---
collection_id: arquitectura-y-patrones-i
collection_title: Arquitectura y Patrones
type: content_record
format_version: llm-wiki-record-v1
status: draft
confidence: medium
updated: 2026-06-07
source_files:
  - wiki/concepts/Arquitectura/arquitectura-de-software.md
  - wiki/concepts/Arquitectura/separacion-de-responsabilidades.md
  - wiki/concepts/Arquitectura/acoplamiento-y-cohesion.md
  - wiki/concepts/Arquitectura/modularidad.md
  - wiki/concepts/Arquitectura/capas.md
  - wiki/concepts/Arquitectura/clean-code.md
  - wiki/concepts/Arquitectura/paradigmas-de-programacion.md
  - wiki/concepts/Arquitectura/principios-solid.md
  - wiki/concepts/Arquitectura/principios-arquitectonicos.md
  - wiki/concepts/Arquitectura/domain-driven-design.md
  - wiki/concepts/Arquitectura/patrones-enterprise.md
  - wiki/concepts/Arquitectura/estilos-arquitectonicos.md
  - wiki/concepts/Arquitectura/patrones-arquitectonicos.md
  - raw/markdowns/arquitectura-y-patrones/roadmap-software-design-architecture.md
---

# unit: Unidad 1 - Fundamentos de arquitectura de software

## theme: Tema 1 - Que es arquitectura

### section: Idea central

#### block: 1
La arquitectura de software es la organizacion de alto nivel de un sistema.

#### block: 2
Define que partes existen, que responsabilidades tienen y como se comunican.

#### block: 3
Tambien define limites: que puede conocer cada parte, que detalles deberia ignorar y que reglas debe respetar.

#### block: 4
Por eso la arquitectura no es solamente una estructura de carpetas.

#### block: 5
Las carpetas muestran una organizacion visible, pero la arquitectura real aparece en dependencias, contratos, limites y flujo de cambio.

### section: Decisiones y tradeoffs

#### block: 1
Una decision arquitectonica afecta a muchas partes del sistema.

#### block: 2
Ejemplos de decisiones arquitectonicas son usar capas, dividir por modulos, separar dominio e infraestructura o comunicar servicios mediante eventos.

#### block: 3
Estas decisiones condicionan como se agregan funciones, como se prueban reglas y como se reemplazan detalles tecnicos.

#### block: 4
Toda arquitectura implica renuncias.

#### block: 5
Una estructura simple puede acelerar el inicio, pero volverse dificil de mantener si el proyecto crece.

#### block: 6
Una estructura elaborada puede dar flexibilidad, pero tambien agregar complejidad antes de necesitarla.

#### block: 7
La arquitectura no se evalua por sonar profesional, sino por ayudar al proyecto concreto.

## theme: Tema 2 - Separacion de responsabilidades

### section: Responsabilidad principal

#### block: 1
Separar responsabilidades significa que cada parte del sistema tiene un trabajo principal claro.

#### block: 2
Una funcion, clase, modulo o servicio deberia cambiar por una razon principal.

#### block: 3
Cuando una pieza cambia por muchas razones distintas, probablemente esta mezclando responsabilidades.

#### block: 4
Mezclar responsabilidades puede funcionar al inicio, pero vuelve mas dificil probar, cambiar y entender el sistema.

### section: Separacion en backend

#### block: 1
Un flujo mezclado podria verse asi:

#### block: 2
```text
recibir solicitud
validar campos
calcular total
guardar pedido
enviar email
responder al cliente
```

#### block: 3
El flujo funciona, pero junta entrada, regla, persistencia, notificacion y respuesta.

#### block: 4
Una separacion inicial podria verse asi:

#### block: 5
```text
controlador:
  convertir solicitud en comando
  llamar caso de uso

caso de uso:
  validar intencion
  pedir al dominio que cree el pedido
  guardar resultado
  publicar evento
```

#### block: 6
La separacion no elimina pasos; los ubica en lugares con responsabilidades mas claras.

### section: Senales de alerta

#### block: 1
Una senal de mala separacion es que una prueba simple necesita base de datos, red y configuracion externa.

#### block: 2
Otra senal es que una clase tiene metodos que no comparten un mismo proposito.

#### block: 3
Tambien es alerta cuando una regla de negocio esta escondida dentro de codigo de interfaz, framework o persistencia.

## theme: Tema 3 - Acoplamiento y cohesion

### section: Conceptos principales

#### block: 1
El acoplamiento mide cuanto depende una parte del sistema de otra.

#### block: 2
Alto acoplamiento significa que una pieza conoce demasiados detalles de otra.

#### block: 3
Bajo acoplamiento significa que las piezas se relacionan mediante contratos mas estables.

#### block: 4
La cohesion mide que tan relacionadas estan las responsabilidades internas de una pieza.

#### block: 5
Alta cohesion significa que el contenido de una pieza apunta a un mismo proposito.

#### block: 6
Baja cohesion significa que una pieza contiene tareas que no pertenecen naturalmente juntas.

### section: Contratos para reducir acoplamiento

#### block: 1
Un sistema mantenible suele buscar bajo acoplamiento y alta cohesion.

#### block: 2
No se trata de eliminar todas las dependencias.

#### block: 3
Se trata de depender de cosas estables y evitar depender de detalles fragiles.

#### block: 4
Un contrato define que se espera de una colaboracion.

#### block: 5
El contrato puede ser una interfaz, una funcion, un esquema de datos, una ruta HTTP o un evento.

#### block: 6
```text
caso de uso depende de:
  RepositorioPedidos.guardar(pedido)

caso de uso no depende de:
  sentencia SQL concreta
  libreria ORM concreta
  nombre de tabla concreto
```

#### block: 7
El contrato permite cambiar el detalle sin reescribir la regla principal.

## theme: Tema 4 - Modularidad

### section: Que es un modulo

#### block: 1
La modularidad consiste en dividir un sistema en partes relativamente independientes.

#### block: 2
Cada modulo agrupa codigo que cambia por motivos parecidos.

#### block: 3
Un modulo deberia exponer una entrada clara y ocultar detalles internos.

#### block: 4
Un buen modulo ayuda a navegar el proyecto, probar partes pequenas y reemplazar detalles con menos impacto.

### section: Formas de organizar modulos

#### block: 1
Organizar por dominio agrupa codigo alrededor de problemas del negocio.

#### block: 2
```text
pedidos/
  crear_pedido
  cancelar_pedido
  pedido
  repositorio_pedidos
```

#### block: 3
Organizar por tipo tecnico separa controladores, servicios, modelos y repositorios.

#### block: 4
```text
controllers/
services/
models/
repositories/
```

#### block: 5
La organizacion por tipo tecnico puede ser clara al inicio, pero puede dispersar codigo que cambia por la misma razon.

### section: Criterios para dividir

#### block: 1
Un limite modular suele aparecer donde hay una razon de cambio distinta.

#### block: 2
Tambien aparece donde hay vocabulario propio, reglas propias o datos propios.

#### block: 3
Si dos piezas siempre cambian juntas, quizas pertenecen al mismo modulo.

#### block: 4
Si dos piezas cambian por motivos distintos, quizas necesitan un limite mas claro.

## theme: Tema 5 - Capas

### section: Capas principales

#### block: 1
Una arquitectura por capas separa responsabilidades por niveles de abstraccion.

#### block: 2
La capa de presentacion recibe entradas y muestra salidas.

#### block: 3
En backend puede ser un controlador HTTP, un resolver GraphQL, un consumidor de mensajes o una interfaz CLI.

#### block: 4
La capa de aplicacion coordina casos de uso.

#### block: 5
Un caso de uso representa una intencion del sistema: crear pedido, cancelar reserva, registrar pago.

#### block: 6
La capa de dominio contiene reglas centrales del problema.

#### block: 7
La capa de infraestructura contiene detalles tecnicos externos: base de datos, archivos, clientes HTTP, servicios de email, colas, caches y frameworks.

### section: Flujo conceptual

#### block: 1
Un caso de uso backend podria leerse asi:

#### block: 2
```text
caso de uso CrearPedido:
  recibir comando
  cargar datos necesarios
  pedir al dominio que aplique reglas
  guardar cambios
  publicar evento
```

#### block: 3
El dominio podria expresar reglas sin hablar de base de datos:

#### block: 4
```text
pedido.aplicar_descuento(politica)
pedido.marcar_como_pagado()
pedido.cancelar(motivo)
```

#### block: 5
Una regla practica es que las reglas centrales no dependan de detalles externos.

#### block: 6
```text
presentacion -> aplicacion -> dominio
infraestructura -> contratos definidos por aplicacion o dominio
```

#### block: 7
El sentido exacto de las dependencias depende del estilo arquitectonico.

#### block: 8
Lo importante es proteger el nucleo del sistema de cambios tecnicos frecuentes.

# unit: Unidad 2 - Principios para disenar sistemas mantenibles

## theme: Tema 1 - Clean Code

### section: Claridad del codigo

#### block: 1
Clean Code busca que nombres, funciones, clases, archivos, pruebas y dependencias sean faciles de leer, cambiar y verificar.

#### block: 2
Un nombre claro reduce la necesidad de explicar el codigo.

#### block: 3
El nombre deberia revelar intencion, no solo tipo tecnico.

#### block: 4
```text
menos claro:
  procesar(data)

mas claro:
  crear_pedido(comando_crear_pedido)
```

#### block: 5
Una funcion pequena no es buena solo por tener pocas lineas.

#### block: 6
Es buena cuando expresa una idea concreta.

### section: Complejidad y pruebas

#### block: 1
La complejidad aumenta cuando hay muchas ramas condicionales.

#### block: 2
Muchas ramas vuelven mas dificil razonar sobre todos los casos posibles.

#### block: 3
Algunas ramas pueden convertirse en estrategias, estados, politicas o validadores separados.

#### block: 4
Una prueba limpia muestra claramente que condicion prepara, que accion ejecuta y que resultado espera.

#### block: 5
Si una prueba necesita demasiado contexto externo, quizas el codigo esta demasiado acoplado.

#### block: 6
Las pruebas tambien revelan si las responsabilidades estan bien separadas.

## theme: Tema 2 - Paradigmas de programacion

### section: Formas de organizar soluciones

#### block: 1
Un paradigma de programacion es una forma general de organizar soluciones en codigo.

#### block: 2
La programacion estructurada organiza el flujo con secuencia, decisiones y repeticion.

#### block: 3
La programacion orientada a objetos organiza comportamiento alrededor de objetos con responsabilidad.

#### block: 4
En arquitectura backend puede ayudar a modelar entidades, value objects y servicios de dominio.

#### block: 5
La programacion funcional favorece funciones puras, composicion y reduccion de efectos secundarios.

### section: Impacto en arquitectura

#### block: 1
El paradigma elegido cambia como se modelan responsabilidades.

#### block: 2
Un diseno orientado a objetos puede poner comportamiento dentro de entidades.

#### block: 3
```text
pedido.pagar()
pedido.cancelar(motivo)
dinero.sumar(otro_dinero)
```

#### block: 4
Un diseno funcional puede preferir funciones puras y datos inmutables.

#### block: 5
```text
total = calcular_total(items)
descuento = calcular_descuento(cliente, total)
total_final = aplicar_descuento(total, descuento)
```

#### block: 6
Una buena arquitectura puede combinar paradigmas con criterio.

## theme: Tema 3 - Principios SOLID

### section: Principios de responsabilidad y extension

#### block: 1
SOLID agrupa principios para disenar piezas mantenibles.

#### block: 2
Responsabilidad unica dice que una pieza deberia tener una razon principal para cambiar.

#### block: 3
Este principio conecta directamente con separacion de responsabilidades y cohesion.

#### block: 4
Abierto/cerrado dice que un modulo deberia poder extenderse sin modificar su codigo interno cada vez.

#### block: 5
Esto suele lograrse con contratos, polimorfismo, composicion o configuracion clara.

### section: Principios de sustitucion y contratos

#### block: 1
Sustitucion de Liskov dice que una implementacion deberia poder reemplazar a otra sin romper las expectativas del cliente.

#### block: 2
No basta con tener la misma forma; debe respetar el mismo comportamiento esperado.

#### block: 3
Segregacion de interfaces dice que un cliente no deberia depender de operaciones que no usa.

#### block: 4
Interfaces pequenas y especificas suelen ser mas faciles de implementar y probar.

#### block: 5
Inversion de dependencias dice que las reglas de alto nivel no deberian depender de detalles de bajo nivel.

#### block: 6
```text
caso de uso depende de RepositorioPedidos
adaptador SQL implementa RepositorioPedidos
```

## theme: Tema 4 - Principios arquitectonicos

### section: Politica, detalle y simplicidad

#### block: 1
La politica es la regla importante del sistema.

#### block: 2
El detalle es la forma tecnica de ejecutarla.

#### block: 3
Guardar en una base de datos es detalle; decidir si un pedido puede cancelarse es politica.

#### block: 4
YAGNI recuerda no construir flexibilidad que aun no se necesita.

#### block: 5
La simplicidad no significa ausencia de estructura.

#### block: 6
Significa que la estructura responde al problema actual y al cambio razonablemente esperado.

### section: Reuso, composicion y consistencia

#### block: 1
DRY busca evitar duplicacion de conocimiento, no eliminar toda repeticion visual.

#### block: 2
Dos piezas parecidas pueden representar conceptos distintos que evolucionaran por motivos distintos.

#### block: 3
La composicion permite construir comportamiento combinando piezas.

#### block: 4
La herencia puede acoplar demasiado una clase a la estructura de otra.

#### block: 5
Una arquitectura consistente reduce el costo mental de navegar el proyecto.

#### block: 6
La consistencia ayuda, siempre que no se convierta en rigidez inutil.

# unit: Unidad 3 - Modelado backend y arquitectura de dominio

## theme: Tema 1 - Domain-Driven Design

### section: Dominio como centro

#### block: 1
Domain-Driven Design pone el dominio del problema en el centro del diseno.

#### block: 2
El codigo intenta reflejar conceptos, reglas y lenguaje del area que modela.

#### block: 3
Si el negocio habla de pedidos, pagos, reservas o facturas, el codigo deberia usar esos conceptos.

#### block: 4
Nombres tecnicos genericos pueden ocultar reglas importantes.

### section: Dominio e infraestructura

#### block: 1
El dominio expresa reglas.

#### block: 2
La infraestructura resuelve detalles tecnicos.

#### block: 3
```text
dominio:
  pedido.cancelar(motivo)

infraestructura:
  guardar pedido cancelado en base de datos
```

#### block: 4
Un modelo anemico contiene datos, pero casi ningun comportamiento.

#### block: 5
Cuando todas las reglas viven fuera de las entidades, el dominio puede perder expresividad.

#### block: 6
No siempre es un error, pero conviene reconocer el tradeoff.

## theme: Tema 2 - Entidades y Value Objects

### section: Identidad y valor

#### block: 1
Una entidad importa por su identidad.

#### block: 2
Puede cambiar atributos y seguir siendo la misma entidad.

#### block: 3
```text
Pedido:
  id
  estado
  lineas

  pagar()
  cancelar(motivo)
```

#### block: 4
Un value object importa por sus valores, no por una identidad propia.

#### block: 5
Suele ser inmutable y contener reglas cercanas al concepto.

#### block: 6
```text
Dinero:
  monto
  moneda

  sumar(otro_dinero)
```

### section: Invariantes

#### block: 1
Dos entidades con el mismo nombre pueden ser distintas si tienen identidad distinta.

#### block: 2
Dos value objects con los mismos valores suelen considerarse equivalentes.

#### block: 3
Una invariante es una regla que siempre debe mantenerse verdadera.

#### block: 4
Por ejemplo, un pedido pagado no deberia volver a pendiente sin una operacion explicita.

#### block: 5
El dominio deberia proteger invariantes importantes.

## theme: Tema 3 - DTOs, Repositorios y ORMs

### section: Limites y transporte de datos

#### block: 1
Un DTO transporta datos entre limites.

#### block: 2
Puede representar una solicitud HTTP, una respuesta de API o un mensaje de cola.

#### block: 3
No deberia confundirse con el modelo de dominio.

#### block: 4
El mapeo convierte datos entre representaciones.

#### block: 5
```text
Solicitud externa -> DTO -> comando -> dominio -> respuesta
```

#### block: 6
Mapear tiene costo, pero protege limites.

### section: Persistencia

#### block: 1
Un repositorio ofrece operaciones para obtener y guardar entidades o agregados.

#### block: 2
Oculta detalles de persistencia detras de un contrato.

#### block: 3
```text
RepositorioPedidos:
  buscar_por_id(id)
  guardar(pedido)
```

#### block: 4
Un ORM mapea objetos del codigo a tablas de una base de datos relacional.

#### block: 5
Puede reducir trabajo repetitivo, pero tambien ocultar consultas costosas.

#### block: 6
Entender el ORM no reemplaza entender persistencia, transacciones e indices.

## theme: Tema 4 - Patrones enterprise

### section: Patrones de aplicacion y persistencia

#### block: 1
Los patrones enterprise ayudan cuando hay persistencia, transacciones, integraciones y modelos separados.

#### block: 2
Transaction Script organiza una operacion como un procedimiento transaccional.

#### block: 3
Puede ser suficiente para reglas simples.

#### block: 4
Puede volverse dificil si el dominio crece y las reglas se duplican.

#### block: 5
Un mapper convierte entre modelos de distintas capas.

#### block: 6
Identity Map evita tener dos objetos distintos representando la misma entidad dentro de una unidad de trabajo.

### section: Cuando usarlos

#### block: 1
Los patrones enterprise pueden ordenar sistemas con persistencia y transacciones reales.

#### block: 2
Tambien pueden agregar complejidad si el problema es solo CRUD simple.

#### block: 3
Como en toda arquitectura, el contexto decide.

# unit: Unidad 4 - Estilos y patrones arquitectonicos

## theme: Tema 1 - Estilos arquitectonicos

### section: Estilos principales

#### block: 1
Un estilo arquitectonico describe una forma general de organizar un sistema.

#### block: 2
Un monolito concentra gran parte del sistema en una aplicacion principal.

#### block: 3
Puede ser simple de desarrollar, probar y desplegar al inicio.

#### block: 4
Un monolito no tiene que ser desordenado; puede ser modular.

#### block: 5
La arquitectura por capas organiza responsabilidades por niveles de abstraccion.

#### block: 6
Cliente-servidor separa quien consume una capacidad de quien la ofrece.

### section: Eventos y comunicacion

#### block: 1
Un estilo event-driven organiza el sistema alrededor de eventos.

#### block: 2
Las partes reaccionan a cosas que ocurrieron.

#### block: 3
```text
PedidoCreado -> reservar inventario
PedidoPagado -> enviar confirmacion
```

#### block: 4
Publish-subscribe permite que productores publiquen mensajes sin conocer directamente a los consumidores.

#### block: 5
Esto reduce acoplamiento, pero puede dificultar rastrear el flujo completo.

## theme: Tema 2 - Patrones arquitectonicos

### section: Patrones comunes

#### block: 1
Los patrones arquitectonicos organizan sistemas completos o subsistemas grandes.

#### block: 2
MVC separa modelo, vista y controlador.

#### block: 3
El controlador recibe entradas, el modelo representa datos o reglas, y la vista muestra salida.

#### block: 4
Layered Architecture formaliza la separacion por capas.

#### block: 5
Microkernel propone un nucleo pequeno y extensiones alrededor.

### section: Patrones menos frecuentes

#### block: 1
SOA organiza capacidades como servicios interoperables.

#### block: 2
Tiene una orientacion mas enterprise y de integracion entre sistemas.

#### block: 3
Blackboard usa una memoria comun donde componentes especializados colaboran.

#### block: 4
Es menos comun en aplicaciones web tipicas, pero sirve para entender colaboracion indirecta.

## theme: Tema 3 - Arquitecturas distribuidas

### section: Microservicios y serverless

#### block: 1
Microservicios divide el sistema en servicios independientes orientados a capacidades.

#### block: 2
Pueden desplegarse y escalarse por separado.

#### block: 3
Tambien introducen red, versionado, observabilidad y consistencia distribuida.

#### block: 4
Serverless delega gran parte de la infraestructura al proveedor.

#### block: 5
Suele funcionar bien para tareas event-driven o procesos intermitentes.

#### block: 6
Su riesgo es la dependencia del proveedor y la dispersion de logica.

### section: Costos y criterio

#### block: 1
Distribuir un sistema aumenta costos operativos.

#### block: 2
Hay que observar logs, metricas, trazas, colas, reintentos, contratos y despliegues.

#### block: 3
La complejidad ya no vive solo en el codigo.

#### block: 4
Conviene evitar distribuir cuando el equipo, el dominio o la carga aun no lo justifican.

#### block: 5
Un monolito modular puede ser una opcion mas clara y profesional que microservicios prematuros.

## theme: Tema 4 - Eventos y separacion de lectura/escritura

### section: Mensajes y eventos

#### block: 1
Las colas y streams permiten comunicacion asincrona.

#### block: 2
Un productor publica un mensaje y uno o mas consumidores lo procesan.

#### block: 3
Hay que considerar duplicados, reintentos, orden y fallos parciales.

#### block: 4
Event Sourcing guarda los cambios como eventos.

#### block: 5
El estado actual puede reconstruirse reproduciendo eventos.

#### block: 6
```text
PedidoCreado
ItemAgregado
DescuentoAplicado
PedidoPagado
```

### section: CQRS y consistencia eventual

#### block: 1
CQRS separa operaciones que cambian estado de operaciones que leen estado.

#### block: 2
La separacion puede ser solo de codigo o tambien de modelos y bases de datos.

#### block: 3
Es potente, pero puede ser excesivo para CRUD simple.

#### block: 4
En sistemas distribuidos, no todas las partes ven el cambio al mismo tiempo.

#### block: 5
La consistencia eventual acepta retrasos controlados entre escritura y lectura.

#### block: 6
El usuario y el negocio deben tolerar ese retraso.
