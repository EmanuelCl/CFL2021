let btnAgregar = document.querySelector('#btnAgregar');
btnAgregar.addEventListener('click', agregar);

let clientes=[];

async function load(){
    let container = document.querySelector("#app"); 
    
    try {
        let response = await fetch("/cliente");
        if(response.ok) {
            let t = await response.json();
            clientes=t
            mostrarClientes();
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
    let nombre = document.querySelector('#nombre').value;
    let razon = parseInt(document.querySelector('#razon').value);
    let domicilio = document.querySelector("#domicilio").value;
    let saldo = parseInt(document.querySelector("#saldo").value);
  
    let cliente = {
      "nombre": nombre,
      "razon": razon,
      "domicilio": domicilio,
      "saldo":saldo,
    };
    clientes.push(cliente);
  
    mostrarClientes();
}
function mostrarClientes() {
    let html = '';
    for (let i=0;i<clientes.length;i++) {
      html += `
              <tr>
                  <td>Nombre: ${clientes[i].nombre} </td>
                  <td>Razon social: ${clientes[i].razon} </td>
                  <td>Domicilio: ${clientes[i].domicilio} </td>
                  <td>Saldo: ${clientes[i].saldo} </td>
              </tr>
          `;
    }
    document.querySelector('#tblCompras').innerHTML = html;
}