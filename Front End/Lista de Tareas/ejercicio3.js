let enviar=document.querySelector("button")
let input=document.getElementById("tarea");
let lista=document.getElementById("lista");

enviar.addEventListener("click" , tarea);

function tarea() {
    let tarea=input.value
    let crear=document.createElement("li");
	let contenido=document.createTextNode(tarea)
	crear.appendChild(contenido);
	lista.appendChild(crear);
	

}


