"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ruleta_1 = __importDefault(require("./Ruleta"));
var Tragamonedas_1 = __importDefault(require("./Tragamonedas"));
var Blackjack_1 = __importDefault(require("./Blackjack"));
var TragamonedasDos_1 = __importDefault(require("./TragamonedasDos"));
var Casino = /** @class */ (function () {
    function Casino() {
        this.blackJack = new Blackjack_1.default();
        this.tragamonedas = new Tragamonedas_1.default();
        this.ruleta = new Ruleta_1.default();
        this.tragamonedasDos = new TragamonedasDos_1.default();
    }
    Casino.prototype.jugarTragamonedas = function () {
        try {
            this.tragamonedas.jugarTragamonedas();
        }
        catch (error) {
            console.log('Ocurrió un error esperado, juego finalizado');
            console.log(error);
        }
    };
    Casino.prototype.jugarTragramonedasDos = function () {
        try {
            this.tragamonedasDos.jugarVariante();
        }
        catch (error) {
            console.log("Ocurrio un error esperado, juego finalizado");
            console.log(error);
        }
    };
    Casino.prototype.jugarRuleta = function () {
        try {
            this.ruleta.jugarRuleta();
        }
        catch (error) {
            console.log("Ocurrio un error esperado, juego finalizado");
            console.log(error);
        }
    };
    Casino.prototype.jugarBlackJack = function () {
        try {
            this.blackJack.jugarBlackJack();
        }
        catch (error) {
            console.log("Ocurrio un error esperado, juego finalizado");
            console.log(error);
        }
    };
    return Casino;
}());
exports.default = Casino;
