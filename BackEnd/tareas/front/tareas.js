let btnAdd = document.getElementById("botonAdd");
let btnBusc = document.getElementById("botonBus")
let btnMod = document.getElementById("botonAct");
let btnBor = document.getElementById("botonBor");

let cmpIdTarea = document.getElementById("IdTarea");
let cmpNombreTarea = document.getElementById("NombreTarea");
let cmpEstadoTarea = document.getElementById("EstadoTarea");

let contenido = document.getElementById("app");
let tareas = [];

load();

async function load() {
    try {
        let response = await fetch("/tarea");
        if(response.ok) {
            tareas = await response.json();
            mostrar();
        } else {
            contenido.innerHTML="Error en lectura de servidor";
        }
    } catch(error) {
        contenido.innerHTML="Error en conexion de servidor";

    }
}

function mostrar() {
    let datos = "<ul>";
    for (let i = 0; i < tareas.length; i++) {
            datos += `<li>${tareas[i].idTarea} ${tareas[i].nombreTarea} ${tareas[i].estadoTarea?"SI":"NO"}</li>`   
    }
    datos +="</ul>";
    contenido.innerHTML = datos;
}

btnAdd.addEventListener("click", () => {
//llenar de tarea
    let tarea = {
        "IdTarea": cmpIdTarea.value,
        "nombre": cmpNombreTarea.value,
        "estadoTarea":cmpEstadoTarea.checked,
    };
  tareas.push(tarea);
  crear(tarea)
  load();
  mostrar();
});
btnBor.addEventListener("click", async () => {
    try {
        let response = await fetch(`/tarea/${cmpIdTarea.value}`,{
            method:"DELETE",
            headers:{
                "Content-Type" : "aplicattion/json"
            }
        });
        if(response.ok) {
            load();
        } else {
            contenido.innerHTML="Error en lectura de servidor";
        }
    } catch(error) {
        contenido.innerHTML="Error en conexion de servidor";

    }
});
btnBusc.addEventListener("click", () => {
//llenar de tarea
});
async function crear(tarea){
    let response = await fetch("/tarea",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(tarea)
    });
    let r = await response.json();
    console.log(r);
}