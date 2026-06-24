---
collection_id: arquitectura-y-patrones-i
collection_title: Arquitectura y Patrones
type: content_record
format_version: llm-wiki-record-v1
status: draft
confidence: medium
updated: 2026-06-24
source_files:
  - wiki/concepts/Patrones-de-Diseno/patrones-de-diseno.md
  - wiki/concepts/Patrones-de-Diseno/patrones-creacionales.md
  - wiki/concepts/Patrones-de-Diseno/patrones-estructurales.md
  - wiki/concepts/Patrones-de-Diseno/patrones-de-comportamiento.md
  - raw/markdowns/arquitectura-y-patrones/refactoring-guru-design-patterns.md
---

# unit: Unidad 1 - Patrones de diseno

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

# unit: Unidad 2 - Creational Patterns

## theme: Tema 1 - How Do I Create Objects Without Coupling to Concrete Classes?

### section: Factory Method - concrete product creation

#### block: 1
**Mental Question**

Que clase concreta debo crear?

Factory Method aparece cuando el cliente sabe que necesita un objeto con cierto contrato, pero no deberia decidir directamente que clase concreta instanciar.

#### block: 2
**Intuition**

Piensa en una fabrica especializada. El cliente pide un `Notification`, un `Parser` o un `Document`, y una pieza de creacion decide si corresponde `EmailNotification`, `JsonParser` o `PdfDocument`.

La idea no es hacer mas dificil el `new`. La idea es sacar del cliente la decision de creacion para que el cliente use una interfaz estable.

#### block: 3
**Recognition Signal**

Usalo cuando veas condicionales repetidos para crear variantes:

- si el tipo es `email`, crea `EmailNotification`
- si el tipo es `sms`, crea `SmsNotification`
- si el tipo es `push`, crea `PushNotification`

La senal fuerte es que todas las variantes comparten una misma interfaz, pero la seleccion de la clase concreta ensucia el codigo que solo deberia usar el resultado.

#### block: 4
**ASCII Diagram**

```text
Client
  |
  v
Creator.factoryMethod(type)
  |
  +--> EmailNotification
  +--> SmsNotification
  +--> PushNotification
            |
            v
      Notification interface
```

#### block: 5
**Common Confusion**

No lo confundas con `Builder`. Factory Method responde que clase crear. Builder responde como armar una instancia compleja.

Tampoco es `Prototype`: Factory Method crea usando una decision de tipo; Prototype crea copiando una instancia base.

#### block: 6
**Usefulness And Cost**

Ganas bajo acoplamiento, creacion centralizada y facilidad para agregar variantes. El costo es una capa extra: si solo existe una clase concreta y no hay variacion real, una fabrica puede ser sobrediseno.

### section: Abstract Factory - compatible product families

#### block: 1
**Mental Question**

Que familia compatible debo crear?

Abstract Factory aparece cuando no necesitas crear un solo objeto aislado, sino varios objetos que deben pertenecer a la misma familia.

#### block: 2
**Intuition**

Piensa en una app con tema `Windows`, `Mac` o `Linux`. Si eliges la fabrica `MacFactory`, el boton, el menu y la ventana deben ser Mac. No quieres mezclar `MacButton` con `WindowsMenu`.

La fabrica abstracta protege la coherencia del conjunto.

#### block: 3
**Recognition Signal**

Usalo cuando el sistema cambie por familias completas:

- UI claro: `LightButton`, `LightModal`, `LightInput`
- UI oscuro: `DarkButton`, `DarkModal`, `DarkInput`
- Windows: `WindowsButton`, `WindowsMenu`, `WindowsWindow`
- Mac: `MacButton`, `MacMenu`, `MacWindow`

La senal fuerte es compatibilidad entre productos, no solo seleccion de una clase.

#### block: 4
**ASCII Diagram**

```text
Client
  |
  v
UIFactory
  |
  +--> createButton()
  +--> createMenu()
  +--> createWindow()
        |
        v
  same visual family
```

#### block: 5
**Common Confusion**

Factory Method suele crear una variante de un producto. Abstract Factory crea varias piezas relacionadas.

Si solo estas creando `Notification`, probablemente Factory Method basta. Si estas creando `Button`, `Input`, `Modal` y todos deben ser compatibles, Abstract Factory tiene mas sentido.

