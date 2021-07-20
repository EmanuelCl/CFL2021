"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var FS = require("fs");
var Vehiculo_1 = require("./Vehiculo");
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var RegistroVehiculos = /** @class */ (function () {
    function RegistroVehiculos() {
        this.vehiculos = [];
    }
    RegistroVehiculos.prototype.addVehiculo = function () {
        var tipo = RLS.question("Ingrese el tipo de vehiculo: ");
        var patente = RLS.question('Ingrese la Patente: ');
        var marca = RLS.question('Ingrese la marca: ');
        var modelo = RLS.question('Ingrese el modelo: ');
        var año = RLS.questionInt('Ingrese el año: ');
        switch (tipo.toUpperCase()) {
            case "auto": {
                var combustible = RLS.question("Ingrese el tipo de Combustible: ");
                this.vehiculos.push(new Auto_1["default"](tipo, patente, marca, modelo, año, combustible));
                break;
            }
            case "moto": {
                var cilindrada = RLS.questionInt("Ingrese la Cilindrada: ");
                this.vehiculos.push(new Moto_1["default"](tipo, patente, marca, modelo, año, cilindrada));
                break;
            }
            case "camion": {
                var cargaKg = RLS.questionInt("Ingrese la capacidad de Carga: ");
                this.vehiculos.push(new Camion_1["default"](tipo, patente, marca, modelo, año, cargaKg));
                break;
            }
            default: {
                console.log("El tipo de vehiculo ingresado no es admitido en este registro.");
            }
        }
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
        var tipo = RLS.question("Ingrese el tipo de vehiculo: ").toUpperCase();
        var patente = RLS.question('Ingrese la Patente: ');
        var marca = RLS.question('Ingrese la marca: ');
        var modelo = RLS.question('Ingrese el modelo: ');
        var año = RLS.questionInt('Ingrese el año: ');
        var posicion = this.findVehiculo(vehiculoViejo);
        if (posicion != -1) {
            this.vehiculos[posicion] = new Vehiculo_1["default"](tipo, patente, marca, modelo, año);
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
            switch (propiedadVehiculo[0]) {
                case "auto": {
                    _this.vehiculos.push(new Auto_1["default"](propiedadVehiculo[0], propiedadVehiculo[1], propiedadVehiculo[2], propiedadVehiculo[3], parseInt(propiedadVehiculo[4]), propiedadVehiculo[5]));
                    break;
                }
                case "moto": {
                    _this.vehiculos.push(new Moto_1["default"](propiedadVehiculo[0], propiedadVehiculo[1], propiedadVehiculo[2], propiedadVehiculo[3], parseInt(propiedadVehiculo[4]), parseInt(propiedadVehiculo[5])));
                    break;
                }
                case "camion": {
                    _this.vehiculos.push(new Camion_1["default"](propiedadVehiculo[0], propiedadVehiculo[1], propiedadVehiculo[2], propiedadVehiculo[3], parseInt(propiedadVehiculo[4]), parseInt(propiedadVehiculo[5])));
                    break;
                }
            }
        });
    };
    return RegistroVehiculos;
}());
exports["default"] = RegistroVehiculos;
