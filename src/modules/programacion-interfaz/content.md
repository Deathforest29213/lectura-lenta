---
collection_id: programacion-interfaz
collection_title: Interfaz de Programacion
type: content_record
format_version: llm-wiki-record-v1
status: draft
source_files:
  - flet-gallery.md
  - componentes-react.md
---

# unit: Unit 1 - Interface Components

## theme: Theme 1 - App Structure

### section: PageShell

#### block: 1
**Definition**

`PageShell` es la estructura exterior que sostiene las zonas principales de una pantalla.

#### block: 2
**What It Does**

Sirve para que la app tenga una forma estable. Define donde vive la navegacion, donde aparece el contenido principal y donde pueden existir paneles secundarios.

#### block: 3
**ASCII Image**

```text
+------------------------------------------------+
| PageShell                                      |
|  +----------+-------------------------------+  |
|  | Sidebar  | ContentArea                   |  |
|  |          |                               |  |
|  +----------+-------------------------------+  |
+------------------------------------------------+
```

#### block: 4
**In The Slow Reading App**

En la app de lectura lenta, `PageShell` evita que cada pantalla invente su propia estructura. Biblioteca, lector y ajustes pueden sentirse parte del mismo sistema.

### section: Header

#### block: 1
**Definition**

`Header` es la franja superior que presenta identidad, titulo o acciones generales de una pantalla.

#### block: 2
**What It Does**

Ayuda a orientar al usuario. Puede mostrar el nombre de la vista actual, una accion global o un acceso rapido para volver.

#### block: 3
**ASCII Image**

```text
+------------------------------------------------+
| Header: Lectura Lenta              [Settings] |
+------------------------------------------------+
| ContentArea                                    |
+------------------------------------------------+
```

#### block: 4
**In The Slow Reading App**

En lectura lenta, `Header` debe ser discreto. Su funcion es orientar, no competir con el texto que el usuario esta leyendo.

### section: Sidebar

#### block: 1
**Definition**

`Sidebar` es una zona lateral que agrupa navegacion, filtros o accesos a contenido relacionado.

#### block: 2
**What It Does**

Permite cambiar de area sin abandonar la pantalla completa. Funciona bien en escritorio porque aprovecha el ancho horizontal.

#### block: 3
**ASCII Image**

```text
+--------------+---------------------------------+
| Sidebar      | Reader                          |
| - Library    |                                 |
| - Progress   |                                 |
| - Settings   |                                 |
+--------------+---------------------------------+
```

#### block: 4
**In The Slow Reading App**

`Sidebar` puede mostrar biblioteca, unidades o temas. En movil deberia ocultarse o convertirse en un panel temporal para proteger el espacio de lectura.

### section: ContentArea

#### block: 1
**Definition**

`ContentArea` es la zona donde vive el contenido principal de la pantalla.

#### block: 2
**What It Does**

Separa lo importante de lo secundario. En una pantalla, casi todo deberia organizarse alrededor de esta zona.

#### block: 3
**ASCII Image**

```text
+------------------------------------------------+
| Header                                         |
+------------------------------------------------+
|                                                |
|                  ContentArea                   |
|                                                |
+------------------------------------------------+
```

#### block: 4
**In The Slow Reading App**

En el lector, `ContentArea` contiene el texto activo. En la biblioteca, contiene tarjetas o listas de modulos.

### section: SettingsArea

#### block: 1
**Definition**

`SettingsArea` es una zona dedicada a preferencias y controles de configuracion.

#### block: 2
**What It Does**

Permite ajustar la experiencia sin mezclar controles con contenido principal. Puede ser un panel fijo, lateral o modal.

#### block: 3
**ASCII Image**

```text
+-------------------------------+----------------+
| Reader                        | SettingsArea   |
|                               | Font size      |
|                               | Speed          |
|                               | Theme          |
+-------------------------------+----------------+
```

#### block: 4
**In The Slow Reading App**

`SettingsArea` puede contener velocidad, tamano de texto, alto de linea, modo oscuro y modo de enfoque.

## theme: Theme 2 - Layout Components

### section: Box

#### block: 1
**Definition**

