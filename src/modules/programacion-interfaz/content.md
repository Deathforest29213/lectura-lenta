---
collection_id: programacion-interfaz
collection_title: Interfaz de Programacion
type: content_record
format_version: llm-wiki-record-v1
status: draft
source_files:
  - flet-gallery-layout.md
  - flet-gallery-buttons.md
  - flet-gallery-input.md
  - flet-gallery-displays.md
  - flet-gallery-dialogs.md
  - flet-gallery-navigation.md
---

# unit: Unit 1 - Layout

## theme: Theme 1 - Estructura base de pantalla

### section: Pagelet - app shell pequeno

#### block: 1
**Purpose**

`Pagelet` permite construir una superficie de app con piezas comunes como barras superiores, drawers, contenido principal y boton flotante. Es util cuando una pantalla necesita sentirse como una mini app dentro de otra estructura.

#### block: 2
**Gallery Sections**

Incluye `Pagelet` y `Pagelet Declarative`. El primer ejemplo muestra una configuracion directa con app bars, drawers y floating action button; el segundo muestra el mismo patron con estilo declarativo.

#### block: 3
**Design Rule**

Usa `Pagelet` cuando la pantalla necesita estructura propia. Si solo necesitas agrupar contenido simple, un `Container`, `Column` o `Row` suele ser suficiente.

### section: SafeArea - zonas seguras

#### block: 1
**Purpose**

`SafeArea` protege el contenido de bordes, barras del sistema, notches y recortes de pantalla. Su trabajo es asegurar que el usuario pueda ver e interactuar con la interfaz sin que el sistema operativo tape elementos importantes.

#### block: 2
**Gallery Sections**

Incluye `SafeArea`, donde el contenido centrado se mantiene dentro de los insets seguros del dispositivo mientras se actualiza un contador.

#### block: 3
**Design Rule**

Usa `SafeArea` en pantallas principales, especialmente en mobile. Es una capa simple que evita muchos problemas visuales en dispositivos reales.

### section: Placeholder - espacio temporal

#### block: 1
**Purpose**

`Placeholder` muestra una caja de referencia mientras se disena, reserva espacio o se espera contenido real. Ayuda a visualizar el layout antes de tener los controles finales.

#### block: 2
**Gallery Sections**

Incluye `Placeholder`, un ejemplo basico con dimensiones de respaldo y estilo personalizado.

#### block: 3
**Design Rule**

No deberia quedar como interfaz final salvo que el objetivo sea mostrar explicitamente un espacio pendiente. En produccion, reemplazalo por contenido, skeleton o estado de carga.

### section: LayoutControl - animaciones y transformaciones

#### block: 1
**Purpose**

`LayoutControl` agrupa propiedades de layout y transformacion como alineacion, margen, offset, opacidad, posicion, rotacion, escala, flip y transformaciones Matrix4.

#### block: 2
**Gallery Sections**

Incluye `Animate align`, `Animate margin`, `Animate offset`, `Animate opacity`, `Animate position`, `Animate rotation`, `Animate scale`, `Bursting flet`, `Flip`, `Image slideshow`, `Matrix4 Transform`, `Offset`, `Rocket`, `Rotate`, `Scale` y `Switcher`.

#### block: 3
**Design Rule**

Las animaciones deben explicar un cambio de estado, no solo decorar. Si todo se mueve, nada guia la atencion.

## theme: Theme 2 - Organizacion lineal

### section: Row - organizacion horizontal

#### block: 1
**Purpose**

`Row` organiza controles en direccion horizontal. Es el patron base para barras de acciones, formularios cortos, grupos de botones y distribuciones de izquierda a derecha.

#### block: 2
**Gallery Sections**

Incluye `Row alignment`, `Row spacing`, `Row vertical alignment` y `Row wrapping`. Estos ejemplos muestran alineacion principal, espaciado, alineacion cruzada y envoltura cuando los controles no caben.

#### block: 3
**Design Rule**

Usa `Row` cuando los elementos se entienden como una misma linea de accion o lectura. Si el contenido puede crecer mucho en mobile, considera wrapping o cambia a `Column`.

### section: Column - organizacion vertical

#### block: 1
**Purpose**

`Column` organiza controles en direccion vertical. Es una de las piezas mas comunes para construir formularios, listas cortas, paneles y pantallas con contenido apilado.

#### block: 2
**Gallery Sections**

Incluye `Column custom scrollbar`, `Column horizontal alignment`, `Column scroll events`, `Column scrolling`, `Column scroll to key`, `Column spacing`, `Column vertical alignment`, `Column wrapping`, `Infinite scrolling` y `Scrolling programmatically`.

#### block: 3
**Design Rule**

Una columna debe mantener ritmo visual: separacion consistente, alineacion clara y scroll predecible. Cuando el contenido crece demasiado, piensa si corresponde usar `ListView`.

## theme: Theme 3 - Contenedores y tarjetas

### section: Card - contenido agrupado

#### block: 1
**Purpose**

`Card` agrupa informacion relacionada dentro de una superficie con separacion visual. Sirve para presentar una pieza de contenido como si fuera una unidad escaneable.

#### block: 2
**Gallery Sections**

Incluye `Music info`, una tarjeta con informacion musical y botones de accion.

#### block: 3
**Design Rule**

Usa tarjetas para elementos repetidos o informacion autocontenida. Evita convertir cada bloque visual en tarjeta, porque la pantalla puede perder jerarquia.

### section: Control - expansion y comportamiento comun

#### block: 1
**Purpose**

`Control` representa la base comun de muchos controles en Flet. En layout, sus propiedades permiten definir como un control ocupa espacio, si se expande y como convive con otros elementos.

#### block: 2
**Gallery Sections**

Incluye `Expand loose chat messages`, `Expand row equal split`, `Expand row proportional 1 3 1` y `Expand textfield in row`. Todos explican variantes de expansion dentro de filas.

#### block: 3
**Design Rule**

Usa `expand` para distribuir espacio con intencion. Una expansion mal aplicada puede hacer que un control pequeno domine la pantalla o que un campo importante quede comprimido.

### section: Container - caja visual y comportamiento

#### block: 1
**Purpose**

`Container` envuelve contenido y permite controlar padding, margen, color, alineacion, borde, sombra, forma, imagen, gradiente y eventos. Es la caja principal para dar presencia visual a una parte de la interfaz.

#### block: 2
**Gallery Sections**

Incluye `Clickable`, `Handling clicks`, `Handling hovers`, `Animate size and color`, `Animate gradient and shape`, `Animated slide-in menu`, `Inherited and overridden theme`, `Page, dark and light themes`, `Theme mode toggle` y `Size aware`.

#### block: 3
**Design Rule**

Usa `Container` para dar estructura o estilo, no para esconder logica compleja. Si un contenedor empieza a manejar demasiados estados, probablemente conviene extraer un componente.

## theme: Theme 4 - Grillas y layout responsivo

### section: ResponsiveRow - columnas adaptables

#### block: 1
**Purpose**

`ResponsiveRow` distribuye controles en columnas que cambian segun el ancho disponible. Es ideal para formularios, dashboards y tarjetas que deben adaptarse entre mobile y desktop.

#### block: 2
**Gallery Sections**

Incluye `Custom Breakpoints`, `ResponsiveRow` y `Scrollable`. Los ejemplos muestran puntos de quiebre personalizados, layouts de cuatro columnas y contenido alto con scroll vertical.

#### block: 3
**Design Rule**

Define breakpoints segun el contenido, no solo segun el dispositivo. Una tarjeta debe cambiar de ancho cuando su informacion empieza a perder legibilidad.

### section: GridView - grillas de contenido

#### block: 1
**Purpose**

`GridView` organiza elementos en una grilla desplazable. Sirve para galerias, colecciones visuales, tarjetas repetidas o cualquier contenido que se beneficie de comparacion rapida.

#### block: 2
**Gallery Sections**

Incluye `Photo gallery`, una galeria responsiva con imagenes remotas y configuracion de espaciado.

#### block: 3
**Design Rule**

Usa grillas cuando los elementos tienen peso visual parecido. Si cada item tiene mucho texto o requiere lectura secuencial, una lista suele funcionar mejor.

## theme: Theme 5 - Listas y elementos de lista

### section: ListTile - item informativo

#### block: 1
**Purpose**

`ListTile` representa una fila de informacion con titulo, subtitulo, leading, trailing y estado de seleccion. Es una pieza eficiente para menus, resultados, ajustes o listas de entidades.

#### block: 2
**Gallery Sections**

Incluye `ListTile`, que muestra variantes de una y dos lineas con controles al inicio y al final.

#### block: 3
**Design Rule**

Un buen `ListTile` debe poder escanearse rapido. Si una fila necesita demasiada informacion, considera una tarjeta o una vista de detalle.

### section: CupertinoListTile - item estilo iOS

#### block: 1
**Purpose**

`CupertinoListTile` cumple un rol similar a `ListTile`, pero con estilo visual inspirado en iOS. Es util cuando quieres que una pantalla se sienta mas nativa en plataformas Apple.

#### block: 2
**Gallery Sections**

Incluye `Notched`, que compara variantes con y sin layout notched, leading, trailing y acciones de click.

#### block: 3
**Design Rule**

Usalo cuando la experiencia visual de Cupertino sea una decision consciente. Mezclar estilos Material y Cupertino sin criterio puede hacer que la app se sienta inconsistente.

### section: ListView - listas desplazables

#### block: 1
**Purpose**

`ListView` muestra contenido repetido en una lista desplazable. Es mejor que una `Column` cuando el numero de elementos puede crecer o cuando se necesita comportamiento de scroll robusto.

#### block: 2
**Gallery Sections**

Incluye `Autocomplete searcher` y `Auto-scrolling and dynamical items addition`. Los ejemplos muestran filtrado por busqueda y agregado dinamico con auto-scroll.

#### block: 3
**Design Rule**

Usa `ListView` para colecciones largas o dinamicas. Para grupos pequenos y fijos, `Column` puede ser mas simple.

### section: Dismissible - acciones por deslizamiento

#### block: 1
**Purpose**

`Dismissible` permite descartar elementos mediante gesto de deslizamiento. Es util en listas donde eliminar, archivar o resolver elementos debe ser una accion rapida.

#### block: 2
**Gallery Sections**

Incluye `Dismissible ListTiles` y `Remove Dismissible on_dismiss inside component`. Los ejemplos cubren fondos por direccion, dialogo de confirmacion y eliminacion declarativa desde estado.

#### block: 3
**Design Rule**

No uses acciones destructivas por gesto sin confirmacion o posibilidad de recuperacion. El gesto debe sentirse rapido, pero tambien seguro.

## theme: Theme 6 - Tablas y datos

### section: DataTable - tabla material

#### block: 1
**Purpose**

`DataTable` presenta informacion tabular en filas y columnas. Es util cuando el usuario necesita comparar valores, ordenar registros o seleccionar filas.

#### block: 2
**Gallery Sections**

