//5. Cree una página que tenga un text box, un label y un botón.
//Al hacer clic en el botón se deberá ejecutar una función javascript que,
// tomando lo ingresado en el text box, invierta las letras y lo imprima en la consola.
//Ejemplo:
//Text box: Hola Mundo!
//console.log: !odnuM aloH

let enviar = document.querySelector("button");
let input = document.getElementById("texto");
let parrafo = document.querySelector("p");
enviar.addEventListener("click" , invertir);

function invertir() {
    let texto=input.value;
    let largo=texto.length;
    let aux;
    let salida="";
    for(let indice=0;indice<largo;indice++){
        texto[indice]=texto
    }

    for(let indice=largo-1;indice>=0;indice--){
        texto[indice]=texto
        aux=texto[indice]
        salida=salida + "" + aux
    } 
    console.log(salida);
    parrafo.innerHTML=salida;
    parrafo.style.fontSize=`40px`
}