#### block: 6
**Usefulness And Cost**

Ganas consistencia entre productos y puedes cambiar una familia completa reemplazando la fabrica. El costo es mas estructura: interfaces, fabricas y clases por familia. Usalo cuando la coherencia del conjunto importe.

## theme: Tema 2 - How Do I Build or Clone Complex Objects?

### section: Builder - step by step construction

#### block: 1
**Mental Question**

Como armo bien este objeto complejo?

Builder aparece cuando el problema no es elegir una clase, sino construir una instancia con muchas partes, opciones o reglas.

#### block: 2
**Intuition**

Piensa en un `Report`, `Order`, `Email`, `ServerConfig` o `GameCharacter`. Si el constructor recibe demasiados parametros, el codigo deja de explicar la intencion.

Builder convierte la creacion en una secuencia legible de decisiones: titulo, filtros, columnas, formato, validaciones y resultado final.

#### block: 3
**Recognition Signal**

Usalo cuando veas constructores como:

```text
new Report(title, columns, filters, true, false, null, "PDF", 10)
```

La senal fuerte es que hay muchos parametros opcionales, combinaciones validas o pasos de construccion que deben quedar claros.

#### block: 4
**ASCII Diagram**

```text
Client
  |
  v
ReportBuilder
  |
  +-- setTitle()
  +-- addColumns()
  +-- addFilters()
  +-- chooseFormat()
  |
  v
build() --> Report
```

#### block: 5
**Common Confusion**

No es Factory Method porque no esta decidiendo entre muchas clases concretas. Puede crear siempre un `Report`, pero el reto es armarlo correctamente.

No lo uses para objetos simples como `User(name, email)`. Ahi el builder agrega ruido.

#### block: 6
**Usefulness And Cost**

Ganas claridad, validacion centralizada y creacion ordenada. El costo es mas codigo. Conviene cuando la construccion tiene suficiente complejidad para justificar esa pieza extra.

### section: Prototype - clone from a configured base

#### block: 1
**Mental Question**

Puedo clonar una base y cambiar solo algunas cosas?

Prototype aparece cuando crear desde cero es costoso, repetitivo o depende de una configuracion base que ya existe.

#### block: 2
**Intuition**

Piensa en enemigos de un videojuego, plantillas de documentos, dashboards base o formularios preconfigurados. Ya tienes una instancia preparada; clonas esa base y ajustas vida, posicion, filtros o titulo.

El patron usa objetos existentes como moldes.

#### block: 3
**Recognition Signal**

Usalo cuando la frase natural sea:

> "Crea otro igual a este, pero con estos cambios."

La senal fuerte es que la instancia base trae configuracion valiosa: recursos cargados, valores por defecto, relaciones internas o pasos de inicializacion que no quieres repetir.

#### block: 4
**ASCII Diagram**

```text
BaseEnemy
  |
  | clone()
  v
EnemyCopy
  |
  +-- change health
  +-- change position
  +-- change weapon
```

#### block: 5
**Common Confusion**

No es Factory Method porque no pregunta que clase crear. Prototype pregunta si puedes copiar una instancia existente.

El riesgo principal es la copia superficial: si dos clones comparten una lista interna sin querer, cambiar uno puede afectar al otro.

#### block: 6
**Usefulness And Cost**

Ganas velocidad y evitas repetir configuracion. El costo es manejar bien copias profundas, recursos externos y estado mutable. Si clonar no esta claro, el patron puede esconder errores dificiles de ver.

## theme: Tema 3 - How Do I Control Shared Instance Creation?

### section: Singleton - one shared instance

#### block: 1
**Mental Question**

Este recurso debe tener una unica instancia compartida?

Singleton aparece cuando el dominio realmente necesita una sola instancia de un recurso dentro del proceso.

#### block: 2
**Intuition**

Piensa en configuracion global, registro central, cache compartida o un servicio que coordina un recurso unico. Si crear dos instancias rompe consistencia, Singleton puede tener sentido.

La clave es "debe ser unico", no "me da flojera pasar dependencias".

#### block: 3
**Recognition Signal**

Usalo con cuidado cuando duplicar el objeto cause problemas reales:

