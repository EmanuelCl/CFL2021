let readlineSync=require("readline-Sync");
let numero1=readlineSync.questionInt("Ingrese un Numero: ");
let numero2=readlineSync.questionInt("Ingrese otro Numero: ");
let suma=0
for(numero1;(numero1<=numero2);numero1++){
    suma=suma+numero1
}
     console.log("La suma es " + suma)