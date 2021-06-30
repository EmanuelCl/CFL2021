//Hacer una pagina que al presionar un botón cree un div con posición, tamaño y color aleatorio.
//Hacer el mismo funcionamiento del ej-3 pero apretando una sola vez el boton y que se vaya moviendo
//por toda la pantalla y cambiando de color y de tamaño.

let boton = document.querySelector("button");
let body = document.querySelector("body");
let div = document.createElement("div");
let contenido = document.createTextNode("DIV");
boton.addEventListener("click" ,timer);
body.appendChild(div);
div.appendChild(contenido);

function timer() {
setInterval(mostrarDiv,1000)
}

function mostrarDiv() {
    div.style.backgroundColor=`rgb(${aleatorio(2,255)},${aleatorio(2,255)},${aleatorio(2,255)})`;
    div.style.marginLeft = `${aleatorio(2,1200)}px`;
    div.style.marginTop = `${aleatorio(2,500)}px`
    div.style.width = `${aleatorio(2,800)}px`;
    div.style.height = `${aleatorio(2,800)}px`
    div.style.borderRadius = `120px`
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}