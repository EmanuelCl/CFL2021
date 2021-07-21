"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var RegistroVehiculos_1 = require("./RegistroVehiculos");
var registro = new RegistroVehiculos_1["default"]();
registro.cargarVehiculo('vehiculos.txt', '\n');
registro.mostrarVehiculo();
//menu de opciones CRUD
var opcion = RLS.question('Ingrese una opcion,(C=CREAR),(R=BUSCAR),(U=MODIFICAR),(D=ELIMINAR), X para finalizar: ').toUpperCase();
var patente;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.addVehiculo();
            break;
        }
        case 'R': {
            patente = RLS.question('Ingrese la patente a buscar: ');
            console.log("Encontre la patente en la posicion " + registro.findVehiculo(patente) + ".");
            break;
        }
        case 'U': {
            patente = RLS.question('Ingrese la patente del vehiculo a modificar: ');
            registro.updateVehiculo(patente);
            break;
        }
        case 'D': {
            patente = RLS.question('Ingrese la patente a eliminar: ');
            registro.deleteVehiculo(patente);
            break;
        }
    }
    registro.mostrarVehiculo();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}
