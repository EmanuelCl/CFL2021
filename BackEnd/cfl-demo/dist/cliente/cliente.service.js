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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const Cliente_1 = require("./Cliente");
const fs = require("fs");
let ClienteService = class ClienteService {
    constructor() {
        this.listaClientes = [];
        this.loadClientes();
    }
    getClientes() {
        return this.listaClientes;
    }
    getCliente(id) {
        let clientes = null;
        for (let i = 0; i < this.listaClientes.length; i++) {
            if (this.listaClientes[i].getId() == id) {
                clientes = this.listaClientes[i];
            }
        }
        return clientes;
    }
    loadClientes() {
        let archivo = fs.readFileSync('clientes.csv', 'utf8');
        const elementos = archivo
            .split('\n')
            .map(p => p.replace('\r', ''))
            .map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
            let cliente = new Cliente_1.default(parseInt(elementos[i][0]), elementos[i][1]);
            this.listaClientes.push(cliente);
        }
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map