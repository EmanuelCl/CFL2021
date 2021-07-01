function Aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
let readlineSync=require("readline-Sync");
let cantidad=readlineSync.questionInt("Ingrese la cantidad de chicos: ");
let chicos=new Array(cantidad);
cargarArreglo(cantidad,chicos);
calcularPromedio(cantidad,chicos);
mostrarArreglo(cantidad,chicos);
let promedio=calcularPromedio(cantidad,chicos);
console.log("el promedio de la edad es " + promedio/cantidad);
function cargarArreglo(cantidad,chicos){
    let i=0;
    for(i=0;i<cantidad;i++){
        chicos[i]=Aleatorio(3,7);
    }
}
function mostrarArreglo(cantidad,chicos){
    let i=0;
    for(i=0;i<cantidad;i++){
        console.log(chicos[i]);
    }
}
function calcularPromedio(cantidad,chicos){
    let i=0;
    let prome=0;
    for(i=0;i<cantidad;i++){
        prome=prome+chicos[i];
    }
    return prome;
}
