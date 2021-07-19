import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo{
    private combustible:string;

    public constructor(patente:string,marca:string,modelo:string,año:number,combustible:string){
        super(patente,marca,modelo,año);
        this.combustible=combustible;
    }
    public getCombustible():string{
        return this.combustible;
    }
}