- dos configuraciones globales distintas
- dos registros compitiendo por el mismo recurso
- dos caches que deberian compartir estado
- dos coordinadores de un recurso unico

La senal fuerte es una restriccion del dominio o del recurso, no comodidad.

#### block: 4
**ASCII Diagram**

```text
Client A ----+
            |
Client B ----+--> Singleton.getInstance() --> SharedInstance
            |
Client C ----+
```

#### block: 5
**Common Confusion**

Singleton no es una forma elegante de crear variables globales. Si lo usas para evitar inyeccion de dependencias, pruebas y mantenimiento se vuelven mas dificiles.

Tambien necesita cuidado en concurrencia: dos llamadas simultaneas no deberian crear dos instancias.

#### block: 6
**Usefulness And Cost**

Ganas una fuente unica de verdad para recursos que no deben duplicarse. El costo es estado global, pruebas mas fragiles y dependencias ocultas. Usalo como excepcion justificada.

# unit: Unidad 3 - Structural Patterns

## theme: Tema 1 - How Do I Connect Incompatible Pieces?

### section: Adapter - incompatible interface

#### block: 1
**Mental Question**

La interfaz no calza con la que mi sistema espera?

Adapter aparece cuando una pieza existente funciona, pero habla con nombres, parametros o contratos distintos a los que tu sistema usa.

#### block: 2
**Intuition**

Piensa en varias APIs bancarias. Tu app quiere llamar `pagar(monto)`, pero cada banco tiene su propio metodo: `crearTransaccion`, `enviarCargo` o `procesarPago`.

El adapter traduce tu interfaz interna al lenguaje de cada banco.

#### block: 3
**Recognition Signal**

Usalo cuando quieras integrar:

- APIs externas con contratos distintos
- librerias antiguas
- servicios heredados
- clases utiles que no implementan tu interfaz

La senal fuerte es incompatibilidad de interfaz. Algo sirve, pero no encaja.

#### block: 4
**ASCII Diagram**

```text
App expects PaymentGateway.pagar()
             |
             v
       BankAdapter.pagar()
             |
             v
   BankApi.crearTransaccion()
```

#### block: 5
**Common Confusion**

No es Bridge. Adapter traduce una interfaz incompatible. Bridge separa dos dimensiones que crecen y se combinan.

No es Facade. Facade simplifica un subsistema; Adapter hace compatible una pieza concreta.

#### block: 6
**Usefulness And Cost**

Ganas integracion limpia sin contaminar tu dominio con detalles externos. El costo es otra capa y posible dependencia fuerte hacia la API adaptada.

### section: Bridge - independent dimensions

#### block: 1
**Mental Question**

Tengo dos dimensiones que crecen y se combinan independientemente?

Bridge aparece cuando dos familias de variacion pueden combinarse entre si, y no quieres crear una clase por cada combinacion.

#### block: 2
**Intuition**

En un dashboard, una dimension puede ser el tipo de grafico: barras, linea, torta. Otra dimension puede ser el renderizador: SVG, Canvas, PDF.

Sin Bridge, aparecen clases como `BarChartSVG`, `BarChartCanvas`, `LineChartSVG`, `LineChartCanvas`. Con Bridge separas `Chart` de `Renderer`.

#### block: 3
**Recognition Signal**

Usalo cuando al agregar una variante tengas que multiplicar clases:

- nuevo grafico obliga a crear version SVG, Canvas y PDF
- nuevo renderizador obliga a tocar todos los graficos
- dos jerarquias cambian por razones distintas

La senal fuerte es explosion combinatoria.

#### block: 4
**ASCII Diagram**

```text
Chart abstraction        Renderer implementation
-----------------        -----------------------
BarChart          ----->  SvgRenderer
LineChart         ----->  CanvasRenderer
PieChart          ----->  PdfRenderer
```

#### block: 5
**Common Confusion**

No toda opcion es una dimension. Color, titulo o limite de filas suelen ser configuracion. Bridge aparece cuando cada lado crece como familia propia.

No traduce APIs incompatibles; eso es Adapter.

#### block: 6
**Usefulness And Cost**

Ganas independencia entre jerarquias y evitas clases combinadas. El costo es mas estructura. Si solo existe una dimension real de cambio, Bridge es demasiado.

