import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Producto from './Producto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    constructor(private productoService: ProductoService) {}

    @Get()
    public getProductos() {
        return this.productoService.getProductos()
    }

    @Get(':id')
    public getProducto(@Param('id') id): Producto {
        return this.productoService.getProducto(parseInt(id));
    }
    @Post()
    create(@Body() prod: any): string {
    return this.productoService.create(prod);
}
}
