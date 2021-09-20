export default class Producto{
    private idProducto: number;
    private nombreProducto: string;
    private precio: number;

    public constructor(idProducto:number, nombreProducto:string, precio:number){
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
    }
    public getId():number{
        return this.idProducto;
    }
    public getNombre():string{
        return this.nombreProducto;
    }
    public getPrecio():number{
        return this.precio;
    }
}