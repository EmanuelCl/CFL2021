let readlineSync=require("readline-Sync");
let nombre=new Array(2)
let numero=new Array(3)
let nombreIngresado;
let numeroIngresado;
let indice=0
for(indice=0;indice<2;indice++){
    nombreIngresado=readlineSync.question("Ingrese dos nombres: ");
    nombre[indice]=nombreIngresado
}
for(indice=0;indice<3;indice++){
    numeroIngresado=readlineSync.question("Ingrese tres numeros: ")
    numero[indice]=numeroIngresado
}
for(indice=0;indice<2;indice++){
    console.log("El nombre en la posicion " , indice , "es" , nombre[indice]);
}
for(indice=0;indice<3;indice++){
    console.log("El numero en la posicion " , indice , "es" , numero[indice]);
}