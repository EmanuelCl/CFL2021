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
var read = __importStar(require("readline-sync"));
var gestorLegajos_1 = __importDefault(require("./gestorLegajos"));
var legajo = new gestorLegajos_1.default();
legajo.cargarAlumnos("alumnos.txt", "\n");
legajo.cargarNotas("notas.txt", "\n");
legajo.mostrarAlumnos();
var opcion = read.question("Elija una opcion: (P=Ver Promedio de un alumno) , (T=Ver Promedio de todos los alumnos) , X para finalizar: ").toUpperCase();
while (opcion != "X") {
    switch (opcion) {
        case "P": {
            var nombre = read.question("Ingrese el nombre del Alumno: ");
            legajo.buscarAlumno(nombre);
            break;
        }
        case "T": {
            legajo.obtenerPromedioGeneral();
            break;
        }
    }
    opcion = read.question("Elija una opcion: (P=Ver Promedio de un alumno) , (T=Ver Promedio de todos los alumnos) , X para finalizar: ").toUpperCase();
}
