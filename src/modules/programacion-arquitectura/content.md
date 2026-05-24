---
collection_id: arquitectura-y-patrones-i
collection_title: Arquitectura y Patrones
type: content_record
format_version: llm-wiki-record-v1
source_files:
  - arquitectura-de-software.md
  - separacion-de-responsabilidades.md
  - acoplamiento-y-cohesion.md
  - modularidad.md
  - capas.md
  - principios-solid.md
  - arquitectura-frontend.md
  - arquitectura-react.md
---

# unit: Unidad 1 - Fundamentos de arquitectura

## theme: Tema 1 - Que es arquitectura

### section: Definicion

#### block: 1
La arquitectura de software es la organizacion de alto nivel de un sistema.

#### block: 2
Esa organizacion define que partes existen, que responsabilidad tiene cada una y como se comunican entre si.

#### block: 3
La arquitectura no es solamente una estructura de carpetas.

#### block: 4
Las carpetas muestran una organizacion visible, pero la arquitectura tambien incluye reglas, limites y dependencias.

### section: Proposito

#### block: 1
Una buena arquitectura ayuda a que el sistema sea mas facil de cambiar.

#### block: 2
Cuando una parte cambia, idealmente no deberia obligar a modificar muchas partes sin relacion directa.

#### block: 3
La arquitectura busca reducir el costo mental de entender un programa.

#### block: 4
Tambien busca reducir el costo tecnico de corregir errores, agregar funciones y reemplazar detalles internos.

### section: Tradeoffs

#### block: 1
Toda arquitectura implica decisiones y renuncias.

#### block: 2
Una estructura muy simple puede ser rapida al principio, pero dificil de escalar despues.

#### block: 3
Una estructura muy elaborada puede ser flexible, pero agregar complejidad antes de necesitarla.

#### block: 4
La arquitectura no se evalua por sonar sofisticada, sino por ayudar al proyecto concreto.

# unit: Unidad 2 - Separacion y organizacion del codigo

## theme: Tema 2 - Separacion de responsabilidades

### section: Definicion

#### block: 1
Separar responsabilidades significa que cada parte del sistema debe tener un trabajo principal claro.

#### block: 2
Una funcion, clase, modulo o componente deberia cambiar por una razon principal.

#### block: 3
Si una pieza cambia por muchas razones distintas, probablemente esta mezclando responsabilidades.

### section: Ejemplo conceptual

#### block: 1
Calcular un total y mostrarlo en pantalla son dos responsabilidades distintas.

#### block: 2
El calculo pertenece a la logica del programa.

#### block: 3
La visualizacion pertenece a la presentacion.

#### block: 4
Separar ambas partes permite probar el calculo sin depender de la interfaz.

### section: Ejemplo en Python

#### block: 1
```python
def calcular_total(productos):
    return sum(producto["precio"] for producto in productos)

def mostrar_total(total):
    print(f"Total: {total}")
```

#### block: 2
`calcular_total` tiene una responsabilidad: obtener un numero a partir de productos.

#### block: 3
`mostrar_total` tiene otra responsabilidad: presentar ese numero en la consola.

### section: Ejemplo en React con TypeScript

#### block: 1
```tsx
type Producto = {
  nombre: string;
  precio: number;
};

function calcularTotal(productos: Producto[]): number {
  return productos.reduce((total, producto) => total + producto.precio, 0);
}

function TotalPedido({ productos }: { productos: Producto[] }) {
  return <p>Total: {calcularTotal(productos)}</p>;
}
```

#### block: 2
La funcion `calcularTotal` contiene logica reutilizable.

#### block: 3
El componente `TotalPedido` se encarga de mostrar la informacion.

## theme: Tema 3 - Acoplamiento y cohesion

### section: Acoplamiento

#### block: 1
El acoplamiento mide cuanto depende una parte del sistema de otra.

#### block: 2
Alto acoplamiento significa que una pieza conoce demasiados detalles de otra.

#### block: 3
Bajo acoplamiento significa que las piezas se comunican mediante contratos mas claros y estables.

### section: Cohesion

#### block: 1
La cohesion mide que tan relacionadas estan las responsabilidades internas de una pieza.

#### block: 2
Alta cohesion significa que el contenido de una pieza apunta a un mismo proposito.

#### block: 3
Baja cohesion significa que una pieza contiene tareas que no pertenecen naturalmente juntas.

### section: Regla practica

#### block: 1
Un sistema mantenible suele buscar bajo acoplamiento y alta cohesion.

#### block: 2
No se trata de eliminar toda dependencia.

#### block: 3
Se trata de depender de cosas estables y evitar depender de detalles fragiles.

### section: Senales de alerta

#### block: 1
Una senal de alto acoplamiento es que un cambio pequeno obliga a tocar muchos archivos.

#### block: 2
Una senal de baja cohesion es que una clase o modulo hace tareas que no tienen relacion clara.

#### block: 3
Otra senal de problema es que una prueba necesita preparar demasiadas dependencias para revisar una regla simple.

## theme: Tema 4 - Modularidad

