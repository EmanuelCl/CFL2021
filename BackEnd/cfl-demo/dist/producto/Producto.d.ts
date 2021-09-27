export default class Producto {
    private idProducto;
    private nombreProducto;
    private precio;
    constructor(idProducto: number, nombreProducto: string, precio: number);
    getId(): number;
    getNombre(): string;
    getPrecio(): number;
}
