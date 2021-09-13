"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcularService = void 0;
const common_1 = require("@nestjs/common");
let CalcularService = class CalcularService {
    getResultado(ope, op1, op2) {
        let resultado = null;
        switch (ope) {
            case "sumar":
                resultado = { "resultado": `${op1 + op2}` };
                break;
            case 'restar':
                resultado = { "resultado": `${op1 - op2}` };
                break;
            case 'multiplicar':
                resultado = { "resultado": `${op1 * op2}` };
                break;
            case 'dividir':
                resultado = { "resultado": `${op1 / op2}` };
                break;
        }
        return resultado;
    }
};
CalcularService = __decorate([
    (0, common_1.Injectable)()
], CalcularService);
exports.CalcularService = CalcularService;
//# sourceMappingURL=calcular.service.js.map