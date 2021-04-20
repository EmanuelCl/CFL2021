let readlineSync = require("readline-Sync");
let precioProducto = readlineSync.questionInt("Ingrese el precio del producto:");
let porcentajeDescuento = readlineSync.questionInt("Ingrese el porcentaje de descuento:");
let descuento = precioProducto*porcentajeDescuento/100;
let preciofinal = precioProducto-descuento;
console.log(preciofinal);