### section: Facade - simple entry to complex flow

#### block: 1
**Mental Question**

Hay muchos pasos internos que quiero simplificar detras de una entrada simple?

Facade aparece cuando un flujo comun requiere coordinar muchas piezas internas, pero el cliente no deberia conocer esa complejidad.

#### block: 2
**Intuition**

Piensa en `realizarCompra()`. Por dentro valida usuario, revisa stock, calcula envio, procesa pago, crea factura y envia correo.

La fachada ofrece una puerta clara para un subsistema complejo.

#### block: 3
**Recognition Signal**

Usalo cuando el cliente tenga que llamar demasiados servicios en orden para lograr una operacion normal.

La senal fuerte es una secuencia interna repetida que podria quedar detras de un metodo estable como `checkout()`, `generateReport()` o `startSession()`.

#### block: 4
**ASCII Diagram**

```text
Client
  |
  v
StoreFacade.checkout()
  |
  +--> StockService
  +--> PaymentService
  +--> InvoiceService
  +--> EmailService
```

#### block: 5
**Common Confusion**

Facade no necesariamente cambia interfaces como Adapter. Tampoco controla acceso a un objeto real como Proxy.

Su trabajo principal es simplificar el uso de un subsistema.

#### block: 6
**Usefulness And Cost**

Ganas una API mas limpia y menos acoplamiento hacia detalles internos. El costo es que la fachada puede crecer demasiado si acumula todos los casos especiales.

## theme: Tema 2 - How Do I Add Behavior Without Rewriting?

### section: Decorator - behavior by wrapping

#### block: 1
**Mental Question**

Quiero agregar comportamiento envolviendo el objeto?

Decorator aparece cuando quieres sumar responsabilidades opcionales sin modificar la clase original y sin crear una subclase por cada combinacion.

#### block: 2
**Intuition**

Piensa en un flujo de datos. Puedes envolverlo con compresion, luego cifrado, luego logging. Cada capa mantiene la misma interfaz y delega al objeto que envuelve.

El comportamiento se construye como capas.

#### block: 3
**Recognition Signal**

Usalo cuando quieras combinar funciones opcionales:

- logging
- cache
- compresion
- cifrado
- validacion
- metricas

La senal fuerte es que el cliente deberia usar el objeto igual, este o no decorado.

#### block: 4
**ASCII Diagram**

```text
Client
  |
  v
LoggingDecorator
  |
  v
EncryptionDecorator
  |
  v
BaseStream
```

#### block: 5
**Common Confusion**

Se parece a Proxy porque ambos envuelven. La diferencia es la intencion: Decorator agrega comportamiento; Proxy controla acceso.

Si la pregunta es "quiero sumar una capa funcional", piensa Decorator.

#### block: 6
**Usefulness And Cost**

Ganas composicion flexible sin tocar la clase base. El costo es que muchas capas pueden volver dificil entender el orden real de ejecucion.

### section: Proxy - controlled access

#### block: 1
**Mental Question**

Quiero controlar cuando, como o si se accede al objeto real?

Proxy aparece cuando el cliente no deberia llegar directamente al objeto real sin pasar por un intermediario.

#### block: 2
**Intuition**

Piensa en una imagen pesada. El cliente llama `mostrar()`, pero el proxy retrasa la carga real hasta que sea necesaria.

Tambien puede validar permisos, cachear respuestas, auditar llamadas o representar un servicio remoto.

#### block: 3
**Recognition Signal**

Usalo cuando necesites:

- lazy loading
- permisos
- cache
- auditoria
- reintentos
- acceso remoto

La senal fuerte es control de acceso, no traduccion ni simplificacion.

#### block: 4
**ASCII Diagram**

```text
Client
  |
  v
ImageProxy.show()
  |
  +-- if needed: load RealImage
  |
  v
RealImage.show()
```

#### block: 5
**Common Confusion**

No es Adapter porque mantiene una interfaz compatible; no traduce un contrato incompatible.

No es Decorator si la razon principal no es agregar una capacidad opcional, sino controlar el acceso al objeto real.

#### block: 6
**Usefulness And Cost**

Ganas control, proteccion y optimizacion alrededor de recursos importantes. El costo es comportamiento oculto: una llamada simple puede esconder permisos, red, cache o carga pesada.

