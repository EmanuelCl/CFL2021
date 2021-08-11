import * as read from "readline-sync";
import CustomError from "./CustomError";
import LectorEscritor from "./LectorEscritor";
import Tragamonedas from "./Tragamonedas";

export default class TragamonedasDos extends Tragamonedas{

    public constructor(){
        super();
        this.lectorEscritor = new LectorEscritor();
    }
    public aleatorio(min:number,max:number){
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    public jugarVariante():void{
        let numero:number=read.questionInt("Ingrese un numero del 0 al 100: ");
        let monto:number=read.questionInt("Ingrese el monto a apostar: ");
        let numeroUno:number=this.aleatorio(0,100);
        let numeroDos:number=this.aleatorio(0,100);
        let numeroTres:number=this.aleatorio(0,100);
        let premio:number=0;
        
        if(numero>100 || numero<0){
            throw new CustomError("El numero ingresado debe estar entre 0 y 100")
        }
        switch(numero){
            case numeroUno:
            case numeroDos:
            case numeroTres:
                premio=monto*10;
                console.log([numeroUno],[numeroDos],[numeroTres]);
                console.log("Felicitaciones! has ganado: ","$",premio);
                break;
            case numeroUno && numeroDos && numeroTres:
                premio=monto*100;
                console.log([numeroUno],[numeroDos],[numeroTres]);
                console.log("Felicitaciones! has ganado: ","$",premio);
                break;
            case (numeroUno && numeroDos) || (numeroUno && numeroTres) || (numeroDos && numeroTres):
                premio=monto*50;
                console.log([numeroUno],[numeroDos],[numeroTres]);
                console.log("Felicitaciones! has ganado: ","$",premio);
                break;
            default:{
                console.log("Lo sentimos has perdido ", [numeroUno],[numeroDos],[numeroTres]);
            }
        }
        this.lectorEscritor.guardarResultado("tragamonedasDos.txt", `${"ESTADISTICAS JUGADA:"} \n ${"Premio Ganado: "}${premio} \n ${"Numero Ingresado:"} ${numero} \n ${"Monto Apostado: "}${monto} \n ${"Numeros Jugada: "}${numeroUno},${numeroDos},${numeroTres} \n`);
    }
}




