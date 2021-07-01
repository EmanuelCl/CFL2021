let readlineSync=require("readline-Sync");
let cantidad=readlineSync.questionInt("Cuantos numeros desea ingresar para cada arreglo? ");
let v1=new Array(cantidad);
let v2=new Array(cantidad);
let r=new Array(cantidad);
let producto=0
let i=0
for(i=0;i<cantidad;i++){
    v1[i]=readlineSync.questionInt("Ingrese " + cantidad + " numeros : ");
}
for(i=0;i<cantidad;i++){
    v2[i]=readlineSync.questionInt("Ingrese nuevamente " + cantidad + " numeros : ");
}
for(i=0;i<cantidad;i++){
    r[i]=v1[i]*v2[i]
}
for(i=0;i<cantidad;i++){
    producto=producto+r[i]
    console.log(v1[i] + " x " + v2[i] + " = " + r[i]);
}
console.log(producto);