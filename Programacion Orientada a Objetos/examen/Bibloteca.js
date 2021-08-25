"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bibloteca = /** @class */ (function () {
    function Bibloteca(nombreBibloteca, direccion) {
        this.elementos = [];
        this.nombreBibloteca = nombreBibloteca;
        this.direccion = direccion;
    }
    Bibloteca.prototype.insertar = function (a) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (a != this.elementos[i]) {
                this.elementos.push(a);
                return true;
            }
        }
        return false;
    };
    Bibloteca.prototype.buscar = function (id) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (id == this.elementos[i].getIsbm()) {
                return this.elementos[i];
            }
        }
        return null;
    };
    Bibloteca.prototype.eliminar = function (id) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (id == this.elementos[i].getIsbm()) {
                this.elementos.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Bibloteca.prototype.buscarPorAutor = function (a) {
        var arreglo;
        for (var i = 0; i < this.elementos.length; i++) {
            if (a == this.elementos[i].getAutor()) {
                arreglo.push(this.elementos[i]);
            }
        }
        return arreglo;
    };
    Bibloteca.prototype.modificarPaginas = function (id, paginas) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (id == this.elementos[i].getIsbm()) {
                this.elementos[i].setCantidadPaginas(paginas);
            }
        }
        return true;
    };
    Bibloteca.prototype.mostrarBibloteca = function () {
        console.log(this.elementos);
    };
    return Bibloteca;
}());
exports.default = Bibloteca;
