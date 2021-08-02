import LectorEscritor from "./LectorEscritor";
import * as read from "readline-sync";

export default class BlackJack{
    private lectorEscritor: LectorEscritor

    public constructor(){
        this.lectorEscritor = new LectorEscritor();
    }
    public aleatorio(min:number,max:number){
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    public jugarBlackJack():void{
        let apuesta:number=read.questionInt("Ingrese el monto a apostar: ");
        let cartaCrupier:number=this.aleatorio(17,22);
        let cartaUno:number=this.aleatorio(1,10);
        let cartaDos:number=this.aleatorio(1,10);
        let cartaAleatoria:number=this.aleatorio(1,10);
        let suma:number=cartaUno+cartaDos;
        console.log("Sus cartas",[cartaUno],[cartaDos], " = ", suma)
        let opciones:string=read.question("Desea otra carta o se planta? (C=CARTA),(P=PLANTARSE): ").toUpperCase();
        let premio:number=0;

        while(suma<=21 && opciones !="P"){
            cartaAleatoria=this.aleatorio(1,10);
            suma=suma +cartaAleatoria;
            console.log("Sus cartas",[cartaUno],[cartaDos],[cartaAleatoria], " = ", suma)
            opciones=read.question("Desea otra carta o se planta? (C=CARTA),(P=PLANTARSE): ").toUpperCase();
        }
        if(opciones=="P"){
            if(suma<21 && cartaCrupier<suma) {
                premio=apuesta*2;
                console.log("Felicitaciones! has ganado: ","$",premio);
                console.log("Tu Juego: ",suma);
                console.log("Crupier: ",cartaCrupier);
            }
            if(suma==21){
                premio=apuesta*10
                console.log("BlackJack! Felicitaciones! Has ganado: ","$",premio);
                console.log("Tu Juego: ",suma);
                console.log("Crupier: ",cartaCrupier);
            }
            if(cartaCrupier>suma){
                console.log("Lo sentimos, has perdido!");
                console.log("Tu Juego: ",suma);
                console.log("Crupier: ",cartaCrupier);
            }
            if(suma>21){
                console.log("Lo sentimos, has perdido!");
                console.log("Tu Juego: ",suma);
                console.log("Crupier: ",cartaCrupier);
            }
        }
        this.lectorEscritor.guardarResultado("blackjack.txt", `${"ESTADISTICAS JUGADA:"} \n ${"Premio Ganado: "}${premio} \n ${"Total Cartas Jugada:"} ${suma} \n ${"Total Cartas Crupier:"} ${cartaCrupier} \n ${"Monto Apostado: "}${apuesta} \n`);
    }
}
