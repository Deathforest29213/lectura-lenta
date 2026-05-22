---
collection_id: fundamentos-programacion-i
collection_title: Fundamentos de Programacion
type: content_record
format_version: llm-wiki-record-v1
source_files:
  - variables-y-constantes.md
  - tipos-de-datos.md
  - operadores.md
  - condicionales.md
  - bucles.md
  - funciones.md
  - estructuras-de-datos.md
  - algoritmos-basicos.md
  - programacion-orientada-a-objetos.md
  - errores-y-debugging.md
  - buenas-practicas.md
---


# unit: Unidad 1 - Bases del lenguaje

## theme: Tema - Variables y Constantes

### section: Definicion

#### block: 1
Una variable es un nombre asociado a un valor que puede cambiar durante la ejecucion de un programa. Una constante es un nombre asociado a un valor que no debe reasignarse despues de su declaracion.

### section: Ideas clave

#### block: 1
- En TypeScript se usa `let` para valores reasignables.
- Se usa `const` para valores que no seran reasignados.
- Preferir `const` reduce cambios accidentales y hace mas claro el codigo.
- El nombre debe expresar el significado del valor, no solo su tipo.

### section: Ejemplo en TypeScript

#### block: 1
```ts
const nombre: string = "Sebastian";
let edad: number = 20;

edad = edad + 1;

console.log(`${nombre} tiene ${edad} anios`);
```

### section: Ejemplo en Python

#### block: 1
```python
nombre: str = "Sebastian"
edad: int = 20

edad = edad + 1

print(f"{nombre} tiene {edad} anios")
```

### section: Errores comunes

#### block: 1
- Usar nombres ambiguos como `x`, `dato` o `cosa` cuando el contexto no los justifica.
- Reasignar una variable cuando una nueva constante seria mas clara.
- Confundir que `const` impide reasignar el nombre, pero no vuelve inmutable un objeto.

#### block: 2
```ts
const usuario = { nombre: "Sebastian", activo: true };
usuario.activo = false; // valido: se modifica una propiedad
```

### section: Relaciones

#### block: 1
- [[Tipos de Datos]]
- [[Buenas Practicas]]

### section: Dudas abiertas

#### block: 1
- Cuando conviene introducir inmutabilidad profunda en TypeScript?

## theme: Tema - Tipos de Datos

### section: Definicion

#### block: 1
Un tipo de dato describe que clase de valor puede tener una expresion y que operaciones son validas sobre ella.

### section: Ideas clave

#### block: 1
- TypeScript agrega tipos estaticos sobre JavaScript.
- Los tipos ayudan a detectar errores antes de ejecutar el programa.
- Los tipos basicos mas comunes son `string`, `number`, `boolean`, `null` y `undefined`.
- Los tipos compuestos permiten modelar objetos, arreglos, tuplas, uniones e interfaces.

### section: Ejemplo en TypeScript

#### block: 1
```ts
type EstadoUsuario = "activo" | "inactivo";

interface Usuario {
  id: number;
  nombre: string;
  estado: EstadoUsuario;
}

const usuario: Usuario = {
  id: 1,
  nombre: "Sebastian",
  estado: "activo",
};
```

### section: Ejemplo en Python

#### block: 1
```python
from dataclasses import dataclass
from typing import Literal

EstadoUsuario = Literal["activo", "inactivo"]

@dataclass
class Usuario:
    id: int
    nombre: str
    estado: EstadoUsuario

usuario = Usuario(id=1, nombre="Sebastian", estado="activo")
```

### section: Errores comunes

#### block: 1
- Usar `any` para evitar pensar el modelo de datos.
- Confundir `null` con `undefined`.
- Modelar todo como `string` aunque existan valores mas precisos.

### section: Relaciones

#### block: 1
- [[Variables y Constantes]]
- [[Funciones]]
- [[Estructuras de Datos]]

### section: Dudas abiertas

