let readlineSync=require("readline-Sync");
let num=new Array(5)
let numeroIngresado;
let indice=0
for(indice=0;indice<5;indice++){
    numeroIngresado=readlineSync.questionInt("Ingrese un numero: ");
    num[indice]=numeroIngresado

}
for(indice=0;indice<5;indice++){
   console.log("el numero en la posicion " , indice , "es " , num[indice]);  
}