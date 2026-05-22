---
collection_id: acido-base
collection_title: Equilibrio Ácido-Base
type: content_record
format_version: llm-wiki-record-v1
source_files:
  - Equilibrio Acido-Base I/Equilibrio Acido-Base I - Tema 1.pdf
  - Equilibrio Acido-Base I/Equilibrio Acido-Base I - Tema 2.pdf
  - Equilibrio Acido-Base II/Equilibrio Acido-Base II - Tema 1.pdf
  - Equilibrio Acido-Base II/Equilibrio Acido-Base II - Tema 2.pdf
  - Equilibrio Acido-Base II/Equilibrio Acido-Base II - Tema 3.pdf
  - Equilibrio Acido-Base II/Equilibrio Acido-Base II - Tema 4.pdf
  - Equilibrio Acido-Base II/Equilibrio Acido-Base II - Tema 5.pdf
  - Equilibrio Acido-Base III/Equilibrio Acido-Base III - Tema 1.pdf
  - Equilibrio Acido-Base III/Equilibrio Acido-Base III - Tema 2.pdf
  - Equilibrio Acido-Base III/Equilibrio Acido-Base III - Tema 3.pdf
  - Equilibrio Acido-Base III/Equilibrio Acido-Base III - Tema 4.pdf
  - Equilibrio Acido-Base III/Equilibrio Acido-Base III - Tema 5.pdf
---

# unit: Unidad 1 - Soluciones amortiguadoras

## theme: Tema 1 - Soluciones amortiguadoras

### section: Definición de solución amortiguadora y disociación del ácido débil

#### block: 1
Las soluciones que resisten cambios de pH son llamadas soluciones amortiguadoras, tampones o simplemente buffer.

Una solución amortiguadora está formada por un ácido débil y su sal derivada.

Para determinar el pH de esta solución formada por un ácido débil y su sal derivada, debe considerarse la reacción de disociación del ácido débil:

`HA (ac) ⇔ H+ (ac) + A- (ac)`

Su constante de equilibrio, o constante de acidez, está expresada como:

`Ka = ([H+] [A-]) / [HA]`

Reordenando para despejar `[H+]`:

`[H+] = (Ka [HA]) / [A-]`

Si a esta ecuación le aplicamos logaritmo.

### section: Deducción de Henderson-Hasselbalch

#### block: 1
`-log [H+] = -log Ka - log ([HA] / [A-])`

o bien:

`-log [H+] = -log Ka + log ([A-] / [HA])`

Ahora bien:

`pH = -log [H+]`

y:

`pKa = -log Ka`

Por lo tanto:

`pH = pKa + log ([A-] / [HA])`

Esta ecuación se conoce como ecuación de Henderson-Hasselbach, que se deduce de la expresión de la constante de equilibrio de la reacción de disociación de un ácido débil.

Nos permite calcular el pH de una solución formada por un ácido débil y su sal derivada.

### section: Representaciones de la ecuación

#### block: 1
Esta ecuación tiene varias representaciones:

`pH = pKa + log ([base conjugada] / [ácido])`

Debido a que el anión `A-` es la base conjugada del ácido débil `HA`, según la teoría de Bronsted-Lowry.

También puede escribirse:

`pH = pKa + log ([Sal] / [ácido])`

Esto se debe a que la concentración de `A-` depende principalmente de la concentración de sal que disocia.

### section: Ejemplo con ácido acético y acetato de sodio

#### block: 1
Calcularemos ahora el pH de una solución formada por ácido acético `CH3COOH 0,5 M` y acetato de sodio `0,5 M (CH3COONa)`.

`pH = pKa + log ([Sal] / [ácido])`

`pH = pKa + log ([CH3COO-] / [CH3COOH])`

Si:

`Ka = 1,8 · 10^-5`

Entonces:

`pKa = -log Ka`

`pKa = 4,74`

Luego:

`pH = 4,74 + log (0,5 / 0,5)`

`pH = 4,74 + log 1`

`pH = 4,74`

De este ejemplo concluimos dos cosas importantes.

### section: Factores que determinan el pH

#### block: 1
De este ejemplo concluimos dos cosas importantes.

El pH de una solución amortiguadora depende de dos factores:

Factor 1: `pKa`

Factor 2: relación `[Sal] / [Ácido]`

Factor 1: `pKa` es sólo:

`-log Ka`

Luego:

Si `Ka` tiene un valor alto, `pKa` tendrá un pequeño valor.

A mayor `Ka` ⇒ menor `pKa` ⇒ menor pH ⇒ mayor acidez.

Por lo tanto, si se quiere preparar una solución amortiguadora que regule el pH en el rango más ácido posible, se debe seleccionar un ácido con `Ka` de gran valor.

### section: Selección del ácido según pKa

#### block: 1
Además, para preparar una solución amortiguadora de un pH determinado debe seleccionarse un ácido cuyo `pKa` sea cercano al pH de la solución tampón que se requiere preparar.

```text
+--------------------+-----------------+---------------+-------+----------------------+
| Ácido              | Fórmula         | Ka            | pKa   | Rango de regulación  |
|                    |                 |               |       | pKa ± 1              |
+--------------------+-----------------+---------------+-------+----------------------+
| Ac. cloroacético   | ClCH2COOH       | 1,36 · 10^-3  | 2,87  | 1,87 - 3,87          |
| Ac. nitroso        | HNO2            | 5,10 · 10^-4  | 3,29  | 2,29 - 4,29          |
| Ac. fórmico        | HCOOH           | 1,77 · 10^-4  | 3,75  | 2,75 - 4,75          |
| Ac. hipocloroso    | HClO            | 2,95 · 10^-8  | 7,53  | 6,53 - 8,53          |
| Ac. cianhídrico    | HCN             | 4,80 · 10^-10 | 9,32  | 8,32 - 10,32         |
| Ac. acético        | CH3CH2COOH      | 1,75 · 10^-5  | 4,76  | 3,76 - 5,76          |
| Ac. carbónico      | H2CO3           | 4,20 · 10^-7  | 6,38  | 5,38 - 7,38          |
|                    | (HCO3)-         | 4,80 · 10^-11 | 10,31 | 9,31 - 11,31         |
| Ac. fosfórico      | H3PO4           | 7,52 · 10^-3  | 2,12  | 1,12 - 3,12          |
|                    | (H2PO4)-        | 6,23 · 10^-8  | 7,20  | 6,20 - 8,20          |
|                    | (HPO4)-2        | 2,20 · 10^-13 | 12,66 | 11,66 - 13,66        |
+--------------------+-----------------+---------------+-------+----------------------+
```

### section: Relación sal-ácido igual a uno

#### block: 1
Factor 2: Relación Sal/Ácido.

La relación sal-ácido corresponde al cuociente entre la concentración de sal y ácido presente en solución:

`Relación sal-ácido ⇒ [Sal] / [Ácido]`

Tenemos tres posibilidades:

1. Es igual a 1, por lo tanto `[Sal] = [Ácido]`.

