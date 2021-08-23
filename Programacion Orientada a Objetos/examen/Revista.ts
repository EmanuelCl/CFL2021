import ArticuloLectura from "./ArticuloLectura";

export default class Revista extends ArticuloLectura{
    private articulos:string[]

    public constructor(isbm:number,Autor:string,Editorial:string,Titulo:string,cantidadPaginas:number){
        super(isbm,Autor,Editorial,Titulo,cantidadPaginas);
        this.articulos=[]
    }
    public setCantidadPaginas(c:number):void{
        
    }
}