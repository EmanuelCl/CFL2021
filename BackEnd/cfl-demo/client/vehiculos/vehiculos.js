"use strict"

let botonAuto = document.querySelector("#agregarAuto");
let botonCamioneta = document.querySelector("#agregarCamioneta");
// let verAutos = document.querySelector("#mostrarAutos");
// let verCamionetas = document.querySelector("#mostrarCamionetas")
let botonBuscar = document.querySelector("#buscar");

let vehiculos = []

botonBuscar.addEventListener("click", buscar);
botonAuto.addEventListener("click" , agregarAuto);
botonCamioneta.addEventListener("click",agregarCamioneta);
// verAutos.addEventListener("click" , mostrarAuto);
// verCamionetas.addEventListener("click", mostrarCamioneta);

async function load(){
    let container = document.querySelector("#app"); 
    
    try {
        let response = await fetch("/vehiculos");
        if(response.ok) {
            let t = await response.json();
            vehiculos=t
            mostrarVehiculos();
        }
        else{
          alert("error")
        }
    } 
    catch (error) {
        container.innerHTML = "<H1>"+error.message+"error</h1>"
    }
}
  load();



function agregarAuto(){
let tipo = document.querySelector("#tipo").value;
let marca = document.querySelector("#marca").value;
let patente = document.querySelector("#patente").value;
let modelo = document.querySelector("#modelo").value;
let año = document.querySelector("#año").value;
let precio = parseInt(document.querySelector("#precio").value);
let capacidad = parseInt(document.querySelector("#capacidad").value);

    let auto = {
        "tipo":tipo,
        "marca":marca,
        "patente":patente,
        "modelo":modelo,
        "año":año,
        "precio":precio,
        "capacidad":capacidad
    };
    vehiculos.push(auto);
    crear(auto)
}
function agregarCamioneta() {
    let tipo = document.querySelector("#tipo").value;
    let marca = document.querySelector("#marca").value;
    let patente = document.querySelector("#patente").value;
    let modelo = document.querySelector("#modelo").value;
    let año = document.querySelector("#año").value;
    let precio = parseInt(document.querySelector("#precio").value);
    let capacidad = parseInt(document.querySelector("#capacidad").value);
    let camioneta = {
        "tipo":tipo,
        "marca":marca,
        "patente":patente,
        "modelo":modelo,
        "año":año,
        "precio":precio,
        "capacidad":capacidad
    };
    vehiculos.push(camioneta);
    crear(camioneta)
}

async function crear(vehiculo){
    let response = await fetch("/vehiculos",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(vehiculo)
    });
    let r = await response.json();
    console.log(r);
}

// function mostrarAuto() {
//     mostrarVehiculo()
// }

// function mostrarCamioneta() {
//     m
// }

async function buscar() {
    let container = document.querySelector("#container");
    let patente = document.querySelector("#patente").value
    try {
      let response = await fetch("/vehiculos/"+patente);
      if(response.ok) {
          let t = await response.json();
          vehiculos=t 
          container.innerHTML="Tipo: "+ vehiculos.tipo + "Marca: " + vehiculos.marca + "Patente: " + vehiculos.patente + "Modelo: " + vehiculos.modelo + "Año: " + vehiculos.año +"Precio: " + vehiculos.precio + "Capacidad: " + vehiculos.capacidad;
      }
      else{
        alert("error")
      }
  } 
  catch (error) {
      container.innerHTML = "<H1>"+error.message+"error</h1>"
    }
}
function mostrarVehiculos(){
    let html=""
    for(let i=0;i<vehiculos.length;i++){
        html+=`
                <tr>
                    <td>Tipo: ${vehiculos[i].tipo}</td>
                    <td>Marca: ${vehiculos[i].marca}</td>
                    <td>Patente: ${vehiculos[i].patente}</td>
                    <td>Modelo: ${vehiculos[i].modelo}</td>
                    <td>Año: ${vehiculos[i].año}</td>
                    <td>Precio: ${vehiculos[i].precio}</td>
                    <td>Capacidad: ${vehiculos[i].capacidad}</td>
                </tr>
            `;
    }  
    document.querySelector('#tblVehiculos').innerHTML = html;     
}