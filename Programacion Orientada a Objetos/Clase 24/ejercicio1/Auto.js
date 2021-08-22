var Auto = /** @class */ (function () {
    function Auto(encendido, acelerar, freno, cambios, luces, bocina, embrague) {
        this.estaEncendido = encendido;
        this.acelerador = acelerar;
        this.estafrenado = freno;
        this.pasarCambios = cambios;
        this.lucesPrendidas = luces;
        this.tocarBocina = bocina;
        this.pisarEmbrague = embrague;
    }
    Auto.prototype.encendidoApagado = function () {
        if (this.estaEncendido)
            this.estaEncendido = false;
        else
            this.estaEncendido = true;
    };
    Auto.prototype.acelerar = function () {
        this.acelerador = this.acelerador + 10;
    };
    Auto.prototype.frenar = function () {
        if (this.estafrenado)
            this.estafrenado = false;
        else
            this.estafrenado = true;
    };
    Auto.prototype.cambios = function () {
        this.pasarCambios = this.pasarCambios + 1;
    };
    Auto.prototype.embrague = function () {
        if (this.pisarEmbrague)
            this.pisarEmbrague = false;
        else
            this.pisarEmbrague = true;
    };
    Auto.prototype.luces = function () {
        if (this.lucesPrendidas)
            this.lucesPrendidas = false;
        else
            this.lucesPrendidas = true;
    };
    Auto.prototype.bocina = function () {
        if (this.tocarBocina)
            this.tocarBocina = false;
        else
            this.tocarBocina = true;
    };
    return Auto;
}());
var miAuto = new Auto(false, 0, false, 0, false, false, false);
console.log(miAuto);
miAuto.encendidoApagado();
miAuto.luces();
miAuto.embrague();
miAuto.cambios();
miAuto.acelerar();
console.log(miAuto);
