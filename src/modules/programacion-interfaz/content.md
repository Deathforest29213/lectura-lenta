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

# unit: Unidad 1 - Componentes de interfaz para apps React

## theme: Tema 1 - Estructura general de la app

### section: Idea central

#### block: 1
La estructura general de una app define las zonas principales de la pantalla y la relacion entre ellas. Antes de pensar en botones o colores, conviene saber donde vive el contenido principal, donde aparece la navegacion y donde se muestran los controles.

#### block: 2
En React, esta estructura suele representarse con componentes como `App`, `PageShell`, `AppLayout`, `MainView`, `Header`, `Footer`, `Sidebar`, `ContentArea`, `ReadingArea` y `SettingsArea`.

### section: Aplicacion en lectura lenta

#### block: 1
En una webapp de lectura lenta, la estructura base puede separar una zona de lectura, una zona de controles y una zona de configuracion. Esa separacion evita que el lector mezcle el contenido que estudia con las acciones que usa para avanzar.

#### block: 2
Un componente como `PageShell` puede envolver toda la pantalla. Dentro de el, `ReadingArea` muestra el texto, `ReadingToolbar` maneja acciones frecuentes y `SettingsArea` contiene preferencias como velocidad, tamano de fuente y modo de enfoque.

### section: Componentes sugeridos

#### block: 1
- `App`
- `PageShell`
- `AppLayout`
- `MainView`
- `Header`
- `Footer`
- `Sidebar`
- `ContentArea`
- `ReadingArea`
- `SettingsArea`

## theme: Tema 2 - Layouts y contenedores

### section: Idea central

#### block: 1
Un layout describe como se organiza el espacio. Un contenedor es una caja dentro de esa organizacion, pero el layout completo incluye filas, columnas, grillas, capas, areas con scroll y reglas responsivas.

#### block: 2
En React, el layout se implementa combinando componentes y CSS. Nombres como `Box`, `Row`, `Column`, `Stack`, `Grid`, `ResponsiveGrid`, `ScrollArea`, `Panel`, `Surface` y `Section` ayudan a leer la intencion de cada pieza.

### section: Aplicacion en lectura lenta

#### block: 1
La zona de lectura necesita un layout estable. El texto no deberia saltar de posicion cuando cambian los controles, aparece una barra lateral o se modifica una preferencia visual.

#### block: 2
Un `ReadingLayout` puede limitar el ancho del texto, centrar el contenido y reservar espacio para controles. Un `ScrollArea` puede permitir lectura continua sin convertir toda la pagina en una estructura dificil de controlar.

### section: Componentes sugeridos

#### block: 1
- `Container` o `Box`
- `Row`
- `Column`
- `Stack`
- `Grid`
- `ResponsiveGrid`
- `ScrollArea`
- `Panel`
- `Surface`
- `Section`

## theme: Tema 3 - Texto y contenido de lectura

### section: Idea central

#### block: 1
Los componentes de texto son el centro de una app de lectura lenta. No solo muestran palabras; tambien definen ritmo, jerarquia, enfasis, seleccion, legibilidad y comodidad visual.

#### block: 2
Una interfaz de lectura puede usar componentes como `Text`, `Paragraph`, `Heading`, `MarkdownViewer`, `ReaderText`, `HighlightedText`, `SelectableText`, `QuoteBlock` y `CodeBlock`.

### section: Aplicacion en lectura lenta

#### block: 1
El texto debe tener un ancho controlado, una altura de linea comoda y un contraste suficiente. Si las lineas son demasiado largas, el lector pierde el punto de retorno; si son demasiado cortas, el ritmo se corta demasiado.

#### block: 2
`ReaderText` puede encargarse de mostrar el bloque activo. `HighlightedText` puede resaltar una frase o palabra. `SelectableText` puede permitir copiar fragmentos sin afectar el flujo general de lectura.

### section: Componentes sugeridos

#### block: 1
- `Text`
- `Paragraph`
- `Heading`
- `MarkdownViewer`
- `ReaderText`
- `HighlightedText`
- `SelectableText`
- `QuoteBlock`
- `CodeBlock`

## theme: Tema 4 - Navegacion

### section: Idea central

#### block: 1
La navegacion permite moverse entre pantallas, secciones y estados de la app. En una interfaz bien organizada, el usuario sabe donde esta, que puede abrir y como volver.

