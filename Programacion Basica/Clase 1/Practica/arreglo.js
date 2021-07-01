let readlineSync=require("readline-Sync");
//Algoritmo Orden 
let lim = readlineSync.questionInt("Indique la cantidad de numeros que desea ordenar: ");
let a = new Array(lim);  
cargar(a, lim); 
console.log(a); 
//seleccion 
seleccion(a, lim); 
console.log(a);

function cargar(arreglo, cantidad) {
    let i;
    for (i = 0 ; i<cantidad; i++ ) {
        arreglo[i] = readlineSync.questionInt("Ingrese los numeros que desea ordenar: ");
    }
}

function escribirEnUnaLinea(arreglo, cantidad) { 
    let i;
    let vector = "";
    for (i = 0 ; i<cantidad; i++) {
        vector = vector + arreglo[i] + " " ;
    }
    console.log (vector); 
}

function intercambiar(arreglo, i, j) { 
    let aux; 
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}

function seleccion(arreglo, cantidad) {
    let i, j, posicion; 
    for (i = 0; i < (cantidad-1); i++) {
        posicion = i; 
        for (j = i + 1; j < cantidad; j++) {
            if (comparar(arreglo, posicion, j) == 1) {
                posicion = j; 
            } 
        }
        intercambiar(arreglo, i, posicion); 
    }
}
