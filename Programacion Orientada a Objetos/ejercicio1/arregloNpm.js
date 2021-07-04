function Aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
let readlineSync=require("readline-sync");
let cantidad=readlineSync.questionInt("Indique la cantidad de numeros del Arreglo: ");
let arreglo=new Array(cantidad);


for(let i=0;i<cantidad;i++){
    arreglo[i]=Aleatorio(0,100);
}
function mostrarArreglo(arreglo,cantidad){
    let i=0;
    let salida=0;
    for(i=0;i<cantidad;i++){
        salida=salida + " " + arreglo[i]
    }
    console.log(salida);
}
mostrarArreglo(arreglo,cantidad);

//npm run ejecutar