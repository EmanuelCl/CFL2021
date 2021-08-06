"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = __importDefault(require("./Vehiculo"));
var AutoDeCarreras = /** @class */ (function (_super) {
    __extends(AutoDeCarreras, _super);
    function AutoDeCarreras(tipo, patente, marca, modelo, año, velocidadMaxima) {
        var _this = _super.call(this, tipo, patente, marca, modelo, año) || this;
        _this.velocidadMaxima = velocidadMaxima;
        return _this;
    }
    AutoDeCarreras.prototype.velocidadMax = function () {
        return this.velocidadMaxima;
    };
    AutoDeCarreras.prototype.aleatorio = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    AutoDeCarreras.prototype.calcularSeguro = function () {
        var valorTotal = this.aleatorio(20000000, 90000000);
        var cuotaMensual = (valorTotal / 100) / 6;
        console.log("La cotizacion del seguro del Auto de Carreras contra robo e incendio total es: $", valorTotal);
        console.log("El valor de la cuota mensual 1/6 es: $", cuotaMensual);
    };
    return AutoDeCarreras;
}(Vehiculo_1.default));
exports.default = AutoDeCarreras;
