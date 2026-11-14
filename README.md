# Sistema de Venta de Entradas - Innova ESPE 2026

Prototipo desarrollado en JavaScript nativo para la gestión de venta de entradas, cálculo de descuentos y control de aforo del evento ficticio **Innova ESPE 2026** de la Universidad de las Fuerzas Armadas – ESPE.

## Funcionalidades implementadas
- **RF01:** Configuración de constantes de precios, descuentos (Estudiante 30%, Docente 15%, Público general 0%) y variables de estado.
- **RF02:** Menú interactivo cíclico mediante `do...while` y control de flujo con `switch`.
- **RF03:** Proceso de compra con validación de tipo de participante, límite de entradas por compra (1 a 5), validación de números enteros y control de stock.
- **RF04:** Consulta dinámica de cupos con alertas según disponibilidad (`>10`, `1-10`, `0`).
- **RF05:** Reporte de entradas vendidas, número de transacciones e ingresos acumulados.
- **RF06:** Cierre del sistema con resumen general.

## Ejecución
1. Clonar el repositorio.
2. Abrir el archivo `index.html` en cualquier navegador web moderno.
3. Interactuar mediante las ventanas emergentes (`prompt` / `alert`) y revisar el historial en la consola (`F12`).
