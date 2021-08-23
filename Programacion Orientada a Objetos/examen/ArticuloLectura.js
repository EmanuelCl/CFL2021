"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticuloLectura = /** @class */ (function () {
    function ArticuloLectura(isbm, autor, editorial, titulo, cantidadPaginas) {
        this.isbm = isbm;
        this.autor = autor;
        this.editorial = editorial;
        this.titulo = titulo;
        this.cantidadPaginas = cantidadPaginas;
    }
    ArticuloLectura.prototype.getIsbm = function () {
        return this.isbm;
    };
    ArticuloLectura.prototype.getAutor = function () {
        return this.autor;
    };
    ArticuloLectura.prototype.getEditorial = function () {
        return this.editorial;
    };
    ArticuloLectura.prototype.getTitulo = function () {
        return this.titulo;
    };
    ArticuloLectura.prototype.getCantPaginas = function () {
        return this.cantidadPaginas;
    };
    return ArticuloLectura;
}());
exports.default = ArticuloLectura;