#### block: 1
- Que convenciones personales se usaran para elegir entre `type` e `interface`?

## theme: Tema - Operadores

### section: Definicion

#### block: 1
Un operador es un simbolo o palabra que aplica una operacion sobre uno o mas valores.

### section: Ideas clave

#### block: 1
- Los operadores aritmeticos calculan valores numericos.
- Los operadores de comparacion devuelven booleanos.
- Los operadores logicos combinan condiciones.
- El operador ternario permite elegir entre dos expresiones.
- El orden de precedencia afecta como se evalua una expresion.

### section: Ejemplo en TypeScript

#### block: 1
```ts
const precio: number = 100;
const descuento: number = 20;
const usuarioActivo: boolean = true;

const total = precio - descuento;
const puedeComprar = usuarioActivo && total > 0;
const mensaje = puedeComprar ? "Compra permitida" : "Compra bloqueada";
```

### section: Ejemplo en Python

#### block: 1
```python
precio: int = 100
descuento: int = 20
usuario_activo: bool = True

total = precio - descuento
puede_comprar = usuario_activo and total > 0
mensaje = "Compra permitida" if puede_comprar else "Compra bloqueada"
```

### section: Errores comunes

#### block: 1
- Escribir expresiones demasiado largas y dificiles de leer.
- Confiar en precedencia cuando unos parentesis harian la intencion mas clara.
- Mezclar comparaciones, negaciones y ternarios en una sola linea.

### section: Relaciones

#### block: 1
- [[Condicionales]]
- [[Bucles]]
- [[Buenas Practicas]]

### section: Dudas abiertas

#### block: 1
- Que operadores conviene explicar con ejercicios propios?


# unit: Unidad 2 - Control de flujo y soluciones

## theme: Tema - Condicionales

### section: Definicion

#### block: 1
Un condicional permite ejecutar distintas ramas de codigo segun si una condicion se cumple o no.

### section: Ideas clave

#### block: 1
- `if` ejecuta una rama cuando la condicion es verdadera.
- `else` cubre el caso alternativo.
- `else if` permite evaluar varias posibilidades.
- `switch` puede ser util cuando se comparan multiples casos discretos.
- Las condiciones deben expresar reglas de negocio o decisiones del programa.

### section: Ejemplo en TypeScript

#### block: 1
```ts
function clasificarEdad(edad: number): string {
  if (edad < 0) {
    return "edad invalida";
  }

  if (edad < 18) {
    return "menor de edad";
  }

  return "mayor de edad";
}
```

### section: Ejemplo en Python

#### block: 1
```python
def clasificar_edad(edad: int) -> str:
    if edad < 0:
        return "edad invalida"

    if edad < 18:
        return "menor de edad"

    return "mayor de edad"
```

### section: Errores comunes

#### block: 1
- Crear condicionales anidados sin necesidad.
- Repetir la misma condicion en varias partes.
- No cubrir casos invalidos o limites.

### section: Relaciones

#### block: 1
- [[Operadores]]
- [[Funciones]]
- [[Buenas Practicas]]

### section: Dudas abiertas

#### block: 1
- Cuando conviene reemplazar condicionales por mapas de funciones o polimorfismo?

## theme: Tema - Bucles

### section: Definicion

#### block: 1
Un bucle repite instrucciones mientras se cumpla una condicion o mientras existan elementos por recorrer.

### section: Ideas clave

#### block: 1
- `for` suele usarse cuando se conoce el rango o indice.
- `while` repite mientras una condicion siga siendo verdadera.
- `for...of` recorre valores de una coleccion iterable.
- Metodos como `map`, `filter` y `reduce` expresan transformaciones sobre arreglos.
- Todo bucle necesita una condicion de termino clara.

### section: Ejemplo en TypeScript

#### block: 1
```ts
const numeros: number[] = [1, 2, 3, 4];
let suma = 0;

for (const numero of numeros) {
  suma += numero;
}

const dobles = numeros.map((numero) => numero * 2);
```

