---
collection_id: arquitectura-y-patrones-i
collection_title: Arquitectura y Patrones
type: content_record
format_version: llm-wiki-record-v1
source_files:
  - patrones-de-diseno.md
  - patrones-creacionales.md
  - patrones-estructurales.md
  - patrones-de-comportamiento.md
  - mvc.md
---

# unit: Unidad 1 - Fundamentos de patrones

## theme: Tema 1 - Que es un patron de diseno

### section: Definicion

#### block: 1
Un patron de diseno es una solucion reutilizable para un problema recurrente de diseno de software.

#### block: 2
Un patron no es una copia exacta de codigo.

#### block: 3
Un patron es una forma conocida de organizar responsabilidades, objetos, funciones o colaboraciones.

### section: Proposito

#### block: 1
Los patrones ayudan a nombrar soluciones.

#### block: 2
Tambien ayudan a comunicar decisiones de diseno con otras personas.

#### block: 3
Cuando dos personas conocen el patron, pueden hablar del problema con menos explicaciones largas.

### section: Uso cuidadoso

#### block: 1
Un patron debe usarse cuando aparece el problema que resuelve.

#### block: 2
Usar patrones sin necesidad puede volver el codigo mas dificil.

#### block: 3
El objetivo no es usar patrones, sino escribir codigo mas claro y flexible.

## theme: Tema 2 - Categorias clasicas

### section: Vision general

#### block: 1
Los patrones clasicos suelen agruparse en tres familias.

#### block: 2
Las familias son patrones creacionales, estructurales y de comportamiento.

#### block: 3
Cada familia responde a un tipo distinto de problema de diseno.

### section: Creacionales

#### block: 1
Los patrones creacionales se enfocan en como crear objetos o instancias.

#### block: 2
Son utiles cuando crear algo directamente acopla demasiado el codigo a una implementacion concreta.

### section: Estructurales

#### block: 1
Los patrones estructurales se enfocan en como componer partes.

#### block: 2
Tambien ayudan a adaptar interfaces o simplificar subsistemas complejos.

### section: Comportamiento

#### block: 1
Los patrones de comportamiento se enfocan en como se distribuyen acciones, algoritmos y comunicacion.

#### block: 2
Son utiles cuando una decision o colaboracion empieza a crecer dentro del codigo.

# unit: Unidad 2 - Patrones clasicos

## theme: Tema 3 - Patrones creacionales

### section: Definicion

#### block: 1
Un patron creacional organiza la forma en que se construyen objetos o configuraciones.

#### block: 2
La meta frecuente es evitar que el codigo principal conozca demasiados detalles de creacion.

### section: Factory Method

#### block: 1
Factory Method concentra la decision de que objeto crear.

#### block: 2
Esto puede ser util cuando existen varias implementaciones posibles para una misma tarea.

#### block: 3
El codigo que usa el objeto no necesita saber todos los detalles de construccion.

### section: Ejemplo en Python

#### block: 1
```python
class Pago:
    def cobrar(self, monto: int) -> str:
        raise NotImplementedError

class PagoTarjeta(Pago):
    def cobrar(self, monto: int) -> str:
        return f"Cobrado con tarjeta: {monto}"

class PagoTransferencia(Pago):
    def cobrar(self, monto: int) -> str:
        return f"Cobrado por transferencia: {monto}"

def crear_pago(tipo: str) -> Pago:
    if tipo == "tarjeta":
        return PagoTarjeta()
    if tipo == "transferencia":
        return PagoTransferencia()
    raise ValueError("Tipo de pago no soportado")
```

#### block: 2
La funcion `crear_pago` decide que implementacion devolver.

#### block: 3
Quien llama a `crear_pago` puede trabajar con la abstraccion `Pago`.

### section: Builder y Singleton

#### block: 1
Builder ayuda a construir objetos complejos paso a paso.

#### block: 2
Singleton busca asegurar una unica instancia compartida.

#### block: 3
Singleton debe usarse con cuidado, porque puede introducir estado global y acoplamiento oculto.

## theme: Tema 4 - Patrones estructurales

### section: Definicion

#### block: 1
Un patron estructural organiza como se conectan piezas del sistema.

