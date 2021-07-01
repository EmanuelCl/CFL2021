let readlineSync=require("readline-Sync");
let numero=readlineSync.questionInt("Ingrese un numero: ");
let numMax=0;
let numMin=0;
let contador=0;
let promedio=0;
let suma=0;
while(numero!=0){
    numero=readlineSync.questionInt("Ingrese un numero: ");
        if(numero>numMax){
            numMax=numero;
        }
        if(numero<numMin){
            numMin=numero;
        }
        contador++
        suma=suma+numero;
        
}
if(contador>0){
    promedio=suma/contador;
}
console.log("Numero Maximo: "  +  numMax + " Numero Minimo: " +  numMin + " Promedio: " +  promedio);