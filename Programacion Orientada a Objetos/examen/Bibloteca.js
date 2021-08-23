"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bibloteca = /** @class */ (function () {
    function Bibloteca() {
        this.elementos = [];
        this.nombreBibloteca = "Bibloteca Rivadavia";
        this.direccion = "Almafuerte 570";
    }
    Bibloteca.prototype.insertar = function (a) {
        if (this.elementos.push(a)) {
            return true;
        }
        return false;
    };
    Bibloteca.prototype.buscar = function (id) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (id == this.elementos[i].getIsbm()) {
                console.log(this.elementos[i]);
            }
        }
        throw new Error("El Articulo no se encuentra");
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
        for (var i = 0; i < this.elementos.length; i++) {
            if (a == this.elementos[i].getAutor()) {
                console.log(this.elementos[i]);
            }
        }
        return this.elementos;
    };
    Bibloteca.prototype.modificarPaginas = function (id) {
        for (var i = 0; i < this.elementos.length; i++) {
            this.elementos[i].setCantidadPaginas(id);
        }
        return true;
    };
    Bibloteca.prototype.mostrarBibloteca = function () {
        console.log(this.nombreBibloteca, this.direccion);
        console.log(this.elementos);
    };
    return Bibloteca;
}());
exports.default = Bibloteca;
