let readlineSync=require("readline-Sync");
let v1=new Array(6);
let v2=new Array(6);
let vSuma=new Array(6);
function cargaVector()
for(i=0;i<6;i++){
    v1[i]=readlineSync.questionInt("Ingrese 6 numeros a v1: ");
}
for(i=0;i<6;i++){
    v2[i]=readlineSync.questionInt("Ingrese 6 numeros a v2: ");
}
for(i=0;i<6;i++){
    vSuma[i]=v1[i]+v2[i]
    console.log(v1[i], " + " ,v2[i], " = " , vSuma[i])
}