let readlineSync=require("readline-Sync");
let v1=new Array(6);
let v2=new Array(6);
let vSuma=new Array(6);
let i=0;

console.log("cargando v1");
cargaV1(v1);
console.log("cargando v2");
cargaV2(v2);
suma(vSuma,v1,v2);

function cargaV1(v1){
    let i=0;
    for(i=0;i<6;i++){
    v1[i]=readlineSync.questionInt("Ingrese los primeros 6 sumeros: ");
    }
}
function cargaV2(v2){
    let i=0;
    for(i=0;i<6;i++){
    v2[i]=readlineSync.questionInt("Ingrese otros 6 numeros: ");
    }
}
function suma(vSuma,v1,v2){
    let i=0;
    for(i=0;i<6;i++){
    vSuma[i]=v1[i]+v2[i];
    }
}
for(i=0;i<6;i++){
    console.log( v1[i] + " + " + v2[i] + " = " + vSuma[i]);
}
