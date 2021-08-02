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
        this.tragamonedas.jugarTragamonedas();
    };
    Casino.prototype.jugarTragramonedasDos = function () {
        this.tragamonedasDos.jugarVariante();
    };
    Casino.prototype.jugarRuleta = function () {
        this.ruleta.jugarRuleta();
    };
    Casino.prototype.jugarBlackJack = function () {
        this.blackJack.jugarBlackJack();
    };
    return Casino;
}());
exports.default = Casino;
