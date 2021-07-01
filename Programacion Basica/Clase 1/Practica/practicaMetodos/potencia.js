let readlineSync=require("readline-Sync");
let base=readlineSync.questionInt("Ingrese la base: ");
let exponente=readlineSync.questionInt("Ingrese el exponente: ");
function calcularPotencia(base,exponente){
    console.log("La potencia es " + calcularPotencia(base,exponente))
    let i=0
    let resultado=1
    if(exponente==0){
        return 1;
    }else{
        for(i=0;i<exponente;i++){
            resultado=resultado*base
        }
        return resultado
    }
}