"use strict";
exports.__esModule = true;
var Read = require("readline-sync");
var Persona_1 = require("./Persona");
var LectorArchivos_1 = require("./LectorArchivos");
var RegistroPersonas = /** @class */ (function () {
    function RegistroPersonas() {
        this.personas = [];
        this.lectorArchivos = new LectorArchivos_1["default"]();
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
    RegistroPersonas.prototype.cargarPersonas = function () {
        var _this = this;
        var personas = this.lectorArchivos.cargaDatos("personas.txt", '\ n');
        var propiedadesPersona = [];
        personas.forEach(function (personaString) {
            propiedadesPersona = personaString.split(";");
            _this.personas.push(new Persona_1["default"](propiedadesPersona[0], propiedadesPersona[1], propiedadesPersona[2], parseInt(propiedadesPersona[3]), parseInt(propiedadesPersona[4])));
        });
    };
    return RegistroPersonas;
}());
exports["default"] = RegistroPersonas;
