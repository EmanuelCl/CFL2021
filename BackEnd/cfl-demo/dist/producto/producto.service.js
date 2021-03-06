"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
const Producto_1 = require("./Producto");
const fs = require("fs");
let ProductoService = class ProductoService {
    constructor() {
        this.listaProductos = [];
        this.loadProductos();
    }
    getProductos() {
        return this.listaProductos;
    }
    getProducto(id) {
        let producto = null;
        for (let i = 0; i < this.listaProductos.length; i++) {
            if (this.listaProductos[i].getId() == id) {
                return this.listaProductos[i];
            }
        }
        return producto;
    }
    updateProducto(id, prod) {
        let position = this.listaProductos.findIndex(p => p.getId() === id);
        if (position > -1) {
            const producto = new Producto_1.default(prod.id, prod.nombre, prod.precio);
            this.listaProductos[position] = producto;
            this.writeProductos();
            return true;
        }
        return false;
    }
    writeProductos() {
        let data = "";
        for (let i = 0; i < this.listaProductos.length; i++) {
            let producto = this.listaProductos[i];
            if (producto.getId()) {
                data += `\r\n${producto.getId()},${producto.getNombre},${producto.getPrecio()}`;
            }
        }
        fs.writeFileSync("productos.csv", data.substr(2));
    }
    loadProductos() {
        let archivo = fs.readFileSync('productos.csv', 'utf8');
        const elementos = archivo
            .split('\n')
            .map(p => p.replace('\r', ''))
            .map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto_1.default(parseInt(elementos[i][0]), elementos[i][1], parseFloat(elementos[i][2]));
            this.listaProductos.push(producto);
        }
    }
    create(prod) {
        const producto = new Producto_1.default(prod["idProducto"], prod["nombreProducto"], prod["precio"]);
        console.log(producto);
        if (producto.getId() && producto.getNombre() && producto.getPrecio()) {
            this.listaProductos.push(prod);
            console.log(producto);
            fs.appendFileSync('productos.csv', "\n" + producto.getId() + "," +
                producto.getNombre() + ","
                + producto.getPrecio());
            return { status: "ok" };
        }
        else
            return { status: "parametros incorrectos" };
    }
};
ProductoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map