`Box` es una caja visual basica que envuelve contenido y le da espacio, fondo, borde o tamano.

#### block: 2
**What It Does**

Sirve para crear una unidad visual. No decide toda la pantalla; solo delimita una pieza dentro del layout.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Box                  |
|  contenido interno   |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`Box` puede envolver un bloque de lectura, una tarjeta de modulo o una preferencia individual.

### section: Row

#### block: 1
**Definition**

`Row` organiza elementos en direccion horizontal.

#### block: 2
**What It Does**

Es util cuando varios controles pertenecen a la misma linea de accion, como botones de navegacion o indicadores compactos.

#### block: 3
**ASCII Image**

```text
+-----------------------------------+
| [Back]   [Pause]   [Next]         |
+-----------------------------------+
```

#### block: 4
**In The Slow Reading App**

`Row` puede ordenar los controles de lectura: retroceder, pausar, avanzar y cambiar tamano de texto.

### section: Column

#### block: 1
**Definition**

`Column` organiza elementos en direccion vertical.

#### block: 2
**What It Does**

Permite construir una secuencia clara de contenido. Es la estructura natural para listas, formularios y bloques de lectura.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Title                |
| Paragraph            |
| Button               |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`Column` puede apilar titulo, progreso, bloque actual y acciones secundarias.

### section: Grid

#### block: 1
**Definition**

`Grid` organiza elementos en filas y columnas.

#### block: 2
**What It Does**

Sirve para mostrar varias piezas equivalentes y comparables, como tarjetas de modulos o unidades.

#### block: 3
**ASCII Image**

```text
+----------+----------+----------+
| Card     | Card     | Card     |
+----------+----------+----------+
| Card     | Card     | Card     |
+----------+----------+----------+
```

#### block: 4
**In The Slow Reading App**

`Grid` funciona bien en la biblioteca, donde el usuario necesita escanear varias opciones antes de abrir una lectura.

### section: Stack

#### block: 1
**Definition**

`Stack` coloca elementos en capas, uno sobre otro.

#### block: 2
**What It Does**

Permite crear overlays, badges, fondos, controles flotantes o estados superpuestos.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Base content         |
|        +----------+  |
|        | Overlay  |  |
|        +----------+  |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`Stack` puede servir para mostrar un indicador de progreso sobre el panel de lectura o una capa de enfoque.

### section: ScrollArea

#### block: 1
**Definition**

`ScrollArea` es una zona donde el contenido puede desplazarse sin mover toda la pantalla.

#### block: 2
**What It Does**

Controla el overflow. Ayuda a mantener fija la estructura mientras el contenido interno crece.

#### block: 3
**ASCII Image**

```text
+----------------------+
| ScrollArea        |  |
| line 1            |  |
| line 2            |  |
| line 3            v  |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`ScrollArea` es clave en el lector. Permite avanzar por bloques largos sin perder la barra de acciones.

## theme: Theme 3 - Reading Text Components

### section: Heading

#### block: 1
**Definition**

`Heading` es un titulo que marca jerarquia dentro de la pantalla.

#### block: 2
**What It Does**

Indica donde esta el usuario. Puede representar una unidad, tema, seccion o titulo de bloque.

#### block: 3
**ASCII Image**

```text
Unidad 2 - Creational Patterns
==============================
Texto de lectura debajo...
```

#### block: 4
**In The Slow Reading App**

`Heading` debe ser claro, pero no enorme. El foco principal sigue siendo el texto que se esta leyendo.

### section: Paragraph

#### block: 1
**Definition**

`Paragraph` es un bloque de texto continuo con sentido propio.

#### block: 2
**What It Does**

Entrega informacion legible. Necesita buen ancho, altura de linea y contraste para no cansar.

#### block: 3
**ASCII Image**

```text
+----------------------------------+
| Este parrafo explica una idea    |
| completa sin romper el ritmo.    |
+----------------------------------+
```

#### block: 4
**In The Slow Reading App**

`Paragraph` es la unidad visual que sostiene la explicacion. Debe sentirse calmado y respirable.

### section: ReaderText

#### block: 1
**Definition**

`ReaderText` es el componente especializado que muestra el texto activo de lectura.

#### block: 2
**What It Does**

Controla como se ve el bloque actual: tamano, espaciado, ancho maximo, alineacion y ritmo visual.

#### block: 3
**ASCII Image**

```text
+--------------------------------------+
|                                      |
|      "Texto actual de lectura"       |
|                                      |
+--------------------------------------+
```

#### block: 4
**In The Slow Reading App**

`ReaderText` es una pieza central. Si falla, la app puede tener buenas funciones, pero se sentira incomoda para estudiar.

### section: MarkdownViewer

#### block: 1
**Definition**

`MarkdownViewer` muestra contenido escrito en Markdown como texto formateado.

#### block: 2
**What It Does**

Convierte encabezados, listas, negritas, codigo y enlaces en una vista legible.

#### block: 3
**ASCII Image**

```text
Markdown source        Rendered view
---------------        -------------
**Concept**       ->   Concept en negrita
- item            ->   lista visible
```

#### block: 4
**In The Slow Reading App**

`MarkdownViewer` permite que los contenidos de estudio tengan estructura sin escribir componentes manuales para cada bloque.

### section: HighlightedText

#### block: 1
**Definition**

`HighlightedText` es texto con una parte resaltada para dirigir la atencion.

#### block: 2
**What It Does**

Hace visible una palabra, frase o idea importante dentro de un bloque mayor.

#### block: 3
**ASCII Image**

```text
El patron reduce [acoplamiento] entre piezas.
                  ^^^^^^^^^^^^
