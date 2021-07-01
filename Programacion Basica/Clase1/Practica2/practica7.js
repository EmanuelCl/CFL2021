let readlineSync=require("readline-Sync");
let n=readlineSync.questionInt("Indique el tamaño del arreglo: ");
let arreglo1=new Array(n);
let arreglo2=new Array(n);
let resultado=new Array(n);
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}
function cargarArreglo(arreglo,n){
    let i=0;
    for(i=0;i<n;i++){
        arreglo[i]=aleatorio(1,100);
    }
}
function sumarArreglo(arreglo1,arreglo2,resultado){
    let i=0;
    for(i=0;i<n;i++){
        resultado[i]=arreglo1[i]+arreglo2[i];
    }
}
function mostrarArreglo(arreglo,n){
    let i=0;
    let salida="";
    for(i=0;i<n;i++){
        salida=salida+" "+arreglo[i]; 
    }
    console.log(salida);
}
cargarArreglo(arreglo1,n);
mostrarArreglo(arreglo1,n);
cargarArreglo(arreglo2,n);
mostrarArreglo(arreglo2,n);
sumarArreglo(arreglo1,arreglo2,resultado);
mostrarArreglo(resultado,n);