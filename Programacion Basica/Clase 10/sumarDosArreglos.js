let readlineSync=require("readline-Sync");
let dimension=readlineSync.questionInt("Cuantos numeros desea cargar para cada arreglo? ");
let v1=new Array(dimension);
let v2=new Array(dimension);
let vSuma=new Array(dimension);
cargarArreglo(dimension,v1,v2);
sumarArreglo(dimension,v1,v2,vSuma);
mostrarArreglo(dimension,v1,v2,vSuma);
function Aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
function cargarArreglo(dimension,v1,v2){
    let i=0;
    for(i=0;i<dimension;i++){
        v1[i]=Aleatorio(1,100);
        v2[i]=Aleatorio(1,100);
    }
}
function sumarArreglo(dimension,v1,v2,vSuma){
    let i=0;
    for(i=0;i<dimension;i++){
        vSuma[i]=v1[i]+v2[i]
    }
}
function mostrarArreglo(dimension,v1,v2,vSuma){
    let i=0;
    for(i=0;i<dimension;i++){
        console.log(v1[i]," + ",v2[i]," = ",vSuma[i])
    }
}