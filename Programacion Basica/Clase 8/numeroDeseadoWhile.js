let readlineSync=require("readline-Sync");
let num=new Array(5)
let indice=0
let numeroIngresado;
while(indice<5){
    numeroIngresado=readlineSync.questionInt("Ingrese numero: ");
    num[indice]=numeroIngresado
    indice++

    console.log("El numero en la posicion ", indice , "es" , numeroIngresado);
}     

    
    

