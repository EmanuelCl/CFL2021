let readlineSync=require("readline-Sync");
let precioProducto = readlineSync.questionInt("Ingrese el precio del producto:");
let porcentajeDescuento = readlineSync.questionInt("Ingrese el porcentaje a descontar:");
let descuento = precioProducto*porcentajeDescuento/100;
let precioFinal = precioProducto-descuento;
console.log(precioFinal);