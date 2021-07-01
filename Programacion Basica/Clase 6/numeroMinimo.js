let readlineSync=require("readline-Sync");
let numero=readlineSync.questionInt("Ingrese un Numero: ");
let numMinimo=0
let contador=0
while(numero!=0){
    numero=readlineSync.questionInt("Ingrese un Numero: ")
    contador++
    if(numero<numMinimo)
        numMinimo=numero;
}
    if(contador){
        console.log("El numero minimo es" + numMinimo)
    }
