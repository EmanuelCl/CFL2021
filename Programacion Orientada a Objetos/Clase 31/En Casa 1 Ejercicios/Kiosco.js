"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var Item_1 = __importDefault(require("./Item"));
var Kiosco = /** @class */ (function () {
    function Kiosco() {
        this.items = [];
        this.itemVendido = [];
    }
    Kiosco.prototype.buscarItem = function (nombre) {
        for (var i = 0; i < this.items.length; i++) {
            if (nombre == this.items[i].getNombre()) {
                console.log(this.items[i]);
                var costo = this.items[i].getCosto();
                fs_1.default.appendFileSync("vendidos.txt", nombre + ";" + costo + ";\n");
                return i;
            }
        }
        return -1;
    };
    Kiosco.prototype.comprarArticulo = function (nombre) {
        var posicion = this.buscarItem(nombre);
        if (posicion != -1) {
            this.items.splice(posicion, 1);
        }
        else {
            console.log("El Articulo no se encuentra en stock");
        }
    };
    Kiosco.prototype.vaciarTxtVendidos = function () {
        this.itemVendido.splice(0, 10);
        fs_1.default.writeFileSync("vendidos.txt", "");
    };
    Kiosco.prototype.cargarArtDisponible = function () {
        var _this = this;
        var articulos = (fs_1.default.readFileSync("disponibles.txt", 'utf8')).split("\n");
        var propiedadesItem = [];
        articulos.forEach(function (articuloString) {
            propiedadesItem = articuloString.split(";");
            _this.items.push(new Item_1.default(propiedadesItem[0], parseInt(propiedadesItem[1])));
        });
    };
    Kiosco.prototype.cargarArtVendidos = function () {
        var _this = this;
        var articulos = (fs_1.default.readFileSync("vendidos.txt", 'utf8')).split("\n");
        var propiedadesItem = [];
        articulos.forEach(function (articuloString) {
            propiedadesItem = articuloString.split(";");
            _this.itemVendido.push(new Item_1.default(propiedadesItem[0], parseInt(propiedadesItem[1])));
        });
    };
    Kiosco.prototype.mostrarVendidos = function () {
        console.log(this.itemVendido);
    };
    Kiosco.prototype.mostrarStock = function () {
        console.log(this.items);
    };
    return Kiosco;
}());
exports.default = Kiosco;
