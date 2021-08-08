import Camara from "./Camara";
import Telefono from "./Telefono";

export default class TelefonoConCamara extends Telefono{
    private camara: Camara

    public constructor(estaPrendido:boolean,linternaPrendida:boolean){
        super(estaPrendido,linternaPrendida);
        this.camara = new Camara();
    }
    public sacarFoto():void{
        this.camara.sacarFoto();
    }
    public prenderTelefono():void{
        this.estaPrendido=true;
    }
    public bateriaPorcentaje():void{
        this.bateriaActual=50;
    }
    public prenderLinterna():boolean{
        return this.linternaPrendida;
    }
}
let telefono: TelefonoConCamara = new TelefonoConCamara(true,false);
telefono.hacerLlamada();
console.log(telefono);
telefono.sacarFoto();
telefono.bateriaPorcentaje();
console.log(telefono);
