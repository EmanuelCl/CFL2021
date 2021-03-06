import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { parse } from 'path/posix';
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
    create(@Body() prod: any) {
    return this.productoService.create(prod);
    }
    @Put(":id")
    public updateProducto(@Body() prod: any, @Param("id") id):boolean{
        return this.productoService.updateProducto(parseInt(id), prod);
    }
}
