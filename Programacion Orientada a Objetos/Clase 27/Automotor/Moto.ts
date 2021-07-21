import Vehiculo from "./Vehiculo";

export default class Moto extends Vehiculo{
    private cilindrada:number

    public constructor(tipo:string,patente:string,marca:string,modelo:string,año:number,cilindrada:number){
        super(tipo,patente,marca,modelo,año);
        this.cilindrada=cilindrada;
    }
    public getCilindrada():number{
        return this.cilindrada;
    }
}