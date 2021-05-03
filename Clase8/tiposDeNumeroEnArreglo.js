let readlineSync=require("readline-Sync");
let dimension=readlineSync.questionInt("Cuantos numeros desea Ingresar? ");
let numeroArreglo=new Array(dimension);
let numeroIngresado;
let indice=0
let positivo=0
let cero=0
let negativo=0
for(indice=0;indice<dimension;indice++){
    numeroIngresado=readlineSync.questionInt("Ingrese numeros ");
    numeroArreglo[indice]=numeroIngresado

    if(numeroIngresado>0){
        positivo++
    }
    if(numeroIngresado<0){
        negativo++
    }
    if(numeroIngresado==0){
        cero++
    }
}
console.log(positivo + " positivos " + negativo + " negativos y " + cero + " ceros");