2. Es mayor que 1, por lo tanto `[Sal] > [Ácido]`.

3. Es menor que 1, por lo tanto `[Sal] < [Ácido]`.

Si la relación `[Sal] / [Ácido] = 1`, entonces `[Sal] = [Ácido]`.

Como ya vimos, el pH de la solución sólo dependerá de la `Ka` del ácido, de tal forma que:

`pH = pKa`

### section: Relación sal-ácido mayor o menor que uno

#### block: 1
Relación Sal/Ácido.

2. Si la relación `[Sal] / [Ácido] > 1`, entonces `[Sal] > [Ácido]`.

Ejemplo:

`[Sal] = 0,2`

`[Ácido] = 0,1`

`Relación = [Sal] / [Ácido] = 0,2 / 0,1 = 2`

Luego:

`pH = pKa + log 2`

`pH = pKa + 0,301`

`pH > pKa`

3. Si la relación `[Sal] / [Ácido] < 1`, entonces `[Sal] < [Ácido]`.

Ejemplo:

`[Sal] = 0,1`

`[Ácido] = 0,2`

`Relación = [Sal] / [Ácido] = 0,1 / 0,2 = 0,5`

Luego:

`pH = pKa + log (0,1 / 0,2)`

`pH = pKa + log 0,5`

`pH = pKa - 0,301`

`pH < pKa`

### section: Resumen de la relación sal-ácido

#### block: 1
Relación Sal-Ácido.

En resumen:

```text
+----------------------+-------------------+-----------+----------------+
| Si                   | pH                | Relación  | Acidez         |
+----------------------+-------------------+-----------+----------------+
| [Sal] = [Ácido]      | pH = pKa          | 1         | No cambia      |
| [Sal] > [Ácido]      | pH > pKa          | mayor a 1 | disminuye      |
| [Sal] < [Ácido]      | pH < pKa          | menor a 1 | aumenta        |
+----------------------+-------------------+-----------+----------------+
```

### section: Tipos de amortiguadores

#### block: 1
Componentes de las soluciones amortiguadoras o Buffers.

Se pueden preparar dos tipos de amortiguadores, a saber:

a) Amortiguadores ácidos: constituidos por un ácido débil y su base conjugada, sal derivada.

b) Amortiguadores básicos: constituidos por una base débil y su ácido conjugado, sal derivada.

Por ello, las soluciones amortiguadoras se preparan mezclando:

Ácido débil + sal derivada del ácido.

Base débil + sal derivada de la base.

## theme: Tema 2 - Preparaciones amortiguadoras

### section: pH requerido y selección del tampón

#### block: 1
Preparación de una solución amortiguadora.

Las soluciones amortiguadoras son muy efectivas para regular la acidez de un medio ambiente determinado, entonces debemos conocer a lo menos dos características de la solución tampón que vamos a preparar.

A) El pH requerido.

Ya hemos visto que si las concentraciones de ácido y sal son iguales, la concentración de protones, o iones hidroxilos, es igual al `Ka`:

`pH = pKa`

Por esta razón, para preparar una solución amortiguadora de un pH determinado debe seleccionarse un ácido cuyo `pKa` sea cercano al pH de la solución tampón que se requiere preparar.

Por otro lado, el sistema sal/ácido funciona perfectamente como amortiguador en las cercanías del `pKa` del ácido.

Luego se considera que el tampón es eficiente para regular:

Una unidad sobre y una unidad bajo el `pKa`.

### section: Concentración del tampón y capacidad amortiguadora

#### block: 1
B) La concentración del tampón.

La concentración del tampón es muy importante, ya que esta característica de la solución determina su capacidad amortiguadora.

Capacidad amortiguadora: es la cantidad de ácido `H+` que una solución tampón puede neutralizar antes de que el pH del medio ambiente que está siendo regulado cambie apreciablemente.

Esta capacidad depende de la cantidad de ácido y de sal que componen la solución amortiguadora.

A modo de ejemplo, analizaremos la preparación del tampón acetato, ácido acético-acetato de sodio, de concentración `0,2 M` y `pH 5,0`.

Primero: el `pKa` del ácido acético es `4,7`; por medio de la ecuación de Handerson-Hasselbalch podremos calcular la relación de concentraciones Sal-Ácido.

`pH = pKa + log ([Sal] / [Ácido])`

`5 = 4,76 + log ([Sal] / [Ácido])`

### section: Cálculo de la relación sal-ácido

#### block: 1
`5 - 4,76 = log ([Sal] / [Ácido])`

`0,24 = log ([Sal] / [Ácido])`

Aplicamos antilogaritmo:

`antilog 0,24 = [Sal] / [Ácido]`

`1,74 = [Sal] / [Ácido]`

Es decir, para obtener un tampón de `pH = 5` con ácido acético y su sal, la relación entre las concentraciones de Sal y Ácido debe ser `1,74`.

### section: Sistema de ecuaciones para concentración total

#### block: 1
Segundo:

La concentración total del tampón debe ser `0,2 M`; entonces debemos aplicar un sistema de ecuaciones.

Ecuación 1:

`[Sal] + [Ácido] = 0,2 M`

Ecuación 2:

`[Sal] / [Ácido] = 1,74`

Reordenando:

`[Sal] = 1,74 [Ácido]`

Entonces reemplazamos ecuación 2 en ecuación 1:

`1,74 [Ácido] + [Ácido] = 0,2 M`

`2,74 [Ácido] = 0,2 M`

`[Ácido] = 0,2 M / 2,74`

`[Ácido] = 0,073 M`

### section: Cálculo final y comprobación

#### block: 1
Tercero:

Reemplazamos este valor `[Ácido] = 0,073 M` en la ecuación 1:

`[Sal] + [Ácido] = 0,2 M`

`[Sal] + 0,073 M = 0,2 M`

`[Sal] = 0,2 M - 0,073 M`

`[Sal] = 0,127 M`

Paso 4:

Para comprobar si nuestro cálculo está bien hecho, debemos tener en mente que la relación `[Sal] / [Ácido] = 1,74`.

Por lo tanto:

`[Sal] / [Ácido] = 0,127 / 0,073 = 1,74`

Está correcto.

Entonces, si se prepara una mezcla de ácido acético y de acetato de sodio, cuyas concentraciones sean `0,073 M` y `0,127 M`, respectivamente, se obtiene una solución amortiguadora de `pH = 5` y de concentración total `0,2 M`.

### section: Propiedades de una solución amortiguadora

#### block: 1
Propiedades de una solución amortiguadora.

Se distinguen tres propiedades importantes en una solución buffer:

Primero:

La dilución moderada de esta solución no afecta el pH de la misma.

Segundo:

La adición de pequeñas cantidades de ácidos o bases a una solución amortiguadora no afecta significativamente el pH. Esto es lógico, ya que es la función principal de estas soluciones.

Tercero:

Capacidad tampón; capacidad máxima de amortiguación que tiene la solución.

