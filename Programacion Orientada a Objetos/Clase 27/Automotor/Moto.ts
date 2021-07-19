import Vehiculo from "./Vehiculo";

export default class Moto extends Vehiculo{
    private cilindrada:number

    public constructor(cilindrada:number,patente:string,marca:string,modelo:string,año:number){
        super(patente,marca,modelo,año);
        this.cilindrada=cilindrada;
    }
    public getCilindrada():number{
        return this.cilindrada;
    }
}