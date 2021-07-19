"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo, año) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAño = function () {
        return this.año;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;
