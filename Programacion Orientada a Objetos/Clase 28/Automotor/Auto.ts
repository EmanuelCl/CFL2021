import Vehiculo from "./Vehiculo";
import * as RLS from "readline-sync";

export default class Auto extends Vehiculo{
    private combustible:string;

    public constructor(tipo:string,patente:string,marca:string,modelo:string,año:number,combustible:string){
        super(tipo,patente,marca,modelo,año);
        this.combustible=combustible;
    }
    public getCombustible():string{
        return this.combustible;
    }
    public aleatorio(min:number,max:number){
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    public calcularSeguro():void{
        let valorTotal:number=this.aleatorio(300000,2800000);
        let cuotaMensual:number=(valorTotal/100)/6
        console.log("La cotizacion del seguro de Auto contra robo e incendio total es: $",valorTotal)
        console.log("El valor de la cuota mensual 1/6 es: $",cuotaMensual)
    }
}