Incluye `Adaptive row heights`, `DataTable`, `Handling events`, `Horizontal margin and column spacing` y `Sortable columns and selectable rows`.

#### block: 3
**Design Rule**

Usa tablas cuando la comparacion por columnas sea importante. Si cada fila tiene contenido narrativo, una lista o tarjeta puede ser mas legible.

### section: DataTable2 - tabla extendida

#### block: 1
**Purpose**

`DataTable2` extiende el trabajo con tablas para casos donde se necesita mas control de columnas, estado vacio o interaccion avanzada.

#### block: 2
**Gallery Sections**

Incluye `Column widths`, `Empty state` y `Sortable and selectable`. Los ejemplos muestran anchos fijos y relativos, truncamiento, placeholder vacio, ordenamiento y seleccion.

#### block: 3
**Design Rule**

Usa una tabla extendida cuando `DataTable` ya no alcanza para controlar la presentacion. No agregues complejidad si la tabla basica resuelve el caso.

## theme: Theme 7 - Expansion y navegacion interna

### section: ExpansionPanelList - paneles expandibles

#### block: 1
**Purpose**

`ExpansionPanelList` organiza varios paneles que pueden abrirse y cerrarse. Es util para preguntas frecuentes, configuraciones agrupadas o contenido progresivo.

#### block: 2
**Gallery Sections**

Incluye `ExpansionPanelList` y `Scrolling`. Los ejemplos muestran eliminacion dinamica, callbacks de cambio y paneles dentro de una zona desplazable.

#### block: 3
**Design Rule**

Usa paneles cuando el usuario necesita elegir que detalle mirar. Si todo el contenido es igualmente importante, ocultarlo detras de expansiones puede dificultar la lectura.

### section: ExpansionTile - seccion expandible

#### block: 1
**Purpose**

`ExpansionTile` crea una seccion individual que puede expandirse o colapsarse. Funciona bien para jerarquias ligeras y listas con detalles ocultos.

#### block: 2
**Gallery Sections**

Incluye `Borders`, `Custom animations`, `ExpansionTile`, `Programmatic expansion` y `Theme mode toggle`.

#### block: 3
**Design Rule**

La etiqueta del tile debe explicar claramente que se revelara. Si el usuario tiene que abrir todo para entenderlo, los titulos no estan ayudando.

### section: Tabs - navegacion por pestañas

#### block: 1
**Purpose**

`Tabs` separa contenido en vistas paralelas dentro de una misma pantalla. Sirve cuando el usuario alterna entre categorias relacionadas sin abandonar el contexto.

#### block: 2
**Gallery Sections**

Incluye `Custom tab indicator`, `Dynamic tab addition`, `Nested tabs`, `Programmatic tab switch` y `Tabs`.

#### block: 3
**Design Rule**

Usa tabs para grupos hermanos. Evita tabs anidadas salvo que la jerarquia sea muy clara, porque pueden esconder demasiado la estructura.

### section: PageView - paginas desplazables

#### block: 1
**Purpose**

`PageView` permite navegar entre paginas mediante swipe o acciones programaticas. Es util para onboarding, carruseles o vistas secuenciales.

#### block: 2
**Gallery Sections**

Incluye `PageView` y `Programmatic Swipe`, con cambio de pagina por gesto y navegacion anterior/siguiente desde codigo.

#### block: 3
**Design Rule**

Usa `PageView` cuando la secuencia importa. Si el usuario necesita comparar varias paginas al mismo tiempo, tabs o una lista pueden ser mejores.

## theme: Theme 8 - Capas, division y transformacion

### section: Divider - separacion horizontal

#### block: 1
**Purpose**

`Divider` dibuja una linea horizontal para separar grupos de contenido. Ayuda a marcar cortes visuales sin crear una tarjeta nueva.

#### block: 2
**Gallery Sections**

Incluye `Divider`, con ejemplos de altura, grosor y color entre contenedores apilados verticalmente.

#### block: 3
**Design Rule**

Usa divisores con moderacion. Si la pantalla necesita demasiadas lineas, quizas falta espacio, agrupacion o jerarquia tipografica.

### section: VerticalDivider - separacion vertical

#### block: 1
**Purpose**

`VerticalDivider` separa elementos en una fila. Es util cuando dos zonas horizontales pertenecen al mismo contexto pero necesitan una division clara.

#### block: 2
**Gallery Sections**

Incluye `VerticalDivider`, que separa contenedores de colores dentro de una `Row`.

#### block: 3
**Design Rule**

Usalo cuando la separacion vertical aporte lectura. En pantallas estrechas, una separacion vertical puede volverse incomoda y conviene pasar a layout vertical.

### section: Stack - capas superpuestas

#### block: 1
**Purpose**

`Stack` permite superponer controles. Sirve para badges, texto sobre imagenes, overlays, indicadores y composiciones donde la posicion relativa importa.

#### block: 2
**Gallery Sections**

Incluye `Absolute positioning`, `Online avatar` y `Text on image`. Los ejemplos muestran posicionamiento fijo, indicador sobre avatar y texto centrado sobre una imagen.

#### block: 3
**Design Rule**

Usa capas cuando la superposicion comunica algo. No conviertas `Stack` en una forma de forzar layouts que podrian resolverse con `Row`, `Column` o `ResponsiveRow`.

### section: RotatedBox - rotacion por layout

#### block: 1
**Purpose**

`RotatedBox` rota controles por cuartos de vuelta y afecta el layout resultante. Es util cuando el control debe ocupar espacio ya rotado, no solo verse transformado.

#### block: 2
**Gallery Sections**

Incluye `RotatedBox`, que compara controles normales con renderizado mediante `quarter_turns`.

#### block: 3
**Design Rule**

Usa `RotatedBox` cuando la rotacion debe participar en el layout. Para efectos visuales mas libres, revisa transformaciones de `LayoutControl`.

# unit: Unit 2 - Buttons

## theme: Theme 1 - Botones base

### section: Animate on hover - animacion por hover

#### block: 1
**Purpose**

Este ejemplo muestra un `Button` que rota al pasar el cursor y responde a click y long press. Sirve para entender que un boton puede comunicar interaccion antes de ser presionado.

#### block: 2
**Design Rule**

La animacion por hover debe reforzar que el control es interactivo. Si el movimiento distrae mas de lo que orienta, conviene usar un estado visual mas simple.

### section: Button - estados basicos

#### block: 1
**Purpose**

`Button` es el boton material base para acciones generales. El ejemplo muestra variantes habilitadas y deshabilitadas.

#### block: 2
**Design Rule**

Usa un boton base cuando la accion es clara pero no necesita el mayor peso visual de la pantalla.

### section: Button shapes - formas

#### block: 1
**Purpose**

Este ejemplo compara distintas formas de boton. La forma cambia la personalidad visual y tambien puede afectar como se percibe la jerarquia.

#### block: 2
**Design Rule**

Mantener formas consistentes ayuda a que la app se sienta ordenada. Cambia la forma solo cuando haya una razon visual o de sistema.

### section: Button styling - estilos por estado

#### block: 1
**Purpose**

Este ejemplo personaliza el estilo del boton segun estados del control, como normal, hover, pressed o disabled.

#### block: 2
**Design Rule**

Los estados deben ser visibles pero no exagerados. El usuario necesita saber que paso, no ver una interfaz que cambia sin control.

### section: Buttons with icons - botones con iconos

#### block: 1
**Purpose**

Este ejemplo combina texto e iconos dentro de botones, incluyendo variantes con colores de icono personalizados.

#### block: 2
**Design Rule**

Usa iconos cuando aceleren el reconocimiento de la accion. Si el icono es ambiguo, acompana con texto.

### section: Custom content - contenido personalizado

#### block: 1
**Purpose**

Este ejemplo muestra botones con contenido interno compuesto, como filas y columnas. Permite construir acciones con mas riqueza visual.

#### block: 2
**Design Rule**

Un boton con contenido personalizado debe seguir pareciendo boton. Si parece tarjeta o panel, la accion pierde claridad.

### section: Handling clicks - manejo de clicks

#### block: 1
**Purpose**

Este ejemplo conecta el click del boton con un contador visible. Sirve para entender el flujo basico entre evento, estado y actualizacion visual.

#### block: 2
**Design Rule**

Toda accion debe dar feedback proporcional. En acciones simples puede bastar un cambio de texto, contador, snackbar o estado visual.

### section: TextButton - accion discreta

#### block: 1
**Purpose**

`TextButton` representa una accion ligera basada principalmente en texto. El ejemplo muestra controles habilitados y deshabilitados.

#### block: 2
**Design Rule**

Usa `TextButton` para acciones de bajo enfasis, como cancelar, ver mas o abrir una opcion secundaria.

### section: TextButton custom content - contenido personalizado

#### block: 1
**Purpose**

Este ejemplo construye `TextButton` con filas de iconos y contenido compuesto de varias lineas.

#### block: 2
**Design Rule**

El texto debe seguir siendo facil de leer. Si el contenido requiere mucha composicion visual, quizas corresponde otro tipo de boton.

### section: TextButton handling clicks - eventos de click

#### block: 1
**Purpose**

Este ejemplo actualiza un mensaje contador cada vez que se dispara el evento de click.

#### block: 2
**Design Rule**

Un boton discreto puede ejecutar una accion importante, pero la interfaz debe confirmar que la accion ocurrio.

### section: TextButton icons - iconos

#### block: 1
**Purpose**

Este ejemplo agrega iconos estandar y colores personalizados a `TextButton`.

#### block: 2
**Design Rule**

El icono en un `TextButton` debe ayudar a escanear, no competir con el texto.

## theme: Theme 2 - Botones con enfasis

### section: FilledButton - boton de alto enfasis

#### block: 1
**Purpose**

`FilledButton` representa una accion con mayor enfasis visual. El ejemplo muestra estado habilitado, deshabilitado y variantes con icono.

#### block: 2
**Design Rule**

Usa `FilledButton` para acciones principales. Si hay demasiados botones rellenos en la misma pantalla, todos compiten por atencion.

### section: FilledTonalButton - enfasis medio

#### block: 1
**Purpose**

`FilledTonalButton` ofrece una accion visible, pero menos dominante que un `FilledButton`. El ejemplo incluye variantes deshabilitadas y con icono.

#### block: 2
**Design Rule**

Usa botones tonales para acciones importantes pero secundarias. Funcionan bien cuando quieres presencia sin convertir la accion en protagonista.

## theme: Theme 3 - Botones secundarios

### section: Custom content - contenido compuesto

#### block: 1
**Purpose**

Este ejemplo muestra `OutlinedButton` con contenido personalizado, mezclando iconos y texto.

#### block: 2
**Design Rule**

El borde debe mantener la sensacion de accion secundaria. Si el contenido interno crece demasiado, el boton puede empezar a parecer un contenedor.

### section: Handling clicks - manejo de eventos

#### block: 1
**Purpose**

