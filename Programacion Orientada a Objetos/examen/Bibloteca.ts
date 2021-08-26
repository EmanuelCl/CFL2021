import ArticuloLectura from "./ArticuloLectura";
import * as read from "readline-sync";

export default class Bibloteca{
    private elementos:ArticuloLectura[];
    private nombreBibloteca:string;
    private direccion:string;
    public constructor(nombreBibloteca:string,direccion:string){
        this.elementos=[];
        this.nombreBibloteca=nombreBibloteca;
        this.direccion=direccion;
    }
    public insertar(a:ArticuloLectura):boolean{
        let articuloDuplicado:ArticuloLectura=this.buscar(a.getIsbm());
        if(!articuloDuplicado){
            this.elementos.push(a);
            return true;
        }
        return false;
    }
    public buscar(id:number):ArticuloLectura{
        try {
            for (let i = 0; i < this.elementos.length; i++) {
                if(id == this.elementos[i].getIsbm()){
                    return this.elementos[i];
                }
            }
            throw new Error("Articulo no encontrado");
            
        } catch (error) {
            console.log(error.message);
        }
    }
    public eliminar(id:number):boolean{
        for (let i = 0; i < this.elementos.length; i++) {
            if(id == this.elementos[i].getIsbm()){
                this.elementos.splice(i,1);
                return true;
            }
        }
        return false;
    } 
    public buscarPorAutor(a:string):ArticuloLectura[]{
        let arreglo:ArticuloLectura[]=[];
        for(let i=0;i<this.elementos.length;i++){
            if(a==this.elementos[i].getAutor()){
                arreglo.push(this.elementos[i]);
            }
        }
        return arreglo;
    }
    public modificarPaginas(id:number,cantidad:number):boolean{
        if(cantidad<=0){
            throw new Error("La cantidad de paginas debe ser mayor a 0"); 
        }
        try {
            let articulo:ArticuloLectura=this.buscar(id);
            if(articulo && cantidad>0){
                articulo.setCantidadPaginas(cantidad);
                return true
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    public mostrarBibloteca():void{
        console.log(this.elementos);
    }
}


