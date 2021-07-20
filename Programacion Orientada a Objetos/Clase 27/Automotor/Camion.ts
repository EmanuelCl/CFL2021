import Vehiculo from "./Vehiculo";

export default class Camion extends Vehiculo{
    private cargaKg:number;

    public constructor(tipo:string,patente:string,marca:string,modelo:string,año:number,cargaKg:number){
        super(tipo,patente,marca,modelo,año);
        this.cargaKg=cargaKg;
    }

    public getCarga():number{
        return this.cargaKg
    }
}