## theme: Tema 3 - How Do I Represent or Share Structure?

### section: Composite - parts and groups as one

#### block: 1
**Mental Question**

Puedo tratar una parte y un grupo de partes igual?

Composite aparece cuando tienes objetos individuales y contenedores, pero quieres usar ambos con la misma interfaz.

#### block: 2
**Intuition**

Piensa en archivos y carpetas. Un archivo tiene tamano; una carpeta tambien puede responder `obtenerTamano()`, pero lo calcula sumando sus hijos.

La parte y el conjunto comparten una operacion comun.

#### block: 3
**Recognition Signal**

Usalo con estructuras jerarquicas:

- carpetas y archivos
- menus y submenus
- componentes UI
- categorias anidadas
- nodos de un arbol

La senal fuerte es que el cliente no quiere preguntar si algo es hoja o contenedor antes de usarlo.

#### block: 4
**ASCII Diagram**

```text
Component
  |
  +-- Leaf
  |
  +-- Composite
        |
        +-- Leaf
        +-- Composite
              |
              +-- Leaf
```

#### block: 5
**Common Confusion**

Composite no crea objetos; organiza partes y grupos. Por eso no es Factory.

Tu analogia con Atomic Design sirve si atomos, moleculas y organismos pueden responder a una operacion comun como `render()`.

#### block: 6
**Usefulness And Cost**

Ganas una forma uniforme de recorrer y operar sobre jerarquias. El costo es que la interfaz comun puede ocultar diferencias importantes entre hojas y contenedores.

### section: Flyweight - shared repeated state

#### block: 1
**Mental Question**

Estoy duplicando muchisimos datos compartibles?

Flyweight aparece cuando hay muchas instancias parecidas y cada una esta copiando datos pesados que podrian compartirse.

#### block: 2
**Intuition**

Piensa en miles de arboles en un mapa. Cada arbol tiene posicion propia, pero muchos comparten textura, color, especie y modelo.

Flyweight separa lo compartido de lo variable.

#### block: 3
**Recognition Signal**

Usalo cuando tengas muchisimos objetos similares y el consumo de memoria importe.

La senal fuerte es esta division:

- estado compartido: textura, modelo, fuente, icono, especie
- estado propio: posicion, escala, seleccion, coordenadas

#### block: 4
**ASCII Diagram**

```text
Tree instance
  x, y, height
  |
  v
TreeType shared
  species
  texture
  model
```

#### block: 5
**Common Confusion**

Flyweight no solo reutiliza objetos por comodidad. Su razon de uso es ahorrar memoria o recursos cuando hay volumen alto.

Si tienes diez objetos, probablemente no vale la pena. Si tienes cincuenta mil, empieza a tener sentido.

#### block: 6
**Usefulness And Cost**

Ganas eficiencia y control de recursos compartidos. El costo es separar cuidadosamente estado compartido y estado propio; si compartes algo que deberia ser individual, aparecen errores raros.

# unit: Unidad 4 - Behavioral Patterns

## theme: Tema 1 - How Do I Choose Behavior?

### section: Strategy - interchangeable policy

#### block: 1
**Mental Question**

Quiero cambiar el algoritmo o politica usada?

Strategy aparece cuando tienes varias formas intercambiables de resolver una misma tarea.

#### block: 2
**Intuition**

Piensa en descuentos, metodos de envio, validadores o algoritmos de ordenamiento. La operacion general es la misma, pero la politica cambia.

El contexto usa una estrategia sin conocer todos sus detalles.

#### block: 3
**Recognition Signal**

Usalo cuando veas muchos condicionales para elegir "como calcular" o "como decidir".

La senal fuerte es que las variantes son intercambiables y el cliente podria elegir una segun contexto: cupon, temporada, cliente frecuente o volumen.

#### block: 4
**ASCII Diagram**

```text
Cart
  |
  v
DiscountStrategy
  |
  +-- CouponDiscount
  +-- SeasonalDiscount
  +-- VolumeDiscount
```

#### block: 5
**Common Confusion**

Se parece a State, pero Strategy cambia porque alguien elige una politica. State cambia porque el objeto esta en otro estado interno.

Strategy responde "que algoritmo uso ahora".