### section: Ejemplo en Python

#### block: 1
```python
numeros: list[int] = [1, 2, 3, 4]
suma = 0

for numero in numeros:
    suma += numero

dobles = [numero * 2 for numero in numeros]
```

### section: Errores comunes

#### block: 1
- Crear bucles infinitos por no actualizar la condicion.
- Mutar colecciones mientras se recorren sin entender el efecto.
- Usar un bucle manual cuando una operacion de arreglo seria mas expresiva.

### section: Relaciones

#### block: 1
- [[Operadores]]
- [[Estructuras de Datos]]
- [[Algoritmos Basicos]]

### section: Dudas abiertas

#### block: 1
- Que ejercicios ayudan mejor a distinguir `for`, `while` y metodos de arreglo?

## theme: Tema - Funciones

### section: Definicion

#### block: 1
Una funcion es una unidad reutilizable de codigo que recibe entradas, ejecuta una tarea y puede devolver un resultado.

### section: Ideas clave

#### block: 1
- Los parametros describen que datos necesita la funcion.
- El tipo de retorno describe que entrega la funcion.
- Una funcion clara hace una tarea principal.
- Las funciones reducen duplicacion y mejoran pruebas.
- En TypeScript conviene tipar parametros y retornos publicos.

### section: Ejemplo en TypeScript

#### block: 1
```ts
function calcularTotal(precio: number, descuento: number): number {
  return precio - descuento;
}

const total = calcularTotal(100, 20);
```

### section: Ejemplo en Python

#### block: 1
```python
def calcular_total(precio: int, descuento: int) -> int:
    return precio - descuento

total = calcular_total(100, 20)
```

### section: Funcion con objeto

#### block: 1
```ts
interface Producto {
  nombre: string;
  precio: number;
}

function formatearProducto(producto: Producto): string {
  return `${producto.nombre}: $${producto.precio}`;
}
```

### section: Funcion con objeto en Python

#### block: 1
```python
from dataclasses import dataclass

@dataclass
class Producto:
    nombre: str
    precio: int

def formatear_producto(producto: Producto) -> str:
    return f"{producto.nombre}: ${producto.precio}"
```

### section: Errores comunes

#### block: 1
- Crear funciones con demasiadas responsabilidades.
- Depender de variables externas cuando seria mejor recibir parametros.
- No declarar el tipo de retorno en funciones importantes.

### section: Relaciones

#### block: 1
- [[Tipos de Datos]]
- [[Condicionales]]
- [[Buenas Practicas]]

### section: Dudas abiertas

#### block: 1
- Que criterios personales se usaran para decidir cuando extraer una funcion?

## theme: Tema - Estructuras de Datos

### section: Definicion

#### block: 1
Una estructura de datos organiza valores para almacenarlos, buscarlos, modificarlos o recorrerlos de forma adecuada al problema.

### section: Ideas clave

#### block: 1
- Un arreglo mantiene una lista ordenada de elementos.
- Un objeto agrupa propiedades por nombre.
- `Map` asocia claves con valores.
- `Set` almacena valores unicos.
- Elegir bien la estructura simplifica el algoritmo.

### section: Ejemplo en TypeScript

#### block: 1
```ts
interface Curso {
  id: number;
  nombre: string;
}

const cursos: Curso[] = [
  { id: 1, nombre: "TypeScript" },
  { id: 2, nombre: "React" },
];

const cursosPorId = new Map<number, Curso>();

for (const curso of cursos) {
  cursosPorId.set(curso.id, curso);
}

const curso = cursosPorId.get(2);
```

### section: Ejemplo en Python

#### block: 1
```python
from dataclasses import dataclass

@dataclass
class Curso:
    id: int
    nombre: str

cursos = [
    Curso(id=1, nombre="TypeScript"),
    Curso(id=2, nombre="React"),
]

cursos_por_id: dict[int, Curso] = {}

for curso in cursos:
    cursos_por_id[curso.id] = curso

curso = cursos_por_id.get(2)
```

