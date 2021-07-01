let readlineSync=require("readline-Sync");
let n=readlineSync.questionInt("Cuantos numeros desea Ingresar? ");
let numeros=new Array(n);
let positivo=0;
let negativo=0;
let cero=0;
cargaVector(numeros,positivo,negativo,cero,n);
function cargaVector(numeros,cero,positivo,negativo,n){
let i=0
for(i=0;i<n;i++){
    numeros[i]=readlineSync.questionInt("Ingrese "+n+" numeros: ");
    if(numeros[i]==0){
        cero++
        }else if(numeros[i]<0){
        negativo++
        }else if(numeros[i] >0){
            positivo++
        }
    }  
 console.log(positivo + " positivos " + negativo + " negativos y " + cero + " ceros");
}

