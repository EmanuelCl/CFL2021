import * as read from "readline-sync";
import LectorEscritor from "./LectorEscritor";

export default class Tragamonedas{
    protected lectorEscritor: LectorEscritor;

    public constructor(){
        this.lectorEscritor = new LectorEscritor();

    }
    public aleatorio(min:number,max:number){
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    public jugarTragamonedas():void{
        let monto:number=read.questionInt("Ingrese el monto a apostar: ");
        let numeroUno:number=this.aleatorio(1,9);
        let numeroDos:number=this.aleatorio(1,9);
        let numeroTres:number=this.aleatorio(1,9);
        let premio:number=0;

        if(numeroUno==numeroDos && numeroUno==numeroTres){
            premio=monto*10;
            console.log([numeroUno],[numeroDos],[numeroTres]);
            console.log("Felicitaciones! has ganado: ","$",premio );
        }else if(numeroDos==numeroUno && numeroDos==numeroTres){
            premio=monto*10;
            console.log([numeroUno],[numeroDos],[numeroTres]);
            console.log("Felicitaciones! has ganado: ","$",premio);
        }else if(numeroUno==numeroDos || numeroUno==numeroTres){
            premio=monto*2;
            console.log([numeroUno],[numeroDos],[numeroTres]);
            console.log("Felicitaciones! has ganado: ","$",premio);
        }else if(numeroDos==numeroUno || numeroDos==numeroTres){
            premio=monto*2;
            console.log([numeroUno],[numeroDos],[numeroTres]);
            console.log("Felicitaciones! has ganado: ","$",premio);
        }
        else{
            console.log("Lo sentimos has perdido", [numeroUno],[numeroDos],[numeroTres]);
        }
        this.lectorEscritor.guardarResultado("tragamonedas.txt", `${"ESTADISTICAS JUGADA:"} \n ${"Premio Ganado: "}${premio} \n ${"Monto Apostado: "}${monto} \n ${"Numeros Jugada: "}${numeroUno},${numeroDos},${numeroTres} \n`);
    }
}