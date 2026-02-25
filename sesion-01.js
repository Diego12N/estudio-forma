// Sesión 01 — Estudio Forma
// Contexto: sistema interno de gestión de proyectos para una agencia de diseño
// Conceptos: filter, reduce, Date, Object.entries, sort, slice, map

const proyectos = [
  {
    id: 1,
    cliente: "Marca Uno",
    monto: 85000,
    estado: "entregado",
    fechaLimite: "2026-02-10",
    fechaEntrega: "2026-02-08",
  },
  {
    id: 2,
    cliente: "Marca Dos",
    monto: 120000,
    estado: "en progreso",
    fechaLimite: "2026-02-15",
    fechaEntrega: null,
  },
  {
    id: 3,
    cliente: "Marca Uno",
    monto: 60000,
    estado: "entregado",
    fechaLimite: "2026-01-30",
    fechaEntrega: "2026-02-02",
  },
  {
    id: 4,
    cliente: "Marca Tres",
    monto: 200000,
    estado: "entregado",
    fechaLimite: "2026-02-20",
    fechaEntrega: "2026-02-18",
  },
  {
    id: 5,
    cliente: "Marca Dos",
    monto: 95000,
    estado: "en progreso",
    fechaLimite: "2026-02-10",
    fechaEntrega: null,
  },
  {
    id: 6,
    cliente: "Marca Cuatro",
    monto: 40000,
    estado: "entregado",
    fechaLimite: "2026-02-05",
    fechaEntrega: "2026-02-07",
  },
  {
    id: 7,
    cliente: "Marca Tres",
    monto: 175000,
    estado: "en progreso",
    fechaLimite: "2026-02-18",
    fechaEntrega: null,
  },
  {
    id: 8,
    cliente: "Marca Cinco",
    monto: 55000,
    estado: "entregado",
    fechaLimite: "2026-02-12",
    fechaEntrega: "2026-02-11",
  },
];

function calcularFacturacionMes(proyectos, mes, anio) {
  // 1. filtrar solo los proyectos entregados
  const proyectosEntregados = proyectos.filter(
    (proyecto) => proyecto.estado === "entregado",
  );

  const proyectosMes = proyectosEntregados.filter((proyecto) => {
    // extraer el año y mes de proyecto.fechaEntrega
    let fechaEntrega = new Date(proyecto.fechaEntrega);
    let pYear = fechaEntrega.getFullYear();
    let pMonth = fechaEntrega.getMonth() + 1;
    // comparar con mes y anio recibidos\
    return pYear === anio && pMonth === mes;
  });

  const montoTotal = proyectosMes.reduce((acumulador, elemento) => {
    return acumulador + elemento.monto;
  }, 0);

  return montoTotal;
}

function obtenerProyectosAtrasados(proyectos) {
  // 1. Obtener la fecha de hoy
  const fechaActual = new Date().getTime();

  // 2. Filtrar proyectos en progreso cuya fechaLimite ya pasó
  const proyectosAtrasados = proyectos.filter((proyecto) => {
    const fLimite = new Date(proyecto.fechaLimite).getTime();

    return proyecto.estado === "en progreso" && fechaActual > fLimite;
  });

  return proyectosAtrasados;
}

// getTime() devuelve milisegundos desde 01/01/1970. Permite comparar fechas como números. Sin él, JS también convierte fechas automáticamente al comparar con >.

function top3ClientesRentables(proyectos) {
  // 1. Crear objeto acumulador vacío
  const acumulador = {};

  // 2. Recorrer cada proyecto
  proyectos.forEach((proyecto) => {
    // 3. Si el cliente ya existe en el acumulador...
    if (acumulador[proyecto.cliente]) {
      // ...sumarle el monto
      acumulador[proyecto.cliente] += proyecto.monto;
    } else {
      // ...si no existe, crearlo con el monto actual
      acumulador[proyecto.cliente] = proyecto.monto;
    }
  });

  // 4. Convertir el objeto en array, ordenar y tomar los 3 primeros
  // (esto lo vemos juntos después)

  const top3 = Object.entries(acumulador)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, 3)
    .map((p) => {
      return p[0];
    });
    
  return top3;
}