import ArticuloLectura from "./ArticuloLectura";

export default class Revista extends ArticuloLectura{
    private articulos:string[]//Para que usaria este arreglo?

    public constructor(isbm:number,Autor:string,Editorial:string,Titulo:string,cantidadPaginas:number){
        super(isbm,Autor,Editorial,Titulo,cantidadPaginas);
        this.articulos=[]
    }
    public setCantidadPaginas(c:number):void{
        this.cantidadPaginas=c
        if(c>50){
            throw new Error("El numero de paginas supera las 50");                
        }
        try {
            let paginas:number=c
        } catch (error) {
            console.log("Ocurrio un error esperado, programa finalizado.")
            c=0;
        }
    }
}