```

#### block: 4
**In The Slow Reading App**

`HighlightedText` puede marcar el concepto actual, una palabra clave o el fragmento que se esta leyendo.

### section: SelectableText

#### block: 1
**Definition**

`SelectableText` permite seleccionar y copiar texto.

#### block: 2
**What It Does**

Da control al usuario cuando necesita guardar una cita, copiar una definicion o revisar una frase.

#### block: 3
**ASCII Image**

```text
Seleccion:
|-----------------------|
| texto copiable        |
|-----------------------|
```

#### block: 4
**In The Slow Reading App**

`SelectableText` debe convivir con los gestos de avance. Si cada toque avanza la lectura, seleccionar texto puede volverse dificil.

## theme: Theme 4 - Navigation Components

### section: SidebarNav

#### block: 1
**Definition**

`SidebarNav` es una navegacion lateral con enlaces o botones principales.

#### block: 2
**What It Does**

Permite cambiar de vista sin ocupar la zona central. Es buena para apps de estudio con varias areas.

#### block: 3
**ASCII Image**

```text
+-------------+----------------------+
| Library     | Content              |
| Reader      |                      |
| Settings    |                      |
+-------------+----------------------+
```

#### block: 4
**In The Slow Reading App**

`SidebarNav` puede llevar a biblioteca, progreso, descargas y ajustes.

### section: Tabs

#### block: 1
**Definition**

`Tabs` separa vistas relacionadas dentro del mismo contexto.

#### block: 2
**What It Does**

Permite cambiar entre grupos de informacion sin navegar a otra pantalla completa.

#### block: 3
**ASCII Image**

```text
+----------+----------+----------+
| Texto    | Preguntas| Galeria  |
+----------+----------+----------+
| contenido actual                 |
+----------------------------------+
```

#### block: 4
**In The Slow Reading App**

`Tabs` puede separar lectura, preguntas relevantes y resumen visual de una misma unidad.

### section: BackButton

#### block: 1
**Definition**

`BackButton` devuelve al usuario al nivel anterior.

#### block: 2
**What It Does**

Hace que la navegacion sea reversible. Reduce miedo a explorar porque siempre hay una salida clara.

#### block: 3
**ASCII Image**

```text
[Back]  Unidad 2 - Creational Patterns
```

#### block: 4
**In The Slow Reading App**

`BackButton` puede volver de lectura a temas, de temas a unidad o de unidad a area.

### section: NavigationItem

#### block: 1
**Definition**

`NavigationItem` es una opcion individual dentro de una navegacion.

#### block: 2
**What It Does**

Representa un destino. Debe mostrar nombre, estado activo y a veces descripcion o progreso.

#### block: 3
**ASCII Image**

```text
> Reader       activo
  Library
  Settings
