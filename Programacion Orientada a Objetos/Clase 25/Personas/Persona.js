"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, genero, edad, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
        this.edad = edad;
        this.dni = dni;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getGenero = function () {
        return this.genero;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    return Persona;
}());
exports["default"] = Persona;
