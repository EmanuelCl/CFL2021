let readlineSync=require("readline-Sync");
let n=readlineSync.questionInt("Cuantos numeros desea Ingresar? ");
let v=new Array(n);
let i;
for(i=0;i<n;i++){
    v[i]=readlineSync.questionInt("Ingrese numero en la posicion " + i + " : ");
}
for(i=n-1;i>=0;i--){
    console.log("El numero en la posicion " + i + " es " + v[i]);
}