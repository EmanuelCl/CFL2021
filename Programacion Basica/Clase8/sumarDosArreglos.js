let readlineSync=require("readline-Sync");
let primerArreglo=new Array(6)
let segundoArreglo=new Array(6)
let arregloSuma=new Array(6)
let primerNumIngresado;
let segunNumIngresado;
let indice;


for(indice=0;indice<6;indice++){
    primerNumIngresado=readlineSync.questionInt("Ingrese hasta 6 numeros: ");
    primerArreglo[indice]=primerNumIngresado
}
for(indice=0;indice<6;indice++){
    segunNumIngresado=readlineSync.questionInt("Ingrese nuevamente hasta 6 numeros: ");
    segundoArreglo[indice]=segunNumIngresado
}
for(indice=0;indice<6;indice++){
    console.log("El numero en la posicion " + indice + " es " + primerArreglo[indice])
    console.log("El numero en la posicion " + indice + " es " + segundoArreglo[indice])
}
for(indice=0;indice<6;indice++){
    arregloSuma[indice]=primerArreglo[indice]+segundoArreglo[indice]
}
for(indice=0;indice<6;indice++){
    console.log("La suma de " + primerArreglo[indice] + " y " + segundoArreglo[indice] + " es " + arregloSuma[indice]);
}