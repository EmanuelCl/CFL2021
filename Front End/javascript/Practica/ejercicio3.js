//Hacer una pagina que al presionar un botón cree un div con posición, tamaño y color aleatorio.
"use strict";
let boton = document.querySelector("button");
boton.addEventListener("click" , cambiarEstilo);
let div = document.querySelector(".div");


function cambiarEstilo() {
    div.style.backgroundColor =`rgb(${aleatorio(0,255)}, ${aleatorio(0,255)}, ${aleatorio(0,255)})`
    div.style.marginLeft = `${aleatorio(10,1200)}.px`
    div.style.width = `${aleatorio(10,255)}.px`
    div.style.height = `${aleatorio(10,200)}.px`
    }
   

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}