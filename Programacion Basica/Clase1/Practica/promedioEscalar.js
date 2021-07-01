let readlineSync=require("readline-Sync");
let n=readlineSync.questionInt("Cuantos numeros desea ingresar? ");
let v1=new Array(n);
let v2=new Array(n);
let r=new Array(n)
let i=0;
let producto=0;
cargarArreglo1(v1,n);
cargarArreglo2(v2,n);
function cargarArreglo1(v1,n){
let i=0
for(i=0;i<n;i++){
    v1[i]=readlineSync.questionInt("Ingrese numeros v1: ");
    }
}
function cargarArreglo2(v2,n){
let i=0
for(i=0;i<n;i++){
    v2[i]=readlineSync.questionInt("Ingrese numeros v2: ");
    }
}
for(i=0;i<n;i++){
    r[i]=v1[i]*v2[i]
    
}
for(i=0;i<n;i++){
    producto+=r[i]
    console.log(v1[i] + " x " + v2[i] + " = " + r[i])
}
console.log(producto);
