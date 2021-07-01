//Armar un algoritmo que permita leer un texto desde la consola y 
 //emita un listado con la ocurrencia de cada letra en el texto calculando además la probabilidad de aparición de cada una.
 // Tenga en cuenta que el texto puede contener letras mayúsculas, minúsculas y caracteres de puntuación,
 // pero cada letra se debe considerar independiente de como se presente, por ejemplo A y a NO son dos letras diferentes.
 // Considere que el texto está en idioma inglés es decir no contiene ñ, Ñ o letras acentuadas. Agregue el código como respuesta y los comentarios que crea necesarios
let readlineSync = require('readline-sync');
let texto = readlineSync.question('Ingrese el texto a evaluar: ');
let letras='abcdefghijklmnopqrstuvwxyz';
let todasLasLetras=letras.length;
let ocurrencias = new Array(todasLasLetras);
let cuantasLetras = 0;

function inicializar(ocurrencias) {
//pongo en 0 todos los contadores, uno por cada letra.
    let indice;
    for (indice = 0; indice < todasLasLetras; indice++) {
        ocurrencias[indice]=0;   
    }
}
function cuantasVecesEsta(texto,todasLasLetras,letras) { 
    let ocurrencia=0;              
    for(let i=0; i<todasLasLetras; i++){      
        if (texto[i]==letras)  {      
            ocurrencia++  
        }
    }
    return ocurrencia;
}
function contarLetras(letras,texto,ocurrencias) {
    let indice;
    let textoLocal = texto.toLowerCase();
    let cantidadTotalLetras = 0;
    for (indice = 0; indice < letras.length; indice++) {
        ocurrencias[indice]=cuantasVecesEsta(textoLocal,textoLocal.length,letras[indice]);
        cantidadTotalLetras+=ocurrencias[indice];
    }
    return cantidadTotalLetras;
}
function listado(letras,ocurrencias,totalLetras) {
    let indice;
    console.log('En el texto ingresado hay',totalLetras);
    for (indice = 0; indice < letras.length; indice++) {
        if (ocurrencias[indice] != 0) {
            console.log('la letra',letras[indice],'aparece',ocurrencias[indice],'con una probabilidad de',ocurrencias[indice]/totalLetras);
        }
    }
}

inicializar(ocurrencias);
cuantasLetras=contarLetras(letras,texto,ocurrencias);
listado(letras,ocurrencias,cuantasLetras);