#### block: 6
**Usefulness And Cost**

Ganas flexibilidad, pruebas mas simples por variante y menos condicionales. El costo es que alguien debe seleccionar la estrategia correcta.

### section: State - behavior by internal state

#### block: 1
**Mental Question**

El comportamiento cambia por el estado interno?

State aparece cuando un mismo objeto responde distinto segun su estado actual.

#### block: 2
**Intuition**

Piensa en un pedido: creado, pagado, enviado, cancelado. La misma accion `cancelar()` no significa lo mismo en todos los estados.

State mueve esas reglas desde condicionales repetidos hacia objetos de estado.

#### block: 3
**Recognition Signal**

Usalo cuando muchas operaciones revisan el mismo estado:

```text
if status == "draft" ...
if status == "published" ...
if status == "archived" ...
```

La senal fuerte es que cada estado tiene reglas, permisos y transiciones propias.

#### block: 4
**ASCII Diagram**

```text
Order
  |
  v
CurrentState
  |
  +-- CreatedState
  +-- PaidState
  +-- ShippedState
  +-- CancelledState
```

#### block: 5
**Common Confusion**

No es Strategy si el cambio no viene de elegir una politica externa, sino de la vida interna del objeto.

State responde "en este estado, como debe comportarse".

#### block: 6
**Usefulness And Cost**

Ganas reglas mas localizadas y transiciones mas explicitas. El costo es mas clases u objetos; para estados simples puede ser excesivo.

### section: Template Method - fixed recipe variable steps

#### block: 1
**Mental Question**

Hay una receta fija con pasos variables?

Template Method aparece cuando el flujo general debe mantenerse igual, pero algunos pasos cambian segun la variante.

#### block: 2
**Intuition**

Piensa en importar archivos: leer, validar, transformar y guardar. El orden es fijo, pero leer CSV, JSON o XML cambia.

El patron define el esqueleto del proceso y deja ciertos pasos abiertos.

#### block: 3
**Recognition Signal**

Usalo cuando varias clases repiten el mismo algoritmo general con pequenas diferencias.

La senal fuerte es una secuencia que no debe cambiar de orden, porque ese orden protege el resultado.

#### block: 4
**ASCII Diagram**

```text
Template.import()
  |
  +-- read()        varies
  +-- validate()    common
  +-- transform()   varies
  +-- save()        common
```

#### block: 5
**Common Confusion**

No es Strategy si no estas intercambiando un algoritmo completo, sino manteniendo una receta fija con pasos reemplazables.

Suele apoyarse en herencia, por eso conviene usarlo cuando el flujo base es realmente estable.

#### block: 6
**Usefulness And Cost**

Ganas consistencia y evitas duplicar el esqueleto del proceso. El costo es rigidez: si las variantes empiezan a romper la receta, el patron deja de encajar.

## theme: Tema 2 - How Do Objects Talk?

### section: Observer - automatic reaction to changes

#### block: 1
**Mental Question**

Varios objetos deben reaccionar automaticamente a un cambio?

Observer aparece cuando un emisor cambia y varios interesados necesitan enterarse sin estar acoplados directamente.

#### block: 2
**Intuition**

Piensa en una cotizacion, temperatura o estado de sesion. Cuando cambia, varias partes de la app actualizan UI, logs, alertas o calculos.

El emisor publica el cambio; los observadores reaccionan.

#### block: 3
**Recognition Signal**

Usalo cuando una accion debe disparar varias reacciones independientes.

La senal fuerte es que no quieres que el emisor conozca cada receptor concreto. Solo notifica; otros se suscriben.

#### block: 4
**ASCII Diagram**

```text
Subject changes
  |
  +--> Observer A updates UI
  +--> Observer B writes log
  +--> Observer C sends alert
```

#### block: 5
**Common Confusion**

No es Singleton. Que todos escuchen la misma fuente no significa que esa fuente sea una instancia unica global.

Observer responde "quien debe reaccionar cuando algo cambia".

#### block: 6
**Usefulness And Cost**

Ganas bajo acoplamiento y extensibilidad. El costo es flujo menos visible: puede ser dificil saber que reacciones ocurren despues de un evento.

### section: Mediator - coordinated communication

#### block: 1
**Mental Question**

