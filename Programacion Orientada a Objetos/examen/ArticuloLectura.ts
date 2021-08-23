export default abstract class ArticuloLectura {
    private isbm:number;
    private autor:string;
    private editorial:string;
    private titulo:string;
    protected cantidadPaginas:number
    constructor(isbm:number,autor:string,editorial:string,titulo:string,cantidadPaginas:number) {
        this.isbm=isbm;
        this.autor=autor;
        this.editorial=editorial;
        this.titulo=titulo;
        this.cantidadPaginas=cantidadPaginas;
    }
    public getIsbm():number{
        return this.isbm;
    }
    public getAutor():string{
        return this.autor;
    }
    public getEditorial():string{
        return this.editorial;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public getCantPaginas():number{
        return this.cantidadPaginas;
    }
    abstract setCantidadPaginas(c:number):void
}