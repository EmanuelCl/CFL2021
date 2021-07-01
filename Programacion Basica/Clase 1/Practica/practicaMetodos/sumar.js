let readlineSync=require("readline-Sync");
let dimension=readlineSync.questionInt("Cuantos numeros desea Ingresar? ");
let v1=new Array(dimension);
let v2=new Array(dimension);
let vSuma=new Array(dimension);
cargarArreglo1(v1,dimension);
cargarArreglo2(v2,dimension);
sumarArreglo(v1,v2,dimension,vSuma);
mostrarArreglo1(v1,dimension);
mostrarArreglo2(v2,dimension);
mostrarResultado(v1,v2,dimension,vSuma);
function Aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
function cargarArreglo1(v1,dimension){
    let i=0;
    for(i=0;i<dimension;i++){
        v1[i]=Aleatorio(1,100);
    }
}
function cargarArreglo2(v2,cantidad){
    let i=0;
    for(i=0;i<dimension;i++){
        v2[i]=Aleatorio(1,100);
    }
}
function sumarArreglo(v1,v2,dimension,vSuma){
    let i=0;
    for(i=0;i<dimension;i++){
        vSuma[i]=v1[i]+v2[i];
    }
}
function mostrarArreglo1(v1,dimension){
    let i=0;
    let salida=0;
    for(i=0;i<dimension;i++){
        salida=salida+" "+v1[i];
    }
    console.log(salida);
}
function mostrarArreglo2(v2,dimension){
    let i=0;
    let salida=0;
    for(i=0;i<dimension;i++){
        salida=salida+" "+v2[i];
    }
    console.log(salida);
}
function mostrarResultado(v1,v2,dimension,vSuma){
    let i=0;
    for(i=0;i<dimension;i++){
        console.log(v1[i], " + " ,v2[i]," = ", vSuma[i]);
    }
}