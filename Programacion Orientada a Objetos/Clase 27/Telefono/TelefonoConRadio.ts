import Telefono from "./Telefono";

class TelefonoConRadio extends Telefono{
    protected frecuenciaActual:number;

    public constructor(frecuenciaActual:number,estaPrendido:boolean,bateriaActual:number){
        super(estaPrendido,bateriaActual)
        this.frecuenciaActual=frecuenciaActual;
    }
    public verFrecuenciaActual(){
        return this.frecuenciaActual;
    }
}