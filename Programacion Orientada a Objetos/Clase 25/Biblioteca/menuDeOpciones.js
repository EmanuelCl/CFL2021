"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var RegistroLibros_1 = require("./RegistroLibros");
var registro = new RegistroLibros_1["default"]();
registro.cargarLibros();
registro.mostrarLibros();
var opcion = RLS.question('Ingrese una opcion:(C:CREAR)(R:BUSCAR)(U:BUSCAR Y REEMPLAZAR)(D:ELIMINAR), X para finalizar: ').toUpperCase();
var nombre;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.addLibro();
            break;
        }
        case 'R': {
            nombre = RLS.question('Ingrese el nombre del Libro a buscar: ');
            console.log("Encontre el libro en la posicion " + registro.findLibro(nombre) + ".");
            break;
        }
        case 'U': {
            nombre = RLS.question('Ingrese la palabra a buscar y reemplazar: ');
            registro.updateLibro(nombre);
            break;
        }
        case 'D': {
            nombre = RLS.question('Ingrese el libro a eliminar: ');
            registro.deleteLibro(nombre);
            break;
        }
    }
    registro.mostrarLibros();
    opcion = RLS.question('Ingrese una opcion:(C:CREAR)(R:BUSCAR)(U:BUSCAR Y REEMPLAZAR)(D:ELIMINAR), X para finalizar: ').toUpperCase();
}
