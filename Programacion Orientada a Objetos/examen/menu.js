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
var Bibloteca_1 = __importDefault(require("./Bibloteca"));
var Libro_1 = __importDefault(require("./Libro"));
var Revista_1 = __importDefault(require("./Revista"));
var read = __importStar(require("readline-sync"));
var bibloteca = new Bibloteca_1.default();
bibloteca.insertar(new Libro_1.default(22340, "Dan Brown", "Random House", "El código Da Vinci", 200));
bibloteca.insertar(new Libro_1.default(65423, "J.K.Rowling", "Salamandra", "Harry Potter", 500));
bibloteca.insertar(new Revista_1.default(45721, "Caras", "Revista Caras", "Vacunas Coronavirus", 50));
bibloteca.mostrarBibloteca();
var opciones = read.question("Ingrese Una Opcion: (A=Agregar Articulo) , (B=Borrar Articulo) , (F=Buscar Articulo) (M=Modificar Paginas) , (T=Buscar por Autor) , X para finalizar: ").toUpperCase();
while (opciones != "X") {
    switch (opciones) {
        case "A": {
            var opcion = read.question("Desea Agregar un (L=Libro) o (R=Revista): ").toUpperCase();
            if (opcion == "L") {
                var isbm = read.questionInt("Ingrese el numero ID: ");
                var autor = read.question("Ingrese el Autor: ");
                var editorial = read.question("Ingrese la editorial: ");
                var titulo = read.question("Ingrese el titulo: ");
                var cantPag = read.questionInt("Ingrese la cantidad de paginas: ");
                bibloteca.insertar(new Libro_1.default(isbm, autor, editorial, titulo, cantPag));
                bibloteca.mostrarBibloteca();
                break;
            }
            if (opcion == "R") {
                var isbm = read.questionInt("Ingrese el numero ID: ");
                var autor = read.question("Ingrese el Autor: ");
                var editorial = read.question("Ingrese la editorial: ");
                var titulo = read.question("Ingrese el titulo: ");
                var cantPag = read.questionInt("Ingrese la cantidad de paginas: ");
                bibloteca.insertar(new Revista_1.default(isbm, autor, editorial, titulo, cantPag));
                bibloteca.mostrarBibloteca();
                break;
            }
        }
        case "B": {
            var id = read.questionInt("Ingrese el numero ID: ");
            bibloteca.eliminar(id);
            bibloteca.mostrarBibloteca();
            break;
        }
        case "F": {
            var id = read.questionInt("Ingrese el numero ID: ");
            bibloteca.buscar(id);
        }
        case "T": {
            var autor = read.question("Ingrese el Autor: ");
            bibloteca.buscarPorAutor(autor);
            break;
        }
        case "M": {
            var id = read.questionInt("Ingrese el numero ID: ");
            bibloteca.modificarPaginas(id);
            bibloteca.mostrarBibloteca();
            break;
        }
    }
    opciones = read.question("Ingrese Una Opcion: (A=Agregar Articulo) , (B=Borrar Articulo) , (F=Buscar Articulo) (M=Modificar Paginas) , (T=Buscar por Autor) , X para finalizar: ").toUpperCase();
}
