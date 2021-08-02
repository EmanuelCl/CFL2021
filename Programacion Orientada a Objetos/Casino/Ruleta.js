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
var LectorEscritor_1 = __importDefault(require("./LectorEscritor"));
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.lectorEscritor = new LectorEscritor_1.default();
    }
    Ruleta.prototype.aleatorio = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Ruleta.prototype.jugarRuleta = function () {
        var opciones = read.question("Elija su apuesta: (PLENO),(SEMIPLENO),(CALLE),(CUADRO),(LINEA),(COLUMNA),(DOCENA): ").toUpperCase();
        var apuesta = read.questionInt("Ingrese el monto a apostar: ");
        var parImpar = read.question("Desea apostar a: (PAR) , (IMPAR) , (X) Para continuar: ").toUpperCase();
        var premio = 0;
        var numero = this.aleatorio(0, 36);
        switch (opciones) {
            case "PLENO": {
                var numIngresado = read.questionInt("Ingrese un numero: ");
                premio = apuesta * 35;
                if ((numIngresado == numero) || (numIngresado == 0)) {
                    console.log("Felicitaciones! has ganado: ", "$", premio);
                    console.log("Numero Ganador: ", numero);
                }
                else {
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ", numero);
                }
                break;
            }
            case "SEMIPLENO": {
                var numIngresado = read.questionInt("Ingrese el Primer Numero: ");
                var numIngresadoDos = read.questionInt("Ingrese el Segundo Numero: ");
                premio = apuesta * 17;
                if (numIngresado == numero || numIngresadoDos == numero) {
                    console.log("Felicitaciones! has ganado: ", "$", premio);
                    console.log("Numero Ganador: ", numero);
                }
                else {
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ", numero);
                }
                break;
            }
            case "CALLE": {
                var numIngresado = read.questionInt("Ingrese el primer numero: ");
                var numIngresadoDos = read.questionInt("Ingrese el segundo numero: ");
                var numIngresadoTres = read.questionInt("Ingrese el tercer numero: ");
                premio = apuesta * 11;
                if (numIngresado == numero || numIngresadoDos == numero || numIngresadoTres == numero) {
                    console.log("Felicitaciones! has ganado: ", "$", premio);
                    console.log("Numero Ganador: ", numero);
                }
                else {
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ", numero);
                }
                break;
            }
            case "CUADRO": {
                var numIngresado = read.questionInt("Ingrese el primer numero: ");
                var numIngresadoDos = read.questionInt("Ingrese el segundo numero: ");
                var numIngresadoTres = read.questionInt("Ingrese el tercer numero: ");
                var numIngresadoCuatro = read.questionInt("Ingrese el cuarto numero: ");
                premio = apuesta * 8;
                if (numIngresado == numero || numIngresadoDos == numero || numIngresadoTres == numero || numIngresadoCuatro == numero) {
                    console.log("Felicitaciones! has ganado: ", "$", premio);
                    console.log("Numero Ganador: ", numero);
                }
                else {
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ", numero);
                }
                break;
            }
            case "LINEA": {
                var numIngresado = read.questionInt("Ingrese el primer numero: ");
                var numIngresadoDos = read.questionInt("Ingrese el segundo numero: ");
                var numIngresadoTres = read.questionInt("Ingrese el tercer numero: ");
                var numIngresadoCuatro = read.questionInt("Ingrese el cuarto numero: ");
                var numIngresadoCinco = read.questionInt("Ingrese el quinto numero: ");
                var numIngresadoSeis = read.questionInt("Ingrese el sexto numero: ");
                premio = apuesta * 5;
                if (numIngresado == numero || numIngresadoDos == numero || numIngresadoTres == numero || numIngresadoCuatro == numero || numIngresadoCinco == numero || numIngresadoSeis == numero) {
                    console.log("Felicitaciones! has ganado: ", "$", premio);
                    console.log("Numero Ganador: ", numero);
                }
                else {
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ", numero);
                }
                break;
            }
            case "COLUMNA": {
                var columna = read.questionInt("Cual columna desea apostar: 1, 2 o 3? ");
                var columnaUno = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
                var columnaDos = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
                var columnaTres = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
                premio = apuesta * 2;
                switch (columna) {
                    case 1: {
                        for (var i = 0; i < columnaUno.length; i++) {
                            if (columnaUno[i] == numero) {
                                console.log("Felicitaciones! has ganado: ", "$", premio);
                                console.log("Numero Ganador: ", numero);
                            }
                        }
                        console.log("Lo sentimos, Has perdido");
                        console.log("Numero Ganador: ", numero);
                        break;
                    }
                    case 2: {
                        for (var i = 0; i < columnaDos.length; i++) {
                            if (columnaDos[i] == numero) {
                                console.log("Felicitaciones! has ganado: ", "$", premio);
                                console.log("Numero Ganador: ", numero);
                            }
                        }
                        console.log("Lo sentimos, Has perdido");
                        console.log("Numero Ganador: ", numero);
                        break;
                    }
                    case 3: {
                        for (var i = 0; i < columnaTres.length; i++) {
                            if (columnaTres[i] == numero) {
                                console.log("Felicitaciones! has ganado: ", "$", premio);
                                console.log("Numero Ganador: ", numero);
                            }
                        }
                        console.log("Lo sentimos, Has perdido");
                        console.log("Numero Ganador: ", numero);
                        break;
                    }
                    default: {
                        console.log("La opcion ingresada no es correcta.");
                        columna = read.questionInt("Cual columna desea apostar: 1, 2 o 3? ");
                    }
                }
                break;
            }
            case "DOCENA": {
                var docena = read.questionInt("Elija un numero siendo: 1=(Primer Docena), 2=(Segunda Docena), 3=(Tercer Docena): ");
                var primerDocena = this.aleatorio(0, 12);
                var segunDocena = this.aleatorio(13, 24);
                var tercerDocena = this.aleatorio(25, 36);
                premio = apuesta * 2;
                switch (docena) {
                    case 1: {
                        if (numero == primerDocena) {
                            console.log("Felicitaciones! has ganado: ", "$", premio);
                            console.log("Numero Ganador: ", numero);
                        }
                        else {
                            console.log("Lo sentimos, has perdido!");
                            console.log("Numero Ganador: ", numero);
                        }
                        break;
                    }
                    case 2: {
                        if (numero == segunDocena) {
                            console.log("Felicitaciones! has ganado: ", "$", premio);
                            console.log("Numero Ganador: ", numero);
                        }
                        else {
                            console.log("Lo sentimos, has perdido!");
                            console.log("Numero Ganador: ", numero);
                        }
                        break;
                    }
                    case 3: {
                        if (numero == tercerDocena) {
                            console.log("Felicitaciones! has ganado: ", "$", premio);
                            console.log("Numero Ganador: ", numero);
                        }
                        else {
                            console.log("Lo sentimos, has perdido!");
                            console.log("Numero Ganador: ", numero);
                        }
                        break;
                    }
                    default: {
                        console.log("La opcion ingresada no es correcta.");
                        docena = read.questionInt("Elija un numero siendo: 1=(Primer Docena), 2=(Segunda Docena), 3=(Tercer Docena): ");
                    }
                }
            }
        }
        if (parImpar == "PAR") {
            premio = apuesta;
            if (numero % 2 == 0) {
                console.log("El numero es Par, Has ganado: ", premio);
            }
            else {
                console.log("El numero es Impar, Has perdido!");
            }
        }
        if (parImpar == "IMPAR") {
            if (numero % 2 != 0) {
                console.log("El numero es Impar, Has ganado: ", premio);
            }
        }
        this.lectorEscritor.guardarResultado("ruleta.txt", "ESTADISTICAS JUGADA:" + " \n " + "Tipo de apuesta: " + " " + opciones + " \n " + "Premio Ganado: " + premio + " \n " + "Monto Apostado: " + apuesta + " \n " + "Par o Impar: " + parImpar + " \n " + "Numero Ganador: " + numero + "\n");
    };
    return Ruleta;
}());
exports.default = Ruleta;