# unit: Unidad 2 - Equilibrio Ácido-Base

## theme: Tema 1 - Equilibrio Ácido-Base

### section: Definición de equilibrio ácido-base e ion hidrógeno

#### block: 1
EQUILIBRIO ÁCIDO-BASE.

Equilibrio ácido-base es el mantenimiento a un nivel normal de la concentración de iones hidrógeno `H+` en los fluidos del organismo.

La concentración de iones de hidrógeno de una solución determina su grado de acidez.

EL ION HIDRÓGENO.

El cuerpo humano produce ácido de forma continua.

Un adulto normal produce aproximadamente `20.000 nmol` de ácido volátil, ácido carbónico, y unos `80 nmol` de ácido no volátil.

La mayor parte de ácido volátil se produce en forma de `CO2` durante la respiración celular y reacciona con agua para formar ácido carbónico y bicarbonato.

### section: Fuentes de ácidos no volátiles

#### block: 1
Fuentes de los principales ácidos no volátiles:

1. Metionina y cisteína: ácido sulfúrico.

2. Combustión incompleta de grasas: ácidos orgánicos.

3. Combustión incompleta de hidratos de carbono: ácidos orgánicos.

4. Metabolismo de las nucleoproteínas: ácido úrico.

5. Metabolismo de fosfato y fósforo orgánico: `H+` y `P` inorgánico.

6. Ácidos potenciales en los alimentos: citrato.

### section: Neutralización y control renal de hidrogeniones

#### block: 1
A medida que se producen los `H+`, son neutralizados por sistemas tampón circulantes, que los preparan para su excreción final del organismo.

La capacidad tamponadora total capaz de realizar esta función es aproximadamente de `15 nmol/kg` de peso corporal.

La producción normal de ácido no volátil agotaría esa capacidad tamponadora, pero ello no ocurre porque los riñones excretan `H+`, restableciendo los depósitos de bicarbonato.

De esta forma, el `H+`, como otros iones, está sometido a un estricto control que logra mantener su concentración en los líquidos extracelulares entre `35` y `46 nmol/L`.

La importancia de mantener este valor dentro de unos límites tan estrechos es evidente si consideramos la influencia que tienen los iones `H+` sobre muchos de los procesos metabólicos, por ejemplo, sobre la actividad de las enzimas.

En el organismo se produce continuamente `H+` pero no `OH-`; ésta es una de las razones más importantes del hecho de que la acidosis sea mucho más frecuente que la alcalosis.

### section: Relación entre pH e hidrogeniones

#### block: 1
En la mayoría de los líquidos biológicos las concentraciones de `H+` son muy bajas.

En la sangre y en el líquido extracelular es de `0,00000004 mol/L`, `40 nmoles/L`.

Una acidemia intensa, `pH: 6,8`, puede elevar este valor a `0,00000016 mol/L`, `160 nmoles/L`, y una alcalemia intensa, `pH: 7,8`, reducirla hasta `0,000000016 mol/L`, `16 nmoles/L`.

Estas son cifras muy pequeñas; si se usa el valor de pH, la cifra `0,00000004 mol/L` puede sustituirse por `pH 7,4`.

El empleo del pH simplifica mucho la expresión de la concentración de iones `H+` y hace que su manejo sea mucho más simple.

La relación entre el pH y `[H+]` es la siguiente:

```text
+---------------+-----+-----+-----+-----+-----+-----+
| pH            | 6.7 | 6.8 | 6.9 | 7.0 | 7.1 | 7.2 |
+---------------+-----+-----+-----+-----+-----+-----+
| [H+] (nmol/L) | 200 | 160 | 125 | 100 | 80  | 63  |
+---------------+-----+-----+-----+-----+-----+-----+

+---------------+-----+-----+-----+-----+-----+-----+
| pH            | 7.3 | 7.4 | 7.5 | 7.6 | 7.7 | 7.8 |
+---------------+-----+-----+-----+-----+-----+-----+
| [H+] (nmol/L) | 50  | 40  | 32  | 26  | 20  | 16  |
+---------------+-----+-----+-----+-----+-----+-----+
```

### section: Valores normales y terminología clínica

#### block: 1
El pH normal del líquido extracelular fluctúa entre `7,35` a `7,45`; ello se debe a que todos los líquidos del organismo son ligeramente alcalinos.

pH de la sangre arterial: `7,4`.

pH de la sangre venosa: `7,3`.

`acidemia` = pH sanguíneo menor de `7,35`.

`alcalemia` = pH sanguíneo mayor de `7,45`.

La acidosis es un aumento de la cantidad global de iones hidrógeno en el organismo, la cual puede estar compensada para mantener el pH dentro de lo normal.

A diferencia de la acidemia, la acidosis es compatible con un pH normal; lo mismo ocurre con la alcalosis.

Es importante tener presente que el pH tiene relación con la concentración de `H+` libres en solución y NO con los hidrogeniones unidos a una base.

## theme: Tema 2 - Sistema tampón

### section: Definición de sistema tampón y neutralización de ácido fuerte

#### block: 1
SISTEMAS TAMPÓN.

Un tampón o amortiguador ácido-básico es una solución de dos o más compuestos químicos que evita la producción de cambios intensos en la concentración de iones hidrógeno, cuando a dicha solución se le añade un ácido o una base fuerte.

Ejemplo de estos sistemas es el amortiguador formado por el bicarbonato y el ácido carbónico.

En primer lugar, el ácido carbónico es un ácido muy débil y se encuentra en solución. Aproximadamente 999 partes de cada 1.000 se disocian en dióxido de carbono y agua, con el resultado final de una elevada concentración de `CO2` disuelto más una pequeña concentración de ácido.

Cuando a una solución que contiene bicarbonato sódico se le añade un ácido fuerte, como el clorhídrico, ocurre la siguiente reacción:

`HCl + NaHCO3 -> H2CO3 + NaCl`

Puede observarse cómo un ácido fuerte, el clorhídrico, es convertido en otro muy débil, el carbónico, por lo que la adición de ese ácido fuerte sólo bajaría ligeramente el pH de la solución.

### section: Neutralización de base fuerte y relación bicarbonato ácido carbónico

#### block: 1
De la misma forma, si añadimos una base fuerte, como el hidróxido sódico, a una solución que contiene ácido carbónico, tendrá lugar la reacción:

`NaOH + H2CO3 -> NaHCO3 + H2O`

Donde observamos que el ion `OH-` del hidróxido sódico se combina con el hidrógeno del ácido carbónico para producir agua, formando además bicarbonato sódico.

El resultado neto del sistema tampón es la transformación de la base fuerte, `NaOH`, en la base débil, `NaHCO3`.

En un individuo normal, con un `pH` de `7,4`, existe en el líquido extracelular una concentración porcentual de una parte de ácido carbónico y veinte partes de bicarbonato, constituyendo ello la base de la ecuación de Henderson-Hasselbach, y el organismo tratará de corregir cualquier alteración de esta relación para mantener la estabilidad de este equilibrio.