Este ejemplo usa `OutlinedButton` para actualizar un contador cuando ocurre un click.

#### block: 2
**Design Rule**

Las acciones secundarias tambien necesitan feedback. El hecho de que un boton sea sutil no significa que su respuesta deba ser invisible.

### section: Icons - iconos y color

#### block: 1
**Purpose**

Este ejemplo muestra `OutlinedButton` con iconos y variaciones de color.

#### block: 2
**Design Rule**

El icono debe apoyar el texto, no reemplazarlo si la accion no es universalmente reconocible.

### section: OutlinedButton - estados basicos

#### block: 1
**Purpose**

`OutlinedButton` presenta una accion con borde y bajo relleno visual. El ejemplo muestra estados habilitados y deshabilitados.

#### block: 2
**Design Rule**

Usa `OutlinedButton` para acciones secundarias, alternativas o de menor prioridad que una accion principal rellena.

## theme: Theme 4 - Botones con iconos

### section: Handling clicks - click en iconos

#### block: 1
**Purpose**

Este ejemplo cuenta clicks de un `IconButton` y actualiza un mensaje de estado.

#### block: 2
**Design Rule**

Los botones de icono necesitan tooltip o contexto claro. Un icono sin etiqueta puede ser rapido para expertos y confuso para usuarios nuevos.

### section: Selected icon - estado seleccionado

#### block: 1
**Purpose**

Este ejemplo alterna el estado seleccionado de un `IconButton` y cambia entre icono normal e icono seleccionado.

#### block: 2
**Design Rule**

Usa estado seleccionado para acciones persistentes, como favorito, activar filtro o fijar una opcion.

### section: Variants - familias de estilo

#### block: 1
**Purpose**

Este ejemplo compara variantes normales, deshabilitadas y toggle en distintas familias de estilo de `IconButton`.

#### block: 2
**Design Rule**

Elige la variante segun importancia y contexto. Un icon button relleno llama mas la atencion que uno plano.

### section: Handling clicks - accion flotante

#### block: 1
**Purpose**

`FloatingActionButton` destaca una accion principal flotando sobre la pantalla. El ejemplo agrega elementos a una lista y muestra confirmacion con `SnackBar`.

#### block: 2
**Design Rule**

Usa `FloatingActionButton` para una accion primaria global de la pantalla. Si hay varias acciones principales, el usuario no sabra cual importa mas.

## theme: Theme 5 - Botones de menu

### section: MenuItemButton - acciones dentro de menu

#### block: 1
**Purpose**

`MenuItemButton` representa una opcion accionable dentro de un menu. El ejemplo cambia el color de fondo desde un submenu con estilo de hover.

#### block: 2
**Design Rule**

Un menu debe tener opciones breves y predecibles. Si cada item necesita mucha explicacion, el menu se vuelve pesado.

### section: PopupMenuButton - menu contextual

#### block: 1
**Purpose**

`PopupMenuButton` abre un menu emergente con opciones. El ejemplo muestra items con texto, icono, contenido personalizado y estados marcados.

#### block: 2
**Design Rule**

Usa menus emergentes para acciones secundarias o contextuales. No escondas la accion principal en un menu si el usuario la necesita frecuentemente.

## theme: Theme 6 - Botones Cupertino

### section: CupertinoButton - boton estilo iOS

#### block: 1
**Purpose**

`CupertinoButton` ofrece un boton con estilo visual de iOS. El ejemplo muestra variantes estilizadas, deshabilitadas y adaptativas.

#### block: 2
**Design Rule**

Usa controles Cupertino cuando quieras coherencia con plataformas Apple o una estetica iOS. Mezclarlos con Material requiere criterio visual.

### section: CupertinoFilledButton - boton iOS relleno

#### block: 1
**Purpose**

`CupertinoFilledButton` muestra una accion rellena con comportamiento visual de iOS. El ejemplo incluye opacidad al click y callback de interaccion.

#### block: 2
**Design Rule**

Usalo para acciones destacadas dentro de una experiencia Cupertino. Debe verse importante sin romper el lenguaje visual de iOS.

## theme: Theme 7 - Botones segmentados

### section: CupertinoSegmentedButton - seleccion segmentada

#### block: 1
**Purpose**

`CupertinoSegmentedButton` permite elegir entre varias opciones mutuamente relacionadas. El ejemplo usa segmentos con distintos tamanos de contenido y eventos de seleccion.

#### block: 2
**Design Rule**

Usa botones segmentados cuando el usuario debe elegir una opcion dentro de un conjunto pequeno. Para muchas opciones, un menu o lista funciona mejor.

### section: Segments padding - espaciado de segmentos

#### block: 1
**Purpose**

Este ejemplo ajusta el padding de los segmentos usando sliders interactivos.

#### block: 2
**Design Rule**

El padding debe hacer que cada segmento sea facil de tocar y leer. En mobile, un segmento demasiado compacto puede fallar como control tactil.

### section: CupertinoSlidingSegmentedButton - seleccion deslizante

#### block: 1
**Purpose**

`CupertinoSlidingSegmentedButton` permite cambiar entre segmentos con un indicador deslizante. El ejemplo muestra feedback cuando cambia la seleccion.

#### block: 2
**Design Rule**

Usalo para cambios de modo o filtros pequenos. El indicador deslizante debe hacer visible que solo una opcion esta activa.

# unit: Unit 3 - Input

## theme: Theme 1 - Campos de texto y busqueda

### section: AutoComplete - sugerencias y seleccion

#### block: 1
**Purpose**

`AutoComplete` ayuda al usuario a completar una entrada mostrando sugerencias mientras escribe. El ejemplo base maneja eventos de cambio y seleccion.

#### block: 2
**Design Rule**

Usa autocompletado cuando existe una lista probable de respuestas. Debe acelerar la entrada, no impedir que el usuario escriba con libertad cuando corresponde.

### section: AutofillGroup - autocompletado del sistema

#### block: 1
**Purpose**

`AutofillGroup` agrupa campos que pueden recibir datos guardados por el sistema, como nombre, correo o credenciales. El ejemplo usa hints comunes de autofill.

#### block: 2
**Design Rule**

Usa autofill en formularios reales. Mientras mas claro sea el tipo de dato esperado, mejor puede ayudar el navegador o sistema operativo.

### section: SearchBar - busqueda con sugerencias

#### block: 1
**Purpose**

`SearchBar` permite buscar y mostrar sugerencias asincronas dentro de una vista de busqueda.

#### block: 2
**Design Rule**

La busqueda debe responder rapido y mostrar resultados utiles. Si no hay resultados, explica el estado y ofrece salida.

### section: Custom label, hint, helper, and counter texts and styles - textos auxiliares

#### block: 1
**Purpose**

Este ejemplo personaliza label, hint, helper y counter de un `TextField`.

#### block: 2
**Design Rule**

Los textos auxiliares deben reducir ambiguedad. Si todos compiten visualmente, el campo se vuelve mas dificil de usar.

### section: Handling change events - cambios de texto

#### block: 1
**Purpose**

Este ejemplo refleja la entrada del `TextField` en vivo mientras cambia su valor.

#### block: 2
**Design Rule**

La actualizacion en vivo es util para previews y validacion simple. Para validaciones costosas, usa debounce o confirmacion.

### section: Handling selection changes - seleccion de texto

#### block: 1
**Purpose**

Este ejemplo rastrea rangos de seleccion y mueve el caret con botones.

#### block: 2
**Design Rule**

El manejo de seleccion debe respetar expectativas del sistema. Controlar demasiado el caret puede sentirse invasivo.

### section: Multiline fields - campos multilinea

#### block: 1
**Purpose**

Este ejemplo compara campos multilinea, deshabilitados y autoajustables.

#### block: 2
**Design Rule**

Usa multilinea para texto largo. Si esperas una frase corta, un campo simple mantiene mejor el layout.

### section: Password with reveal button - contrasena visible

#### block: 1
**Purpose**

Este ejemplo muestra un campo de contrasena con boton integrado para revelar el contenido.

#### block: 2
**Design Rule**

Permitir revelar contrasena reduce errores. El control debe ser claro y respetar privacidad por defecto.

### section: Setting prefixes and suffixes - prefijos y sufijos

#### block: 1
**Purpose**

Este ejemplo agrega prefijos, sufijos, contadores y helper text a entradas de texto.

#### block: 2
**Design Rule**

Prefijos y sufijos son utiles para unidades, monedas o dominios. No los uses si solo agregan decoracion.

### section: Styled TextField - estilo personalizado

#### block: 1
**Purpose**

Este ejemplo personaliza colores, cursor, bordes, capitalizacion y foco.

#### block: 2
**Design Rule**

El campo debe seguir comunicando foco, error y estado deshabilitado. El estilo no debe borrar esas senales.

### section: TextField - estados comunes

#### block: 1
**Purpose**

`TextField` compara estados estandar, disabled, read-only, placeholder e iconos.

#### block: 2
**Design Rule**

Distingue disabled de read-only. Uno no se puede usar; el otro puede leerse y a veces copiarse.

### section: Underlined and borderless TextFields - estilos sin borde completo

#### block: 1
**Purpose**

Este ejemplo muestra estilos underlined y borderless, con variantes rellenas y sin relleno.

#### block: 2
**Design Rule**

Los campos sin borde completo requieren buen espaciado y labels claros para no perder su area interactiva.

### section: Background image - imagen de fondo

#### block: 1
**Purpose**

Este ejemplo aplica una imagen de fondo decorativa a `CupertinoTextField` con label personalizado.

#### block: 2
**Design Rule**

El fondo nunca debe reducir contraste ni dificultar escritura. En inputs, legibilidad manda sobre decoracion.

### section: Cupertino, material and adaptive - campos por plataforma

#### block: 1
**Purpose**

Este ejemplo compara campos Material, Cupertino y adaptive con placeholder y label styling.

#### block: 2
**Design Rule**

Elige el estilo segun plataforma y consistencia del sistema. Mezclar campos sin criterio hace que el formulario parezca fragmentado.

### section: Selection change - seleccion en CupertinoTextField

#### block: 1
**Purpose**

Este ejemplo maneja cambios de seleccion de texto y ofrece botones para seleccionar texto o mover caret.

#### block: 2
**Design Rule**

La seleccion de texto debe sentirse natural. Los controles adicionales tienen sentido en editores o herramientas, no siempre en formularios simples.

## theme: Theme 2 - Seleccion simple

### section: Checkbox - estados basicos

#### block: 1
**Purpose**

`Checkbox` representa una decision binaria o una seleccion independiente. El ejemplo muestra estados basicos y una accion de envio.

#### block: 2
**Design Rule**

Usa checkbox para opciones que pueden activarse de forma independiente. Si las opciones son excluyentes, usa radio o segmented button.

### section: Checkbox events - eventos de cambio

#### block: 1
**Purpose**

Este ejemplo maneja el evento `on_change` de un checkbox y actualiza texto dinamicamente.

#### block: 2
**Design Rule**

