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
var LectorEscritor_1 = __importDefault(require("./LectorEscritor"));
var read = __importStar(require("readline-sync"));
var CustomError_1 = __importDefault(require("./CustomError"));
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.lectorEscritor = new LectorEscritor_1.default();
    }
    BlackJack.prototype.aleatorio = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    BlackJack.prototype.jugarBlackJack = function () {
        var apuesta = read.questionInt("Ingrese el monto a apostar: ");
        var cartaCrupier = this.aleatorio(17, 22);
        var cartaUno = this.aleatorio(1, 10);
        var cartaDos = this.aleatorio(1, 10);
        var cartaAleatoria = this.aleatorio(1, 10);
        var suma = cartaUno + cartaDos;
        console.log("Sus cartas", [cartaUno], [cartaDos], " = ", suma);
        var opciones = read.question("Desea otra carta o se planta? (C=CARTA),(P=PLANTARSE): ").toUpperCase();
        var premio = 0;
        if (opciones != "P" && opciones != "C") {
            throw new CustomError_1.default("La opcion Ingresada debe ser C o P");
        }
        while (suma <= 21 && opciones != "P") {
            cartaAleatoria = this.aleatorio(1, 10);
            suma = suma + cartaAleatoria;
            console.log("Sus cartas", [cartaUno], [cartaDos], [cartaAleatoria], " = ", suma);
            opciones = read.question("Desea otra carta o se planta? (C=CARTA),(P=PLANTARSE): ").toUpperCase();
            if (opciones != "P" && opciones != "C") {
                throw new CustomError_1.default("La opcion Ingresada debe ser C o P");
            }
        }
        if (opciones == "P") {
            if (suma < 21 && cartaCrupier < suma) {
                premio = apuesta * 2;
                console.log("Felicitaciones! has ganado: ", "$", premio);
                console.log("Tu Juego: ", suma);
                console.log("Crupier: ", cartaCrupier);
            }
            if (suma == 21) {
                premio = apuesta * 10;
                console.log("BlackJack! Felicitaciones! Has ganado: ", "$", premio);
                console.log("Tu Juego: ", suma);
                console.log("Crupier: ", cartaCrupier);
            }
            if (cartaCrupier > suma) {
                console.log("Lo sentimos, has perdido!");
                console.log("Tu Juego: ", suma);
                console.log("Crupier: ", cartaCrupier);
            }
            if (suma > 21) {
                console.log("Lo sentimos, has perdido!");
                console.log("Tu Juego: ", suma);
                console.log("Crupier: ", cartaCrupier);
            }
        }
        this.lectorEscritor.guardarResultado("blackjack.txt", "ESTADISTICAS JUGADA:" + " \n " + "Premio Ganado: " + premio + " \n " + "Total Cartas Jugada:" + " " + suma + " \n " + "Total Cartas Crupier:" + " " + cartaCrupier + " \n " + "Monto Apostado: " + apuesta + " \n");
    };
    return BlackJack;
}());
exports.default = BlackJack;
