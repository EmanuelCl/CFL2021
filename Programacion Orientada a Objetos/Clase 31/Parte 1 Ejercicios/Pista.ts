export default class Pista{
    private identificador:number;
    private titulo:string;
    private duracion:number;
    private interprete:string;

    public constructor(identificador:number,titulo:string,duracion:number,interprete:string){
        this.identificador = identificador;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
    public getIdentificador():number{
        return this.identificador;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public getDuracion():number{
        return this.duracion;
    }
    public getInterprete():string{
        return this.interprete;
    }
}