```

#### block: 4
**In The Slow Reading App**

`NavigationItem` puede mostrar si un modulo esta online, descargado o parcialmente leido.

## theme: Theme 5 - Action Components

### section: Button

#### block: 1
**Definition**

`Button` es un control que ejecuta una accion.

#### block: 2
**What It Does**

Comunica que algo pasara al presionarlo. Su texto debe nombrar la accion, no describir la pantalla.

#### block: 3
**ASCII Image**

```text
+----------------+
| Start Reading  |
+----------------+
```

#### block: 4
**In The Slow Reading App**

`Button` sirve para iniciar lectura, abrir unidad, guardar progreso o confirmar una accion.

### section: IconButton

#### block: 1
**Definition**

`IconButton` es un boton compacto representado por un icono.

#### block: 2
**What It Does**

Ahorra espacio cuando la accion es frecuente o reconocible. Necesita tooltip o etiqueta accesible.

#### block: 3
**ASCII Image**

```text
+----+  +----+  +----+
| <- |  | || |  | -> |
+----+  +----+  +----+
```

#### block: 4
**In The Slow Reading App**

`IconButton` puede servir para avanzar, retroceder, pausar, abrir ajustes o cambiar tamano de texto.

### section: ActionGroup

#### block: 1
**Definition**

`ActionGroup` agrupa acciones relacionadas.

#### block: 2
**What It Does**

Hace visible que varios botones pertenecen al mismo flujo de trabajo.

#### block: 3
**ASCII Image**

```text
+-----------------------------+
| [Back] [Pause] [Next]       |
+-----------------------------+
```

#### block: 4
**In The Slow Reading App**

`ActionGroup` puede agrupar los controles de reproduccion de lectura lenta.

### section: FloatingActionButton

#### block: 1
**Definition**

`FloatingActionButton` es una accion principal flotante sobre la interfaz.

#### block: 2
**What It Does**

Destaca una accion importante y disponible desde varios puntos de la pantalla.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Content              |
|                  (+) |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

Podria usarse para importar texto, pero debe usarse con cuidado para no invadir la lectura.

## theme: Theme 6 - Input Components

### section: TextArea

#### block: 1
**Definition**

`TextArea` es una entrada de texto largo.

#### block: 2
**What It Does**

Permite escribir o pegar contenido de varias lineas.

#### block: 3
**ASCII Image**

```text
+------------------------------+
| Pega aqui tu texto...        |
|                              |
|                              |
+------------------------------+
```

#### block: 4
**In The Slow Reading App**

`TextArea` puede servir para importar un texto rapido y convertirlo en bloques de lectura.

### section: SearchInput

#### block: 1
**Definition**

`SearchInput` es una entrada especializada para buscar.

#### block: 2
**What It Does**

Filtra contenido segun una palabra o frase. Debe responder rapido y mostrar resultados claros.

#### block: 3
**ASCII Image**

```text
+------------------------------+
| Search: patrones             |
+------------------------------+
```

#### block: 4
**In The Slow Reading App**

`SearchInput` puede buscar modulos, temas, secciones o bloques guardados.

### section: Select

#### block: 1
**Definition**

`Select` permite escoger una opcion dentro de una lista cerrada.

#### block: 2
**What It Does**

Evita que el usuario escriba valores incorrectos cuando las opciones ya estan definidas.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Theme: Dark      v   |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`Select` puede escoger unidad, tema, voz, idioma o modo de lectura.

### section: Switch

#### block: 1
**Definition**

`Switch` activa o desactiva una opcion binaria.

#### block: 2
**What It Does**

Representa decisiones de encendido o apagado, como modo oscuro o enfoque.

#### block: 3
**ASCII Image**

```text
Focus Mode   [ off | ON ]
```

#### block: 4
**In The Slow Reading App**

`Switch` puede activar modo enfoque, lectura automatica o mostrar ayudas visuales.

### section: Slider

#### block: 1
**Definition**

`Slider` permite elegir un valor dentro de un rango.

#### block: 2
**What It Does**

Es util cuando el valor se ajusta por sensacion, no solo por numero exacto.

#### block: 3
**ASCII Image**

```text
Speed
slow  ----o-------------  fast
```

#### block: 4
**In The Slow Reading App**

`Slider` puede controlar velocidad, tamano de fuente, alto de linea o intensidad del foco.

### section: FileInput

#### block: 1
**Definition**

`FileInput` permite seleccionar un archivo del dispositivo.

#### block: 2
**What It Does**

Conecta la app con archivos externos. Debe validar formato, tamano y errores de lectura.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Choose file...       |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`FileInput` puede importar textos, notas o documentos para transformarlos en sesiones de lectura.

## theme: Theme 7 - Collection Components

### section: ReadingList

#### block: 1
**Definition**

`ReadingList` muestra lecturas disponibles o sesiones recientes.

#### block: 2
**What It Does**

Organiza elementos de lectura para que el usuario pueda elegir que continuar.

#### block: 3
**ASCII Image**

```text
+--------------------------------+
| Fundamentos        40%         |
| Patrones           12%         |
| Interfaz            0%         |
+--------------------------------+
```

#### block: 4
**In The Slow Reading App**

`ReadingList` puede mostrar ultimas lecturas, progreso y acceso rapido a continuar.

### section: LibraryGrid

#### block: 1
**Definition**

`LibraryGrid` muestra colecciones como tarjetas en una grilla.

#### block: 2
**What It Does**

Ayuda a escanear varias opciones al mismo tiempo.

#### block: 3
**ASCII Image**

```text
+----------+----------+
| Module   | Module   |
+----------+----------+
| Module   | Module   |
+----------+----------+
```

#### block: 4
**In The Slow Reading App**

`LibraryGrid` puede mostrar areas, modulos o unidades de estudio.

### section: EmptyState

#### block: 1
**Definition**

`EmptyState` es una vista para cuando no hay contenido que mostrar.

#### block: 2
**What It Does**

Evita una pantalla vacia y explica que puede hacer el usuario.

#### block: 3
**ASCII Image**

```text
+------------------------------+
| No readings yet              |
| [Import text]                |
+------------------------------+
```

#### block: 4
**In The Slow Reading App**

`EmptyState` puede aparecer si no hay textos importados, descargas o resultados de busqueda.

### section: ProgressBar

#### block: 1
**Definition**

`ProgressBar` muestra avance dentro de una tarea o contenido.

#### block: 2
**What It Does**

Convierte progreso invisible en una senal visual simple.

#### block: 3
**ASCII Image**

```text
Progress
[########------] 60%
```

#### block: 4
**In The Slow Reading App**

`ProgressBar` puede mostrar avance por bloque, tema, unidad o modulo.

## theme: Theme 8 - Feedback Components

### section: Toast

#### block: 1
**Definition**

`Toast` es un mensaje breve que aparece y desaparece automaticamente.

#### block: 2
**What It Does**

Confirma acciones sin interrumpir el flujo principal.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Progreso guardado    |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`Toast` puede confirmar guardado, descarga completada o importacion correcta.

### section: Dialog

#### block: 1
**Definition**

`Dialog` es una ventana sobre la interfaz principal que requiere atencion.

#### block: 2
**What It Does**

Sirve para confirmar decisiones, mostrar informacion importante o resolver una accion puntual.

#### block: 3
**ASCII Image**

```text
+------------------------------+
| Reset progress?              |
| [Cancel]        [Confirm]    |
+------------------------------+
```

#### block: 4
**In The Slow Reading App**

`Dialog` puede confirmar reinicio de progreso o eliminacion de una lectura.

### section: Tooltip

#### block: 1
**Definition**

`Tooltip` es una ayuda breve que aparece al enfocar o pasar sobre un control.

#### block: 2
**What It Does**

Explica iconos o acciones compactas sin llenar la pantalla con texto permanente.

#### block: 3
**ASCII Image**

```text
[A+]  ->  "Increase text size"
```

#### block: 4
**In The Slow Reading App**

`Tooltip` es util para botones de icono como avanzar, pausar, fuente, enfoque o galeria.

### section: LoadingState

#### block: 1
**Definition**

`LoadingState` muestra que la app esta esperando datos o preparando una vista.

#### block: 2
**What It Does**

Evita que el usuario interprete una pausa como error o pantalla rota.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Loading...           |
|        o             |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`LoadingState` puede aparecer al cargar modulos, generar resumen visual o importar archivos.

### section: ErrorState

#### block: 1
**Definition**

`ErrorState` muestra que una accion fallo y ofrece una salida.

#### block: 2
**What It Does**

Explica el problema con lenguaje accionable. Debe decir que paso y que se puede intentar.

#### block: 3
**ASCII Image**

```text
+------------------------------+
| Could not load reading       |
| [Try again]                  |
+------------------------------+
```

#### block: 4
**In The Slow Reading App**

`ErrorState` puede aparecer si falla una descarga, un archivo no se puede leer o una unidad no existe.

## theme: Theme 9 - Slow Reading Components

### section: SlowReader

#### block: 1
**Definition**

`SlowReader` es el componente que coordina la experiencia completa de lectura lenta.

#### block: 2
**What It Does**

Une texto, bloque actual, progreso, controles, configuracion y avance.

#### block: 3
**ASCII Image**

```text
+--------------------------------------+
| SlowReader                           |
|  toolbar                             |
|  viewport                            |
|  progress                            |
+--------------------------------------+
```

#### block: 4
**In The Slow Reading App**

`SlowReader` es el componente compuesto principal. No deberia hacer todo solo, sino coordinar piezas mas pequenas.

### section: ReaderViewport

#### block: 1
**Definition**

`ReaderViewport` es la zona visible donde aparece el bloque o frase actual.

#### block: 2
**What It Does**

Controla foco visual, centrado, ancho maximo y posicion del texto dentro del lector.

#### block: 3
**ASCII Image**

```text
+--------------------------------------+
|                                      |
|         current reading block        |
|                                      |
+--------------------------------------+
```

#### block: 4
**In The Slow Reading App**

`ReaderViewport` debe ser estable. Si se mueve demasiado, el usuario pierde ritmo y concentracion.

### section: ReadingToolbar

#### block: 1
**Definition**

`ReadingToolbar` agrupa controles usados durante la lectura.

#### block: 2
**What It Does**

Reune acciones frecuentes en un lugar predecible.

#### block: 3
**ASCII Image**

```text
+----------------------------------+
| [Back] [Text -25%] [Sections]    |
+----------------------------------+
```

#### block: 4
**In The Slow Reading App**

`ReadingToolbar` puede contener volver, cambiar tamano, saltar de seccion y abrir recursos visuales.

### section: SpeedControl

#### block: 1
**Definition**

`SpeedControl` ajusta la velocidad de avance o revelado.

#### block: 2
**What It Does**

Permite adaptar el ritmo a la capacidad de lectura del momento.

#### block: 3
**ASCII Image**

```text
Speed
calm  -----o----------  fast
```

#### block: 4
**In The Slow Reading App**

`SpeedControl` ayuda a que la app no imponga un ritmo unico. El usuario debe poder leer mas lento o mas rapido segun el contenido.

### section: ReadingSettingsPanel

#### block: 1
**Definition**

`ReadingSettingsPanel` agrupa ajustes especificos de lectura.

#### block: 2
**What It Does**

Centraliza configuraciones que afectan la comodidad visual y el ritmo.

#### block: 3
**ASCII Image**

```text
+----------------------+
| Reading Settings     |
| Font size            |
| Line height          |
| Focus mode           |
+----------------------+
```

#### block: 4
**In The Slow Reading App**

`ReadingSettingsPanel` puede controlar fuente, espaciado, velocidad, tema y modo de enfoque.

### section: SessionProgress

#### block: 1
**Definition**

`SessionProgress` muestra el avance de la sesion actual.

#### block: 2
**What It Does**

Ubica al usuario dentro del recorrido. Responde preguntas como cuanto avance y cuanto falta.

#### block: 3
**ASCII Image**

```text
Block 12 of 80
[###-------------] 15%
```

#### block: 4
**In The Slow Reading App**

`SessionProgress` puede mostrar bloque actual, porcentaje, seccion activa y progreso guardado.
