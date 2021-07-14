"use strict";
exports.__esModule = true;
var Read = require("readline-sync");
var Persona_1 = require("./Persona");
var RegistroPersonas = /** @class */ (function () {
    function RegistroPersonas() {
        this.personas = [];
    }
    RegistroPersonas.prototype.agregarPersona = function () {
        var nombre = Read.question("Ingrese el Nombre: ");
        var apellido = Read.question("Ingrese el Apellido: ");
        var genero = Read.question("Ingrese el Genero: ");
        var edad = Read.questionInt("Ingrese la Edad ");
        var dni = Read.questionInt("Ingrese el DNI: ");
        this.personas.push(new Persona_1["default"](nombre, apellido, genero, edad, dni));
    };
    RegistroPersonas.prototype.buscarPersona = function (dni) {
        for (var i = 0; i < this.personas.length; i++) {
            if (dni == this.personas[i].getDni) {
                return i;
            }
        }
        console.log("No hay resultados");
    };
    RegistroPersonas.prototype.modificarRegistro = function (dniViejo) {
        var nombre = Read.question("Ingrese un nuevo Nombre: ");
        var apellido = Read.question("Ingrese un nuevo Apellido: ");
        var genero = Read.question("Ingrese un nuevo Genero: ");
        var edad = Read.questionInt("Ingrese una nueva Edad ");
        var dni = Read.questionInt("Ingrese un nuevo DNI: ");
        var posicion = this.buscarPersona(dniViejo);
        if (posicion != -1) {
            this.personas[posicion] = new Persona_1["default"](nombre, apellido, genero, edad, dni);
        }
        else {
            console.log("La persona no existe");
        }
    };
    RegistroPersonas.prototype.eliminarPersona = function (dni) {
        var posicion = this.buscarPersona(dni);
        if (posicion != -1) {
            this.personas.splice(posicion, 1);
        }
    };
    RegistroPersonas.prototype.mostrarPersonas = function () {
        console.log(this.personas);
    };
    return RegistroPersonas;
}());
exports["default"] = RegistroPersonas;
