import Producto from './Producto';
import { ProductoService } from './producto.service';
export declare class ProductoController {
    private productoService;
    constructor(productoService: ProductoService);
    getProductos(): Producto[];
    getProducto(id: any): Producto;
    create(prod: any): string;
}
