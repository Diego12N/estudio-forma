const fechaActual = new Date();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear(); 
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const montoContenedor = document.querySelector("#monto-facturacion");
montoContenedor.textContent = `Facturación ${nombresMeses[mes - 1]} ${anio}: $${calcularFacturacionMes(proyectos, mes, anio).toLocaleString("es-AR")}`;

const listaAtrasados = document.querySelector("#lista-atrasados");

obtenerProyectosAtrasados(proyectos).forEach(proyecto => {
    const li = document.createElement('li');
    li.textContent = `${proyecto.cliente}`;
    
    listaAtrasados.appendChild(li);
});

const listaRentables = document.querySelector("#lista-top-clientes")

top3ClientesRentables(proyectos).forEach(proyecto => {
    const li = document.createElement('li');
    li.textContent = `${proyecto}`;
    
    listaRentables.appendChild(li);
});