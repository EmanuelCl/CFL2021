import Producto from './Producto';
export declare class ProductoService {
    private listaProductos;
    constructor();
    getProductos(): Producto[];
    getProducto(id: number): Producto;
    private loadProductos;
}
