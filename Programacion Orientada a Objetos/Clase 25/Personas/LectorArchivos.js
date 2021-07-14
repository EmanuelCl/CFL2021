"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var FS = require("fs");
var Lector = /** @class */ (function () {
    function Lector() {
        this.personas = [];
    }
    Lector.prototype.cargarPersonas = function () {
        var _this = this;
        var personas = (FS.readFileSync('personas.txt', 'utf8')).split('\n');
        var propiedadesPersona = [];
        personas.forEach(function (personaString) {
            propiedadesPersona = personaString.split(";");
            _this.personas.push(new Persona_1["default"](propiedadesPersona[0], propiedadesPersona[1], propiedadesPersona[2], parseInt(propiedadesPersona[3]), parseInt(propiedadesPersona[4])));
        });
    };
    return Lector;
}());
exports["default"] = Lector;
