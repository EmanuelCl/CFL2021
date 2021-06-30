//Muestre un mensaje de alerta al presionar un botón si el valor introducido
//en un campo de texto es negativo y en otro campo de texto positivo.

//¿Cómo cambiaría si la condición fuera que alguno de los dos fuera positivo?

let ingresoUno = document.getElementById("ingresoUno");
let ingresoDos = document.getElementById("ingresoDos");
let enviar = document.getElementById("enviar");

enviar.addEventListener("click" , verificar);

function verificar() {
    let numeroUno = ingresoUno.value;
    let numeroDos = ingresoDos.value;

    if(numeroUno>0 || numeroDos>0) {
        alert("Has introducido un numero positivo");
    }
}
