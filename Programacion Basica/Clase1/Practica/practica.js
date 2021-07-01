let readlineSync=require("readline-Sync");
let n=readlineSync.questionInt("Cuantos numeros desea Ingresar? ");
let v=new Array(n);
let i;
let positivo=0
let negativo=0
let cero=0
for(i=0;i<n;i++){
    v[i]=readlineSync.questionInt("Ingrese el numero en la posicion " + i + " : ");
    if(v[i]<0){
        negativo++
    }else if(v[i]>0){
        positivo++
    
    }else if(v[i]==0){
        cero++
    }
}
console.log(positivo + " positivos, " + negativo + " negativos y " + cero + " ceros");