Un cambio de checkbox debe reflejarse de inmediato cuando afecta la interfaz. Si requiere confirmacion, deja claro que el cambio aun no se aplico.

### section: Styled checkboxes - estilos

#### block: 1
**Purpose**

Este ejemplo muestra checkboxes con colores fijos y colores dependientes del estado.

#### block: 2
**Design Rule**

El estilo debe conservar legibilidad y reconocimiento. Un checkbox muy personalizado puede perder su significado si deja de parecer seleccionable.

### section: Handling Selection Changes - cambios de seleccion

#### block: 1
**Purpose**

Este ejemplo muestra actualizaciones en vivo de un `RadioGroup` usando eventos `on_change`.

#### block: 2
**Design Rule**

Usa radio cuando una sola opcion puede estar activa. La seleccion debe ser visible sin depender solo del texto.

### section: Radio - seleccion y envio

#### block: 1
**Purpose**

Este ejemplo muestra seleccion con accion de submit y mensaje simple.

#### block: 2
**Design Rule**

Si la seleccion no se aplica de inmediato, deja claro que el usuario debe confirmar con una accion.

### section: Styled - radios personalizados

#### block: 1
**Purpose**

Este ejemplo muestra radios con colores estaticos y colores basados en estado.

#### block: 2
**Design Rule**

El estilo puede reforzar jerarquia, pero no debe hacer que el radio parezca checkbox o boton.

### section: Handling events - eventos del switch

#### block: 1
**Purpose**

Este ejemplo alterna el modo de tema de la pagina y actualiza la etiqueta cuando cambia el valor.

#### block: 2
**Design Rule**

Usa switch para activar o desactivar una opcion persistente. El resultado debe verse inmediatamente.

### section: Switch - estados basicos

#### block: 1
**Purpose**

`Switch` compara estados checked, unchecked, disabled y variantes con etiqueta a la izquierda.

#### block: 2
**Design Rule**

El switch debe representar un estado, no una accion momentanea. Para ejecutar algo puntual, usa boton.

## theme: Theme 3 - Seleccion Cupertino

### section: Cupertino, material and adaptive - comparacion de plataformas

#### block: 1
**Purpose**

Este ejemplo compara checkbox Cupertino, Material y adaptive lado a lado.

#### block: 2
**Design Rule**

Usa adaptive cuando quieras que el control siga convenciones de plataforma sin duplicar pantallas.

### section: Styled - estilos Cupertino

#### block: 1
**Purpose**

Este ejemplo configura estilos de `CupertinoCheckbox`, incluyendo estados de relleno, forma, tristate y posicion de label.

#### block: 2
**Design Rule**

Mantener el lenguaje visual iOS importa. Personaliza sin romper la expectativa de control nativo.

### section: Cupertino, material and adaptive - radios por plataforma

#### block: 1
**Purpose**

Este ejemplo compara controles radio Cupertino, Material y adaptive dentro de un flujo `RadioGroup`.

#### block: 2
**Design Rule**

La seleccion unica debe sentirse coherente con la plataforma. Adaptive ayuda cuando la app apunta a varias plataformas.

### section: CupertinoRadio - seleccion de color

#### block: 1
**Purpose**

Este ejemplo recolecta seleccion de color con `CupertinoRadio`, `RadioGroup` y una accion de submit.

#### block: 2
**Design Rule**

Usa radio para opciones excluyentes y visibles. Si la opcion elegida necesita confirmacion, muestra claramente el boton de envio.

### section: Cupertino, material and adaptive - switches por plataforma

#### block: 1
**Purpose**

Este ejemplo muestra switches Cupertino, Material y adaptive con estilo personalizado.

#### block: 2
**Design Rule**

Usa switch para estados on/off. La version adaptive puede mejorar coherencia cuando la app corre en varias plataformas.

## theme: Theme 4 - Selectores y menus

### section: Custom trigger - disparador personalizado

#### block: 1
**Purpose**

Este ejemplo abre un `ContextMenu` desde un doble tap y usa la posicion precisa del puntero.

#### block: 2
**Design Rule**

Usa triggers personalizados solo cuando el gesto sea natural para el contexto. Las acciones ocultas deben poder descubrirse.

### section: Programmatic open - apertura desde codigo

#### block: 1
**Purpose**

Este ejemplo abre un menu contextual desde un boton y maneja la accion seleccionada.

#### block: 2
**Design Rule**

Abrir menus desde codigo sirve para guiar flujos, pero no debe sorprender al usuario ni tapar informacion critica.

### section: Triggers - tipos de click

#### block: 1
**Purpose**

Este ejemplo compara acciones con click primario, secundario y terciario.

#### block: 2
**Design Rule**

No dependas solo de clicks avanzados para acciones importantes. En touch o teclado, esas acciones necesitan alternativa.

### section: Color selection with filtering - seleccion filtrable

#### block: 1
**Purpose**

Este ejemplo filtra opciones editables por color y aplica el color seleccionado al texto del control.

#### block: 2
**Design Rule**

Un dropdown filtrable funciona bien cuando hay muchas opciones conocidas. El filtro debe reducir ruido, no convertir la seleccion en busqueda confusa.

### section: Declarative - estado sincronizado

#### block: 1
**Purpose**

Este ejemplo usa componente declarativo y estado observable para mantener sincronizada la seleccion del dropdown.

#### block: 2
**Design Rule**

Mantener estado y seleccion sincronizados evita inconsistencias. El valor visible siempre debe coincidir con el estado real.

### section: Icon selection - opciones con iconos

#### block: 1
**Purpose**

Este ejemplo muestra opciones con iconos leading y filtrado interactivo.

#### block: 2
**Design Rule**

Los iconos ayudan cuando las opciones tienen identidad visual. Si todos los iconos son parecidos, agregan ruido.

### section: Select and change events - eventos de seleccion y texto

#### block: 1
**Purpose**

Este ejemplo maneja eventos de seleccion y cambios de texto, mostrando valor seleccionado y texto escrito.

#### block: 2
**Design Rule**

Distingue entre escribir y seleccionar. Son eventos parecidos, pero no significan lo mismo para la logica de la app.

### section: Styled - estilos de dropdown

#### block: 1
**Purpose**

Este ejemplo compara estilos visuales de `Dropdown`: bordes, rellenos y estilos por opcion.

#### block: 2
**Design Rule**

El dropdown debe seguir pareciendo seleccionable. Un estilo muy decorativo puede ocultar que hay una lista de opciones.

### section: CupertinoContextMenu - menu por long press

#### block: 1
**Purpose**

`CupertinoContextMenu` abre acciones al mantener presionada una imagen, incluyendo acciones normales y destructivas.

#### block: 2
**Design Rule**

Las acciones destructivas deben distinguirse visualmente. El long press es util, pero no debe ser la unica forma de acceder a tareas clave.

### section: Fruit selection - selector de opciones

#### block: 1
**Purpose**

`CupertinoPicker` abre un selector en bottom sheet para elegir una fruta y reflejar el valor seleccionado.

#### block: 2
**Design Rule**

Usa picker para conjuntos pequenos o medianos de opciones. Para listas muy largas, agrega busqueda o filtrado.

## theme: Theme 5 - Sliders y rangos

### section: Handling Change Events - eventos de rango

#### block: 1
**Purpose**

Este ejemplo muestra callbacks de cambio para `RangeSlider`.

#### block: 2
**Design Rule**

Usa feedback continuo cuando el rango afecta una vista previa. Para acciones costosas, aplica el cambio al soltar o confirmar.

### section: RangeSlider - rango con divisiones

#### block: 1
**Purpose**

`RangeSlider` permite elegir un minimo y maximo dentro de un rango. El ejemplo usa labels y divisiones.

#### block: 2
**Design Rule**

Usa rango cuando el usuario necesita definir intervalos. Para un valor unico, usa `Slider`.

### section: Slider - valor continuo

#### block: 1
**Purpose**

`Slider` permite seleccionar un valor dentro de un rango. El ejemplo compara sliders habilitados y deshabilitados.

#### block: 2
**Design Rule**

Usa slider cuando el valor se ajusta por sensacion o aproximacion. Para valores exactos, agrega numero o input.

### section: Slider custom label - etiqueta personalizada

#### block: 1
**Purpose**

Este ejemplo muestra valores con posicion inicial y etiqueta porcentual personalizada.

#### block: 2
**Design Rule**

La etiqueta debe explicar el valor actual. Un numero sin unidad puede ser dificil de interpretar.

### section: Slider handling events - eventos de cambio

#### block: 1
**Purpose**

Este ejemplo actualiza texto en vivo cuando cambia el valor del slider.

#### block: 2
**Design Rule**

El feedback en vivo ayuda a entender el efecto del ajuste. Evita actualizar procesos pesados en cada pixel de movimiento.

### section: Slider random values - valores animados

#### block: 1
**Purpose**

Este ejemplo anima un slider con valores aleatorios y refleja cada actualizacion en texto.

#### block: 2
**Design Rule**

Los cambios programaticos deben ser comprensibles. Si el control se mueve solo, el usuario debe entender por que.

### section: Handling events - eventos del slider Cupertino

#### block: 1
**Purpose**

Este ejemplo rastrea eventos de inicio, cambio y fin de `CupertinoSlider` con texto de estado en vivo.

#### block: 2
**Design Rule**

Distinguir inicio, cambio y fin permite aplicar feedback fluido sin ejecutar tareas pesadas en cada movimiento.

## theme: Theme 6 - Fecha y hora

### section: CupertinoDatePicker - seleccion de fecha

#### block: 1
**Purpose**

`CupertinoDatePicker` permite elegir fecha desde un bottom sheet y actualizar texto cuando cambia el valor.

#### block: 2
**Design Rule**

Usa date picker cuando el formato y rango de fecha importan. Evita hacer que el usuario escriba fechas complejas manualmente.

### section: Custom locale - localizacion

#### block: 1
**Purpose**

Este ejemplo abre `CupertinoDatePicker` con locale `zh_Hans` para demostrar formato localizado.

#### block: 2
**Design Rule**

La localizacion debe afectar formato, idioma y orden de fecha. Una fecha mal localizada puede causar errores reales.

### section: CupertinoTimerPicker - seleccion de duracion

#### block: 1
**Purpose**

`CupertinoTimerPicker` abre un selector de duracion en bottom sheet y actualiza el valor mostrado al cambiar.

#### block: 2
**Design Rule**

Usa timer picker para duraciones, no para horas de calendario. La unidad de tiempo debe estar clara para evitar interpretaciones ambiguas.

## theme: Theme 7 - Chips y segmentacion

### section: Assist chips - acciones rapidas

#### block: 1
**Purpose**

`Assist chips` ofrecen acciones compactas relacionadas con el contexto actual. El ejemplo maneja clicks y actualiza estado dinamico.

#### block: 2
**Design Rule**

Usa chips de asistencia para acciones pequenas y frecuentes. No los uses como reemplazo de botones principales.

