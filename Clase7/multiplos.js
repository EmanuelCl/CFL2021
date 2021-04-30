let readlineSync=require("readline-Sync");
let numero1=readlineSync.questionInt("Primer numero: ");
let numero2=readlineSync.questionInt("Segundo numero: ");
function esMultiplo (numero1,numero2){
    if(numero1%numero2==0){
        console.log("Verdadero, el " + numero1 + "  es multiplo de " + numero2)
    }else{
        console.log("Falso, el  "  +  numero1 + "  no es multiplo de " + numero2)
    }
}
esMultiplo(numero1,numero2);