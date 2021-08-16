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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pista_1 = __importDefault(require("./Pista"));
var LectorArchivos_1 = __importDefault(require("./LectorArchivos"));
var read = __importStar(require("readline-sync"));
var GestorPistas = /** @class */ (function () {
    function GestorPistas() {
        this.listaReproduccion = [];
        this.lectorArchivos = new LectorArchivos_1.default();
    }
    GestorPistas.prototype.crearLista = function () {
        var cantidad = read.questionInt("Cuantas pistas de audio desea agregar? ");
        for (var i = 0; i < cantidad; i++) {
            this.agregarPistas();
        }
    };
    GestorPistas.prototype.agregarPistas = function () {
        var identificador = read.questionInt("Ingrese el identificador de la pista: ");
        var titulo = read.question("Ingrese el titulo de la pista: ");
        var duracion = read.questionInt("Ingrese la duracion de la pista: ");
        var interprete = read.question("Ingrese el interprete de la pista: ");
        this.listaReproduccion.push(new Pista_1.default(identificador, titulo, duracion, interprete));
        var totalPistas = this.listaReproduccion.length;
        console.log("Creando Pista de Audio....");
        console.log("Agregando a la lista de reproduccion....");
        console.log("Total de Pistas en la Lista: ", totalPistas);
    };
    GestorPistas.prototype.mostrarPista = function () {
        console.log(this.listaReproduccion);
    };
    GestorPistas.prototype.cargarPistas = function (rutaArchivo, separador) {
        var _this = this;
        var pistas = this.lectorArchivos.cargaDatos(rutaArchivo, separador);
        var propiedadesPistas = [];
        pistas.forEach(function (autoString) {
            propiedadesPistas = autoString.split(";");
            _this.listaReproduccion.push(new Pista_1.default(parseInt(propiedadesPistas[0]), propiedadesPistas[1], parseInt(propiedadesPistas[2]), propiedadesPistas[3]));
        });
    };
    return GestorPistas;
}());
exports.default = GestorPistas;
