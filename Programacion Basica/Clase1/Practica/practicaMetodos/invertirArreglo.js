let readlineSync=require("readline-Sync");
let n=readlineSync.questionInt("Cuantos numeros desea ingresar? ");
let numero=new Array(n)
let i=0;
for(i=0;i<n;i++){
    numero[i]=readlineSync.questionInt("Ingrese "+n+" numeros: ");
}
for(i=n-1;i>=0;i--){
    console.log(numero[i]);
}