### section: Filter chips - filtros seleccionables

#### block: 1
**Purpose**

`Filter chips` permiten seleccionar criterios de filtrado, como amenities o categorias. El ejemplo usa eventos `on_select`.

#### block: 2
**Design Rule**

Los filtros deben mostrar claramente si estan activos. Si hay muchos filtros, agrupalos o permite limpiar seleccion rapidamente.

### section: SegmentedButton single and multiple selection - seleccion simple y multiple

#### block: 1
**Purpose**

`SegmentedButton` permite elegir una o varias opciones dentro de un conjunto compacto.

#### block: 2
**Design Rule**

Usalo para pocas opciones visibles. Si el conjunto crece, un dropdown, lista o filtros pueden ser mas claros.

## theme: Theme 8 - Entrada avanzada e interaccion

### section: CodeEditor - editor basico

#### block: 1
**Purpose**

`CodeEditor` permite editar codigo con resaltado de sintaxis. El ejemplo base usa Python, callbacks de cambio y configuracion inicial.

#### block: 2
**Design Rule**

Usa un editor especializado cuando el usuario realmente trabaja con codigo. Para texto simple, un `TextField` o area multilinea es menos pesado.

### section: Folding and initial selection - plegado y seleccion inicial

#### block: 1
**Purpose**

Este ejemplo muestra plegado de bloques de codigo, seleccion predefinida y acciones de toolbar para plegar secciones.

#### block: 2
**Design Rule**

El folding ayuda cuando el archivo es largo. Debe facilitar orientacion, no esconder errores o partes importantes del codigo.

### section: JSON analyzer - analisis de JSON

#### block: 1
**Purpose**

Este ejemplo analiza JSON desde Python y muestra marcadores de error en el gutter.

#### block: 2
**Design Rule**

Cuando el editor valida contenido, el error debe aparecer cerca del lugar afectado y con un mensaje accionable.

### section: Python analyzer - analisis de Python

#### block: 1
**Purpose**

Este ejemplo agrega analisis de sintaxis Python y marcadores de error en el gutter.

#### block: 2
**Design Rule**

La validacion debe ayudar a corregir, no solo marcar fallo. Prioriza mensajes claros y ubicacion precisa.

### section: Selection handling - manejo de seleccion

#### block: 1
**Purpose**

Este ejemplo maneja seleccion de texto, tema personalizado, gutter styling y controles de caret.

#### block: 2
**Design Rule**

Los controles de seleccion deben ser predecibles. En editores, pequenos saltos de caret o foco pueden romper el flujo del usuario.

### section: Custom drag handle - manilla de arrastre

#### block: 1
**Purpose**

Este ejemplo usa `ReorderableListView` con drag handles personalizados.

#### block: 2
**Design Rule**

Una manilla clara evita arrastres accidentales. El usuario debe saber que parte del item mueve la fila.

### section: Horizontal and vertical - reordenamiento horizontal y vertical

#### block: 1
**Purpose**

Este ejemplo muestra listas reordenables horizontales y verticales lado a lado.

#### block: 2
**Design Rule**

Elige la direccion segun la estructura mental del contenido. Las listas suelen funcionar verticalmente; carruseles o prioridades cortas pueden funcionar horizontalmente.

### section: TransparentPointer - dejar pasar eventos

#### block: 1
**Purpose**

`TransparentPointer` permite que eventos de puntero atraviesen un control superpuesto. El ejemplo deja pasar clicks a traves de un boton overlay.

#### block: 2
**Design Rule**

Usalo cuando una capa visual no debe capturar interaccion. Si una capa parece clickeable pero no lo es, puede confundir.

# unit: Unit 4 - Displays

## theme: Theme 1 - Texto y formato

### section: Code syntax highlight - resaltado de codigo

#### block: 1
**Purpose**

Este ejemplo renderiza Markdown con bloques de codigo resaltados y fuente monoespaciada personalizada.

#### block: 2
**Design Rule**

El codigo necesita contraste y espaciado propio. No lo trates igual que un parrafo normal.

### section: Custom text theme - tema de texto personalizado

#### block: 1
**Purpose**

Este ejemplo aplica un tema de texto personalizado a Markdown y alterna modo claro/oscuro.

#### block: 2
**Design Rule**

Markdown debe heredar una escala tipografica coherente. Titulos, listas y codigo necesitan jerarquia visible.

### section: ListViews - markdown en listas

#### block: 1
**Purpose**

Este ejemplo compara renderizado Markdown en dos `ListView`, incluyendo modo GitHub seleccionable.

#### block: 2
**Design Rule**

Markdown dentro de scroll debe mantener rendimiento y seleccion. Cuidado con documentos largos y anidados.

### section: Markdown - documento completo

#### block: 1
**Purpose**

Este ejemplo renderiza un documento largo con links, imagenes, tablas y bloques de codigo.

#### block: 2
**Design Rule**

Un documento rico necesita estilos consistentes para que cada elemento sea reconocible sin romper la lectura.

### section: Custom text styles - estilos de texto

#### block: 1
**Purpose**

Este ejemplo muestra tamanos, colores, peso, seleccion y overflow en `Text`.

#### block: 2
**Design Rule**

El texto es interfaz. Cuida contraste, tamano, overflow y seleccion antes de agregar decoracion.

### section: Rich text - texto enriquecido

#### block: 1
**Purpose**

Este ejemplo combina `TextSpan` anidados, spans interactivos y links externos.

#### block: 2
**Design Rule**

Texto enriquecido debe seguir siendo legible. Usa spans interactivos con senales claras de click o enlace.

### section: Rich text border stroke - texto con borde

#### block: 1
**Purpose**

Este ejemplo apila texto con trazo y relleno en un `Stack` para crear un titulo contorneado.

#### block: 2
**Design Rule**

El texto con borde puede ser expresivo, pero pierde formalidad rapido. Usalo en titulos o efectos, no en lectura continua.

### section: Rich text gradient - texto con gradiente

#### block: 1
**Purpose**

Este ejemplo aplica pintura con gradiente lineal a rich text para un titulo multicolor.

#### block: 2
**Design Rule**

Un gradiente en texto debe conservar contraste. Si cuesta leerlo, el efecto fallo.

### section: Theme text styles - estilos tipograficos del tema

#### block: 1
**Purpose**

Este ejemplo muestra variantes `TextThemeStyle`, desde display hasta body y labels.

#### block: 2
**Design Rule**

Usa estilos del tema para mantener consistencia. Crear tamanos ad hoc en cada pantalla vuelve dificil mantener la app.

### section: Variable font weight - peso variable

#### block: 1
**Purpose**

Este ejemplo ajusta peso de fuente variable con un slider.

#### block: 2
**Design Rule**

El peso tipografico cambia jerarquia y tono. Ajustalo con intencion, no solo como efecto visual.

## theme: Theme 2 - Iconos e identidad visual

### section: Badge - indicador compacto

#### block: 1
**Purpose**

`Badge` muestra un indicador pequeno sobre otro control, como un icono de navegacion. El ejemplo usa badges en iconos de `NavigationBar`.

#### block: 2
**Design Rule**

Usa badges para informacion breve como conteos, novedades o estado. Si el badge necesita explicacion larga, probablemente el control necesita otro formato.

### section: User avatars - avatares de usuario

#### block: 1
**Purpose**

`CircleAvatar` muestra identidad visual de usuario con imagen, icono, fallback y badge de estado online.

#### block: 2
**Design Rule**

Un avatar debe tener fallback claro. No dependas de que siempre exista una imagen remota.

### section: Icon - simbolos visuales

#### block: 1
**Purpose**

`Icon` muestra simbolos Material y Cupertino con distintos tamanos y colores.

#### block: 2
**Design Rule**

Un icono debe ser reconocible en el contexto. Si puede interpretarse de varias formas, acompanalo con texto o tooltip.

## theme: Theme 3 - Imagenes y recursos visuales

### section: Displaying a dynamic SVG image - SVG dinamico

#### block: 1
**Purpose**

Este ejemplo anima un SVG inline actualizando dimensiones de una elipse.

#### block: 2
**Design Rule**

SVG dinamico es util para graficos ligeros. Mantiene el efecto controlable sin depender de bitmaps grandes.

### section: Displaying a Lucide icon - icono Lucide

#### block: 1
**Purpose**

Este ejemplo renderiza iconos SVG de Lucide mediante `Image` con colores personalizados.

#### block: 2
**Design Rule**

Usa librerias de iconos cuando necesites consistencia. Evita mezclar estilos de iconos sin criterio.

### section: Displaying a static SVG image - SVG estatico

#### block: 1
**Purpose**

Este ejemplo muestra SVGs desde red e inline strings con sobreescritura de color.

#### block: 2
**Design Rule**

SVG estatico funciona bien para logos e ilustraciones simples. Controla colores para adaptarlos al tema.

### section: Displaying images from base64 strings and byte data - imagenes embebidas

#### block: 1
**Purpose**

Este ejemplo renderiza imagenes desde strings base64 y datos de bytes decodificados.

#### block: 2
**Design Rule**

Base64 puede ser comodo para ejemplos o datos pequenos. Para muchas imagenes, archivos o URLs suelen ser mas eficientes.

### section: Fade-in images with a placeholder - carga progresiva

#### block: 1
**Purpose**

Este ejemplo carga imagenes remotas con placeholder y animacion fade-in.

#### block: 2
**Design Rule**

Usa placeholder cuando la imagen puede tardar. Evita saltos de layout definiendo tamanos estables.

### section: Gapless playback when changing image sources - cambio sin parpadeo

#### block: 1
**Purpose**

Este ejemplo compara `gapless playback` activado y desactivado al cambiar fuentes de imagen.

#### block: 2
**Design Rule**

Usa cambio sin parpadeo cuando la imagen se actualiza frecuentemente. Ayuda a mantener continuidad visual.

### section: Image gallery - galeria de imagenes

#### block: 1
**Purpose**

Este ejemplo muestra un icono local y una galeria horizontal desplazable de imagenes remotas.

#### block: 2
**Design Rule**

Una galeria debe permitir escaneo rapido. Cuida espaciado, tamanos y carga progresiva.

## theme: Theme 4 - Dibujo y graficos

### section: Bezier curves - curvas bezier

#### block: 1
**Purpose**

Este ejemplo dibuja curvas bezier en `Canvas` con rellenos de gradiente.

#### block: 2
**Design Rule**

Usa curvas cuando necesites formas libres o visualizacion personalizada. Si solo necesitas layout, evita dibujar manualmente.

### section: Brush - dibujo libre

#### block: 1
**Purpose**

Este ejemplo permite dibujar trazos libres en canvas, capturar y guardar el resultado.

#### block: 2
**Design Rule**

Las herramientas de dibujo deben dar feedback inmediato. La latencia se siente mucho mas en trazos que en controles normales.

### section: Brush on image - dibujo sobre imagen

#### block: 1
**Purpose**

Este ejemplo permite dibujar trazos sobre una imagen usando `Canvas`.

