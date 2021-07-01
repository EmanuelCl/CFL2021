function Azar(numero) {
    return Math.floor((Math.random() * numero) + 1);
}

function cargar(matriz, f, c, numAzar) {
    let fil, col;
    for (fil = 0; fil < f; fil++) {
        for (col = 0; col < c; col++) {
            matriz[fil][col] = Azar(numAzar); 
        }
    } 
}

function mostrarMatriz(matriz, f, c) { 
    let fil, col, cadena;
    for (fil = 0; fil < f; fil++) {
        cadena = " ";
        for (col = 0; col < c; col++) {
            cadena = cadena + " [" + String(matriz[fil][col]) + "]";
        }
        console.log(cadena);
    }
}

// manejo de matrices, como armarla, como recorrerla, y como mostrarla
let readlineSync = require('readline-sync');
let c = readlineSync.questionInt("cantidad de columnas de la matriz: ");
let f = readlineSync.questionInt("cantidad de filas de la matriz: ");
// genero un arreglo "matriz" que formara las columnas de la matriz
let matriz = new Array(c);
let indice;
// genero un arreglo "matriz[indice]" que formará las filas de la matriz, por cada elemento del arreglo de columnas
for (indice=0; indice<f; indice++) {
    matriz[indice] = new Array(f);
}
// como la recorro, le asigno valores y veo su contenido
let fila, columna;
let fila2 = 0;
for (fila=0; fila<f; fila++) {
    for (columna= 0; columna<c; columna++) {
        // acá asignro un valor (consecutivo) a la matriz en su fila,columna
        matriz[fila][columna] = fila2+columna;
        // muestro por consola el valor
        console.log( matriz[fila][columna]);
    };
    // para pasar a la siguiente fila, sumo la cantidad de columnas "c" del arreglo para asignar valores consecutivos
    fila2 = fila2 + c;
}

// otra forma más elegante de mostrar una matriz
mostrarMatriz(matriz, f, c);

let cont1 = readlineSync.question("continuar.... ");
console.log("---------------------------------------");

cargar(matriz, f, c, 100);
for (fila=0; fila<f; fila++) {
    for (columna= 0; columna<c; columna++) {
        console.log( matriz[fila][columna]);
    };
}
mostrarMatriz(matriz, f, c);