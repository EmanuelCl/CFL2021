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
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas() {
        this.lectorEscritor = new LectorEscritor_1.default();
    }
    Tragamonedas.prototype.aleatorio = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Tragamonedas.prototype.jugarTragamonedas = function () {
        var monto = read.questionInt("Ingrese el monto a apostar: ");
        var numeroUno = this.aleatorio(1, 9);
        var numeroDos = this.aleatorio(1, 9);
        var numeroTres = this.aleatorio(1, 9);
        var premio = 0;
        var resultado;
        if (monto < 0) {
            throw new Error('El monto ingresado no puede ser menor a 0');
        }
        if (numeroUno == numeroDos && numeroUno == numeroTres) {
            premio = monto * 10;
            console.log([numeroUno], [numeroDos], [numeroTres]);
            console.log("Felicitaciones! has ganado: ", "$", premio);
        }
        else if (numeroDos == numeroUno && numeroDos == numeroTres) {
            premio = monto * 10;
            console.log([numeroUno], [numeroDos], [numeroTres]);
            console.log("Felicitaciones! has ganado: ", "$", premio);
        }
        else if (numeroUno == numeroDos || numeroUno == numeroTres) {
            premio = monto * 2;
            console.log([numeroUno], [numeroDos], [numeroTres]);
            console.log("Felicitaciones! has ganado: ", "$", premio);
        }
        else if (numeroDos == numeroUno || numeroDos == numeroTres) {
            premio = monto * 2;
            console.log([numeroUno], [numeroDos], [numeroTres]);
            console.log("Felicitaciones! has ganado: ", "$", premio);
        }
        else {
            console.log("Lo sentimos has perdido", [numeroUno], [numeroDos], [numeroTres]);
        }
        this.lectorEscritor.guardarResultado("tragamonedas.txt", "ESTADISTICAS JUGADA:" + " \n " + "Premio Ganado: " + premio + " \n " + "Monto Apostado: " + monto + " \n " + "Numeros Jugada: " + numeroUno + "," + numeroDos + "," + numeroTres + " \n");
    };
    return Tragamonedas;
}());
exports.default = Tragamonedas;
