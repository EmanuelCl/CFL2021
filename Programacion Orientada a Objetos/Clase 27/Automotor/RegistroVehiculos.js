"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var FS = require("fs");
var Vehiculo_1 = require("./Vehiculo");
var RegistroVehiculos = /** @class */ (function () {
    function RegistroVehiculos() {
        this.vehiculos = [];
    }
    RegistroVehiculos.prototype.addVehiculo = function () {
        this.vehiculos.push(this.pedirDatos());
    };
    RegistroVehiculos.prototype.findVehiculo = function (patente) {
        for (var i = 0; i < this.vehiculos.length; i++) {
            if (patente == this.vehiculos[i].getPatente()) {
                return i;
            }
        }
        return -1;
    };
    RegistroVehiculos.prototype.deleteVehiculo = function (patente) {
        var posicion = this.findVehiculo(patente);
        if (posicion != -1) {
            this.vehiculos.splice(posicion, 1);
        }
    };
    RegistroVehiculos.prototype.updateVehiculo = function (vehiculoViejo) {
        var posicion = this.findVehiculo(vehiculoViejo);
        if (posicion != -1) {
            this.vehiculos[posicion] = this.pedirDatos();
        }
        else {
            console.log("el vehiculo no existe");
        }
    };
    RegistroVehiculos.prototype.mostrarVehiculo = function () {
        console.log(this.vehiculos);
    };
    RegistroVehiculos.prototype.cargarVehiculo = function (rutaArchivo, separador) {
        var _this = this;
        var vehiculos = (FS.readFileSync(rutaArchivo, 'utf8')).split(separador);
        var propiedadVehiculo = [];
        vehiculos.forEach(function (vehiculoString) {
            propiedadVehiculo = vehiculoString.split(";");
            _this.vehiculos.push(new Vehiculo_1["default"](propiedadVehiculo[0], propiedadVehiculo[1], propiedadVehiculo[2], parseInt(propiedadVehiculo[3])));
        });
    };
    RegistroVehiculos.prototype.pedirDatos = function () {
        var patente = RLS.question('Ingrese la Patente: ');
        var marca = RLS.question('Ingrese la marca: ');
        var modelo = RLS.question('Ingrese el modelo: ');
        var año = RLS.questionInt('Ingrese el año: ');
        var vehiculo = new Vehiculo_1["default"](patente, marca, modelo, año);
        return vehiculo;
    };
    return RegistroVehiculos;
}());
exports["default"] = RegistroVehiculos;
