"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno_1 = __importDefault(require("./Alumno"));
var Examen_1 = __importDefault(require("./Examen"));
var LectorArchivos_1 = __importDefault(require("./LectorArchivos"));
var gestorLegajos = /** @class */ (function () {
    function gestorLegajos() {
        this.lectorArchivos = new LectorArchivos_1.default();
        this.alumnos = [];
        this.notas = [];
    }
    gestorLegajos.prototype.cargarAlumnos = function (rutaArchivo, separador) {
        var _this = this;
        var alumnos = this.lectorArchivos.cargarDatos(rutaArchivo, separador);
        var propiedadesAlumno = [];
        alumnos.forEach(function (autoString) {
            propiedadesAlumno = autoString.split(";");
            _this.alumnos.push(new Alumno_1.default(propiedadesAlumno[0], propiedadesAlumno[1], parseInt(propiedadesAlumno[2])));
        });
    };
    gestorLegajos.prototype.cargarNotas = function (rutaArchivo, separador) {
        var _this = this;
        var notas = this.lectorArchivos.cargarDatos(rutaArchivo, separador);
        var propiedadesNotas = [];
        notas.forEach(function (notaString) {
            propiedadesNotas = notaString.split(";");
            _this.notas.push(new Examen_1.default(parseInt(propiedadesNotas[0]), parseInt(propiedadesNotas[1]), parseInt(propiedadesNotas[2])));
        });
    };
    gestorLegajos.prototype.buscarAlumno = function (nombre) {
        for (var posicion = 0; posicion < this.alumnos.length; posicion++) {
            if (nombre == this.alumnos[posicion].getNombre()) {
                this.obtenerPromedio(posicion);
            }
        }
    };
    gestorLegajos.prototype.obtenerPromedio = function (posicion) {
        var promedio;
        promedio = this.notas[posicion].getNotaUno() + this.notas[posicion].getNotaDos() + this.notas[posicion].getNotaTres();
        console.log(this.alumnos[posicion]);
        console.log("El promedio del Alumno es de ", promedio / 3);
    };
    gestorLegajos.prototype.obtenerPromedioGeneral = function () {
        for (var i = 0; i < this.alumnos.length; i++) {
            var promedio = this.notas[i].getNotaUno() + this.notas[i].getNotaDos() + this.notas[i].getNotaTres();
            console.log(this.alumnos[i], "Promedio: ", promedio / 3);
        }
    };
    gestorLegajos.prototype.mostrarAlumnos = function () {
        console.log(this.alumnos);
    };
    return gestorLegajos;
}());
exports.default = gestorLegajos;
