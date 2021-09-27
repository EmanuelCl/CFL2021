import Vehiculo from "./Vehiculo";

export default class Camioneta extends Vehiculo{
    private capacidadCarga:number;

    public constructor(tipo:string,marca:string,patente:string,modelo:string,año:number,precio:number,capacidadCarga:number){
        super(tipo,marca,patente,modelo,año,precio,capacidadCarga)
    }

    public getCapacidad():number{
        return this.capacidadCarga;
    }
}