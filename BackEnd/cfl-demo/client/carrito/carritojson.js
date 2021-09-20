"use strict"

let btnAgregar = document.querySelector('#btnAgregar');
btnAgregar.addEventListener('click', agregar);
let btnTotal = document.querySelector('#btnTotal');
btnTotal.addEventListener('click', sumar);
let botonBuscar = document.querySelector("#buscar");
botonBuscar.addEventListener("click", buscar);

let compras = [];

async function load(){
  let container = document.querySelector("#app"); 
  
  try {
      let response = await fetch("/producto");
      if(response.ok) {
          let t = await response.json();
          compras=t
          mostrarTablaCompras();
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



function agregar() {
  console.log('Funcion Agregar');
  let idProducto = document.querySelector("#id").value
  let producto = document.querySelector('#producto').value;
  let precio = parseInt(document.querySelector('#precio').value);

  let renglon = {
    "idProducto": idProducto,
    "nombreProducto": producto,
    "precio": precio,
  };
  compras.push(renglon);
  crear(renglon)
  mostrarTablaCompras();
}

function sumar() {
  console.log('Funcion Sumar');
  let total = 0;
  for (let i = 0; i < compras.length; i++) {
    total += compras[i].precio;
  }
  let max = compras[0].precio;
  for (let r of compras) {
    if (max < r.precio) max = r.precio;
  }
  document.querySelector('#total').innerHTML = '<p>Total: $' + total + '</p>' + '<p>Maximo: $' + max + '</p>';
}

function mostrarTablaCompras() {
  let html = '';
  for (let i=0;i<compras.length;i++) {
    html += `
            <tr>
                <td>Id: ${compras[i].idProducto} </td>
                <td>Producto: ${compras[i].nombreProducto} </td>
                <td>Precio: $${compras[i].precio} </td>
            </tr>
        `;
  }
  document.querySelector('#tblCompras').innerHTML = html;
}
async function crear(producto){
  let response = await fetch("/producto",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto)
  
  });
  let r = await response.json();
  console.log(r)
}
async function buscar() {
  let container = document.querySelector("#container");
  let idProducto = document.querySelector("#id").value
  let producto = document.querySelector('#producto').value;
  let precio = parseInt(document.querySelector('#precio').value);
  try {
    let response = await fetch("/producto/"+idProducto);
    if(response.ok) {
        let t = await response.json();
        compras=t
        container.innerHTML="ID: "+ compras.idProducto + "Producto: " + compras.nombreProducto + "Precio: " + compras.precio;
    }
    else{
      alert("error")
    }
} 
catch (error) {
    container.innerHTML = "<H1>"+error.message+"error</h1>"
}


}