Si aplicamos la ecuación de Henderson-Hasselbalch al sistema bicarbonato/ácido carbónico:

```text
              HCO3-
pH = pK + log -------
              H2CO3
```

### section: Ecuación con CO2 y pCO2

#### block: 1
Como la concentración de `H2CO3` es tan pequeña y es difícil de medir, habitualmente se recurre a incluir en la fórmula el `CO2`, aprovechando que su concentración es proporcional a la de `H2CO3`.

Por lo tanto, la ecuación sería:

```text
                    HCO3- (mmol/L)
pH = pK + log --------------------------------
              CO2 disuelto (mmol/L) + H2CO3
```

La concentración real de ácido carbónico en el plasma es tan pequeña que la podemos ignorar.

La concentración de `CO2` disuelto en el plasma es proporcional a su presión parcial por la constante de solubilidad del `CO2` en el agua, que a `37 °C` tiene un valor de `0,03`, expresándola en `mm Hg`; por tanto:

```text
              HCO3-
pH = pK + log ------------
              pCO2 x 0,03
```

Nota: Muchos textos y artículos expresan la `pCO2` en kilopascales, `kPa`. La `pCO2` arterial normal de `40 mmHg = 5,33 kPa`. Para convertir la presión de `mm Hg` a `kPa`, es necesario dividir el valor en `mm Hg` por `7,5`.

### section: Cálculo del pH normal arterial

#### block: 1
Dado que el valor del `pK` del sistema bicarbonato/`CO2` a `37 °C` es de `6,1`, el bicarbonato normal del plasma arterial es de `24 mmol/L`, y la `pCO2` arterial normal es de `40 mmHg`, el pH de la sangre arterial normal será:

```text
                  24                  24
pH = 6,1 + log -------- = 6,1 + log ------- = 6,1 + log 20
               40 x 0,03             1,2

pH = 6,1 + 1,3 = 7,4
```

En condiciones normales las concentraciones de bicarbonato y `CO2` disuelto están en proporción `20/1`, y siempre que esta proporción se mantenga el pH será `7,4`.

### section: Proporcionalidad entre pH, bicarbonato y CO2

#### block: 1
En condiciones normales las concentraciones de bicarbonato y `CO2` disuelto están en proporción `20/1`, y siempre que esta proporción se mantenga el pH será `7,4`.

En otras palabras, el pH del líquido extracelular es directamente proporcional a la concentración de bicarbonato e inversamente proporcional a la de `CO2` disuelto.

```text
             HCO3-                  HCO3-
pH α ------------------    o    pH α -------
        CO2 disuelto                H2CO3
```

Si el bicarbonato aumenta, el pH aumenta; si el bicarbonato disminuye, el pH disminuye.

Si el ácido carbónico, o `CO2` disuelto, aumenta, el pH disminuye; si el ácido carbónico, o `CO2` disuelto, disminuye, el pH aumenta.

### section: Líneas de defensa del pH

#### block: 1
El medio interno ha de mantener un pH dentro de los límites fisiológicos de `7,35` y `7,45`.

Los procesos de eliminación de los ácidos fijos son lentos; sin embargo, el organismo dispone de medios que actúan coordinadamente para defenderse de forma rápida de la acidez.

La primera línea de defensa de efecto rápido o inmediato: sistemas tampón o amortiguadores, y actúan a nivel físico-químico.

La segunda línea de efecto más lento: mecanismos fisiológicos, que se desarrollan a nivel pulmonar y renal.

## theme: Tema 3 - Otros sistemas tampón biológicos

### section: Sistema bicarbonato-ácido carbónico

#### block: 1
Sistemas amortiguadores.

Captan el ion `H+` incorporándolo a su molécula y transformándose en ácidos débiles.

En el organismo existen cuatro tampones principales.

1. SISTEMA BICARBONATO-ÁCIDO CARBÓNICO.

El bicarbonato es el componente metabólico del equilibrio ácido-base.

El riñón regula la concentración de bicarbonato en plasma.

La pérdida de bicarbonato producida por la neutralización de los `H+` es repuesta por el epitelio tubular renal, que es capaz de sintetizar nuevo bicarbonato a partir de la hidratación del `CO2`.

Eso es favorecido por la existencia en dichas células de la enzima anhidrasa carbónica, que a nivel de las células tubulares acelera la formación de ácido carbónico a partir del anhídrido carbónico.

El `H2CO3` formado en el interior de la célula se disocia en bicarbonato, que pasará a la sangre, y en `H+`, que se excretarán por orina.

A este fenómeno es debido el que la orina, en condiciones normales, tenga un pH más ácido que el plasma.

### section: Ventajas del bicarbonato y sistema fosfato

#### block: 1
Aunque el `pK` del ácido carbónico del sistema `HCO3 / H2CO3` es `6,1`, alejado del pH `7,4` que debe tamponar, el sistema posee tres ventajas esenciales:

a. Se encuentra en todos los medios intra y extracelulares.

b. Su concentración es muy elevada, `HCO3- 24 mEq/L`, en el medio extracelular.

c. La concentración de los dos componentes del sistema es regulada: `CO2` por el sistema pulmonar de intercambio de gases, y `HCO3-` por el sistema renal de intercambio de solutos.

2. SISTEMA FOSFATO (`HPO4= / H2PO4-`), `pK 6,8`.

La concentración de fosfatos en el plasma es inferior a la del sistema bicarbonato/ácido carbónico; en consecuencia, la capacidad amortiguadora del sistema fosfato en sangre es la sexta parte de la del sistema bicarbonato.

El sistema fosfato tiene extraordinaria importancia en los líquidos intracelulares, donde su concentración es varias veces mayor.

El fosfato suele concentrarse en los túbulos renales, con lo cual aumenta su poder amortiguador.

### section: Hemoglobina como tampón

#### block: 1
3. Hemoglobina.

A nivel tisular, el dióxido de carbono difunde desde los tejidos hacia los capilares, llegando hasta el interior de los eritrocitos.

En estos, por acción de la anhidrasa carbónica, el dióxido de carbono presente se transforma en ácido carbónico, el cual se ioniza rápidamente originando bicarbonato y `H+`.

Como consecuencia de un aumento de protones, el pH de la sangre disminuye.

Esta disminución no es excesiva, ya que la Hb, en su función de tampón fisiológico, se une a los protones neutralizándolos.

La Hb, tras unirse a los protones, posee una menor afinidad por el oxígeno, y este es cedido más fácilmente a los tejidos.

En el plasma, donde no hay anhidrasa carbónica, la concentración de bicarbonato es muy reducida.

La diferencia de concentración entre el interior del eritrocito y el plasma hace que el bicarbonato salga del glóbulo rojo.

Cuando la sangre llega a los pulmones, el dióxido de carbono abandona por difusión los capilares pulmonares y llega a los alvéolos, donde se elimina.

### section: Amortiguación ósea y proteínas

