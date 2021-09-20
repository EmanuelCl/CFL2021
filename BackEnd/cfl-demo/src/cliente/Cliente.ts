export default class Cliente{
    private idCliente: number;
    private nombreCliente: string;

    public constructor(idCliente:number, nombreCliente:string){
        this.idCliente = idCliente;
        this.nombreCliente = nombreCliente;
    }
    public getId():number{
        return this.idCliente;
    }
    public getNombre():string{
        return this.nombreCliente;
    }
}