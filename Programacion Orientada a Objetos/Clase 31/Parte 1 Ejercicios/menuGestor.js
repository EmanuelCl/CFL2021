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
var GestorPistas_1 = __importDefault(require("./GestorPistas"));
var read = __importStar(require("readline-sync"));
var gestor = new GestorPistas_1.default();
gestor.cargarPistas("pistas.txt", "\n");
gestor.mostrarPista();
var opcion = read.question("Opciones: (C=Crear Lista de Reproduccion), (T=Ver cantidad total de pistas), (D=Ver duracion total de la pista), (DT=Ver duracion total lista) X para finalizar: ").toUpperCase();
while (opcion != "X") {
    switch (opcion) {
        case "C": {
            gestor.crearLista();
            break;
        }
        case "T": {
            gestor.mostrarTotal();
            break;
        }
        case "D": {
            var identificador = read.questionInt("Ingrese el numero de identificador de la pista: ");
            gestor.duracionTotalPista(identificador);
        }
        case "DT": {
            gestor.duracionTotalLista();
        }
    }
    opcion = read.question("Opciones: (C=Crear Lista de Reproduccion), (T=Ver cantidad total de pistas), (D=Ver duracion total de la pista), (DT=Ver duracion total lista) X para finalizar: ").toUpperCase();
}
