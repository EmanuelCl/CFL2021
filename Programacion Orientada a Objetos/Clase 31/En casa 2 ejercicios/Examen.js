"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Examen = /** @class */ (function () {
    function Examen(notaUno, notaDos, notaTres) {
        this.notaUno = notaUno;
        this.notaDos = notaDos;
        this.notaTres = notaTres;
    }
    Examen.prototype.getNotaUno = function () {
        return this.notaUno;
    };
    Examen.prototype.getNotaDos = function () {
        return this.notaDos;
    };
    Examen.prototype.getNotaTres = function () {
        return this.notaTres;
    };
    return Examen;
}());
exports.default = Examen;
