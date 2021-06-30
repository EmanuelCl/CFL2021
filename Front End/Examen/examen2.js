//1- Crear una pagina que contenga un input donde el usuario pueda cargar tareas.
//También deberá tener un botón "guardar tarea" cuyo funcionamiento sea agregar el
//contenido del input a una lista sin eliminar los valores cargados previamente
//2- Crear un botón que se llame "Limpiar lista" y que al hacer click elimine todo el contenido de la lista de tareas.
//3- Agregar como mínimo dos estilos para los elementos que prefiera.
"use strict";
let guardar=document.getElementById("guardar");
let eliminar=document.getElementById("eliminar")
let input=document.getElementById("input");
let lista=document.querySelector("ul")
let div=document.querySelector("div");

guardar.addEventListener("click" , agregarTarea);
eliminar.addEventListener("click" , eliminarTarea);

function agregarTarea() {
    let tarea=input.value;
    let elemento=document.createElement("li");
    let contenido=document.createTextNode(tarea);
    lista.appendChild(elemento);
    elemento.appendChild(contenido);
    lista.style.fontSize=`30px`
    lista.style.color=`#3355FF`
}
function eliminarTarea() {
    div.removeChild(lista)
}