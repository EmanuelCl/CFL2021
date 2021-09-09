"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
let ProductoService = class ProductoService {
    getProductos() {
        let productos = [];
        let producto = [
            {
                "producto": "Azucar",
                "precio": 150,
                "descripcion": "azucar chango 1kg refinada",
            },
            {
                "producto": "Pan",
                "precio": 120,
                "descripcion": "pan integral 1kg con semillas",
            },
            {
                "producto": "Yerba",
                "precio": 250,
                "descripcion": "Yerba Andresito 2kg"
            },
            {
                "producto": "Harina",
                "precio": 165,
                "descripcion": "Harina leudante 1kg",
            },
            {
                "producto": "Galletitas",
                "precio": 165,
                "descripcion": "Galletitas don satur",
            },
        ];
        for (let i = 0; i < producto.length; i++) {
            productos.push(producto[i]);
        }
        return productos;
    }
};
ProductoService = __decorate([
    (0, common_1.Injectable)()
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map