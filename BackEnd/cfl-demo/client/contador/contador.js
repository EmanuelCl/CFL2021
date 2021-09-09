"use strict";
let contador = 0;
let incremento=document.getElementById("clickear");
let decremento=document.getElementById("declickear");
let contadorManual=document.getElementById("contadorManual");
let mostrarContador=document.getElementById("mostrarContador");


incremento.addEventListener("click" , incrementar);
decremento.addEventListener("click" , decrementar);
contadorManual.addEventListener("change" , contarManual);

function incrementar() {
    contador++
    mostrar(contador);
}

function decrementar() {
    contador--
    mostrar(contador);
}

function contarManual() {
    contador = contadorManual.value;
    mostrar(contador);
}

function mostrar() {
    mostrarContador.innerHTML="Contador: " + contador
}