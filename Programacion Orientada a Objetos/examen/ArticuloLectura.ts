export default abstract class ArticuloLectura {
    private isbm:number;
    private Autor:string;
    private Editorial:string;
    private Titulo:string;
    protected cantidadPaginas:number
    constructor(isbm:number,Autor:string,Editorial:string,Titulo:string,cantidadPaginas:number) {
        this.isbm=isbm;
        this.Autor=Autor;
        this.Editorial=Editorial;
        this.Titulo=Titulo;
        this.cantidadPaginas=cantidadPaginas;
    }
    public getIsbm():number{
        return this.isbm;
    }
    public getAutor():string{
        return this.Autor;
    }
    public getEditorial():string{
        return this.Editorial;
    }
    public getTitulo():string{
        return this.Titulo;
    }
    public getCantPaginas():number{
        return this.cantidadPaginas;
    }
    abstract setCantidadPaginas(c:number):void
}