### section: Definicion

#### block: 1
La modularidad consiste en dividir un sistema en partes relativamente independientes.

#### block: 2
Cada modulo agrupa codigo que cambia por motivos parecidos.

#### block: 3
Un modulo deberia exponer una entrada clara y ocultar detalles internos.

### section: Proposito

#### block: 1
La modularidad ayuda a navegar el proyecto.

#### block: 2
Tambien ayuda a probar partes pequenas sin ejecutar todo el sistema.

#### block: 3
Un buen modulo puede reemplazarse con menos impacto sobre el resto del codigo.

### section: Ejemplo de estructura

#### block: 1
```text
pedidos/
  calcular-total.ts
  crear-pedido.ts
  pedido.types.ts
  pedido.test.ts
```

#### block: 2
Esta estructura agrupa archivos por problema de negocio: pedidos.

#### block: 3
Otra opcion seria organizar por tipo tecnico, pero puede dispersar codigo relacionado.

# unit: Unidad 3 - Arquitectura por capas y principios de diseno

## theme: Tema 5 - Capas

### section: Definicion

#### block: 1
Una arquitectura por capas separa el sistema por niveles de responsabilidad.

#### block: 2
Un ejemplo comun distingue presentacion, aplicacion, dominio e infraestructura.

#### block: 3
Cada capa intenta proteger una parte del sistema de detalles que no le corresponden.

### section: Presentacion

#### block: 1
La capa de presentacion contiene pantallas, componentes, formularios y elementos visibles.

#### block: 2
Su responsabilidad principal es interactuar con el usuario.

### section: Aplicacion

#### block: 1
La capa de aplicacion coordina casos de uso.

#### block: 2
Por ejemplo, crear un pedido puede requerir validar datos, calcular total y guardar informacion.

### section: Dominio

#### block: 1
La capa de dominio contiene reglas centrales del problema.

#### block: 2
Estas reglas deberian poder entenderse sin depender demasiado de frameworks o detalles externos.

### section: Infraestructura

#### block: 1
La infraestructura contiene detalles tecnicos externos.

#### block: 2
Ejemplos de infraestructura son bases de datos, APIs, archivos y servicios externos.

### section: Flujo conceptual

#### block: 1
```text
UI -> Aplicacion -> Dominio -> Infraestructura
```

#### block: 2
La flecha representa una relacion de uso o coordinacion.

#### block: 3
En arquitecturas mas cuidadas, el dominio intenta no depender directamente de infraestructura.

## theme: Tema 6 - SOLID como guia inicial

### section: Definicion

#### block: 1
SOLID es un conjunto de principios para pensar diseno mantenible.

#### block: 2
Estos principios se usan mucho en programacion orientada a objetos.

#### block: 3
Tambien pueden ayudar a razonar sobre modulos, servicios y componentes.

### section: Single Responsibility

#### block: 1
El principio de responsabilidad unica dice que una unidad deberia tener una razon principal para cambiar.

#### block: 2
Este principio se conecta directamente con la separacion de responsabilidades.

### section: Open Closed

#### block: 1
El principio abierto/cerrado sugiere que una unidad deberia poder extenderse sin modificar codigo estable innecesariamente.

#### block: 2
Este principio suele aparecer cuando agregamos nuevas variantes de comportamiento.

### section: Dependency Inversion

#### block: 1
La inversion de dependencias propone depender de abstracciones y no de detalles concretos.

#### block: 2
Esto reduce acoplamiento entre reglas importantes y mecanismos especificos.

### section: Uso cuidadoso

#### block: 1
SOLID no debe aplicarse como una lista mecanica.

#### block: 2
Su valor aparece cuando ayuda a detectar rigidez, duplicacion o mezcla de responsabilidades.

# unit: Unidad 4 - Arquitectura frontend y React

## theme: Tema 7 - Arquitectura en frontend y React

### section: Frontend

#### block: 1
La arquitectura frontend organiza pantallas, componentes, rutas, estado, servicios y validaciones.

#### block: 2
Un frontend mantenible separa UI, reglas y comunicacion con APIs.

#### block: 3
No toda logica deberia vivir dentro de un componente visual.

### section: React

#### block: 1
En React, la arquitectura define como organizar componentes, hooks, estado y funciones auxiliares.

#### block: 2
Una funcion pura puede calcular datos sin depender de React.

#### block: 3
Un componente puede concentrarse en mostrar datos y conectar eventos.

### section: Ejemplo de separacion

#### block: 1
```tsx
type Producto = {
  nombre: string;
  precio: number;
};

function calcularTotal(productos: Producto[]): number {
  return productos.reduce((total, producto) => total + producto.precio, 0);
}

function ResumenCarrito({ productos }: { productos: Producto[] }) {
  const total = calcularTotal(productos);

  return <p>Total: {total}</p>;
}
```

#### block: 2
La funcion `calcularTotal` puede probarse sin renderizar la interfaz.

#### block: 3
El componente `ResumenCarrito` usa el resultado para mostrarlo al usuario.
