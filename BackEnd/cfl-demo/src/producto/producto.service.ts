import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {

public getProductos(): any {
    let productos = [];

    let producto = [
        {
            "producto":"Azucar",
            "precio":150,
            "descripcion":"azucar chango 1kg refinada",
        },
        {
            "producto":"Pan",
            "precio":120,
            "descripcion":"pan integral 1kg con semillas",

        },
        {
            "producto":"Yerba",
            "precio":250,
            "descripcion":"Yerba Andresito 2kg"
        },
        {
            "producto":"Harina",
            "precio":165,
            "descripcion":"Harina leudante 1kg",
        },
        {
            "producto":"Galletitas",
            "precio":165,
            "descripcion":"Galletitas don satur",
        },
    ]
        for(let i=0;i<producto.length;i++){
            productos.push(producto[i]);
        }   
    return productos;
    }
}
