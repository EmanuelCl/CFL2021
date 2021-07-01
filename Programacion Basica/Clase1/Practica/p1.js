let readlineSync = require('readline-sync');
let dim =readlineSync.questionInt("Ingrese la dimensión del arreglo: " );
let arreglo1 = new Array (dim);
let arreglo2 = new Array (dim);
let arreglo3 = new Array (dim);
cargarArreglo(arreglo1,dim);
cargarArreglo(arreglo2,dim);
sumarArreglo(arreglo1,arreglo2,arreglo3,dim);
mostrarArreglo(arreglo1,dim);
mostrarArreglo(arreglo2,dim);
console.log("La suma de los arreglos es ");
mostrarArreglo(arreglo3,dim);

function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function cargarArreglo(arreglo,dim){
    for(let i=0;i<dim;i++){
        arreglo[i]=Aleatorio(1,100);
    }
}
function sumarArreglo(arreglo1,arreglo2,arreglo3,dim){
    for(let i=0;i<dim;i++){
        arreglo3[i]=arreglo1[i]+arreglo2[i];
    }

}
function mostrarArreglo(arreglo,dim){
    let salida=" "
    for(let i=0;i<dim;i++){
        salida=salida+" "+arreglo[i];
    }
    console.log(salida)
}