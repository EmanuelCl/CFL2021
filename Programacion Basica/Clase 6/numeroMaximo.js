let readlineSync=require("readline-Sync");
let numero=readlineSync.questionInt("Ingrese los Numeros deseados: ");
let numMaximo=numero
let contador=0
while(numero!=0){
    numero=readlineSync.questionInt("Ingrese los Numeros deseados: ")
        contador++
        if(numero>numMaximo)
            numMaximo=numero;
}  
if(contador){
    console.log("El numero maximo es: "+ numMaximo);
}