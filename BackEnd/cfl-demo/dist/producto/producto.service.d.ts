import Producto from './Producto';
export declare class ProductoService {
    private listaProductos;
    constructor();
    getProductos(): Producto[];
    getProducto(id: number): Producto;
    updateProducto(id: number, prod: any): boolean;
    private writeProductos;
    private loadProductos;
    create(prod: any): {
        status: string;
    };
}
