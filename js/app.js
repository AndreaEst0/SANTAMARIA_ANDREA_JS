const PRECIO_ENTRADA = 20;
const CUPOS_INICIALES = 50;
const DESC_ESTUDIANTE = 0.30;
const DESC_DOCENTE = 0.15;
const DESC_GENERAL = 0.00;
const MAX_ENTRADAS_COMPRA = 5;

let cuposDisponibles = CUPOS_INICIALES;
let totalEntradasVendidas = 0;
let ingresosAcumulados = 0;
let numeroCompras = 0;
let opcionMenu = "";

do {
    opcionMenu = prompt(
        "SISTEMA INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Seleccione una opción (1-4):"
    );

    if (opcionMenu === null) {
        alert("Operación cancelada. Para cerrar el sistema, seleccione la opción 4.");
        continue;
    }

    switch (opcionMenu.trim()) {
        
        case "1":
            if (cuposDisponibles === 0) {
                alert("Lo sentimos, el evento está agotado. No hay cupos disponibles.");
                break;
            }

            let nombreComprador = prompt("Ingrese el nombre del comprador:");
            if (nombreComprador === null || nombreComprador.trim() === "") {
                alert("Error: Debe ingresar un nombre válido. Compra cancelada.");
                break;
            }
            nombreComprador = nombreComprador.trim();

            let tipoInput = prompt(
                "Seleccione el tipo de participante:\n" +
                "- estudiante\n" +
                "- docente\n" +
                "- publico general"
            );

            if (tipoInput === null || tipoInput.trim() === "") {
                alert("Error: Debe ingresar un tipo de participante. Compra cancelada.");
                break;
            }

            let tipoNormalizado = tipoInput.trim().toLowerCase();
            let porcentajeDescuento = 0;
            let etiquetaParticipante = "";
            let tipoValido = true;

            if (tipoNormalizado === "estudiante") {
                porcentajeDescuento = DESC_ESTUDIANTE;
                etiquetaParticipante = "Estudiante";
            } else if (tipoNormalizado === "docente") {
                porcentajeDescuento = DESC_DOCENTE;
                etiquetaParticipante = "Docente";
            } else if (tipoNormalizado === "publico general" || tipoNormalizado === "público general") {
                porcentajeDescuento = DESC_GENERAL;
                etiquetaParticipante = "Público general";
            } else {
                tipoValido = false;
            }

            if (!tipoValido) {
                alert("Error: Tipo de participante no válido. Solo se permite: estudiante, docente o público general. Compra rechazada.");
                break;
            }

            let cantidadInput = prompt(`Ingrese la cantidad de entradas (1 a ${MAX_ENTRADAS_COMPRA}):`);
            if (cantidadInput === null || cantidadInput.trim() === "") {
                alert("Error: Debe ingresar una cantidad. Compra rechazada.");
                break;
            }

            let cantidadEntradas = Number(cantidadInput);

            if (
                isNaN(cantidadEntradas) ||
                !Number.isInteger(cantidadEntradas) ||
                cantidadEntradas < 1 ||
                cantidadEntradas > MAX_ENTRADAS_COMPRA
            ) {
                alert(`Error: La cantidad debe ser un número entero entre 1 y ${MAX_ENTRADAS_COMPRA}. Compra rechazada.`);
                break;
            }

            if (cantidadEntradas > cuposDisponibles) {
                alert(`Error: Cupos insuficientes. Solo quedan ${cuposDisponibles} entradas disponibles. Compra rechazada.`);
                break;
            }

            let subtotal = cantidadEntradas * PRECIO_ENTRADA;
            let montoDescuento = subtotal * porcentajeDescuento;
            let totalPagar = subtotal - montoDescuento;

            cuposDisponibles -= cantidadEntradas;
            totalEntradasVendidas += cantidadEntradas;
            ingresosAcumulados += totalPagar;
            numeroCompras += 1;

            // resumen de compra
            let porcentajeTexto = (porcentajeDescuento * 100).toFixed(0);
            let resumenCompra =
                "SIMULACIÓN DE UNA COMPRA\n" +
                `Nombre: ${nombreComprador}\n` +
                `Tipo de participante: ${etiquetaParticipante}\n` +
                `Cantidad de entradas: ${cantidadEntradas}\n\n` +
                `Subtotal: $${subtotal.toFixed(2)}\n` +
                `Descuento (${porcentajeTexto} %): $${montoDescuento.toFixed(2)}\n` +
                `Total a pagar: $${totalPagar.toFixed(2)}\n\n` +
                "Compra realizada exitosamente.\n\n" +
                `Cupos restantes: ${cuposDisponibles}`;

            alert(resumenCompra);
            console.log(resumenCompra);
            break;

        
        case "2":
            let mensajeDisponibilidad = "";

            if (cuposDisponibles > 10) {
                mensajeDisponibilidad = "Cupos disponibles";
            } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
                mensajeDisponibilidad = "Últimos cupos disponibles";
            } else {
                mensajeDisponibilidad = "Evento agotado";
            }

            let reporteCupos =
                "CONSULTA DE CUPOS - INNOVA ESPE 2026\n\n" +
                `Cupos disponibles: ${cuposDisponibles}\n` +
                `Estado: ${mensajeDisponibilidad}`;

            alert(reporteCupos);
            console.log(reporteCupos);
            break;

        case "3":
            let reporteIngresos =
                "CONSULTA DE INGRESOS ACUMULADOS\n\n" +
                `Total de entradas vendidas: ${totalEntradasVendidas}\n` +
                `Total de ingresos acumulados: $${ingresosAcumulados.toFixed(2)}\n` +
                `Número de compras realizadas: ${numeroCompras}`;

            alert(reporteIngresos);
            console.log(reporteIngresos);
            break;

        
        case "4":
            let resumenFinal =
                "RESUMEN FINAL - SISTEMA INNOVA ESPE 2026\n\n" +
                `Total de compras realizadas: ${numeroCompras}\n` +
                `Total de entradas vendidas: ${totalEntradasVendidas}\n` +
                `Cupos restantes: ${cuposDisponibles}\n` +
                `Ingresos totales generados: $${ingresosAcumulados.toFixed(2)}\n\n` +
                "Gracias por utilizar el sistema.";

            alert(resumenFinal);
            console.log(resumenFinal);
            break;

        default:
            alert("Error: Opción no válida. Por favor, ingrese un número del 1 al 4.");
            break;
    }

} while (opcionMenu !== "4");