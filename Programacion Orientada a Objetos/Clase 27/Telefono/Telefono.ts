export default class Telefono{
    protected estaPrendido:boolean;
    protected bateriaActual:number;

    public constructor(estaPrendido:boolean,bateriaActual:number){
        this.estaPrendido=estaPrendido;
        this.bateriaActual=bateriaActual;
    }

    public mandarMensaje(){

    }
    public hacerLlamada(){

    }
    public prenderApagar(){
        if(this.estaPrendido)
            this.estaPrendido=false
        else
            this.estaPrendido=true
    }
    public mostrarBateria():number{
        return this.bateriaActual;
    }
}