#### block: 2
**Design Rule**

Cuando se dibuja sobre imagenes, deja clara la relacion entre capa base y anotaciones. El usuario debe poder distinguir contenido original de marcas.

### section: Canvas resize - redimensionamiento

#### block: 1
**Purpose**

Este ejemplo maneja cambios de tamano del canvas y actualiza figuras dinamicamente.

#### block: 2
**Design Rule**

Un canvas responsivo debe recalcular posiciones con cuidado. Si el dibujo se deforma, puede perder significado.

### section: Canvas text - texto en canvas

#### block: 1
**Purpose**

Este ejemplo renderiza texto en canvas con transformaciones, spans y efectos de pintura.

#### block: 2
**Design Rule**

Texto dibujado en canvas puede perder accesibilidad y seleccion. Usalo cuando el efecto visual lo justifique.

### section: Circle drawer - editor de circulos

#### block: 1
**Purpose**

Este ejemplo permite crear circulos con tap, editar su radio y usar historial undo/redo.

#### block: 2
**Design Rule**

Las herramientas graficas necesitan recuperacion. Undo y redo son parte central de una experiencia de edicion segura.

### section: Dash strokes - trazos punteados

#### block: 1
**Purpose**

Este ejemplo alterna patrones de trazo punteado en varias figuras del canvas.

#### block: 2
**Design Rule**

Usa trazos punteados para diferenciar estados, guias o selecciones. No dependas solo del color para comunicar diferencia.

### section: Flet logo - dibujo con paths

#### block: 1
**Purpose**

Este ejemplo dibuja el logo de Flet usando paths cuadraticos.

#### block: 2
**Design Rule**

Los paths son potentes para logos o figuras vectoriales. Documenta la intencion si la forma es compleja.

### section: Gradients - rellenos con gradiente

#### block: 1
**Purpose**

Este ejemplo usa rellenos lineales, radiales y sweep dentro de canvas.

#### block: 2
**Design Rule**

Los gradientes pueden ayudar a mostrar profundidad o variacion. Evita que reduzcan contraste o legibilidad.

### section: Paint Gradient - pintura con gradiente

#### block: 1
**Purpose**

Este ejemplo dibuja una vista previa usando configuraciones de `Paint Gradient` y objetos paint.

#### block: 2
**Design Rule**

Separar paint de forma permite reutilizar estilos. Es una buena practica cuando varios dibujos comparten apariencia.

### section: Painting Style showcase - estilos de pintura

#### block: 1
**Purpose**

Este ejemplo compara valores de `Painting Style` aplicados a una vista previa.

#### block: 2
**Design Rule**

Distingue entre relleno y borde segun el significado visual. Un cambio de estilo puede cambiar la lectura del objeto.

### section: Paint Linear Gradient - gradiente lineal

#### block: 1
**Purpose**

Este ejemplo usa `Paint Linear Gradient` para dibujar una vista previa con paint objects.

#### block: 2
**Design Rule**

Un gradiente lineal comunica direccion. Ajusta inicio y fin segun el flujo visual que quieres sugerir.

### section: Paint Radial Gradient - gradiente radial

#### block: 1
**Purpose**

Este ejemplo usa `Paint Radial Gradient` para generar una vista previa radial.

#### block: 2
**Design Rule**

El gradiente radial dirige la mirada hacia un centro. Usalo cuando ese foco tenga sentido.

### section: Paint Sweep Gradient - gradiente circular

#### block: 1
**Purpose**

Este ejemplo usa `Paint Sweep Gradient` para generar un efecto circular de color.

#### block: 2
**Design Rule**

Los sweep gradients sirven para progreso circular, ruletas o efectos angulares. Evita usarlos como decoracion sin funcion.

### section: Point Mode showcase - modos de puntos

#### block: 1
**Purpose**

Este ejemplo compara valores de `Point Mode` aplicados a una vista previa.

#### block: 2
**Design Rule**

El modo de puntos cambia como se interpreta una serie visual. Debe coincidir con la relacion entre los datos o marcas.

### section: Shape drawer - dibujo de poligonos

#### block: 1
**Purpose**

Este ejemplo dibuja poligonos declarativamente en respuesta a tap y hover.

#### block: 2
**Design Rule**

Cuando el usuario crea formas, muestra estados claros: punto activo, forma en progreso y forma final.

### section: Smiling face - dibujo simple

#### block: 1
**Purpose**

Este ejemplo dibuja una cara sonriente con primitives del canvas.

#### block: 2
**Design Rule**

Los dibujos simples son buenos para aprender coordenadas, formas y composicion sin mezclar demasiada logica.

### section: Stroke Cap showcase - extremos de trazo

#### block: 1
**Purpose**

Este ejemplo compara valores de `Stroke Cap`.

#### block: 2
**Design Rule**

Los extremos de trazo afectan suavidad y precision visual. Usa round caps para trazos organicos y square/butt para precision.

### section: Stroke Join showcase - uniones de trazo

#### block: 1
**Purpose**

Este ejemplo compara valores de `Stroke Join`.

#### block: 2
**Design Rule**

Las uniones de trazo afectan esquinas y poligonos. Elige el join segun si necesitas suavidad, punta o corte limpio.

### section: Triangles - triangulos

#### block: 1
**Purpose**

Este ejemplo dibuja triangulos con estilos de relleno y borde.

#### block: 2
**Design Rule**

Las formas basicas son bloques de construccion. Mantenerlas simples ayuda a controlar composiciones visuales mas complejas.

## theme: Theme 5 - Mapas

### section: Camera Controls - controles de camara

#### block: 1
**Purpose**

Este ejemplo controla la camara del mapa con zoom, rotacion, centrado, movimiento y texto de estado.

#### block: 2
**Design Rule**

Los controles de mapa deben ser predecibles. Cambios bruscos de camara pueden desorientar.

### section: Idle Camera - camara en reposo

#### block: 1
**Purpose**

Este ejemplo rastrea eventos de mapa y reporta el estado final de la camara cuando queda en reposo.

#### block: 2
**Design Rule**

Escuchar el estado idle es util para cargar datos despues de mover el mapa sin hacer trabajo excesivo durante el gesto.

### section: Interaction Flags - banderas de interaccion

#### block: 1
**Purpose**

Este ejemplo activa y desactiva interacciones del mapa con checkboxes y muestra eventos en vivo.

#### block: 2
**Design Rule**

Permitir configurar interaccion ayuda en mapas especializados. La app debe indicar que gestos estan disponibles.

### section: Map - mapa basico

#### block: 1
**Purpose**

Este ejemplo muestra un tile layer basico con manejo de error.

#### block: 2
**Design Rule**

Un mapa necesita estado de carga y error. Las capas externas pueden fallar por red, permisos o proveedor.

### section: Multiple Layers - multiples capas

#### block: 1
**Purpose**

Este ejemplo combina tiles, markers, circles, polygons y polylines con overlays agregados por tap.

#### block: 2
**Design Rule**

Capas multiples deben tener jerarquia visual. Si todo compite, el mapa deja de ser legible.

### section: Overlay Images - imagenes sobre mapa

#### block: 1
**Purpose**

Este ejemplo coloca imagenes rectangulares y rotadas encima de un mapa interactivo.

#### block: 2
**Design Rule**

Los overlays deben alinearse correctamente con coordenadas y escala. Una mala alineacion puede comunicar informacion falsa.

## theme: Theme 6 - Progreso y carga

### section: CupertinoActivityIndicator - indicador de carga

#### block: 1
**Purpose**

`CupertinoActivityIndicator` muestra actividad de carga con estilo iOS. El ejemplo lo centra y personaliza color y radio.

#### block: 2
**Design Rule**

Usa indicadores de carga cuando el usuario debe esperar. Si la espera es larga, agrega contexto o progreso.

### section: Progress - progreso determinado

#### block: 1
**Purpose**

Este ejemplo controla el progreso del indicador con un slider para mostrar feedback determinado.

#### block: 2
**Design Rule**

Cuando sabes cuanto falta, muestra progreso determinado. Es mas tranquilizador que una espera indefinida.

### section: Determinate and Indeterminate - progreso lineal

#### block: 1
**Purpose**

Este ejemplo anima una barra de progreso determinada y otra indeterminada.

#### block: 2
**Design Rule**

Usa progreso determinado cuando sabes el avance. Usa indeterminado solo cuando no puedes calcular cuanto falta.

### section: Splash test - progreso en overlay

#### block: 1
**Purpose**

Este ejemplo muestra feedback de progreso sobre la pagina mientras corre una tarea asincrona.

#### block: 2
**Design Rule**

Un overlay de carga debe bloquear solo si es necesario. Para tareas pequenas, un feedback menos invasivo suele bastar.

### section: Determinate and Indeterminate - progreso circular

#### block: 1
**Purpose**

Este ejemplo muestra indicadores circulares determinados e indeterminados.

#### block: 2
**Design Rule**

El progreso circular funciona bien en espacios compactos. Para mostrar comparaciones o largos procesos, una barra puede ser mas clara.

### section: Gauge with Progress - medidor con porcentaje

#### block: 1
**Purpose**

Este ejemplo muestra un `ProgressRing` estilo gauge con porcentaje superpuesto.

#### block: 2
**Design Rule**

Un porcentaje dentro del ring ayuda a leer precision. Asegura que el texto no choque con el anillo.

## theme: Theme 7 - Ayuda contextual

### section: Tooltip with decoration - ayuda contextual

#### block: 1
**Purpose**

`Tooltip` muestra ayuda breve. El ejemplo compara tooltips simples y decorados con gradiente personalizado.

#### block: 2
**Design Rule**

Usa tooltips para explicar controles compactos. No escondas informacion esencial que el usuario necesita ver siempre.

# unit: Unit 5 - Dialogs

## theme: Theme 1 - Dialogos de alerta

### section: Modal and non-modal dialogs - dialogos modales y no modales

#### block: 1
**Purpose**

`AlertDialog` muestra informacion o decisiones que necesitan atencion. El ejemplo compara comportamiento modal y no modal.

#### block: 2
**Design Rule**

Usa dialogos modales solo cuando la decision debe interrumpir el flujo. Si el usuario puede seguir trabajando, un dialogo no modal o feedback inline puede ser menos invasivo.

### section: Cupertino, material and adaptive - dialogos por plataforma

#### block: 1
**Purpose**

Este ejemplo compara dialogos Material, Cupertino y adaptive con acciones adaptadas a la plataforma.

#### block: 2
**Design Rule**

Usa adaptive cuando la misma decision debe sentirse nativa en varias plataformas. La accion principal debe mantener claridad en todos los estilos.

### section: File deletion confirmation - confirmacion de borrado

#### block: 1
**Purpose**

Este ejemplo muestra un `CupertinoAlertDialog` para confirmar borrado de archivo con callbacks de dismiss y accion.

#### block: 2
**Design Rule**

Las acciones destructivas necesitan confirmacion clara. El texto debe decir que se eliminara y que consecuencia tiene.

