"use strict";
exports.__esModule = true;
var FS = require("fs");
var Lector = /** @class */ (function () {
    function Lector() {
    }
    Lector.prototype.cargaDatos = function (rutaArchivo, separador) {
        return (FS.readFileSync(rutaArchivo, "utf8")).split(separador);
    };
    return Lector;
}());
exports["default"] = Lector;
