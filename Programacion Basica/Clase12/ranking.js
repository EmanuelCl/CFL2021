let readlineSync=require("readline-sync");
let n = 10;
let facturacion = new Array(n);
let clientes = new Array(n);
clientes[0]="Jose Perez";
clientes[1]="Pepe Rodriguez";
clientes[2]="Juanito Laguna";
clientes[3]="Leo Perez";
clientes[4]="Solange Ribarola";
clientes[5]="Emanuel Perez";
clientes[6]="Rosario Suarez";
clientes[7]="Nicanor Lopez";
clientes[8]="Carlo Magno";
clientes[9]="Guillermo Coria";
cargarArreglo(facturacion,n );
Burbuja(facturacion,n,clientes);
mostrarArreglo(facturacion,n,clientes)
//FUNCIONES
function Burbuja(facturacion,n,clientes) {
   let i, j, aux, aux2;
    // Algoritmo de burbuja       
    for (j = 1; j < n; j++) {
        for (i = 0; i < (n - j); i++) {
            if (facturacion[i] < facturacion[i + 1]) {
                aux = facturacion[i];
                facturacion[i] = facturacion[i + 1];
                facturacion[i + 1] = aux;
                aux2 = clientes[i];
                clientes[i] = clientes[i + 1];
                clientes[i + 1] = aux2;
            }
        }
    }
}
function cargarArreglo(v,n ) {
    let indice;
    let num = " ";
    for (indice = 0; indice < n; indice++) {
        v[indice] = readlineSync.questionInt("Ingrese facturacion: ")
        num = num + " " + v[indice];
    } console.log(num);
};
function mostrarArreglo(){
    let indice=0;
    for(indice=0; indice<5; indice++){
        console.log(" ",clientes[indice],facturacion[indice])
    }
};