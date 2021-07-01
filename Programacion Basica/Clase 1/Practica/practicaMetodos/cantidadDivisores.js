let readlineSync=require("readline-Sync");
let numero=readlineSync.questionInt("Ingrese un numero para saber sus divisores: ");
let i=0;
cantidadDivisores(numero,i);
function cantidadDivisores(numero,i){
    for(i=0;i>=0;i++){
        if(numero%i==0){
            console.log("La cantidad de divisores de " + numero + " es " + i );
        }
    }
}