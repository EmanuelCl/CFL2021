let readlineSync=require("readline-Sync");
let dimension=readlineSync.questionInt("Cuantos nombres desea Ingresar? ");
let nombre=new Array(dimension)
let nombreIngresado;
let indice=0;
for(indice=0;indice<dimension;indice++){
    nombreIngresado=readlineSync.question("Ingrese nombres: ");
    nombre[indice]=nombreIngresado;

}
for(indice=0;indice<dimension;indice++){
    console.log("el nombre en la posicion" , indice , "es" , nombre[indice] );
}