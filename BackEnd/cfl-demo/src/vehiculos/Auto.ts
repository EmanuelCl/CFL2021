import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo{
    private capacidadBaul:number

    public constructor(tipo:string,marca:string,patente:string,modelo:string,año:number,precio:number,capacidadBaul:number){
        super(tipo,marca,patente,modelo,año,precio,capacidadBaul)
    }

    public getCapacidad():number{
        return this.capacidadBaul;
    }
}