#### block: 2
En React, la navegacion puede tomar forma de `Navbar`, `SidebarNav`, `BottomNav`, `Tabs`, `Breadcrumbs`, `Drawer`, `RouteView`, `BackButton` y `NavigationItem`.

### section: Aplicacion en lectura lenta

#### block: 1
La app puede tener rutas o vistas para lectura, biblioteca, ajustes, estadisticas e historial. Cada una responde a una necesidad distinta del estudio.

#### block: 2
En escritorio, una `SidebarNav` puede ser clara y persistente. En movil, una `BottomNav` o un `Drawer` puede ocupar menos espacio y mantener la zona de lectura limpia.

### section: Componentes sugeridos

#### block: 1
- `Navbar`
- `SidebarNav`
- `BottomNav`
- `Tabs`
- `Breadcrumbs`
- `Drawer`
- `RouteView`
- `BackButton`
- `NavigationItem`

## theme: Tema 5 - Botones y acciones

### section: Idea central

#### block: 1
Los botones representan acciones. Un buen boton no solo se ve clickeable; tambien comunica importancia, estado y consecuencia.

#### block: 2
En React, conviene distinguir entre `Button`, `IconButton`, `PrimaryButton`, `SecondaryButton`, `TextButton`, `FloatingActionButton`, `ToolbarButton` y `ActionGroup`.

### section: Aplicacion en lectura lenta

#### block: 1
Las acciones frecuentes son iniciar, pausar, avanzar, retroceder, reiniciar, guardar progreso, importar texto y abrir ajustes. No todas deben tener el mismo peso visual.

#### block: 2
`PlaybackControls` puede agrupar acciones de lectura. Un `PrimaryButton` puede iniciar la sesion. `IconButton` sirve para acciones compactas como pausar, cerrar, aumentar fuente o activar enfoque.

### section: Componentes sugeridos

#### block: 1
- `Button`
- `IconButton`
- `PrimaryButton`
- `SecondaryButton`
- `TextButton`
- `FloatingActionButton`
- `ToolbarButton`
- `ActionGroup`

## theme: Tema 6 - Formularios y entradas

### section: Idea central

#### block: 1
Los formularios y entradas permiten que el usuario entregue informacion o modifique parametros. En una app de estudio, muchas entradas son ajustes que cambian la experiencia de lectura.

#### block: 2
Componentes comunes son `Input`, `TextArea`, `SearchInput`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `NumberInput` y `FileInput`.

### section: Aplicacion en lectura lenta

#### block: 1
`TextArea` permite pegar texto para leer. `FileInput` permite importar archivos. `Slider` puede controlar velocidad, tamano de fuente o altura de linea. `Switch` puede activar modo oscuro, foco visual o lectura automatica.

#### block: 2
Cada entrada debe tener etiqueta clara, valor visible y respuesta inmediata. Si el usuario ajusta la velocidad de lectura, la interfaz deberia mostrar el valor actual y aplicar el cambio sin obligarlo a adivinar.

### section: Componentes sugeridos

#### block: 1
- `Input`
- `TextArea`
- `SearchInput`
- `Select`
- `Checkbox`
- `RadioGroup`
- `Switch`
- `Slider`
- `NumberInput`
- `FileInput`

## theme: Tema 7 - Listas, colecciones y biblioteca

### section: Idea central

#### block: 1
Las listas y colecciones muestran grupos de elementos relacionados. En una app de lectura, sirven para presentar textos, unidades, temas, sesiones, favoritos e historial.

#### block: 2
Componentes utiles son `List`, `ListItem`, `ReadingList`, `BookList`, `ChapterList`, `CardGrid`, `LibraryGrid`, `EmptyState` y `ReorderableList`.

### section: Aplicacion en lectura lenta

#### block: 1
Una biblioteca necesita mostrar que textos existen, cual fue el ultimo abierto y cuanto progreso tiene cada uno. Un `ReadingList` puede ordenar sesiones recientes y un `LibraryGrid` puede mostrar modulos o colecciones.

#### block: 2
Cuando no hay textos cargados, un `EmptyState` evita una pantalla vacia. Ese estado puede ofrecer una accion directa como importar texto o abrir una coleccion de ejemplo.

### section: Componentes sugeridos

