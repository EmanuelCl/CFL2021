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
var fs = __importStar(require("fs"));
var Casino_1 = __importDefault(require("./Casino"));
var casino = new Casino_1.default();
function mostrarInfo() {
    var info = (fs.readFileSync("informacion.txt", 'utf8')).split("\n");
    console.log(info);
}
mostrarInfo();
var opcion = RLS.question('Elija un Juego: (T=Tragamonedas),(TP=Tragamonedas Plus),(R=Ruleta),(B=Blackjack) X para Salir: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case 'T': {
            casino.jugarTragamonedas();
            break;
        }
        case 'TP': {
            casino.jugarTragramonedasDos();
            break;
        }
        case 'R': {
            casino.jugarRuleta();
            break;
        }
        case 'B': {
            casino.jugarBlackJack();
            break;
        }
    }
    opcion = RLS.question('Desea volver a Jugar? (T=Tragamonedas),(TP=Tragamonedas Plus),(R=Ruleta),(B=Blackjack) X para finalizar: ').toUpperCase();
}
