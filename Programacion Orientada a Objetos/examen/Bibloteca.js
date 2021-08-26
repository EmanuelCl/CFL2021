"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bibloteca = /** @class */ (function () {
    function Bibloteca(nombreBibloteca, direccion) {
        this.elementos = [];
        this.nombreBibloteca = nombreBibloteca;
        this.direccion = direccion;
    }
    Bibloteca.prototype.insertar = function (a) {
        var articuloDuplicado = this.buscar(a.getIsbm());
        if (!articuloDuplicado) {
            this.elementos.push(a);
            return true;
        }
        return false;
    };
    Bibloteca.prototype.buscar = function (id) {
        try {
            for (var i = 0; i < this.elementos.length; i++) {
                if (id == this.elementos[i].getIsbm()) {
                    return this.elementos[i];
                }
            }
            throw new Error("Articulo no encontrado");
        }
        catch (error) {
            console.log(error.message);
        }
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
        var arreglo = [];
        for (var i = 0; i < this.elementos.length; i++) {
            if (a == this.elementos[i].getAutor()) {
                arreglo.push(this.elementos[i]);
            }
        }
        return arreglo;
    };
    Bibloteca.prototype.modificarPaginas = function (id, cantidad) {
        if (cantidad <= 0) {
            throw new Error("La cantidad de paginas debe ser mayor a 0");
        }
        try {
            var articulo = this.buscar(id);
            if (articulo && cantidad > 0) {
                articulo.setCantidadPaginas(cantidad);
                return true;
            }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
    Bibloteca.prototype.mostrarBibloteca = function () {
        console.log(this.elementos);
    };
    return Bibloteca;
}());
exports.default = Bibloteca;
