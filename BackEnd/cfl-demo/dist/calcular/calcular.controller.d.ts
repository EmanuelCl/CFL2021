import { CalcularService } from './calcular.service';
export declare class CalcularController {
    private calcularService;
    constructor(calcularService: CalcularService);
    ejecutar(oper: any, ope1: any, ope2: any): any;
}
