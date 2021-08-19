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
var Kiosco_1 = __importDefault(require("./Kiosco"));
var read = __importStar(require("readline-sync"));
var kiosco = new Kiosco_1.default();
kiosco.cargarArtDisponible();
kiosco.mostrarStock();
var opcion = read.question("Elija una Opcion: (C=Comprar Articulo) , (S=Stock Disponible) , (V=Articulos Vendidos), (B=Borrar listado de Articulos vendidos),  X para finalizar: ").toUpperCase();
while (opcion != "X") {
    switch (opcion) {
        case "C": {
            var articulo = read.question("Ingrese el nombre del articulo que desea comprar: ");
            kiosco.comprarArticulo(articulo);
            console.log("Gracias por su Compra");
            break;
        }
        case "S": {
            kiosco.mostrarStock();
        }
        case "V": {
            kiosco.cargarArtVendidos();
            kiosco.mostrarVendidos();
            break;
        }
        case "B": {
            kiosco.vaciarTxtVendidos();
            break;
        }
    }
    opcion = read.question("Elija una Opcion: (C=Comprar Articulo) , (S=Stock Disponible) , (V=Articulos Vendidos), (B=Borrar listado de Articulos vendidos),  X para finalizar: ").toUpperCase();
}
