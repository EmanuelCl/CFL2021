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
var read = __importStar(require("readline-sync"));
var Bibloteca = /** @class */ (function () {
    function Bibloteca() {
        this.elementos = [];
        this.nombreBibloteca = "Bibloteca Rivadavia";
        this.direccion = "Almafuerte 570";
    }
    Bibloteca.prototype.insertar = function (a) {
        for (var i = 0; i < this.elementos.length; i++) {
            if (a == this.elementos[i]) {
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
    Bibloteca.prototype.modificarPaginas = function (id) {
        var cantidad = read.questionInt("Ingrese cantidad de paginas: ");
        for (var i = 0; i < this.elementos.length; i++) {
            if (id == this.elementos[i].getIsbm()) {
                this.elementos[i].setCantidadPaginas(cantidad);
            }
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
