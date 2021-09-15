import { Injectable } from '@nestjs/common';
import Producto from './Producto';
import * as fs from "fs"

@Injectable()
export class ProductoService {
    private listaProductos: Producto[] = []

    public constructor() {
        this.loadProductos();
    }

    public getProductos(): Producto[] {
        return this.listaProductos;
    }
    public getProducto(id: number): Producto {
        let producto = null;
        // Más adelante agregar manejo de status code
        for (let i=0; i<this.listaProductos.length; i++) {
            if (this.listaProductos[i].getId()==id) {
        
                producto = this.listaProductos[i];
            }
        }
        return producto;
    }

    private loadProductos(): void {
        let archivo = fs.readFileSync('productos.csv', 'utf8');
        const elementos = archivo
            .split('\n')
            .map(p => p.replace('\r', ''))
            .map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto(
                parseInt(elementos[i][0]),
                elementos[i][1],
                parseFloat(elementos[i][2])
            );
            this.listaProductos.push(producto);
        }
    }

    public create(prod: any) {
        const producto = new Producto(prod["idProducto"],prod["nombreProducto"],
        prod["precio"]);
        console.log(producto);
        if (producto.getId() && producto.getNombre() && producto.getPrecio()) {
        this.listaProductos.push(prod);
        console.log(producto);
        fs.appendFileSync('productos.csv',
        "\n"+ producto.getId() + "," +
        producto.getNombre() + ","
        + producto.getPrecio());
        return "ok";
        }
        else
        return "parametros incorrectos";
    }
}




 


    // let productos = [];

    // let producto = [
    //     {
    //         "producto":"Azucar",
    //         "precio":150,
    //         "descripcion":"azucar chango 1kg refinada",
    //     },
    //     {
    //         "producto":"Pan",
    //         "precio":120,
    //         "descripcion":"pan integral 1kg con semillas",

    //     },
    //     {
    //         "producto":"Yerba",
    //         "precio":250,
    //         "descripcion":"Yerba Andresito 2kg"
    //     },
    //     {
    //         "producto":"Harina",
    //         "precio":165,
    //         "descripcion":"Harina leudante 1kg",
    //     },
    //     {
    //         "producto":"Galletitas",
    //         "precio":165,
    //         "descripcion":"Galletitas don satur",
    //     },
    // ]
    //     for(let i=0;i<producto.length;i++){
    //         productos.push(producto[i]);
    //     }   
    // return productos;
    // }
