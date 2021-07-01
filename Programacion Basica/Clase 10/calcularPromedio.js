let readlineSync=require("readline-Sync");
let cantidad=readlineSync.questionInt("Cuantos jugadores desea cargar? ");
let v=new Array(cantidad);
cargarArreglo(cantidad,v);
mostrarArreglo(cantidad,v);
let promedio=calcularPromedio(cantidad,v)
console.log("El promedio de las edades es " , promedio );

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}   
function cargarArreglo(cantidad,v){
    let i=0;
    for(i=0;i<cantidad;i++){
        v[i]=aleatorio(3,7)
    }
}
function mostrarArreglo(cantidad,v){
    let i=0;
    for(i=0;i<cantidad;i++){
        console.log(v[i])
    }
}
function calcularPromedio(cantidad,v){
    let i=0;
    let prome=0
    let sumaTotal=0;
    for(i=0;i<cantidad;i++){
        sumaTotal=sumaTotal+v[i];
    }
    prome=sumaTotal/cantidad;
    return prome;
}