## theme: Theme 2 - Avisos persistentes

### section: Banner - aviso persistente

#### block: 1
**Purpose**

`Banner` muestra un aviso visible con acciones. El ejemplo usa un banner basico con botones de accion.

#### block: 2
**Design Rule**

Usa banners para problemas o avisos que deben permanecer visibles hasta que el usuario actue o los descarte.

## theme: Theme 3 - Paneles inferiores

### section: BottomSheet - panel inferior

#### block: 1
**Purpose**

`BottomSheet` muestra contenido o acciones desde la parte inferior de la pantalla. El ejemplo cubre apertura, cierre y manejo de dismiss.

#### block: 2
**Design Rule**

Usa bottom sheets para acciones contextuales que no necesitan una pantalla completa. El contenido debe ser corto y accionable.

### section: BottomSheet fullscreen - panel inferior expandido

#### block: 1
**Purpose**

Este ejemplo muestra un `BottomSheet` con modo fullscreen y drag handle.

#### block: 2
**Design Rule**

El modo fullscreen sirve cuando el panel crece en complejidad. Si siempre necesita pantalla completa, considera una vista dedicada.

## theme: Theme 4 - Mensajes temporales

### section: SnackBar - mensaje breve

#### block: 1
**Purpose**

`SnackBar` muestra un mensaje temporal desde una accion, como un tap en un boton.

#### block: 2
**Design Rule**

Usa snackbar para confirmaciones breves. No lo uses para informacion critica que el usuario podria perder.

### section: SnackBar action - accion dentro del mensaje

#### block: 1
**Purpose**

Este ejemplo compara snackbars simples y snackbars con acciones personalizadas.

#### block: 2
**Design Rule**

La accion del snackbar debe ser corta y reversible, como undo o retry. No pongas flujos largos dentro de un mensaje temporal.

### section: SnackBar counter - contador y undo

#### block: 1
**Purpose**

Este ejemplo cuenta aperturas repetidas de `SnackBar` y permite deshacer el ultimo incremento.

#### block: 2
**Design Rule**

Cuando una accion cambia estado, ofrecer undo puede ser mas amable que pedir confirmacion antes de cada cambio.

## theme: Theme 5 - Seleccion de fecha

### section: Custom locale - calendario localizado

#### block: 1
**Purpose**

Este ejemplo abre `DatePicker` con locale `zh_Hans` para mostrar una interfaz de calendario localizada.

#### block: 2
**Design Rule**

La seleccion de fecha debe respetar idioma, orden y formato local. Una fecha mal localizada puede provocar errores de interpretacion.

### section: DatePicker - seleccion de fecha

#### block: 1
**Purpose**

`DatePicker` abre un dialogo para seleccionar fecha y registra seleccion y dismiss en el contenido de la pagina.

#### block: 2
**Design Rule**

Usa date picker cuando el formato exacto de fecha importa. Evita obligar al usuario a escribir fechas complejas manualmente.

### section: Custom locale - rango localizado

#### block: 1
**Purpose**

Este ejemplo abre `DateRangePicker` con locale `zh_Hans` para seleccionar rangos de fecha localizados.

#### block: 2
**Design Rule**

Los rangos de fecha deben mostrar claramente inicio y fin. La localizacion debe aplicarse al calendario y al texto resultante.

### section: DateRangePicker - seleccion de rango

#### block: 1
**Purpose**

`DateRangePicker` permite elegir fecha inicial y final, y muestra ambos valores despues de la seleccion.

#### block: 2
**Design Rule**

Usa rangos cuando la relacion entre dos fechas importa. Valida que el inicio y el fin sean coherentes.

## theme: Theme 6 - Seleccion de hora

### section: Custom locale - hora localizada

#### block: 1
**Purpose**

Este ejemplo abre `TimePicker` usando locale `zh_Hans`.

#### block: 2
**Design Rule**

La seleccion de hora debe respetar convenciones locales. Formato y etiquetas deben coincidir con el publico de la app.

### section: Hour formats - formatos de hora

#### block: 1
**Purpose**

Este ejemplo cambia `TimePicker` entre formato del sistema, 12 horas y 24 horas.

#### block: 2
**Design Rule**

El formato de hora afecta comprension. Permite seguir el sistema cuando no hay una razon fuerte para forzar otro formato.

### section: TimePicker - seleccion de hora

#### block: 1
**Purpose**

`TimePicker` abre un dialogo para seleccionar hora y reporta seleccion, dismiss y cambios de modo de entrada.

#### block: 2
**Design Rule**

Usa time picker cuando el usuario necesita precision de hora. Si solo necesita duracion, usa timer picker.

## theme: Theme 7 - Acciones Cupertino

### section: CupertinoActionSheet - hoja de acciones iOS

#### block: 1
**Purpose**

`CupertinoActionSheet` muestra acciones con estilo iOS dentro de un `CupertinoBottomSheet` y registra la accion elegida.

#### block: 2
**Design Rule**

Usa action sheets para opciones contextuales en iOS. Separa acciones destructivas y mantenlas visualmente claras.

# unit: Unit 6 - Navigation

## theme: Theme 1 - Barras superiores

### section: Actions and popup menu - acciones y menu superior

#### block: 1
**Purpose**

`AppBar` muestra una barra superior con titulo, acciones rapidas y menu emergente. El ejemplo usa iconos de accion y popup menu.

#### block: 2
**Design Rule**

Usa la barra superior para acciones globales de la pantalla. Evita llenarla con opciones secundarias que pertenecen a un menu o vista de ajustes.

### section: Theme mode toggle - cambio de tema

#### block: 1
**Purpose**

Este ejemplo agrega un cambio de modo de tema dentro de `AppBar` junto con acciones de menu.

#### block: 2
**Design Rule**

Los controles globales como tema o preferencias deben estar en lugares consistentes. Si afectan toda la app, no los escondas en una pantalla puntual.

### section: CupertinoAppBar - barra superior iOS

#### block: 1
**Purpose**

`CupertinoAppBar` muestra una barra superior estilo iOS con iconos leading y trailing personalizados.

#### block: 2
**Design Rule**

Usa controles Cupertino cuando la app debe sentirse nativa en iOS. Mantén acciones y jerarquia compatibles con la plataforma.

### section: Theme mode toggle - cambio de tema iOS

#### block: 1
**Purpose**

Este ejemplo cambia el modo de tema desde un icon button trailing en `CupertinoAppBar`.

#### block: 2
**Design Rule**

Las acciones de barra en iOS deben ser breves y reconocibles. Evita saturar la zona trailing con demasiados controles.

## theme: Theme 2 - Barras inferiores

### section: BottomAppBar border radius - barra inferior redondeada

#### block: 1
**Purpose**

`BottomAppBar` coloca acciones o navegacion en la parte inferior. El ejemplo muestra radio de borde personalizado.

#### block: 2
**Design Rule**

Usa una barra inferior cuando las acciones deben quedar al alcance del pulgar. El borde y la forma deben reforzar jerarquia sin parecer decoracion suelta.

### section: Notched FloatingActionButton - boton flotante encajado

#### block: 1
**Purpose**

Este ejemplo combina `BottomAppBar` con un `FloatingActionButton` centrado y una muesca visual.

#### block: 2
**Design Rule**

El boton flotante debe representar la accion principal. Si compite con demasiadas acciones en la barra, pierde sentido.

### section: NavigationBar - navegacion inferior

#### block: 1
**Purpose**

`NavigationBar` muestra destinos principales en una barra inferior Material con tres tabs.

#### block: 2
**Design Rule**

Usa navigation bar para 3 a 5 destinos principales. No mezcles acciones temporales con destinos de navegacion.

### section: CupertinoNavigationBar - barra de navegacion iOS

#### block: 1
**Purpose**

`CupertinoNavigationBar` muestra tres destinos con estilo iOS y registra la seleccion de tab.

#### block: 2
**Design Rule**

Usa la navegacion Cupertino para destinos principales en experiencias iOS. Las etiquetas deben ser cortas y estables.

### section: Wired - navegacion conectada al contenido

#### block: 1
**Purpose**

Este ejemplo conecta la seleccion de `CupertinoNavigationBar` con el texto del cuerpo de la pagina.

#### block: 2
**Design Rule**

Cada destino debe actualizar contenido y estado de forma visible. La seleccion no debe sentirse solo decorativa.

## theme: Theme 3 - Navegacion lateral

### section: Adaptive Navigation - navegacion adaptable

#### block: 1
**Purpose**

Este ejemplo cambia entre `NavigationBar` en layouts estrechos y `NavigationRail` con `NavigationDrawer` en layouts anchos.

#### block: 2
**Design Rule**

La navegacion debe adaptarse al espacio. En mobile prioriza alcance; en desktop prioriza escaneo y persistencia.

### section: End Position - drawer al final

#### block: 1
**Purpose**

Este ejemplo muestra un `NavigationDrawer` ubicado al final de la pantalla con manejo de seleccion de destino.

#### block: 2
**Design Rule**

Ubica el drawer al final solo cuando el patron de la app lo justifique. La posicion debe ser predecible para el usuario.

### section: Start Position - drawer al inicio

#### block: 1
**Purpose**

Este ejemplo muestra un `NavigationDrawer` al inicio con destinos etiquetados y callbacks.

#### block: 2
**Design Rule**

El drawer inicial funciona bien para secciones principales. Usa etiquetas claras y ordena los destinos por frecuencia o flujo.

### section: Theming - estilos del drawer

#### block: 1
**Purpose**

Este ejemplo personaliza fondo, iconos, labels e indicadores de `NavigationDrawer`.

#### block: 2
**Design Rule**

La personalizacion debe reforzar estado activo y legibilidad. No sacrifiques contraste por identidad visual.

### section: NavigationRail - navegacion lateral compacta

#### block: 1
**Purpose**

`NavigationRail` muestra destinos laterales Material con tres opciones y un FAB leading personalizado.

#### block: 2
**Design Rule**

Usa navigation rail en pantallas amplias cuando el usuario cambia entre destinos con frecuencia. Mantén iconos y labels consistentes.

## theme: Theme 4 - Menus de navegacion

### section: MenuBar with nested submenus - barra de menu anidada

#### block: 1
**Purpose**

`MenuBar` construye una barra de menus con submenus anidados, callbacks de hover y feedback de click.

#### block: 2
**Design Rule**

Usa menus anidados para comandos organizados por categoria. Mantén profundidad baja para que el usuario no se pierda.

### section: Standalone SubmenuButton - submenu independiente

#### block: 1
**Purpose**

Este ejemplo muestra un `SubmenuButton` independiente con previews de estilo al hacer hover.

#### block: 2
**Design Rule**

Usa submenus independientes para acciones compactas con jerarquia. El hover debe ayudar a previsualizar, no ser la unica forma de entender.

### section: SubmenuButton - acciones anidadas

#### block: 1
**Purpose**

