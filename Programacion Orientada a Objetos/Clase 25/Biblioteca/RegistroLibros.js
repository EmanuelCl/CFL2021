"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var FS = require("fs");
var Libro_1 = require("./Libro");
var RegistroLibros = /** @class */ (function () {
    function RegistroLibros() {
        this.libros = [];
    }
    RegistroLibros.prototype.addLibro = function () {
        var nombre = RLS.question('Ingrese el nombre: ');
        var editorial = RLS.question('Ingrese la editorial: ');
        var genero = RLS.question('Ingrese el genero: ');
        var año = RLS.questionInt('Ingrese el año: ');
        this.libros.push(new Libro_1["default"](nombre, editorial, genero, año));
    };
    RegistroLibros.prototype.findLibro = function (nombre) {
        for (var i = 0; i < this.libros.length; i++) {
            if (nombre == this.libros[i].getNombre()) {
                return i;
            }
        }
        return -1;
    };
    RegistroLibros.prototype.deleteLibro = function (nombre) {
        var posicion = this.findLibro(nombre);
        if (posicion != -1) {
            this.libros.splice(posicion, 1);
        }
    };
    RegistroLibros.prototype.updateLibro = function (libroViejo) {
        var nombre = RLS.question('Ingrese el nombre del libro actualizado: ');
        var editorial = RLS.question('Ingrese la editorial del libro actualizado : ');
        var genero = RLS.question('Ingrese el genero del libro actualizado: ');
        var año = RLS.questionInt('Ingrese el año del libro actualizado: ');
        var posicion = this.findLibro(libroViejo);
        if (posicion != -1) {
            this.libros[posicion] = new Libro_1["default"](nombre, editorial, genero, año);
        }
        else {
            console.log("el libro no existe");
        }
    };
    RegistroLibros.prototype.mostrarLibros = function () {
        console.log(this.libros);
    };
    RegistroLibros.prototype.cargarLibros = function () {
        var _this = this;
        var libros = (FS.readFileSync('libros.txt', 'utf8')).split('\n');
        var propiedadesLibro = [];
        libros.forEach(function (libroString) {
            propiedadesLibro = libroString.split(";");
            _this.libros.push(new Libro_1["default"](propiedadesLibro[0], propiedadesLibro[1], propiedadesLibro[2], parseInt(propiedadesLibro[3])));
        });
    };
    return RegistroLibros;
}());
exports["default"] = RegistroLibros;