#### block: 1
4. Amortiguación ósea.

El hueso tiene un papel importante en la amortiguación de cargas ácidas y básicas.

Una carga ácida está asociada con la captación de `H+` en exceso; esto puede ocurrir en intercambio de `Na+` y `K+` por `H+`, y por disolución de hueso mineral que produce liberación de `CaCO3` y `CaHPO4` al líquido extracelular.

Se estima que alrededor del `40%` de la amortiguación de una carga ácida tiene lugar en el hueso, y este porcentaje puede ser mayor en el caso de una acidosis crónica, como ocurre en la insuficiencia renal aguda.

La hormona paratiroidea desempeña un papel importante en la amortiguación ósea.

La capacidad amortiguadora ósea también participa en el mantenimiento del pH en presencia de una carga básica.

Se ha demostrado un aumento del depósito de carbonato en el hueso tras administración de `NaHCO3`.

Proteínas.

Las proteínas intracelulares, con muchos grupos ionizables de diferentes valores de `pK`, proporcionan la contribución mayor a la acción amortiguadora, intercambiándose los `H+` extracelulares con los iones `Na+ (36%)` y `K+ (15%)` unidos a las proteínas.

## theme: Tema 4 - Eliminación de iones de hidrógeno

### section: Componente respiratorio y pCO2

#### block: 1
ELIMINACIÓN DE IONES HIDRÓGENO.

A) COMPONENTE RESPIRATORIO.

El `CO2` va a ser eliminado por la respiración.

A la presión de `CO2`, `pCO2`, se le denomina por tanto componente respiratorio del equilibrio ácido-base.

El aparato respiratorio tiene quimiorreceptores sensibles a la concentración de `H+`, ubicados en el bulbo raquídeo, en la aorta y en la bifurcación de las carótidas.

La estimulación de estos receptores por acidemia determina un aumento de la actividad ventilatoria, lo que produce una mayor eliminación de `CO2`, causando una caída en la concentración de `H2CO3` y, por lo tanto, un aumento del pH que tiende a corregir la acidemia.

Si aumenta la cantidad de anhídrido carbónico formado, también aumenta la concentración a nivel del líquido extracelular.

Por otro lado, si aumenta la ventilación pulmonar, también aumentará la cantidad de anhídrido carbónico eliminado por respiración, determinando una disminución de su concentración en el líquido extracelular.

Al contrario, la alcalemia induce una menor ventilación que tiene un efecto opuesto al ejemplo anterior.

### section: Capacidad compensatoria respiratoria y componente renal

#### block: 1
El aparato respiratorio puede compensar eficientemente y en forma bastante rápida cambios en la concentración de `H+` por variaciones metabólicas en su producción, pero su capacidad máxima de compensar estas alteraciones es limitada.

Obviamente, cuando el trastorno del equilibrio ácido base es de causa respiratoria, este aparato no puede servir para compensar la alteración.

B) COMPONENTE RENAL.

Si bien el riñón no actúa en forma inmediata cuando se ha instaurado un desequilibrio ácido-base, su participación asegura la eliminación definitiva de la carga ácida o alcalina aportada.

El riñón participa en forma importante en la mantención del equilibrio ácido base a través de dos mecanismos principales:

Por una parte, es capaz de regular las pérdidas urinarias del bicarbonato circulante, debido a que puede excretar los excesos de bicarbonato o bien reabsorber el bicarbonato filtrado, si es necesario.

### section: Excreción renal de H+ y bicarbonato

#### block: 1
Por otra parte, el riñón es capaz de excretar `H+` en la forma de `H2PO4-` y de `NH4+`.

Durante este proceso se genera nuevo bicarbonato, lo que hace posible el reemplazo del que se consumió al tamponar los ácidos fijos.

Estas funciones están íntimamente imbricadas con la regulación de la concentración sérica de `Na+` y `K+`, de manera que las alteraciones de la volemia y de estos electrolitos pueden interferir en la mantención del equilibrio ácido base y viceversa.

La acidemia estimula la excreción de `H+` y la retención de bicarbonato a nivel renal, lo que tiende a compensar el desequilibrio.

La alcalemia tiene el efecto contrario.

Estas funciones compensatorias son lentas, pues demoran `12` a `72` horas en alcanzar su máxima eficiencia.

Por lo tanto, el riñón participa en la mantención a largo plazo del equilibrio ácido base, ya que es incapaz de reaccionar ante cambios bruscos en la concentración de hidrogeniones.

### section: Reabsorción y generación renal de bicarbonato

#### block: 1
1. Reabsorción de casi todo el bicarbonato filtrado a lo largo del nefrón, `5000 mmol/día`.

Si este bicarbonato no se reabsorbiera, se acumularía una cantidad equivalente de `H+`, provocando un estado de acidosis incompatible con la vida.

2. Generación de bicarbonato mediante la secreción de `H+`, la combinación de este ion con tampones y la excreción como acidez titulable, `AT: H2PO4-`, y amonio.

El primer mecanismo asegura que sólo trazas del bicarbonato filtrado llegue al nefrón distal y que retorne al compartimiento sanguíneo una cantidad equivalente al bicarbonato filtrado.

El segundo proceso añade bicarbonato nuevo a la sangre por excreción de `H+`.

El metabolismo de glutamina a α-cetoglutarato y amoníaco permite aumentar la excreción de protones como ion amonio.

### section: Eliminación pulmonar y renal de ácidos

#### block: 1
El riñón puede eliminar una orina con pH que oscila entre `4,3` y `8`.

Con el pH de `4,3`, la orina tiene una concentración de iones hidrógeno unas `800` veces más que la sangre con un pH de `7,4`; por otro lado, con un pH de `8`, la concentración de bicarbonato es elevada, pudiendo llegar a `250 mEq/L`.

Los dos órganos capaces de eliminar ácidos que en exceso son nocivos para el organismo son el pulmón, que elimina ácidos volátiles como el `CO2` del ácido carbónico, y el riñón, que se encarga de eliminar ácidos no volátiles.

Cuantitativamente, el pulmón es el que tiene mayor importancia, puesto que puede llegar a eliminar hasta `13.000 mEq/día`, mientras que el riñón sólo alcanza a eliminar de `40` a `80 mEq/día`.

`RIÑÓN / PULMÓN = pH = 7,35 - 7,45`

Si el pH aumenta por encima de `7,45`, pH alcalino, el enfermo presenta una alcalosis.

Si por el contrario disminuye por debajo de `7,35`, pH ácido, el paciente presenta una acidosis.

Si la alteración es debida al numerador, riñón, se la denomina acidosis o alcalosis metabólica.

Cuando estos cambios sean causa del denominador, pulmón, la llamaremos respiratoria.

## theme: Tema 5 - Brecha aniónica

### section: Concepto y cálculo de brecha aniónica

#### block: 1
BRECHA ANIÓNICA.

