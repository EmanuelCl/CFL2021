"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(idProducto, nombreProducto, precio) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
    }
    getId() {
        return this.idProducto;
    }
    getNombre() {
        return this.nombreProducto;
    }
    getPrecio() {
        return this.precio;
    }
}
exports.default = Producto;
//# sourceMappingURL=Producto.js.map