//Genere una cadena con los números del 1 al 100 (usando ciclos),
// y agreguelos mediante Javascript al cuerpo de la página al presionar un botón.


let boton = document.getElementById("mostrar");
boton.addEventListener("click", numeros);
let pagina = document.getElementById("ver");

let contador=new Array(100)
function numeros() {
    for(let indice=0;indice<100;indice++){
        contador[indice]=indice+1;
    }
pagina.innerHTML=contador;
}