### section: Errores comunes

#### block: 1
- Usar arreglos para busquedas frecuentes por id cuando un `Map` seria mas claro.
- Duplicar datos sin decidir cual copia es la fuente de verdad.
- Mezclar formas distintas para representar el mismo concepto.

### section: Relaciones

#### block: 1
- [[Tipos de Datos]]
- [[Bucles]]
- [[Algoritmos Basicos]]

### section: Dudas abiertas

#### block: 1
- Cuando conviene introducir pilas, colas, arboles y grafos en esta wiki?

## theme: Tema - Algoritmos Basicos

### section: Definicion

#### block: 1
Un algoritmo es una secuencia finita de pasos para resolver un problema.

### section: Ideas clave

#### block: 1
- Un algoritmo debe tener entrada, proceso y salida.
- La claridad suele ser mas importante que la optimizacion prematura.
- Buscar, contar, filtrar, ordenar y acumular son patrones basicos frecuentes.
- La complejidad ayuda a estimar como crece el costo al aumentar los datos.

### section: Ejemplo en TypeScript

#### block: 1
```ts
function buscarMayor(numeros: number[]): number | null {
  if (numeros.length === 0) {
    return null;
  }

  let mayor = numeros[0];

  for (const numero of numeros) {
    if (numero > mayor) {
      mayor = numero;
    }
  }

  return mayor;
}
```

### section: Ejemplo en Python

#### block: 1
```python
def buscar_mayor(numeros: list[int]) -> int | None:
    if len(numeros) == 0:
        return None

    mayor = numeros[0]

    for numero in numeros:
        if numero > mayor:
            mayor = numero

    return mayor
```

### section: Patron comun: filtrar

#### block: 1
```ts
const edades = [12, 18, 21, 15, 30];
const mayoresDeEdad = edades.filter((edad) => edad >= 18);
```

### section: Patron comun en Python: filtrar

#### block: 1
```python
edades = [12, 18, 21, 15, 30]
mayores_de_edad = [edad for edad in edades if edad >= 18]
```

### section: Errores comunes

#### block: 1
- Resolver sin definir claramente entrada y salida.
- No considerar listas vacias o valores limite.
- Optimizar antes de tener una solucion correcta.

### section: Relaciones

#### block: 1
- [[Bucles]]
- [[Estructuras de Datos]]
- [[Buenas Practicas]]

### section: Dudas abiertas

#### block: 1
- Que algoritmos deben tener ejercicios propios: busqueda, ordenamiento, recursion o grafos?


# unit: Unidad 3 - Diseno, calidad y mantenimiento

## theme: Tema - Programacion Orientada a Objetos

### section: Definicion

#### block: 1
La programacion orientada a objetos organiza codigo alrededor de objetos que combinan datos y comportamiento.

### section: Ideas clave

#### block: 1
- Una clase define una plantilla para crear objetos.
- Un objeto es una instancia con estado y metodos.
- La encapsulacion oculta detalles internos y expone una interfaz.
- La herencia permite reutilizar comportamiento, pero puede aumentar acoplamiento.
- La composicion suele ser una alternativa flexible a la herencia.

### section: Ejemplo en TypeScript

#### block: 1
```ts
class Contador {
  private valor = 0;

  incrementar(): void {
    this.valor += 1;
  }

  obtenerValor(): number {
    return this.valor;
  }
}

const contador = new Contador();
contador.incrementar();
console.log(contador.obtenerValor());
```

### section: Ejemplo en Python

#### block: 1
```python
class Contador:
    def __init__(self) -> None:
        self._valor = 0

    def incrementar(self) -> None:
        self._valor += 1

    def obtener_valor(self) -> int:
        return self._valor

contador = Contador()
contador.incrementar()
print(contador.obtener_valor())
```

### section: Errores comunes

