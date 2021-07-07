"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var cantidad = readlineSync.question("Cuantas palabras desea Ingresar? ");
var arreglo = [];
function cargarPalabras(arreglo, cantidad) {
    for (var i = 0; i < cantidad; i++) {
        arreglo[i] = readlineSync.question("Ingrese palabras: ");
    }
}
cargarPalabras(arreglo, cantidad);
console.log(arreglo);
function modificar(arreglo) {
    var palabra = readlineSync.question("Indique la posicion en la cual desea Insertar/eliminar/buscar/actualizar palabras: ");
    console.log(arreglo[palabra]);
    arreglo[palabra] = readlineSync.question("Inserte/elimine/busque/actualice palabras: ");
    console.log(arreglo);
}
modificar(arreglo);