Hay demasiados objetos comunicandose entre si?

Mediator aparece cuando muchas piezas se conocen mutuamente y la comunicacion se vuelve una red dificil de mantener.

#### block: 2
**Intuition**

Piensa en una pantalla con botones, filtros, listas, formularios y paneles. Si todos hablan con todos, cada cambio rompe varias relaciones.

El mediador centraliza la coordinacion: los componentes hablan con el mediador, no entre ellos.

#### block: 3
**Recognition Signal**

Usalo cuando veas dependencias cruzadas:

- el boton conoce el formulario
- el formulario conoce la lista
- la lista conoce el panel
- el panel vuelve a modificar el boton

La senal fuerte es comunicacion muchos-a-muchos.

#### block: 4
**ASCII Diagram**

```text
Button  ----+
Input   ----+--> Mediator --> updates screen flow
List    ----+
Panel   ----+
```

#### block: 5
**Common Confusion**

Observer distribuye eventos a interesados. Mediator coordina interacciones entre participantes que no deberian hablar directamente.

Si el problema es "todos conocen a todos", piensa Mediator.

#### block: 6
**Usefulness And Cost**

Ganas participantes mas simples y menos dependencias cruzadas. El costo es que el mediador puede crecer demasiado y convertirse en una clase central gigante.

### section: Chain of Responsibility - request through handlers

#### block: 1
**Mental Question**

Una solicitud debe pasar por una cadena de manejadores?

Chain of Responsibility aparece cuando varias piezas pueden procesar, rechazar o pasar una solicitud al siguiente paso.

#### block: 2
**Intuition**

Piensa en soporte tecnico: nivel basico, nivel tecnico, gerencia. Si uno no puede resolver, pasa el caso al siguiente.

Cada manejador decide si actua o delega.

#### block: 3
**Recognition Signal**

Usalo cuando una solicitud atraviesa filtros, validadores, middleware o niveles de aprobacion.

La senal fuerte es una secuencia flexible de manejadores donde cada uno tiene una responsabilidad pequena.

#### block: 4
**ASCII Diagram**

```text
Request
  |
  v
Handler A --pass--> Handler B --pass--> Handler C
   |                 |                 |
 handle?           handle?           handle?
```

#### block: 5
**Common Confusion**

No es Template Method. Template Method fija una receta interna. Chain arma una linea de objetos independientes que pueden manejar o delegar una solicitud.

Tampoco es Strategy: no eliges un algoritmo, recorres una cadena.

#### block: 6
**Usefulness And Cost**

Ganas separacion de responsabilidades y orden configurable. El costo es que puede no ser obvio que manejador termino procesando la solicitud.

## theme: Tema 3 - How Do I Encapsulate Flow?

### section: Command - action as an object

#### block: 1
**Mental Question**

Necesito guardar, ejecutar, reintentar o deshacer una accion?

Command aparece cuando una accion debe tratarse como un objeto o dato independiente del momento en que se ejecuta.

#### block: 2
**Intuition**

Piensa en botones de UI, cola de trabajos, historial de acciones o undo/redo. `SaveCommand`, `CopyCommand` o `SendEmailCommand` encapsulan que hacer y con que datos.

La accion se puede ejecutar ahora, guardar para despues o registrar.

#### block: 3
**Recognition Signal**

Usalo cuando quieras:

- poner acciones en cola
- reintentar operaciones
- guardar historial
- implementar undo
- auditar lo que se pidio ejecutar

La senal fuerte es tratar acciones como unidades transportables.

#### block: 4
**ASCII Diagram**

```text
Invoker
  |
  v
Command.execute()
  |
  v
Receiver.realAction()
```

#### block: 5
**Common Confusion**

No es Proxy. Proxy controla acceso a un objeto real. Command representa una accion que puede ejecutarse, guardarse o deshacerse.

Si la frase es "quiero guardar esta accion para ejecutarla luego", piensa Command.

#### block: 6
**Usefulness And Cost**

Ganas historial, reintentos, colas y desacoplamiento entre quien pide y quien ejecuta. El costo es mas objetos para acciones que tal vez eran simples.

### section: Iterator - traversal without exposing structure

#### block: 1
**Mental Question**

Quiero recorrer una coleccion sin exponer su estructura interna?

