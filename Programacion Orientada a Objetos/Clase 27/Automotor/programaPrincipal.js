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
var RLS = __importStar(require("readline-sync"));
var RegistroVehiculos_1 = __importDefault(require("./RegistroVehiculos"));
var registro = new RegistroVehiculos_1.default();
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
