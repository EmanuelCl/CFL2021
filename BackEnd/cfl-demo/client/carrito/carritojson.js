"use strict"
let btnAgregar = document.querySelector('#btnAgregar');
btnAgregar.addEventListener('click', agregar);
let btnTotal = document.querySelector('#btnTotal');
btnTotal.addEventListener('click', sumar);

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
  let producto = document.querySelector('#producto').value;
  let precio = parseInt(document.querySelector('#precio').value);
  let descripcion=""

  let renglon = {
    "producto": producto,
    "precio": precio,
    "descripcion":descripcion,
  };
  compras.push(renglon);

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
                <td>Producto: ${compras[i].producto} </td>
                <td>Precio: $${compras[i].precio} </td>
                <td>Descripcion: ${compras[i].descripcion} </td>
            </tr>
        `;
  }
  document.querySelector('#tblCompras').innerHTML = html;
}