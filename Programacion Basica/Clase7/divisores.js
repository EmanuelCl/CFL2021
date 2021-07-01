let readlineSync=require("readline-Sync");
let numero=readlineSync.questionInt("Ingrese un numero: ");
let contador=0
cantidadDeDivisores(contador,numero);
function cantidadDeDivisores(contador,numero){
    for(contador=0;contador>=0;contador++){
        if(numero%contador==0){
            console.log("Los divisores de " + numero + " son " + contador)
        }
    }
}