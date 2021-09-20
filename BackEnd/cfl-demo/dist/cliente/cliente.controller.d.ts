import Cliente from './Cliente';
import { ClienteService } from './cliente.service';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
    getClientes(): Cliente[];
    getCliente(id: any): Cliente;
}
