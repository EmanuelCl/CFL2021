"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticuloLectura = /** @class */ (function () {
    function ArticuloLectura(isbm, Autor, Editorial, Titulo, cantidadPaginas) {
        this.isbm = isbm;
        this.Autor = Autor;
        this.Editorial = Editorial;
        this.Titulo = Titulo;
        this.cantidadPaginas = cantidadPaginas;
    }
    ArticuloLectura.prototype.getIsbm = function () {
        return this.isbm;
    };
    ArticuloLectura.prototype.getAutor = function () {
        return this.Autor;
    };
    ArticuloLectura.prototype.getEditorial = function () {
        return this.Editorial;
    };
    ArticuloLectura.prototype.getTitulo = function () {
        return this.Titulo;
    };
    ArticuloLectura.prototype.setCantidadPaginas = function (c) {
        this.cantidadPaginas = c;
    };
    return ArticuloLectura;
}());
exports.default = ArticuloLectura;
