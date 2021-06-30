"use strict";
let contador=0;
let cantidad=1000;
let tirarDosDados=document.getElementById("tirarDosDados");
let mostrarResultado=document.getElementById("mostrar");

tirarDosDados.addEventListener("click" , tirarDados);


function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
} 
let dado1=new Array(cantidad);
let dado2=new Array(cantidad);

function tirarDados() {
    let i=0;
    let sumar=0;
    for(i=0;i<cantidad;i++){
        dado1[i]=aleatorio(1,6);
        dado2[i]=aleatorio(1,6)
    }
    for(i=0;i<cantidad;i++){
        sumar=dado1[i]+dado2[i]
        if(sumar===7){
            contador++
        }
    }
    mostrar(contador);
}
function mostrar() {
    mostrarResultado.innerHTML="La cantidad de Veces que Salio 7 es: " + contador
}
