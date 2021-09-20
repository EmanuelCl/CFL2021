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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcularController = void 0;
const common_1 = require("@nestjs/common");
const calcular_service_1 = require("./calcular.service");
let CalcularController = class CalcularController {
    constructor(calcularService) {
        this.calcularService = calcularService;
    }
    ejecutar(oper, ope1, ope2) {
        let num1 = parseInt(ope1);
        let num2 = parseInt(ope2);
        return this.calcularService.getResultado(oper, num1, num2);
    }
};
__decorate([
    (0, common_1.Get)(":oper/:ope1/:ope2"),
    __param(0, (0, common_1.Param)("oper")),
    __param(1, (0, common_1.Param)("ope1")),
    __param(2, (0, common_1.Param)("ope2")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Object)
], CalcularController.prototype, "ejecutar", null);
CalcularController = __decorate([
    (0, common_1.Controller)('calcular'),
    __metadata("design:paramtypes", [calcular_service_1.CalcularService])
], CalcularController);
exports.CalcularController = CalcularController;
//# sourceMappingURL=calcular.controller.js.map