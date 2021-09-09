"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
let ClienteService = class ClienteService {
    getClientes() {
        let clientes = [];
        let cliente = [
            {
                "nombre": "Emanuel",
                "razon": 343536,
                "domicilio": "piedrabuena 1234",
                "saldo": 9000,
            },
            {
                "nombre": "Carlos",
                "razon": 311536,
                "domicilio": "av.españa 234",
                "saldo": 180000,
            },
            {
                "nombre": "Martina",
                "razon": 113436,
                "domicilio": "gral.pinto 987",
                "saldo": 200000,
            },
            {
                "nombre": "Lucia",
                "razon": 567890,
                "domicilio": "9 de julio 180",
                "saldo": 500000,
            },
            {
                "nombre": "Sofia",
                "razon": 531824,
                "domicilio": "Av.del valle 678",
                "saldo": 88000,
            },
            {
                "nombre": "Esteban",
                "razon": 742743,
                "domicilio": "pasteur 576",
                "saldo": 10000,
            },
        ];
        for (let i = 0; i < cliente.length; i++) {
            clientes.push(cliente[i]);
        }
        return clientes;
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)()
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map