import ArticuloLectura from "./ArticuloLectura";

export default class Revista extends ArticuloLectura{
    private articulos:string[]//Para que usaria este arreglo?

    public constructor(isbm:number,Autor:string,Editorial:string,Titulo:string,cantidadPaginas:number){
        super(isbm,Autor,Editorial,Titulo,cantidadPaginas);
        this.articulos=[]
    }
    public setCantidadPaginas(c:number):void{
        try {
            if(c>50){
                throw new Error("El numero de paginas supera las 50");                
            }
            this.cantidadPaginas=c
        } catch (error) {
            throw error        
        }
    }
}