Este ejemplo cambia color de fondo y alineacion de texto desde acciones de un `SubmenuButton` anidado.

#### block: 2
**Design Rule**

Agrupa acciones relacionadas en submenus. Evita esconder comandos frecuentes demasiado profundo.

## theme: Theme 5 - Tabs y navegacion por secciones

### section: Tab Alignment showcase - alineacion de tabs

#### block: 1
**Purpose**

Este ejemplo compara valores de `TabAlignment` aplicandolos a una vista previa en vivo.

#### block: 2
**Design Rule**

La alineacion de tabs debe responder al espacio disponible y cantidad de secciones. Tabs mal alineados parecen desconectados del contenido.

### section: Tab Bar Indicator Size showcase - tamano del indicador

#### block: 1
**Purpose**

Este ejemplo compara tamanos de indicador de tab sobre un control en vivo.

#### block: 2
**Design Rule**

El indicador debe mostrar seleccion sin dominar la interfaz. Su tamano debe coincidir con la jerarquia de los tabs.

### section: Tab Indicator Animation showcase - animacion del indicador

#### block: 1
**Purpose**

Este ejemplo compara animaciones del indicador de tab aplicadas a una vista previa.

#### block: 2
**Design Rule**

La animacion de tabs debe confirmar el cambio de seccion. Si retrasa la lectura, simplificala.

## theme: Theme 6 - Transiciones entre vistas

### section: Gallery - galeria con transiciones

#### block: 1
**Purpose**

Este ejemplo muestra una galeria con tags `Hero` unicos y transiciones animadas hacia vistas de detalle.

#### block: 2
**Design Rule**

Usa `Hero` cuando un elemento mantiene identidad entre dos pantallas. La animacion debe explicar continuidad, no distraer.

### section: Hero - animacion compartida

#### block: 1
**Purpose**

`Hero` anima una tarjeta compartida entre la vista principal y la vista de detalle usando un tag comun.

#### block: 2
**Design Rule**

La transicion hero funciona mejor con un objeto claro: imagen, tarjeta o avatar. Evita aplicarla a demasiados elementos a la vez.

## theme: Theme 7 - Enrutamiento declarativo

### section: Active links - enlaces activos

#### block: 1
**Purpose**

Este ejemplo resalta enlaces activos con `is_route_active()`, texto en negrita y color de fondo.

#### block: 2
**Design Rule**

La ruta activa debe ser visible. El usuario siempre debe saber donde esta dentro de la estructura.

### section: App settings drawer - drawer con ajustes por ruta

#### block: 1
**Purpose**

Este ejemplo maneja lista de apps, detalles y un `NavigationDrawer` de ajustes usando rutas anidadas y deep links.

#### block: 2
**Design Rule**

Los ajustes enlazables ayudan a compartir y volver a estados especificos. Mantén rutas limpias y significativas.

### section: Auth dialog - autenticacion en dialogo

#### block: 1
**Purpose**

Este ejemplo protege rutas con un `AlertDialog` modal de login en vez de redirigir a otra pagina.

#### block: 2
**Design Rule**

Usa dialogo de autenticacion para interrupciones cortas. Si el login requiere pasos largos, una pagina dedicada suele ser mejor.

### section: Auth page redirect - redireccion a login

#### block: 1
**Purpose**

Este ejemplo protege rutas redirigiendo usuarios no autenticados a una pagina de login.

#### block: 2
**Design Rule**

La redireccion es clara cuando el usuario no puede continuar sin autenticarse. Devuelvelo despues al destino original si es posible.

### section: Dynamic segments - segmentos dinamicos

#### block: 1
**Purpose**

Este ejemplo usa segmentos dinamicos y `use_route_params()` para leer parametros como `:userId` y `:postId`.

#### block: 2
**Design Rule**

Usa parametros para representar recursos concretos. Los nombres deben comunicar que dato espera la ruta.

### section: Index routes - rutas indice

#### block: 1
**Purpose**

Este ejemplo renderiza contenido por defecto cuando la ruta padre coincide sin una subruta.

#### block: 2
**Design Rule**

Las rutas indice evitan pantallas vacias. Cada seccion padre debe tener un estado inicial claro.

### section: Layout outlet - layout compartido

#### block: 1
**Purpose**

Este ejemplo usa `use_route_outlet()` para compartir `AppBar` y footer alrededor del contenido de pagina.

#### block: 2
**Design Rule**

Usa layouts compartidos para evitar duplicacion y mantener continuidad visual entre rutas hijas.

### section: Managed views - full app with NavigationRail

#### block: 1
**Purpose**

Este ejemplo arma una app completa con vistas administradas: Home, Projects, Settings, layouts compartidos y back navigation.

#### block: 2
**Design Rule**

Las vistas administradas sirven cuando la app tiene jerarquia real. Define que vista se apila, cual reemplaza y cual vuelve atras.

### section: Managed views - nested routes

#### block: 1
**Purpose**

Este ejemplo crea una jerarquia de rutas padre/hijo con segmentos dinamicos para detalles de productos.

#### block: 2
**Design Rule**

Las rutas anidadas deben reflejar jerarquia de informacion. No anides solo por organizacion interna del codigo.

### section: Managed views - shared layout with outlet

#### block: 1
**Purpose**

Este ejemplo envuelve rutas hijas con una vista compartida usando outlet y navegacion de regreso.

#### block: 2
**Design Rule**

Un layout compartido debe conservar contexto sin bloquear el contenido hijo. La accion de volver debe ser coherente.

### section: Modal routes - rutas modales

#### block: 1
**Purpose**

Este ejemplo renderiza rutas modales como overlays tipo fullscreen dialog, tanto globales como locales.

#### block: 2
**Design Rule**

Usa rutas modales cuando el overlay merece URL propia. Esto facilita volver, compartir o restaurar el estado.

### section: Prefix routes - rutas con prefijo

#### block: 1
**Purpose**

Este ejemplo usa rutas layout sin path y agrupacion por prefijos para organizar URLs.

#### block: 2
**Design Rule**

Los prefijos deben ordenar la arquitectura publica de la app. Evita rutas largas que solo reflejen carpetas internas.

### section: Recursive routes - rutas recursivas

#### block: 1
**Purpose**

Este ejemplo usa rutas recursivas para URLs con profundidad variable, creando una vista por segmento consumido.

#### block: 2
**Design Rule**

Usa recursion cuando la estructura realmente es arborea. Asegura que cada nivel tenga navegacion y salida claras.

### section: Route loaders - carga de datos por ruta

#### block: 1
**Purpose**

Este ejemplo precarga datos con route loaders y los lee mediante `use_route_loader_data()`.

#### block: 2
**Design Rule**

Carga datos cerca de la ruta que los necesita. Asi evitas pantallas incompletas y reduces logica dispersa.

### section: Router featured app declarative - app completa declarativa

#### block: 1
**Purpose**

Este ejemplo combina layout, navegacion, rutas anidadas, parametros, loaders y autenticacion en una app declarativa.

#### block: 2
**Design Rule**

Cuando el enrutamiento crece, diseña primero la estructura de rutas. Despues conecta vistas, datos y permisos.

### section: Routing - rutas simples

#### block: 1
**Purpose**

Este ejemplo muestra el caso mas simple de `Router`: dos rutas planas y botones de navegacion.

#### block: 2
**Design Rule**

Empieza con rutas simples antes de agregar anidacion, loaders o proteccion. La complejidad debe responder al flujo real.

### section: Runtime routes - rutas dinamicas en ejecucion

#### block: 1
**Purpose**

Este ejemplo agrega y elimina rutas en tiempo de ejecucion usando estado de componente.

#### block: 2
**Design Rule**

Las rutas dinamicas son utiles para experiencias configurables. Documenta bien que rutas pueden aparecer y desaparecer.

### section: Splat routes - rutas catch-all

#### block: 1
**Purpose**

Este ejemplo usa rutas splat con `:path*` para capturar segmentos restantes de URL.

#### block: 2
**Design Rule**

Usa catch-all para contenido flexible o fallback. Valida bien el path capturado para evitar estados ambiguos.

## theme: Theme 8 - Routing y pila de vistas

### section: Building views on route change - construir vistas al cambiar ruta

#### block: 1
**Purpose**

Este ejemplo construye una pila de navegacion desde la ruta actual y maneja rutas anidadas de settings.

#### block: 2
**Design Rule**

Cuando la ruta cambia, la pila visual debe coincidir con la URL. Si no coinciden, el boton atras se vuelve confuso.

### section: Drawer navigation - navegacion con drawer

#### block: 1
**Purpose**

Este ejemplo conecta un navigation drawer con cambios de ruta entre home, store y about.

#### block: 2
**Design Rule**

Los destinos del drawer deben cambiar la ruta, no solo el contenido visual. Eso permite historial, enlaces y estado recuperable.

### section: Initial route - ruta inicial

#### block: 1
**Purpose**

Este ejemplo muestra la ruta inicial recibida por una app Flet.

#### block: 2
**Design Rule**

La ruta inicial debe producir una pantalla valida. No asumas siempre `/` si la app puede abrir deep links.

### section: Pop view confirm - confirmar salida de vista

#### block: 1
**Purpose**

Este ejemplo confirma si una vista puede cerrarse antes de volver desde la ruta store.

#### block: 2
**Design Rule**

Confirma salida solo cuando hay perdida de datos o accion costosa. Confirmar todo vuelve pesada la navegacion.

### section: Pop views until - volver hasta una vista

#### block: 1
**Purpose**

Este ejemplo quita varias vistas de la pila y devuelve un resultado a la vista destino.

#### block: 2
**Design Rule**

Usa pop multiple para cerrar flujos completos. El usuario debe entender a que punto vuelve y por que.

### section: Route change event - evento de cambio de ruta

#### block: 1
**Purpose**

Este ejemplo registra cada cambio de ruta agregando el nuevo string de ruta a la pagina.

#### block: 2
**Design Rule**

Los eventos de ruta sirven para tracking, logs o sincronizacion. Evita que el logging controle la navegacion principal.

### section: Routing two pages - dos paginas declarativas

#### block: 1
**Purpose**

Este ejemplo muestra routing declarativo entre dos paginas compartiendo contexto de tema.

#### block: 2
**Design Rule**

Comparte contexto transversal como tema o sesion fuera de las paginas. Asi las rutas no duplican estado global.

### section: Routing with two pages - flujo home y store

#### block: 1
**Purpose**

Este ejemplo muestra un flujo minimo de home y store guiado por rutas y pila de vistas.

#### block: 2
**Design Rule**

Los flujos simples deben conservar nombres de ruta simples. La claridad de URL ayuda a depurar y navegar.

### section: URL launcher - abrir enlaces externos

#### block: 1
**Purpose**

Este ejemplo abre URLs en distintos modos, como web view, browser view y ventanas popup.

#### block: 2
**Design Rule**

Cuando abras enlaces externos, deja claro si el usuario saldra de la app. El modo de apertura debe respetar contexto y plataforma.
