let readlineSync=require("readline-Sync");
let base=readlineSync.questionInt("Ingrese el numero base: ");
let exponente=readlineSync.questionInt("Ingrese el exponente: ");
let resultado=1
let i=0
function calcularPotencia(base,exponente){
    while(i<exponente){
        resultado=resultado*base
        i++
        
    }
}
calcularPotencia(base,exponente);
console.log("El resultado de  " + base + "  elevado a " + exponente + "  es igual a "  + resultado );