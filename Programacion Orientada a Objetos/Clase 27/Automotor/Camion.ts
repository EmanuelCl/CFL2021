import Vehiculo from "./Vehiculo";

export default class Camion extends Vehiculo{
    private cargaKg:number;

    public constructor(patente:string,marca:string,modelo:string,año:number,cargaKg:number){
        super(patente,marca,modelo,año);
        this.cargaKg=cargaKg;
    }

    public getCarga():number{
        return this.cargaKg
    }
}