#### block: 2
Estos patrones pueden adaptar, envolver o simplificar relaciones entre partes.

### section: Adapter

#### block: 1
Adapter convierte una interfaz existente en otra interfaz esperada.

#### block: 2
Es util cuando una libreria o API externa no coincide con la forma en que tu aplicacion quiere trabajar.

### section: Facade

#### block: 1
Facade ofrece una entrada simple a un subsistema mas complejo.

#### block: 2
La fachada oculta detalles internos y reduce lo que el codigo cliente necesita conocer.

### section: Ejemplo de Facade en Python

#### block: 1
```python
class Inventario:
    def reservar(self, producto_id: str) -> None:
        print(f"Reservado {producto_id}")

class Pagos:
    def cobrar(self, monto: int) -> None:
        print(f"Cobrado {monto}")

class PedidosFacade:
    def __init__(self, inventario: Inventario, pagos: Pagos):
        self.inventario = inventario
        self.pagos = pagos

    def crear_pedido(self, producto_id: str, monto: int) -> None:
        self.inventario.reservar(producto_id)
        self.pagos.cobrar(monto)
```

#### block: 2
`PedidosFacade` coordina inventario y pagos.

#### block: 3
El codigo externo puede crear un pedido sin conocer cada paso interno.

### section: Decorator y Composite

#### block: 1
Decorator agrega comportamiento sin modificar directamente el objeto original.

#### block: 2
Composite permite tratar objetos individuales y grupos de objetos de forma parecida.

## theme: Tema 5 - Patrones de comportamiento

### section: Definicion

#### block: 1
Un patron de comportamiento organiza decisiones, algoritmos o comunicacion entre partes.

#### block: 2
Estos patrones son utiles cuando el flujo de acciones empieza a mezclarse demasiado.

### section: Strategy

#### block: 1
Strategy permite intercambiar algoritmos sin cambiar el codigo que los usa.

#### block: 2
Es util cuando existen varias formas de resolver una misma operacion.

### section: Observer

#### block: 1
Observer permite que varias partes reaccionen cuando ocurre un cambio.

#### block: 2
Este patron aparece conceptualmente en eventos, suscripciones y sistemas reactivos.

### section: Command

#### block: 1
Command encapsula una accion como una unidad que puede guardarse, ejecutarse o deshacerse.

#### block: 2
Puede servir para botones, historial de acciones o colas de tareas.

### section: Ejemplo de Strategy en React con TypeScript

#### block: 1
```tsx
type Orden = "asc" | "desc";

const estrategias = {
  asc: (a: number, b: number) => a - b,
  desc: (a: number, b: number) => b - a,
};

function ListaNumeros({ numeros, orden }: { numeros: number[]; orden: Orden }) {
  const ordenados = [...numeros].sort(estrategias[orden]);

  return (
    <ul>
      {ordenados.map((numero) => (
        <li key={numero}>{numero}</li>
      ))}
    </ul>
  );
}
```

#### block: 2
El componente no contiene la logica completa de cada ordenamiento.

#### block: 3
La decision se delega al objeto `estrategias`.

#### block: 4
Esto puede mejorar la lectura si las variantes crecen.

# unit: Unidad 3 - Patrones en interfaces

## theme: Tema 6 - MVC

### section: Definicion

#### block: 1
MVC significa Model, View, Controller.

#### block: 2
Es una forma de separar datos y reglas, presentacion y coordinacion de acciones.

### section: Model

#### block: 1
El Model contiene datos, reglas y operaciones relacionadas con el problema.

#### block: 2
No deberia depender demasiado de como se muestra la informacion.

### section: View

#### block: 1
La View representa la informacion que ve el usuario.

#### block: 2
Su responsabilidad principal es mostrar datos e interacciones.

### section: Controller

#### block: 1
El Controller recibe acciones del usuario y coordina cambios.

#### block: 2
Puede pedir datos al modelo y decidir que respuesta entregar.

### section: Relacion con React

#### block: 1
React no suele organizarse como MVC puro.

#### block: 2
Aun asi, la idea de separar datos, vista y coordinacion sigue siendo util.

#### block: 3
Un componente React puede mezclar demasiada logica si no se separan bien sus responsabilidades.
