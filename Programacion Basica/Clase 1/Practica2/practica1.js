let readlineSync=require("readline-Sync");
let n=readlineSync.questionInt("Ingrese dimension: ");
let arreglo1=new Array(n);
let arreglo2=new Array(n);
let producto;
function cargarArreglo(arreglo,n){
    let i=0;
    for(i=0;i<n;i++){
        arreglo[i]=readlineSync.questionInt("Ingrese " +n+" numeros: ");
    }
}
function multiplicarArreglo(arreglo1,arreglo2,n){
    let i=0;
    let multiplicacion=0;
    for(i=0;i<n;i++){
        multiplicacion+=arreglo1[i]*arreglo2[i];
    }
    console.log(multiplicacion);
}

console.log("Cargando arreglo 1...");
cargarArreglo(arreglo1,n);
console.log("Cargando arreglo 2...");
cargarArreglo(arreglo2,n);
producto=multiplicarArreglo(arreglo1,arreglo2,n);
