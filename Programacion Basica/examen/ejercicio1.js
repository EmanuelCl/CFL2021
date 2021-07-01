 //Armar un algoritmo que permita leer un texto desde la consola y 
 //emita un listado con la ocurrencia de cada letra en el texto calculando además la probabilidad de aparición de cada una.
 // Tenga en cuenta que el texto puede contener letras mayúsculas, minúsculas y caracteres de puntuación,
 // pero cada letra se debe considerar independiente de como se presente, por ejemplo A y a NO son dos letras diferentes.
 // Considere que el texto está en idioma inglés es decir no contiene ñ, Ñ o letras acentuadas. Agregue el código como respuesta y los comentarios que crea necesarios
 let readlineSync=require("readline-Sync");
 let texto=readlineSync.question("Ingrese texto:" );
 let letras="abcdefghijklmnopqrstuvwxyz";
 let totalDeLetras=letras.length
 let totalTexto=texto.length
 let ocurrencias=new Array(totalDeLetras);

 cargarArreglo(totalDeLetras,ocurrencias);
 function cargarArreglo(totalDeLetras,ocurrencias){
     for(let i=0;i<totalDeLetras;i++){
        ocurrencias[i]=0;
    }
 }
 function cuantasVecesEsta(texto,totalDeLetras,letras){
     let i=0;
     let ocurrencia=0;
     for(i=0;i<totalDeLetras,i++;){
         if(texto[i]==letras){
             ocurrencia++
        }
     }
     return ocurrencia;
 }
 function contarLetras(letras,texto,ocurrencias){
     let textoLocal=texto.toLowerCase();
     for(let i=0;i<letras.length;i++){
        ocurrencias[i]=cuantasVecesEsta(textoLocal,textoLocal.length,letras[i]);
        totalDeLetras+=ocurrencias[i];
    }
    return totalDeLetras;
}
function listado(letras,ocurrencias,totalTexto){
    let i;
    console.log("En el texto hay "+totalTexto)
    for(i=0;i<letras.length;i++){
        if(ocurrencias[i] !=0){
            console.log('la letra',letras[i],'aparece',ocurrencias[i],'con una probabilidad de',ocurrencias[i]/totalDeLetras);
        }
    }
}
cargarArreglo(totalDeLetras,ocurrencias);
contarLetras(letras,texto,ocurrencias);
listado(letras,ocurrencias,totalTexto);