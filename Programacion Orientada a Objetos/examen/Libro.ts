import ArticuloLectura from "./ArticuloLectura";
import * as read from "readline-sync";

export default class Libro extends ArticuloLectura{

    public constructor(isbm:number,Autor:string,Editorial:string,Titulo:string,cantidadPaginas:number){
        super(isbm,Autor,Editorial,Titulo,cantidadPaginas)
    }
    public setCantidadPaginas(c:number):void{
        this.cantidadPaginas=c
        
    }
}