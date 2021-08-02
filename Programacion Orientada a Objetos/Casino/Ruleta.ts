import * as read from "readline-sync";
import LectorEscritor from "./LectorEscritor";
export default class Ruleta{
    private lectorEscritor: LectorEscritor;
​
	public constructor(){
		this.lectorEscritor = new LectorEscritor();
	}
    public aleatorio(min:number,max:number){
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    public jugarRuleta():void{
        let opciones:string=read.question("Elija su apuesta: (PLENO),(SEMIPLENO),(CALLE),(CUADRO),(LINEA),(COLUMNA),(DOCENA): ").toUpperCase();
        let apuesta:number=read.questionInt("Ingrese el monto a apostar: ");
        let parImpar:string=read.question("Desea apostar a: (PAR) , (IMPAR) , (X) Para continuar: ").toUpperCase();
        let premio:number=0;
        let numero:number=this.aleatorio(0,36);
        
        switch(opciones){
            case "PLENO":{
                let numIngresado:number=read.questionInt("Ingrese un numero: ");
                premio=apuesta*35
                
                if((numIngresado==numero) || (numIngresado==0)){
                    console.log("Felicitaciones! has ganado: ","$",premio);
                    console.log("Numero Ganador: ",numero);
                }else{
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ",numero);
                }   
                break;
            }
            case "SEMIPLENO":{
                let numIngresado:number=read.questionInt("Ingrese el Primer Numero: ");
                let numIngresadoDos:number=read.questionInt("Ingrese el Segundo Numero: ");
                premio=apuesta*17
                if(numIngresado==numero || numIngresadoDos==numero){
                    console.log("Felicitaciones! has ganado: ","$",premio);
                    console.log("Numero Ganador: ",numero);
                }else{
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ",numero);
                }
                break;
            }
            case "CALLE":{
                let numIngresado:number=read.questionInt("Ingrese el primer numero: ");
                let numIngresadoDos:number=read.questionInt("Ingrese el segundo numero: ");
                let numIngresadoTres:number=read.questionInt("Ingrese el tercer numero: ");
                premio=apuesta*11
                if(numIngresado==numero || numIngresadoDos==numero || numIngresadoTres==numero){
                    console.log("Felicitaciones! has ganado: ","$",premio);
                    console.log("Numero Ganador: ",numero);
                }else{
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ",numero);
                }
                break;
            }
            case "CUADRO":{
                let numIngresado:number=read.questionInt("Ingrese el primer numero: ");
                let numIngresadoDos:number=read.questionInt("Ingrese el segundo numero: ");
                let numIngresadoTres:number=read.questionInt("Ingrese el tercer numero: ");
                let numIngresadoCuatro:number=read.questionInt("Ingrese el cuarto numero: ");
                premio=apuesta*8
                if(numIngresado==numero || numIngresadoDos==numero || numIngresadoTres==numero || numIngresadoCuatro==numero){
                    console.log("Felicitaciones! has ganado: ","$",premio);
                    console.log("Numero Ganador: ",numero);
                }else{
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ",numero);
                }
                break;
            }
            case "LINEA":{
                let numIngresado:number=read.questionInt("Ingrese el primer numero: ");
                let numIngresadoDos:number=read.questionInt("Ingrese el segundo numero: ");
                let numIngresadoTres:number=read.questionInt("Ingrese el tercer numero: ");
                let numIngresadoCuatro:number=read.questionInt("Ingrese el cuarto numero: ");
                let numIngresadoCinco:number=read.questionInt("Ingrese el quinto numero: ");
                let numIngresadoSeis:number=read.questionInt("Ingrese el sexto numero: ");
                premio=apuesta*5
                if(numIngresado==numero || numIngresadoDos==numero || numIngresadoTres==numero || numIngresadoCuatro==numero || numIngresadoCinco==numero || numIngresadoSeis==numero){
                    console.log("Felicitaciones! has ganado: ","$",premio);
                    console.log("Numero Ganador: ",numero);
                }else{
                    console.log("Lo sentimos, has perdido!");
                    console.log("Numero Ganador: ",numero);
                }
                break;
            }
            case "COLUMNA":{
                let columna:number=read.questionInt("Cual columna desea apostar: 1, 2 o 3? ");
                let columnaUno:number[]=[1,4,7,10,13,16,19,22,25,28,31,34];
                let columnaDos:number[]=[2,5,8,11,14,17,20,23,26,29,32,35];
                let columnaTres:number[]=[3,6,9,12,15,18,21,24,27,30,33,36];
                premio=apuesta*2;
                    switch(columna){
                        case 1:{
                            for(let i=0;i<columnaUno.length;i++){
                                if(columnaUno[i]==numero){
                                console.log("Felicitaciones! has ganado: ","$",premio);
                                console.log("Numero Ganador: ",numero);
                                }
                            }
                            console.log("Lo sentimos, Has perdido");
                            console.log("Numero Ganador: ",numero);
                            break;  
                        }
                        case 2:{
                            for(let i=0;i<columnaDos.length;i++){
                                if(columnaDos[i]==numero){
                                console.log("Felicitaciones! has ganado: ","$",premio);
                                console.log("Numero Ganador: ",numero);
                                }
                            }
                            console.log("Lo sentimos, Has perdido");
                            console.log("Numero Ganador: ",numero);
                            break;  
                        }
                        case 3:{
                            for(let i=0;i<columnaTres.length;i++){
                                if(columnaTres[i]==numero){
                                console.log("Felicitaciones! has ganado: ","$",premio);
                                console.log("Numero Ganador: ",numero);
                                }
                            }
                            console.log("Lo sentimos, Has perdido");
                            console.log("Numero Ganador: ",numero);
                            break;  
                        }
                        default:{
                            console.log("La opcion ingresada no es correcta.");
                            columna=read.questionInt("Cual columna desea apostar: 1, 2 o 3? ");
                        }     
                    }   
                break;
            }
            case "DOCENA":{
                let docena:number=read.questionInt("Elija un numero siendo: 1=(Primer Docena), 2=(Segunda Docena), 3=(Tercer Docena): ");
                let primerDocena:number=this.aleatorio(0,12);
                let segunDocena:number=this.aleatorio(13,24);
                let tercerDocena:number=this.aleatorio(25,36);
                premio=apuesta*2;

                switch(docena){
                    case 1:{
                        if(numero==primerDocena){
                                console.log("Felicitaciones! has ganado: ","$",premio);
                                console.log("Numero Ganador: ",numero);
                        }else{
                            console.log("Lo sentimos, has perdido!");
                            console.log("Numero Ganador: ",numero);
                        }
                        break;
                    }
                    case 2:{
                        if(numero==segunDocena){
                                console.log("Felicitaciones! has ganado: ","$",premio);
                                console.log("Numero Ganador: ",numero);
                        }else{
                            console.log("Lo sentimos, has perdido!");
                            console.log("Numero Ganador: ",numero);
                        }
                        break;
                    }
                    case 3:{
                        if(numero==tercerDocena){
                                console.log("Felicitaciones! has ganado: ","$",premio);
                                console.log("Numero Ganador: ",numero);
                        }else{
                            console.log("Lo sentimos, has perdido!");
                            console.log("Numero Ganador: ",numero);
                        }
                        break;
                    }
                    default:{
                        console.log("La opcion ingresada no es correcta.")
                        docena=read.questionInt("Elija un numero siendo: 1=(Primer Docena), 2=(Segunda Docena), 3=(Tercer Docena): ");
                    }
                }
            }
        }
        if(parImpar=="PAR"){
            premio=apuesta;
            if(numero%2==0){
                console.log("El numero es Par, Has ganado: ",premio);
            }else{
                console.log("El numero es Impar, Has perdido!")
            }
        }
        if(parImpar=="IMPAR"){
            if(numero%2!=0){
                console.log("El numero es Impar, Has ganado: ",premio)
            } 
        }
        this.lectorEscritor.guardarResultado("ruleta.txt", `${"ESTADISTICAS JUGADA:"} \n ${"Tipo de apuesta: "} ${opciones} \n ${"Premio Ganado: "}${premio} \n ${"Monto Apostado: "}${apuesta} \n ${"Par o Impar: "}${parImpar} \n ${"Numero Ganador: "}${numero}\n`);   
    }   
}