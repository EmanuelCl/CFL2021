let readlineSync= require("readline-sync");
let precioUnitario= readlineSync.questionInt("Ingrese el Precio de la Compra: ");
let descuento= (precioUnitario*15/100)
let precioFinal= precioUnitario-descuento
let mesIngresado=readlineSync.questionInt("Ingrese el Numero de Mes Vigente: ");
let mes= 10
if(mesIngresado==mes){
    console.log("El precio final de su compra es de: " + precioFinal);
}else{
    console.log("Este mes no hay Descuento");
}