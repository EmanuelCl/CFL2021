"use strict";
exports.__esModule = true;
var Libro = /** @class */ (function () {
    function Libro(nombre, editorial, genero, año) {
        this.nombre = nombre;
        this.editorial = editorial;
        this.genero = genero;
        this.año = año;
    }
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.getAño = function () {
        return this.año;
    };
    Libro.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Libro;
}());
exports["default"] = Libro;
