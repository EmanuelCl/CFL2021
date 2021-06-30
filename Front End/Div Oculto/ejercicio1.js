let botones = document.querySelectorAll("button");
let divs = document.querySelectorAll(".clase");

for(let indice=0;indice<botones.length;indice++){
    botones[indice].addEventListener("click" ,function(e){
       moverBoton(indice);
    })
}
function moverBoton(indice) {
    divs[indice].classList.toggle("oculto")
}