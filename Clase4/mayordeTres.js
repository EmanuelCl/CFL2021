let readlineSync=require ("readline-Sync");
let primerNumero=readlineSync.questionInt("Ingrese el Primer Numero: ");
let segundoNumero=readlineSync.questionInt("Ingrese el Segundo Numero: ");
let tercerNumero=readlineSync.questionInt("Ingrese el Tercer Numero: ");
if (primerNumero>segundoNumero && primerNumero>tercerNumero){
        console.log ("El primer numero es el mayor de los 3");
}else{
        if(segundoNumero>primerNumero && segundoNumero>tercerNumero){
                console.log ("El segundo numero es el mayor de los 3");
        }else{
                        if(tercerNumero>primerNumero && tercerNumero>segundoNumero){
                                console.log ("El tercer numero es el mayor de los 3");
                        }
                }
        }
