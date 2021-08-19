import * as read from "readline-sync";
import fs from "fs";
import Item from "./Item";
export default class Kiosco{
    private items:Item[]
    private itemVendido:Item[]
    public constructor(){
        this.items=[];
        this.itemVendido=[];
    }
    public buscarItem(nombre:string): number{
        for (let i = 0; i < this.items.length; i++) {
            if(nombre == this.items[i].getNombre()){
                console.log(this.items[i]);
                let costo:number=this.items[i].getCosto();
                fs.appendFileSync("vendidos.txt",`${nombre};${costo};\n`);
                return i
            }
        }
        return -1  
    }
    public comprarArticulo(nombre:string): void{
        let posicion:number = this.buscarItem(nombre);
        if (posicion != -1) {
            this.items.splice(posicion,1);
        }else{
            console.log("El Articulo no se encuentra en stock");
        }
    }
    public vaciarTxtVendidos():void{
        this.itemVendido.splice(0,10)
        fs.writeFileSync("vendidos.txt","")
    }
    public cargarArtDisponible(): void{
        let articulos:string[] = (fs.readFileSync("disponibles.txt",'utf8')).split("\n")
        let propiedadesItem:string[] = [];
        articulos.forEach(articuloString => {
            propiedadesItem = articuloString.split(";")
            this.items.push(new Item(propiedadesItem[0],parseInt(propiedadesItem[1])))
        });
    }
    public cargarArtVendidos(): void{
        let articulos:string[] = (fs.readFileSync("vendidos.txt",'utf8')).split("\n")
        let propiedadesItem:string[] = [];
        articulos.forEach(articuloString => {
            propiedadesItem = articuloString.split(";")
            this.itemVendido.push(new Item(propiedadesItem[0],parseInt(propiedadesItem[1])))
        });
    }
    public mostrarVendidos():void{
        console.log(this.itemVendido);
    }
    public mostrarStock():void{
        console.log(this.items);
    }
}