export default class Telefono{
    protected estaPrendido:boolean;
    protected bateriaActual:number;
    protected linternaPrendida:boolean;

    public constructor(estaPrendido:boolean,linternaPrendida:boolean){
        this.estaPrendido = estaPrendido;
        this.bateriaActual = 90;
        this.linternaPrendida = linternaPrendida;
    }
    public mandarMensaje(msg:string,numero:number):boolean{
        return true;
    }
    public hacerLlamada():void{
        console.log("Llamando")
    }
    public prenderApagar():void{
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }
    public prenderLinterna():boolean{
        return true;
    }
    public porcentajeBateria():number{
        return this.bateriaActual;
    }
}