let readlineSync=require("readline-Sync");
let numero=readlineSync.questionInt("Ingrese un Numero: ");
let contador=0
let positivo=0
let porcentaje=0
while(numero!=0){
    numero=readlineSync.questionInt("Ingrese un numero: ")
    if(numero>0){
        positivo=numero;
        positivo++
    }
       contador++
}
    if(contador>0){
        porcentaje=positivo*100/contador;
            console.log("La cantidad de positivos son " + positivo + " y son el " + porcentaje + "% del total")
}