#### block: 1
- `List`
- `ListItem`
- `ReadingList`
- `BookList`
- `ChapterList`
- `CardGrid`
- `LibraryGrid`
- `EmptyState`
- `ReorderableList`

## theme: Tema 8 - Tablas, datos y estadisticas

### section: Idea central

#### block: 1
Las tablas y metricas muestran informacion estructurada. No todas las apps necesitan tablas al inicio, pero casi toda app con progreso termina necesitando datos resumidos.

#### block: 2
Componentes utiles son `DataTable`, `StatsCard`, `Metric`, `ProgressSummary`, `ReadingHistory`, `SessionLog`, `Chart` y `ProgressChart`.

### section: Aplicacion en lectura lenta

#### block: 1
La app puede mostrar palabras leidas, sesiones completadas, tiempo acumulado, progreso por unidad y velocidad promedio. Estos datos ayudan a convertir la lectura en una practica medible.

#### block: 2
`StatsCard` puede mostrar una metrica simple. `ReadingHistory` puede listar sesiones. `ProgressChart` puede mostrar avance por dia o por modulo.

### section: Componentes sugeridos

#### block: 1
- `DataTable`
- `StatsCard`
- `Metric`
- `ProgressSummary`
- `ReadingHistory`
- `SessionLog`
- `Chart`
- `ProgressChart`

## theme: Tema 9 - Feedback y estados del sistema

### section: Idea central

#### block: 1
El feedback informa que esta pasando. Sin feedback, el usuario no sabe si la app guardo, cargo, fallo, esta esperando o termino una accion.

#### block: 2
Componentes comunes son `Toast`, `Snackbar`, `Alert`, `Banner`, `ProgressBar`, `Spinner`, `LoadingState`, `ErrorState` y `SuccessState`.

### section: Aplicacion en lectura lenta

#### block: 1
La app puede mostrar un `ProgressBar` para indicar avance del texto, un `Spinner` mientras carga contenido, un `Toast` al guardar progreso y un `ErrorState` si un archivo no se pudo leer.

#### block: 2
Los estados tambien deben cubrir pantallas completas. Una vista de carga, una vista vacia y una vista de error hacen que la interfaz sea predecible incluso cuando falta informacion.

### section: Componentes sugeridos

#### block: 1
- `Toast`
- `Snackbar`
- `Alert`
- `Banner`
- `ProgressBar`
- `Spinner`
- `LoadingState`
- `ErrorState`
- `SuccessState`

## theme: Tema 10 - Overlays, modales y capas

### section: Idea central

#### block: 1
Los overlays aparecen sobre la interfaz principal. Sirven para decisiones, paneles temporales, ayuda contextual o acciones que no justifican cambiar de pantalla completa.

#### block: 2
Componentes utiles son `Modal`, `Dialog`, `ConfirmDialog`, `DrawerPanel`, `BottomSheet`, `Popover`, `Tooltip`, `ContextMenu` y `Overlay`.

### section: Aplicacion en lectura lenta

#### block: 1
Un `Dialog` puede confirmar que se reiniciara el progreso. Un `Popover` puede mostrar informacion sobre una palabra. Un `Tooltip` puede explicar iconos compactos de la barra de lectura.

#### block: 2
Los overlays deben interrumpir lo justo. Si todo se abre como modal, la lectura se vuelve pesada. Conviene reservar modales para decisiones importantes y usar paneles laterales para ajustes frecuentes.

### section: Componentes sugeridos

#### block: 1
- `Modal`
- `Dialog`
- `ConfirmDialog`
- `DrawerPanel`
- `BottomSheet`
- `Popover`
- `Tooltip`
- `ContextMenu`
- `Overlay`

## theme: Tema 11 - Multimedia y recursos visuales

### section: Idea central

#### block: 1
Los recursos visuales apoyan la comprension, la identidad y la orientacion. No siempre son protagonistas, pero ayudan a reconocer textos, acciones y estados.

#### block: 2
Componentes comunes son `Image`, `Avatar`, `Icon`, `Video`, `CoverImage`, `Illustration`, `Logo` y `Animation`.

### section: Aplicacion en lectura lenta

#### block: 1
Una app de lectura lenta puede usar portadas para modulos, iconos para acciones, ilustraciones para estados vacios y pequenas animaciones para transiciones suaves.

