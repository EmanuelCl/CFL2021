import Vehiculo from "./Vehiculo";

export default class AutoDeCarreras extends Vehiculo{
    private velocidadMaxima:number;

    public constructor(tipo:string,patente:string,marca:string,modelo:string,año:number,velocidadMaxima:number){
        super(tipo,patente,marca,modelo,año)
        this.velocidadMaxima = velocidadMaxima
    }
    public velocidadMax():number{
        return this.velocidadMaxima;
    }
    public aleatorio(min:number,max:number){
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    public calcularSeguro():void{
        let valorTotal:number=this.aleatorio(20000000,90000000);
        let cuotaMensual:number=(valorTotal/100)/6
        console.log("La cotizacion del seguro del Auto de Carreras contra robo e incendio total es: $",valorTotal)
        console.log("El valor de la cuota mensual 1/6 es: $",cuotaMensual)   
    }
}