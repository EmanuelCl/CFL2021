import ArticuloLectura from "./ArticuloLectura";
import * as read from "readline-sync";

export default class Bibloteca{
    private elementos:ArticuloLectura[];
    private nombreBibloteca:string;
    private direccion:string;
    public constructor(){
        this.elementos=[];
        this.nombreBibloteca="Bibloteca Rivadavia"
        this.direccion="Almafuerte 570";
    }
    public insertar(a:ArticuloLectura):boolean{
        for(let i=0;i<this.elementos.length;i++){
            if(a==this.elementos[i]){
                this.elementos.push(a)
                return true
            }
        }
        return false
    }
    public buscar(id:number):ArticuloLectura{
        for (let i = 0; i < this.elementos.length; i++) {
            if(id == this.elementos[i].getIsbm()){
                return this.elementos[i]
            }
        }
        return null
    }
    public eliminar(id:number):boolean{
        for (let i = 0; i < this.elementos.length; i++) {
            if(id == this.elementos[i].getIsbm()){
                this.elementos.splice(i,1);
                return true
            }
        }
        return false
    } 
    public buscarPorAutor(a:string):ArticuloLectura[]{
        let arreglo:ArticuloLectura[];
        for(let i=0;i<this.elementos.length;i++){
            if(a==this.elementos[i].getAutor()){
                arreglo.push(this.elementos[i])
            }
        }
        return arreglo
    }
    public modificarPaginas(id:number):boolean{
        let cantidad:number=read.questionInt("Ingrese cantidad de paginas: ")
        for(let i=0;i<this.elementos.length;i++){
           if(id==this.elementos[i].getIsbm()){
            this.elementos[i].setCantidadPaginas(cantidad)
           }
        }
        return true
    }
    public mostrarBibloteca():void{
        console.log(this.nombreBibloteca,this.direccion);
        console.log(this.elementos)
    }
}


