"use strict";
exports.__esModule = true;
var Read = require("readline-sync");
var RegistroPersonas_1 = require("./RegistroPersonas");
var registro = new RegistroPersonas_1["default"]();
registro.cargarPersonas();
registro.mostrarPersonas();
var opcion = Read.question('Ingrese una opcion:(C:CREAR)(R:BUSCAR)(U:BUSCAR Y REEMPLAZAR)(D:ELIMINAR), X para finalizar: ');
var dni;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.agregarPersona();
            break;
        }
        case 'R': {
            dni = Read.questionInt('Ingrese el DNI de la Persona: ');
            console.log("Encontre el DNI en la posicion " + registro.buscarPersona(dni) + ".");
            break;
        }
        case 'U': {
            dni = Read.questionInt('Ingrese el DNI de la Persona a modificar: ');
            registro.modificarRegistro(dni);
            break;
        }
        case 'D': {
            dni = Read.questionInt('Ingrese el DNI de la Persona a Eliminar: ');
            registro.eliminarPersona(dni);
            break;
        }
    }
    registro.mostrarPersonas();
    opcion = Read.question('Ingrese una opcion:(C:CREAR)(R:BUSCAR)(U:BUSCAR Y REEMPLAZAR)(D:ELIMINAR), X para finalizar: ').toUpperCase();
}
//NPM RUN EJECUTAR
