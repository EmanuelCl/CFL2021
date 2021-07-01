let readlineSync=require("readline-Sync");
let numero1=readlineSync.questionInt("Ingrese el primero numero: ");
let numero2=readlineSync.questionInt("Ingrese el segundo numero: ");
esMultiplo(numero1,numero2)
function esMultiplo(numero1,numero2){
if(numero1%numero2==0){
    return console.log(true)
}else{
    return console.log(false)
    }
}