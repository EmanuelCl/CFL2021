//Escribir un algoritmo que pida al usuario ingresar una
//serie de textos, hasta que ingrese un texto vacio, y
//los convierta en nombres de variable que cumpla las
//recomendaciones de buenas practicas.
//Por ejemplo si el usuario ingresa: cantidad de pasos
//lo debe convertir en cantidadDePasos

let readlineSync=require("readline-Sync");
let texto=readlineSync.question("Ingrese texto a covertir en camelCase: ");
while(texto!= ""){
    console.log(convertirEnCamelCase(texto));
    texto = readlineSync.question("Ingrese texto a convertir en camelCase: ")
}
function convertirEnCamelCase(texto){
    let textoLocal = texto.toLowerCase().trim();
    let camelCase= "";
    let i = 0;
    while(i < textoLocal.length){
        if(textoLocal[i]== " "){
            camelCase+=textoLocal[i+1].toUpperCase();
            i+=2;
        }else{
            camelCase+=textoLocal[i];
            i++
        }
    }
    return camelCase
}