"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RLS = __importStar(require("readline-sync"));
var Vehiculo = /** @class */ (function () {
    function Vehiculo(tipo, patente, marca, modelo, año) {
        this.tipo = tipo;
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
    Vehiculo.prototype.aleatorio = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Vehiculo.prototype.calcularSeguro = function () {
        var valorTotal = RLS.questionInt("Ingrese el valor del Vehiculo: $");
        var cuotaMensual = (valorTotal / 100) / 6;
        console.log("El valor de la cuota mensual 1/6 es: $", cuotaMensual);
    };
    return Vehiculo;
}());
exports.default = Vehiculo;
