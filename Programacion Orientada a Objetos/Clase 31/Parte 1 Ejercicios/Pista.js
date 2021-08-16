"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pista = /** @class */ (function () {
    function Pista(identificador, titulo, duracion, interprete) {
        this.identificador = identificador;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
    Pista.prototype.getIdentificador = function () {
        return this.identificador;
    };
    Pista.prototype.getTitulo = function () {
        return this.titulo;
    };
    Pista.prototype.getDuracion = function () {
        return this.duracion;
    };
    Pista.prototype.getInterprete = function () {
        return this.interprete;
    };
    return Pista;
}());
exports.default = Pista;
