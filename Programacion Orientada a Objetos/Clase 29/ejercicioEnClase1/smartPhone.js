"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
        console.log("Prendiendo");
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
        console.log("Apagando");
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log("Llamando....", numero);
    };
    SmartPhone.prototype.enviarMensaje = function (mensaje, numero) {
        console.log("Numero celular: ", numero, " Mensaje: ", mensaje);
    };
    return SmartPhone;
}());
var miSmarPhone = new SmartPhone();
miSmarPhone.prender();
console.log(miSmarPhone);
miSmarPhone.llamar("2494223344");
miSmarPhone.enviarMensaje("Hola como estas?", 2494887766);
miSmarPhone.apagar();
console.log(miSmarPhone);
