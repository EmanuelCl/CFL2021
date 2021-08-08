import Vehiculo from "./Vehiculo";
import * as RLS from "readline-sync";

export default class Camion extends Vehiculo{
    private cargaKg:number;

    public constructor(tipo:string,patente:string,marca:string,modelo:string,año:number,cargaKg:number){
        super(tipo,patente,marca,modelo,año);
        this.cargaKg=cargaKg;
    }

    public getCarga():number{
        return this.cargaKg
    }
    public calcularSeguro():void{
        let valorTotal:number=this.aleatorio(3500000,8000000);
        let cuotaMensual:number=(valorTotal/100)/6
        console.log("La cotizacion del seguro de Camion contra robo e incendio total es: $",valorTotal)
        console.log("El valor de la cuota mensual 1/6 es: $",cuotaMensual)
        
    }
}