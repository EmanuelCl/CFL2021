import Kiosco from "./Kiosco";
import * as read from "readline-sync"

let kiosco:Kiosco=new Kiosco();
kiosco.cargarArtDisponible();
kiosco.mostrarStock();
let opcion:string=read.question("Elija una Opcion: (C=Comprar Articulo) , (S=Stock Disponible) , (V=Articulos Vendidos), (B=Borrar listado de Articulos vendidos),  X para finalizar: ").toUpperCase();
while(opcion!="X"){
    switch(opcion){
        case "C": {
            let articulo:string=read.question("Ingrese el nombre del articulo que desea comprar: ");
            kiosco.comprarArticulo(articulo);
            console.log("Gracias por su Compra");
            break;
        }
        case "S": {
            kiosco.mostrarStock();
        }
        case "V": {
            kiosco.cargarArtVendidos();
            kiosco.mostrarVendidos();
            break;
        }
        case "B": {
            kiosco.vaciarTxtVendidos();
            break;
        }
    }
    opcion=read.question("Elija una Opcion: (C=Comprar Articulo) , (S=Stock Disponible) , (V=Articulos Vendidos), (B=Borrar listado de Articulos vendidos),  X para finalizar: ").toUpperCase();
}
