let readlineSync=require("readline-Sync");
let dimension=readlineSync.questionInt("Cuantos numeros desea Ingresar? ");
let numero=new Array(dimension)
let numeroIngresado;
let indice=0
let suma=0
for(indice=0;indice<dimension;indice++){
    numeroIngresado=readlineSync.questionInt("Ingrese numero: ");
    numero[indice]=numeroIngresado
    suma=suma+numeroIngresado
}
for(indice=0;indice<dimension;indice++){
    console.log("El numero en la posision " , indice , "es" , numero[indice]);
}
    console.log("El resultado de la suma es " , suma);
