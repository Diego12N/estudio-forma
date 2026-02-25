# Estudio Forma — Sistema de análisis de proyectos

Ejercicio de JavaScript puro desarrollado como parte de mi plan de estudio frontend.

## Contexto de negocio
Estudio Forma es una agencia de diseño que necesita analizar su cartera de proyectos.
Este módulo resuelve tres necesidades concretas del negocio:

1. Calcular la facturación de un mes específico
2. Detectar proyectos atrasados
3. Identificar los 3 clientes más rentables

## Funciones

### `calcularFacturacionMes(proyectos, mes, anio)`
Devuelve el monto total facturado en un mes y año específicos,
considerando solo proyectos con fecha de entrega confirmada.

### `obtenerProyectosAtrasados(proyectos)`
Devuelve los proyectos en progreso cuya fecha límite ya pasó
respecto a la fecha actual.

### `top3ClientesRentables(proyectos)`
Devuelve los nombres de los 3 clientes con mayor monto acumulado,
considerando todos sus proyectos independientemente del estado.

## Conceptos aplicados
- Array methods: `filter`, `reduce`, `map`, `sort`, `slice`
- Manejo de fechas con `Date`
- Objeto acumulador para agrupar datos
- `Object.entries()` para convertir objetos en arrays