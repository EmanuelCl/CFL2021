//4. Cree una pagina con un input, un checkbox y un boton.
// Al presionar el boton, si el checkbox está seleccionado debe aparecer un saludo en un h1 y sino en un h2.

let boton= document.querySelector("button");
let input = document.getElementById("chequear");
let div = document.getElementById("div");
let ingreso = document.getElementById("ingreso");

boton.addEventListener("click", verificar);


function verificar() {
    if(input.checked){
        let mostrar=ingreso.value
        let titulo  = document.createElement("h1");
        let contenido = document.createTextNode(" Hola " + mostrar + " Bienvenido" );
        titulo.appendChild(contenido);
        div.appendChild(titulo)  
    }else{
        let mostrar=ingreso.value
        let titulo2 = document.createElement("h2");
        contenido = document.createTextNode("Hola " + mostrar + " Bienvenido");
        titulo2.appendChild(contenido);
        div.appendChild(titulo2)
    }
    
}