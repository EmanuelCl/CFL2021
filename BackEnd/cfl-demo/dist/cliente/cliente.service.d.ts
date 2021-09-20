import Cliente from './Cliente';
export declare class ClienteService {
    private listaClientes;
    constructor();
    getClientes(): Cliente[];
    getCliente(id: number): Cliente;
    private loadClientes;
}