En el suero normal existe un equilibrio entre los cationes `Na+`, `K+`, `Ca++`, `Mg++`, y los aniones `Cl-`, `HCO3-`, ácidos orgánicos, proteínas y sulfato.

La suma de todos los iones positivos debe ser igual a la suma de todos los iones negativos para mantener la neutralidad eléctrica del plasma.

Sin embargo, en el laboratorio se determina habitualmente sólo las concentraciones de `Na+`, `K+`, `Cl-` y bicarbonato, como `CO2`; por lo tanto, la suma de los cationes medidos va a exceder a la de aniones medidos.

Esta diferencia se conoce como brecha o hueco aniónico, anión gap, anión restante o diferencia de aniones, e incluye fosfatos y sulfatos derivados del metabolismo tisular, lactato y cetoácidos originados en la oxidación incompleta de carbohidratos y ácidos grasos, y proteínas de carga negativa, principalmente albúmina.

El valor normal de la brecha aniónica es de `10` a `12 mEq/L`.

La albúmina y otras proteínas explican por lo general la mitad de esta brecha aniónica.

Dado que la concentración de `K+` es relativamente constante, para calcular la brecha aniónica se emplea la siguiente ecuación:

`(Na+) - (Cl- + HCO3-) = Brecha aniónica`

`Anión gap (brecha aniónica) = Na - (Cl- + HCO3-)`

Valores normales:

`12 mEq/L = 140 - (103 + 24) = 12`

El aumento del AG se relaciona con la acumulación de hidrogeniones, y es un signo de acidosis metabólica.

### section: Evaluación ácido-base y gasometría arterial

#### block: 1
Evaluación del equilibrio ácido base.

El sistema `HCO3 / H2CO3` se puede evaluar fácilmente midiendo el pH y la `pCO2`.

A partir del pH y la `pCO2`, por relaciones matemáticas, se puede calcular la concentración de `HCO3` mediante la ecuación de Henderson-Hasselbach.

```text
              HCO3-
pH = pK + log ------------
              pCO2 x 0,03
```

Usualmente, en la práctica clínica, midiendo dos de estos tres elementos de la ecuación es posible calcular el `HCO3-`, con lo que se tiene una imagen completa del estado de este sistema tampón, y como todos los tampones funcionan paralelamente, se puede evaluar el estado ácido base total del organismo.

GASOMETRÍA ARTERIAL.

La medición de los gases contenidos en la sangre arterial es la prueba funcional pulmonar más importante realizada a pacientes que están en estado crítico.

VALORES NORMALES DE LA G.A.

```text
+--------+----------------+
| pH     | 7,35 - 7,45    |
| pO2    | 80 - 100 mmHg  |
| pCO2   | 35 - 45 mmHg   |
| SatO2  | 95 - 100%      |
| HCO3-  | 22 - 26 mEq/L  |
+--------+----------------+
```

### section: Valores normales del equilibrio ácido-base

#### block: 1
VALORES NORMALES DEL EQUILIBRIO ÁCIDO-BASE.

```text
+------------------------+------------------------------------------------------------+
| pH                     | 7,35 - 7,45                                               |
| pCO2                   | 40 mm Hg                                                  |
| Bicarbonato actual     | 21 - 24 mEq/L                                             |
| Bicarbonato Standard   | 24 mEq/L                                                  |
| Buffer base            | 45 - 55 mEq/L                                             |
| Exceso de bases        | +/- 2 mEq/L                                               |
+------------------------+------------------------------------------------------------+
```

Bicarbonato actual: es el bicarbonato real que contiene la sangre analizada.

Bicarbonato Standard: es la cantidad de bicarbonato que tendría dicha sangre si su `pCO2` fuese de `40 mm Hg`.

Buffer base: expresa la cantidad total de bases que contiene la sangre analizada.

Exceso de bases: indica el acúmulo de ácidos o bases que se ha producido en un momento determinado.

# unit: Unidad 3 - Trastornos del equilibrio ácido-base

## theme: Tema 1 - Trastornos y compensación del equilibrio ácido-base

### section: Clasificación de trastornos ácido-base

#### block: 1
TRASTORNOS DEL EQUILIBRIO ÁCIDO BASE.

Se pueden identificar fácilmente en la mayoría de los casos analizando los valores de pH y `pCO2` en sangre arterial.

Clásicamente, se distinguen las alteraciones de origen respiratorio de las de causa no respiratoria, que usualmente se denominan metabólicas.

En consecuencia, existen cuatro alteraciones básicas:

1. Acidosis respiratoria.

2. Acidosis metabólica.

3. Alcalosis respiratoria.

4. Alcalosis metabólica.

Ocasionalmente pueden coexistir otros tipos de alteraciones en conjunto, los llamados trastornos mixtos.

Además, con el análisis del pH y `pCO2` es posible determinar si un trastorno está o no compensado.

### section: Compensación de las alteraciones

#### block: 1
COMPENSACIÓN DE LAS ALTERACIONES DEL EQUILIBRIO ÁCIDO-BÁSICO.

Los ejemplos de trastornos del equilibrio ácido-básico que analizaremos son teóricos, no existen de esta manera en la clínica, porque cuando se inician estas anomalías, el organismo comienza a compensarlas de manera que lo que suele observarse en realidad son alteraciones acompañadas de los esfuerzos por compensarlas.

Por ejemplo:

Si el organismo perdiese bicarbonatos, acidosis metabólica, dando lugar a que la relación bicarbonato/ácido carbónico, en lugar de ser `20:1`, fuese `10:1`, el pH descendería a `7,1`; pero en el mismo momento que el bicarbonato se pierde, se estimula el centro respiratorio, con lo cual se elimina `CO2` por respiración, y al disminuir la `pCO2`, la relación bicarbonato/ácido carbónico vuelve a `20:1`, y el pH vuelve a lo normal, aunque las cantidades netas de bicarbonato y ácido carbónico se encuentran disminuidas.

Se dice entonces que la acidosis metabólica se encuentra compensada, porque el pH es normal, pero la concentración de bicarbonato y la `pCO2` no lo están.

### section: Significado de compensado

#### block: 1
Decir compensado no significa normal, pues el mecanismo de compensación no puede mantenerse de manera permanente, sino que sólo nos da un tiempo para que se corrija el trastorno inicial.

El enfermo con una alteración compensada sigue estando muy grave, sólo que no muere gracias a esta compensación, pero cuando el mecanismo de compensación se agota, el enfermo puede morir.

Lo más frecuente es encontrar alteraciones no totalmente compensadas, en las que se identifica un intento por lograr el equilibrio.

## theme: Tema 2 - Acidosis y alcalosis metabólica

### section: Mecanismos de acidosis metabólica y compensación respiratoria

#### block: 1
ACIDOSIS METABÓLICA.

Es un proceso fisiológico anormal que puede producirse por dos mecanismos:

a. Ganancia de ácidos por el organismo.

b. Pérdida de bicarbonato del líquido extracelular.

En la acidosis metabólica el riñón no elimina el exceso de `H+` y no recupera una cantidad suficiente de bicarbonato.