#### block: 1
- Crear clases cuando una funcion u objeto simple bastaria.
- Exponer estado interno que deberia estar encapsulado.
- Usar herencia para compartir codigo sin evaluar composicion.

### section: Relaciones

#### block: 1
- [[Funciones]]
- [[Estructuras de Datos]]
- [[Buenas Practicas]]

### section: Dudas abiertas

#### block: 1
- Como comparar POO con programacion funcional usando ejemplos TypeScript?

## theme: Tema - Errores y Debugging

### section: Definicion

#### block: 1
Debugging es el proceso de encontrar, entender y corregir errores en un programa.

### section: Ideas clave

#### block: 1
- Un error puede ser sintactico, de tipos, de ejecucion o de logica.
- TypeScript ayuda a detectar errores de tipos antes de ejecutar.
- Leer el mensaje de error completo suele revelar archivo, linea y causa.
- Reproducir el error de forma minima facilita corregirlo.
- Una correccion debe atacar la causa, no solo ocultar el sintoma.

### section: Ejemplo en TypeScript

#### block: 1
```ts
function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }

  return a / b;
}

try {
  console.log(dividir(10, 0));
} catch (error) {
  console.error(error);
}
```

### section: Ejemplo en Python

#### block: 1
```python
def dividir(a: int, b: int) -> float:
    if b == 0:
        raise ValueError("No se puede dividir por cero")

    return a / b

try:
    print(dividir(10, 0))
except ValueError as error:
    print(error)
```

### section: Errores comunes

#### block: 1
- Ignorar mensajes de error y cambiar codigo al azar.
- Capturar errores sin registrarlos ni manejarlos.
- No crear un caso minimo para reproducir el problema.

### section: Relaciones

#### block: 1
- [[Tipos de Datos]]
- [[Funciones]]
- [[Buenas Practicas]]

### section: Dudas abiertas

#### block: 1
- Que flujo personal de debugging conviene documentar para proyectos React y TypeScript?

## theme: Tema - Buenas Practicas

### section: Definicion

#### block: 1
Las buenas practicas son criterios para escribir codigo claro, correcto, mantenible y facil de modificar.

### section: Ideas clave

#### block: 1
- Nombrar bien reduce la necesidad de explicar.
- Una funcion debe tener una responsabilidad principal.
- Evitar duplicacion disminuye errores futuros.
- Tipar datos importantes mejora la seguridad del cambio.
- Probar casos normales y limites aumenta confianza.
- El codigo debe ser entendible para una persona, no solo valido para la maquina.

### section: Ejemplo en TypeScript

#### block: 1
```ts
interface Usuario {
  edad: number;
  activo: boolean;
}

function puedeAcceder(usuario: Usuario): boolean {
  const esMayorDeEdad = usuario.edad >= 18;
  return usuario.activo && esMayorDeEdad;
}
```

### section: Ejemplo en Python

#### block: 1
```python
from dataclasses import dataclass

@dataclass
class Usuario:
    edad: int
    activo: bool

def puede_acceder(usuario: Usuario) -> bool:
    es_mayor_de_edad = usuario.edad >= 18
    return usuario.activo and es_mayor_de_edad
```

### section: Practicas iniciales

#### block: 1
- Preferir `const` sobre `let` cuando no hay reasignacion.
- Evitar `any` salvo razon explicita.
- Separar calculos complejos en funciones con nombres claros.
- Cubrir casos invalidos temprano.
- Mantener ejemplos pequenos y ejecutables.

### section: Errores comunes

#### block: 1
- Confundir codigo corto con codigo claro.
- Crear abstracciones antes de ver repeticion real.
- Escribir comentarios que repiten el codigo en vez de explicar decisiones.

### section: Relaciones

#### block: 1
- [[Variables y Constantes]]
- [[Funciones]]
- [[Errores y Debugging]]

### section: Dudas abiertas

#### block: 1
- Que reglas de estilo personales se adoptaran para esta wiki y los proyectos TypeScript?


