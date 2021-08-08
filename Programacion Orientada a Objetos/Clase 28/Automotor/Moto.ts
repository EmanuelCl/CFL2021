import Vehiculo from "./Vehiculo";
import * as RLS from "readline-sync";

export default class Moto extends Vehiculo{
    private cilindrada:number

    public constructor(tipo:string,patente:string,marca:string,modelo:string,año:number,cilindrada:number){
        super(tipo,patente,marca,modelo,año);
        this.cilindrada=cilindrada;
    }
    public getCilindrada():number{
        return this.cilindrada;
    }
    public calcularSeguro():void{
        let valorTotal:number=this.aleatorio(90000,650000);
        let cuotaMensual:number=(valorTotal/100)/6
        console.log("La cotizacion del seguro de Moto contra robo e incendio total es: $",valorTotal)
        console.log("El valor de la cuota mensual es: $",cuotaMensual)
    }
}