Un nivel disminuido de bicarbonato en presencia de una `pCO2` normal produce una disminución de la relación entre el bicarbonato y el ácido carbónico, menos de `20:1`, por lo que ocasiona una reducción del pH.

La compensación respiratoria se realizará mediante hiperventilación: bajando la `pCO2`.

En todas estas situaciones el organismo tiende a reponer la relación normal de `20:1` entre el bicarbonato y el ácido carbónico, como compensación.

En la acidosis metabólica los pulmones tienden a compensar eliminando cantidades mayores de `CO2`, hiperventilando.

Al reducir la `pCO2`, como el bicarbonato está bajo por la alteración primaria, se tiende a restablecer la relación `20:1` entre el bicarbonato y el ácido carbónico y, en consecuencia, el pH se desplaza hacia la normalidad.

### section: Analítica de acidosis metabólica

#### block: 1
Fisiológicamente, la compensación nunca es completa.

La corrección de la acidosis se realizará a nivel renal, recuperando éste la pérdida de bicarbonatos.

Las alteraciones en la analítica son:

`pH < 7,35.`

`HCO3 < 22 mEq/L.`

`pCO2 < 35 mmHg`, si hay compensación.

La disminución de bicarbonato origina acidosis, y se debe a:

- La pérdida de bicarbonato por el riñón o por el colon.

- O bien por la aparición de otros ácidos con valores anormales en el plasma.

### section: Brecha aniónica en acidosis metabólica

#### block: 1
Para distinguir estas dos situaciones se utiliza el concepto de brecha aniónica.

De la medición de la brecha aniónica surgen dos tipos de acidosis metabólica:

1. De diferencia aniónica normal.

2. De diferencia aniónica elevada.

La primera resulta de la pérdida de bicarbonato por el riñón o por el colon, que se equilibra con el aumento del valor de cloruro; por eso se le llama acidosis metabólica hiperclorémica.

La segunda surge del aumento de los aniones no cuantificados como lactato, cuerpos cetónicos, fosfato.

En este segundo tipo, la concentración de cloruro se mantiene constante, por lo que se conoce como acidosis metabólica normoclorémica.

### section: Acidosis láctica, cetoacidosis y clasificación

#### block: 1
Acidosis láctica es el tipo más común de acidosis metabólica y se produce por aumento de ácido láctico.

La hipoxia celular debida a insuficiencia respiratoria y cardíaca, hipovolemia o anemia, es la causa más frecuente de acidosis láctica.

Otros factores originan acidosis láctica: defectos genéticos de gluconeogénesis, intoxicaciones por cianuro, salicilatos, etanol, monóxido de carbono, y la deficiencia de tiamina.

Cetoacidosis: acumulación de cuerpos cetónicos en diabetes mellitus descontrolada, ayuno, intoxicación alcohólica, y ciertos defectos enzimáticos de glicogenólisis y gluconeogénesis.

```text
+-------------------------------------------+----------------------------------------------+
| De brecha aniónica alta o normoclorémica  | De brecha aniónica normal o hiperclorémica  |
+-------------------------------------------+----------------------------------------------+
| Acidosis láctica                          | Acidosis tubular renal                       |
| Cetoacidosis                              | Posalcalosis respiratoria                    |
| Insuficiencia renal                       | Diarrea                                      |
| Intoxicación por ácidos                   | Intoxicación por clorhidratos                |
| Aminoacidemias                            | Inhibidores de la anhidrasa carbónica        |
+-------------------------------------------+----------------------------------------------+
```

### section: Causas específicas de acidosis metabólica

#### block: 1
Insuficiencia renal: en las fases iniciales, acidosis metabólica hiperclorémica por incapacidad de los túbulos para excretar protones. En las fases avanzadas, normoclorémica, porque la filtración glomerular disminuye más de `75%`, con retención de fosfatos y sulfatos.

Acidosis tubular renal: por defectos de la reabsorción de bicarbonato en el túbulo contorneado proximal, y por defecto de excreción de protones en el túbulo contorneado distal.

Diarrea: toxinas de `V. cholerae`, `Staphilococcus` y `E. coli` originan diarrea con gran pérdida de bicarbonato; cuando ésta se relaciona con deshidratación intensa, la hipovolemia produce acidosis láctica.

Postalcalosis respiratoria: en hiperventilación crónica, el riñón pierde bicarbonato como compensación; al eliminarse la hiperventilación, la acidosis metabólica se corrige al cabo de `2 - 3 días`.

Inhibidores de la anhidrasa carbónica: medicamentos como la acetazolamida, tratamiento de glaucoma y de urolitiasis por ácido úrico, inhiben la reabsorción de bicarbonato.

Intoxicación por clorhidratos: cuando se utilizan aminoácidos, lisina y arginina, por vía parenteral y no han sido previamente neutralizados.

### section: Compensación de la acidosis metabólica

#### block: 1
COMPENSACIÓN DE LA ACIDOSIS METABÓLICA.

Se logra mediante el aparato respiratorio por hiperventilación, respiración profunda y relativamente lenta; esto permite un nuevo equilibrio con bicarbonato: `pCO2` menor que lo normal y pH más cercano a la normalidad.

Cuando se logra una compensación completa, la `pCO2` es igual a `1,5` veces la concentración sérica de bicarbonato.

Cifras mayores de `pCO2` implican una compensación incompleta, ya sea porque ha transcurrido un tiempo insuficiente para la compensación, o porque los mecanismos de compensación respiratoria son defectuosos.

### section: Alcalosis metabólica

#### block: 1
ALCALOSIS METABÓLICA.

Se debe a una disminución de la concentración en los líquidos extracelulares de iones de hidrógeno provenientes de ácidos.

Se caracteriza por un aumento de bicarbonatos.

Se producirá un aumento del pH, o sea una alcalosis, y al ser producida por un aumento de `HCO3-` se llamará metabólica.

La compensación ventilatoria se realiza bajo forma de hipoventilación para aumentar el nivel de `CO2`, llevando el pH a un valor normal.

Las alteraciones analíticas son:

`pH > 7,45.`

`HCO3- > 26 mEq/L.`

`pCO2 > 45 mmHg`, si hay compensación.

Causas:

Por pérdidas de iones de hidrógeno:

- Vómitos, aspiraciones gástricas.

- Pérdida de potasio por aumento de la excreción renal, como es al administrar diuréticos.

- Ingestión excesiva de bases como el bicarbonato de sodio en una enfermedad ácido-péptica.

## theme: Tema 3 - Acidosis y alcalosis respiratoria

### section: Acidosis respiratoria

#### block: 1
ACIDOSIS RESPIRATORIA.

Se produce por una disminución primaria de la ventilación pulmonar, que conduce a un aumento de la `pCO2`.

La acidosis respiratoria se caracteriza por la incapacidad de los pulmones para eliminar todo el `CO2` producido por el organismo, por lo cual la `pCO2` aumenta y la existencia de un nivel normal de bicarbonato produce una disminución en la relación bicarbonato/ácido carbónico.

