export default class Cliente {
    private idCliente;
    private nombreCliente;
    constructor(idCliente: number, nombreCliente: string);
    getId(): number;
    getNombre(): string;
}
