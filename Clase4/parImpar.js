let readlineSync=require("readline-sync");
let numero=readlineSync.questionInt("Ingrese un Numero: ");
if(numero==0){
    console.log("El") + numero +("No es Par o Impar");
}else{
    if(numero%2==0){
        console.log("El numero es Par");
    }else{
        console.log("El numero es Impar");
    }
}
