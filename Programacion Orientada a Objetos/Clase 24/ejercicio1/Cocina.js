var Cocina = /** @class */ (function () {
    function Cocina(encendido, temperatura) {
        this.estaPrendida = encendido;
        this.temperaturaActual = temperatura;
    }
    Cocina.prototype.prenderApagar = function () {
        if (this.estaPrendida)
            this.estaPrendida = false;
        else
            this.estaPrendida = true;
    };
    Cocina.prototype.subirTemperatura = function () {
        this.temperaturaActual = this.temperaturaActual + 1;
    };
    Cocina.prototype.bajarTemperatura = function () {
        this.temperaturaActual = this.temperaturaActual - 1;
    };
    Cocina.prototype.mostrarCocina = function () {
        console.log("Mi Cocina esta encendida " + this.estaPrendida + " con la temperatura " + this.temperaturaActual);
    };
    return Cocina;
}());
var miCocina = new Cocina(true, 30);
miCocina.mostrarCocina();
miCocina.subirTemperatura();
miCocina.mostrarCocina();
miCocina.prenderApagar();
miCocina.mostrarCocina();