La compensación, en este caso, se producirá porque el riñón eliminará una mayor cantidad de `H+`, causando de este modo un incremento del bicarbonato.

La compensación renal consiste en una reabsorción con aumento de bicarbonato.

Para restaurar el equilibrio, el organismo trata de aumentar la base bicarbonato, eliminando el riñón una orina ácida, situación denominada acidosis respiratoria compensada.

En el caso de la acidosis respiratoria aguda, esta compensación lenta es insuficiente y el pH desciende.

En el curso de la acidosis respiratoria crónica, el pH se mantiene a costa de una tasa de bicarbonato muy elevada.

### section: Analítica y causas de acidosis respiratoria

#### block: 1
ACIDOSIS RESPIRATORIA.

En la analítica encontramos:

`pH < 7,35.`

`HCO3- > 26 mEq/L`, si hay compensación.

`pCO2 > 45 mmHg.`

Causas:

Depresión del SNC por fármacos, lesión o enfermedad.

Asfixia.

Hipoventilación por enfermedad pulmonar, cardíaca, músculo esquelética o neuromuscular.

### section: Alcalosis respiratoria

#### block: 1
ALCALOSIS RESPIRATORIA.

Es producida por aumento de la ventilación pulmonar, que conduce a un descenso de la `pCO2`.

La alcalosis respiratoria se caracteriza por una eliminación excesiva de `CO2` a través de los pulmones.

La reducción de la `pCO2`, con niveles normales de bicarbonato, aumenta la relación entre bases y ácidos, por lo que se eleva el pH.

En este caso, la compensación la establecen los riñones, reduciendo la producción de bicarbonato y aumentando la excreción de bicarbonato.

El riñón elimina orina alcalina, encontrándonos entonces con una alcalosis respiratoria compensada.

### section: Analítica y causas de alcalosis respiratoria

#### block: 1
ALCALOSIS RESPIRATORIA.

En la analítica aparece:

`pH > 7,45.`

`HCO3- < 22 mEq/L`, si hay compensación.

`pCO2 < 35 mmHg.`

Causas:

Por una hiperventilación alveolar:

- De origen central, por ejemplo, estimulación de los centros respiratorios en la intoxicación con ácido salicílico.

- Secundaria a una hipoxia.

- En el curso de una respiración asistida, hiperventilación en ventilación mecánica.

- Hiperventilación por dolor, ansiedad.

- Bacteriemia por Gran negativos.

### section: Regla general de compensación

#### block: 1
RECORDAR QUE:

En términos generales, cuando el trastorno primario es metabólico, renal, la compensación es respiratoria y se produce inmediatamente.

Por el contrario, cuando la alteración primaria es de origen respiratorio, la compensación es metabólica y los mecanismos renales que se ponen en marcha requieren varios días para llevar a cabo dicha compensación.

## theme: Tema 4 - Desequilibrio ácido-básico mixto

### section: Trastornos mixtos con alcalosis y acidosis metabólica

#### block: 1
DESEQUILIBRIO ÁCIDO-BÁSICO MIXTO.

Estas alteraciones se producen cuando dos o más causas de desequilibrio se dan en el mismo paciente.

Alcalosis respiratoria más alcalosis metabólica: se observa en pacientes en estado crítico debido a hiperventilación, combinada con succión nasogástrica, transfusiones múltiples.

Otro ejemplo es la alcalosis metabólica por vómitos, a la que se suma alcalosis respiratoria por hiperventilación.

Acidosis respiratoria más alcalosis metabólica: enfermos con bronquitis crónica sufren acidosis respiratoria, y al ser tratados con esteroides pueden desarrollar alcalosis metabólica.

Acidosis metabólica mixta: en la nefropatía diabética incipiente ocurre acidosis tubular renal, a la que puede sumarse una cetoacidosis por descontrol.

Una diarrea intensa con pérdida de bicarbonato puede llevar a una hipovolemia, causando acidosis láctica.

### section: Combinaciones mixtas adicionales

#### block: 1
Acidosis metabólica más acidosis respiratoria: la acidosis metabólica grave origina debilidad muscular y con ello hipoventilación, agregando acidosis respiratoria.

Acidosis metabólica más alcalosis metabólica: el vómito frecuente que se asocie con diarrea, cetoacidosis o insuficiencia renal puede producir que se sumen acidosis y alcalosis metabólica.

Acidosis metabólica más alcalosis respiratoria: en la insuficiencia hepática grave es posible que coexistan hiperventilación y acidosis láctica.

En los síndromes neurorrenales pueden coexistir insuficiencia renal e insuficiencia respiratoria.

## theme: Tema 5 - Consecuencias fisiológicas

### section: Consecuencias fisiológicas de la acidosis

#### block: 1
CONSECUENCIAS FISIOLÓGICAS.

ACIDOSIS.

El aumento de la concentración de hidrogeniones tiene múltiples efectos fisiológicos, muchos de ellos de gran trascendencia.

Al alterar el estado eléctrico de muchas proteínas, los sistemas enzimáticos fallan, lo que determina alteraciones en la función de varios órganos.

Se consideran graves las acidosis con pH menor de `7,20`.

Las alteraciones más importantes son las fallas del ritmo cardíaco, arritmias, que pueden causar eventualmente la muerte por paro cardíaco, hiperkalemia.

En acidosis metabólicas, los protones libres ingresan a la célula para tamponarse, siendo necesaria la salida de potasio hacia el LEC para mantener la electroneutralidad, lo que causa hiperkalemia.

Lo contrario sucede en alcalosis, hipokalemia.

### section: Tratamiento y signos de acidosis

#### block: 1
Otros efectos importantes son cambios en la concentración de `Cl-` y estimulación respiratoria, que es el signo más característico, pues causa una respiración profunda, relativamente lenta, denominada de Kussmaul.

Además, puede haber compromiso de conciencia, debilidad muscular, insuficiencia cardíaca, hipotensión arterial.

En las acidosis de origen respiratorio, el tratamiento está dirigido a mejorar la ventilación.

En las acidosis metabólicas, en cambio, son necesarias la corrección de la causa y la eventual administración de bicarbonato de sodio.

### section: Consecuencias fisiológicas de la alcalosis

#### block: 1
CONSECUENCIAS FISIOLÓGICAS.

ALCALOSIS.

También en este caso existen múltiples alteraciones, entre las cuales la más característica es la tetania, que se observa especialmente en alcalosis de rápida instalación.

Ella es debida a una reducción del calcio iónico, debido a que en alcalosis existe una mayor afinidad de las proteínas transportadoras por este ion, aumentando la excitabilidad neuromuscular.

Además, se produce hipokalemia debido a entrada de `K+` al intracelular.

También en este caso el mayor problema es el aumento en la susceptibilidad para desarrollar arritmias.

El tratamiento está dirigido a corregir las causas del trastorno base.
