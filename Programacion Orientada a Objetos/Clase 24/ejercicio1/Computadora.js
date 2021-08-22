var Computadora = /** @class */ (function () {
    function Computadora(prendida, volumen, googleMeet, microfono, camara, volumenMic, ejercicios) {
        this.estaPrendida = prendida;
        this.volumenActual = volumen;
        this.abrirGoogleMeet = googleMeet;
        this.microfonoEncendido = microfono;
        this.camaraEncendida = camara;
        this.volumenMicrofono = volumenMic;
        this.ejerciciosSubidosGit = ejercicios;
    }
    Computadora.prototype.prenderApagar = function () {
        if (this.estaPrendida)
            this.estaPrendida = false;
        else
            this.estaPrendida = true;
    };
    Computadora.prototype.subirVolumenPC = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Computadora.prototype.bajarVolumenPC = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Computadora.prototype.abrirMeetClase = function () {
        this.abrirGoogleMeet = true;
    };
    Computadora.prototype.prenderMicrofono = function () {
        if (this.microfonoEncendido)
            this.microfonoEncendido = false;
        else
            this.microfonoEncendido = true;
    };
    Computadora.prototype.prenderCamara = function () {
        if (this.camaraEncendida)
            this.camaraEncendida = false;
        else
            this.camaraEncendida = true;
    };
    Computadora.prototype.subirVolumenMicro = function () {
        this.volumenMicrofono = this.volumenMicrofono + 1;
    };
    Computadora.prototype.bajarVolumenMicro = function () {
        this.volumenMicrofono = this.volumenMicrofono - 1;
    };
    Computadora.prototype.subirEjercicioGit = function () {
        this.ejerciciosSubidosGit = this.ejerciciosSubidosGit + 1;
    };
    return Computadora;
}());
var miCompu = new Computadora(false, 10, false, false, false, 20, 0);
console.log(miCompu);
miCompu.prenderApagar();
miCompu.subirVolumenPC();
miCompu.prenderCamara();
miCompu.abrirMeetClase();
miCompu.subirEjercicioGit();
console.log(miCompu);