Iterator aparece cuando el cliente necesita consumir elementos sin saber si vienen de una lista, arbol, cursor, pagina o flujo.

#### block: 2
**Intuition**

Piensa en un reproductor que solo pide "siguiente". No necesita saber si la coleccion interna es un arreglo, una consulta paginada o un arbol.

Iterator separa el recorrido de la estructura.

#### block: 3
**Recognition Signal**

Usalo cuando varias colecciones deban recorrerse con una interfaz comun.

La senal fuerte es que quieres ocultar como se almacenan los elementos y exponer solo `hasNext()` y `next()` o una forma equivalente.

#### block: 4
**ASCII Diagram**

```text
Client
  |
  v
Iterator
  |
  +-- next()
  +-- hasNext()
  |
  v
Hidden collection structure
```

#### block: 5
**Common Confusion**

Iterator no organiza jerarquias como Composite. Puede recorrer un arbol compuesto, pero su responsabilidad es el recorrido, no la estructura.

Tampoco es Strategy: no intercambia algoritmos de negocio, expone una forma de consumir elementos.

#### block: 6
**Usefulness And Cost**

Ganas encapsulamiento y recorrido uniforme. El costo es que algunas operaciones especificas de la coleccion real quedan ocultas.

### section: Memento - snapshot and restore

#### block: 1
**Mental Question**

Necesito guardar y restaurar un estado anterior?

Memento aparece cuando necesitas volver a un estado previo sin exponer ni romper el encapsulamiento interno del objeto.

#### block: 2
**Intuition**

Piensa en un editor con deshacer, un formulario con borrador, un juego con checkpoint o una configuracion que puede revertirse.

El objeto entrega una captura de su estado y luego puede restaurarla.

#### block: 3
**Recognition Signal**

Usalo cuando necesites:

- undo
- snapshots
- checkpoints
- rollback
- restaurar despues de una operacion fallida

La senal fuerte es que el estado anterior importa y no quieres que otros manipulen los campos internos directamente.

#### block: 4
**ASCII Diagram**

```text
Originator
  |
  +-- createMemento() --> Snapshot
  |
  +-- restore(Snapshot)
```

#### block: 5
**Common Confusion**

Memento no es simplemente copiar un objeto como Prototype. Prototype crea una nueva instancia para seguir trabajando; Memento guarda estado para restaurar.

La intencion cambia: creacion vs recuperacion.

#### block: 6
**Usefulness And Cost**

Ganas undo y recuperacion sin exponer detalles internos. El costo es memoria y complejidad para decidir que estado se debe guardar.

### section: Visitor - new operations over stable structures

#### block: 1
**Mental Question**

Quiero agregar operaciones sin modificar las clases visitadas?

Visitor aparece cuando tienes una estructura de objetos relativamente estable, pero necesitas agregar operaciones nuevas sobre ella.

#### block: 2
**Intuition**

Piensa en documentos con parrafos, tablas e imagenes. Luego necesitas exportar PDF, calcular costo, generar resumen o validar accesibilidad.

En vez de llenar cada clase con todos esos metodos, cada operacion vive en un visitor.

#### block: 3
**Recognition Signal**

Usalo cuando:

- la jerarquia de elementos cambia poco
- las operaciones nuevas aparecen seguido
- quieres mantener cada operacion agrupada
- necesitas recorrer tipos distintos aplicando logica especifica

La senal fuerte es una estructura estable con muchas operaciones externas.

#### block: 4
**ASCII Diagram**

```text
Document elements
  |
  +-- Paragraph.accept(visitor)
  +-- Table.accept(visitor)
  +-- Image.accept(visitor)
              |
              v
        ExportPdfVisitor
```

#### block: 5
**Common Confusion**

Visitor no es Strategy. Strategy cambia un algoritmo usado por un contexto. Visitor agrega operaciones sobre muchos tipos de elementos.

Tambien puede parecer Composite si recorres un arbol, pero Composite modela la estructura; Visitor agrega operaciones sobre esa estructura.

#### block: 6
**Usefulness And Cost**

Ganas operaciones nuevas sin modificar las clases visitadas. El costo es alto cuando agregas nuevos tipos de elementos, porque cada visitor debe aprender a visitarlos.
