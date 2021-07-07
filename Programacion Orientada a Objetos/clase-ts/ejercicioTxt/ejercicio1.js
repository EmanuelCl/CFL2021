"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var texto = fs.readFileSync('abc.txt', 'utf8');
var arreglo = texto.split(' ');
console.log(arreglo);
function modificar(arreglo) {
    var palabra = readlineSync.question("Indique la posicion en la cual desea Insertar/eliminar/buscar/actualizar palabras: ");
    console.log(arreglo[palabra]);
    arreglo[palabra] = readlineSync.question("Inserte/elimine/busque/actualice palabras: ");
    console.log(arreglo);
}
modificar(arreglo);
