let readlineSync=require("readline-Sync");
let promedio;
let cantidad=11;
let chicos=new Array(cantidad);
cargarArreglo(chicos,cantidad);
mostrarChicos(chicos,cantidad);
promedio=calcularPromedio(chicos,cantidad);
console.log("El promedio de las edades es: ", promedio/cantidad);

function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function cargarArreglo(chicos,cantidad){
    for(let i=0;i<cantidad;i++){
        chicos[i]=Aleatorio(3,7);
    }
}
function calcularPromedio(chicos,cantidad){
    let prome=0;
    for(let i=0;i<cantidad;i++){
        prome=prome+chicos[i]
    }
    return prome
}
function mostrarChicos(chicos,cantidad){
    let salida="Edades:"
       for(let i=0;i<cantidad;i++){
        salida=salida+ "  " +chicos[i]
    }
    console.log(salida);
}

