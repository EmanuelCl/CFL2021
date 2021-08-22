"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CustomError_1 = __importDefault(require("./CustomError"));
var LectorEscritor_1 = __importDefault(require("./LectorEscritor"));
var Tragamonedas_1 = __importDefault(require("./Tragamonedas"));
var TragamonedasDos = /** @class */ (function (_super) {
    __extends(TragamonedasDos, _super);
    function TragamonedasDos() {
        var _this = _super.call(this) || this;
        _this.lectorEscritor = new LectorEscritor_1.default();
        return _this;
    }
    TragamonedasDos.prototype.aleatorio = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    TragamonedasDos.prototype.jugarVariante = function () {
        var numero = read.questionInt("Ingrese un numero del 0 al 100: ");
        var monto = read.questionInt("Ingrese el monto a apostar: ");
        var numeroUno = this.aleatorio(0, 100);
        var numeroDos = this.aleatorio(0, 100);
        var numeroTres = this.aleatorio(0, 100);
        var premio = 0;
        if (numero > 100 || numero < 0) {
            throw new CustomError_1.default("El numero ingresado debe estar entre 0 y 100");
        }
        switch (numero) {
            case numeroUno:
            case numeroDos:
            case numeroTres:
                premio = monto * 10;
                console.log([numeroUno], [numeroDos], [numeroTres]);
                console.log("Felicitaciones! has ganado: ", "$", premio);
                break;
            case numeroUno && numeroDos && numeroTres:
                premio = monto * 100;
                console.log([numeroUno], [numeroDos], [numeroTres]);
                console.log("Felicitaciones! has ganado: ", "$", premio);
                break;
            case (numeroUno && numeroDos) || (numeroUno && numeroTres) || (numeroDos && numeroTres):
                premio = monto * 50;
                console.log([numeroUno], [numeroDos], [numeroTres]);
                console.log("Felicitaciones! has ganado: ", "$", premio);
                break;
            default: {
                console.log("Lo sentimos has perdido ", [numeroUno], [numeroDos], [numeroTres]);
            }
        }
        this.lectorEscritor.guardarResultado("tragamonedasDos.txt", "ESTADISTICAS JUGADA:" + " \n " + "Premio Ganado: " + premio + " \n " + "Numero Ingresado:" + " " + numero + " \n " + "Monto Apostado: " + monto + " \n " + "Numeros Jugada: " + numeroUno + "," + numeroDos + "," + numeroTres + " \n");
    };
    return TragamonedasDos;
}(Tragamonedas_1.default));
exports.default = TragamonedasDos;
