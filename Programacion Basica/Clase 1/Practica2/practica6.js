let readlineSync=require("readline-Sync");
let chicos=new Array(11);
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}
function cargarArreglo(chicos){
    let i=0;
    for(i=0;i<11;i++){
        chicos[i]=aleatorio(3,7);
    }
}
function mostrarChicos(chicos){
    let i=0;
    let salida="";
    for(i=0;i<11;i++){
        salida=salida+" "+chicos[i];
    }
    console.log(salida);
}
function calcularPromedio(chicos){
    let i=0;
    let prome=0;
    for(i=0;i<11;i++){
        prome=prome+chicos[i]
    }
    console.log(prome/11);
}
cargarArreglo(chicos);
mostrarChicos(chicos);
calcularPromedio(chicos);