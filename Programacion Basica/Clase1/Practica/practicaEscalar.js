let readlineSync=require("readline-Sync");
let n=readlineSync.questionInt("Cuantos numeros desea ingresar para cada arreglo? ");
let v1=new Array(n);
let v2=new Array(n);
let escala=new Array(n);
let producto=0;
let i=0
for(i=0;i<n;i++){
    v1[i]=readlineSync.questionInt("Ingrese numeros v1 : ");
}
for(i=0;i<n;i++){
    v2[i]=readlineSync.questionInt("Ingrese numero v2 : ");
}
for(i=0;i<n;i++){
    escala[i]=v1[i]*v2[i]
}
for(i=0;i<n;i++){
    producto=producto+escala[i]
    console.log(v1[i]+ " x " + v2[i] + " = " + escala[i]);
}
console.log(producto)