#### block: 2
Los recursos visuales no deben competir con el texto. En la pantalla de lectura, la imagen debe tener un rol claro o permanecer fuera del foco principal.

### section: Componentes sugeridos

#### block: 1
- `Image`
- `Avatar`
- `Icon`
- `Video`
- `CoverImage`
- `Illustration`
- `Logo`
- `Animation`

## theme: Tema 12 - Interaccion avanzada

### section: Idea central

#### block: 1
La interaccion avanzada permite que la app responda a teclado, gestos, arrastre, foco y seleccion. Estos detalles convierten una interfaz correcta en una interfaz comoda.

#### block: 2
Componentes o capas utiles son `KeyboardShortcut`, `GestureArea`, `DragAndDrop`, `ResizablePanel`, `SelectableArea`, `HoverCard`, `FocusTrap` y `HotkeyLayer`.

### section: Aplicacion en lectura lenta

#### block: 1
Los atajos de teclado pueden iniciar, pausar, avanzar o retroceder sin mover la mano al mouse. Una `SelectableArea` permite copiar fragmentos. Un `ResizablePanel` permite ajustar biblioteca y lectura.

#### block: 2
`FocusTrap` es importante en modales para que el teclado no se pierda detras de la capa activa. `HotkeyLayer` puede centralizar los atajos y evitar conflictos entre lectura, busqueda y configuracion.

### section: Componentes sugeridos

#### block: 1
- `KeyboardShortcut`
- `GestureArea`
- `DragAndDrop`
- `ResizablePanel`
- `SelectableArea`
- `HoverCard`
- `FocusTrap`
- `HotkeyLayer`

## theme: Tema 13 - Tema, accesibilidad y responsividad

### section: Idea central

#### block: 1
Tema, accesibilidad y responsividad definen si la app se puede usar en condiciones reales. Una interfaz no esta completa si solo funciona en una pantalla ideal y con una sola configuracion visual.

#### block: 2
Componentes y sistemas utiles son `ThemeProvider`, `ColorModeToggle`, `FontControls`, `DensityControls`, `ResponsiveShell`, `AccessibleButton`, `FocusRing` y `ScreenReaderLabel`.

### section: Aplicacion en lectura lenta

#### block: 1
La app debe permitir ajustar tamano de fuente, contraste, modo claro u oscuro y densidad visual. Esos cambios no son adornos; afectan directamente la resistencia y concentracion durante la lectura.

#### block: 2
En pantallas grandes puede haber sidebar y lector al mismo tiempo. En pantallas pequenas, la navegacion debe ocupar menos espacio y la lectura debe conservar prioridad.

### section: Componentes sugeridos

#### block: 1
- `ThemeProvider`
- `ColorModeToggle`
- `FontControls`
- `DensityControls`
- `ResponsiveShell`
- `AccessibleButton`
- `FocusRing`
- `ScreenReaderLabel`

## theme: Tema 14 - Componentes compuestos de la webapp

### section: Idea central

#### block: 1
Los componentes compuestos combinan piezas genericas para resolver una necesidad especifica del producto. Aqui la interfaz deja de ser una coleccion de controles sueltos y empieza a tener lenguaje propio.

#### block: 2
En una app de lectura lenta, componentes como `SlowReader`, `ReadingToolbar`, `SpeedControl`, `TextImporter`, `ReaderViewport`, `FocusMode`, `ReadingSettingsPanel`, `LibraryPanel`, `SessionProgress` y `ReadingController` representan funciones completas.

### section: Aplicacion en lectura lenta

#### block: 1
`SlowReader` puede ser el componente principal de la experiencia. Recibe texto, estado de lectura y configuracion. Luego coordina el viewport, los controles, el progreso y los ajustes.

#### block: 2
`ReadingController` puede contener la logica de avanzar, retroceder, pausar y reiniciar. `ReaderViewport` puede mostrar el bloque activo. `SpeedControl` y `FontControls` pueden modificar la experiencia sin mezclar UI con reglas de negocio.

### section: Componentes sugeridos

#### block: 1
- `SlowReader`
- `ReadingToolbar`
- `SpeedControl`
- `TextImporter`
- `ReaderViewport`
- `FocusMode`
- `ReadingSettingsPanel`
- `LibraryPanel`
- `SessionProgress`
- `ReadingController`
