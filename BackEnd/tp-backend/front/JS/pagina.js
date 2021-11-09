let botonAdd = document.getElementById("botonAdd");
let botonBusc = document.getElementById("botonBusc");
let botonActu = document.getElementById("botonActu");
let botonBorrar = document.getElementById("botonBorr");

let btnAddPost = document.getElementById("crearPost");
let btnBuscarPost = document.getElementById("buscarPost");
let btnActuPost = document.getElementById("actuPost");
let btnBorrarPost = document.getElementById("borrarPost");

let userId = document.getElementById("userId");
let nam = document.getElementById("name");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let website = document.getElementById("website");
let company = document.getElementById("company");

let userIdPost = document.getElementById("userIdPost")
let idPost = document.getElementById("idPost");
let titlePost = document.getElementById("title");
let bodyPost = document.getElementById("body");

let contenido = document.getElementById("app");
let container = document.getElementById("app2");

let usuarios = [];
let publicaciones = [];

loadUsuario();
loadPublicacion();

async function loadUsuario() {
    try {
        let response = await fetch("/usuario");
        if(response.ok) {
            usuarios = await response.json();
            console.log(usuarios)
            mostrarUsuario();
        }else{
            contenido.innerHTML="Error en lectura del servidor";
        }
    } catch (error) {
        contenido.innerHTML="Error en conexion con servidor";
    }
}

async function loadPublicacion() {
    try {
        let response = await fetch("/pagina");
        if(response.ok) {
            publicaciones = await response.json();
            console.log(publicaciones)
            mostrarPublicacion();
        }else{
            container.innerHTML="Error en lectura del servidor";
        }
    } catch (error) {
        container.innerHTML="Error en conexion con servidor";
    }
}

async function crearUsuario(usuario){
    let response = await fetch("/usuario",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(usuario)
    });
    let r = await response.json();
    console.log(r)
}

async function crearPublicacion(publicacion){
    let response = await fetch("/pagina",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(publicacion)
    });
    let r = await response.json();
    console.log(r)
}

function mostrarUsuario(){
    let datos = "<ul>";
    for (let i = 0; i < usuarios.length; i++) {
            datos += `<li>${usuarios[i].id} ${usuarios[i].name} ${usuarios[i].username} ${usuarios[i].email} ${usuarios[i].address} ${usuarios[i].phone} ${usuarios[i].website} ${usuarios[i].company}</li>`   
    }
    datos +="</ul>";
    contenido.innerHTML = datos;
}

function mostrarPublicacion(){
    let datos = "<ul>";
    for(let i = 0; i <publicaciones.length; i++){
        datos += `<li>${publicaciones[i].userId} <a href='/postDetail.html?index=${publicaciones[i].idPost}'>${publicaciones[i].idPost}</a> ${publicaciones[i].title} ${publicaciones[i].body}</li>`
    }
    datos += `</ul>`;
    container.innerHTML = datos;
}

botonAdd.addEventListener("click", async () => {
    let usuario = {
        "id":userId.value,
        "name":nam.value,
        "username":userName.value,
        "email":email.value,
        "address":address.value,
        "phone":phone.value,
        "website":website.value,
        "company":company.value,
    }
    usuarios.push(usuario);
    crearUsuario(usuario);
    loadUsuario();
    mostrarUsuario();
});

botonActu.addEventListener("click", async () => {
    try {
        let usuario = {
            "id":userId.value,
            "name":nam.value,
            "username":userName.value,
            "email":email.value,
            "address":address.value,
            "phone":phone.value,
            "website":website.value,
            "company":company.value,
        }
        let response = await fetch(`/usuario/${userId.value}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"
            },
            body:JSON.stringify(usuario)
        });
        if(response.ok) {
            loadUsuario();
        }else{
            contenido.innerHTML="Error en lectura del servidor";
        }
    } catch (error) {
        contenido.innerHTML="Error en conexion con servidor";
    }
});
botonBorrar.addEventListener("click", async () => {
    try {
        let response = await fetch(`/usuario/${userId.value}`, {
            method: "DELETE",
            headers: {"Content-Type" : "application/json" }
        });
        if(response.ok) {
            loadUsuario();
        }else{
            contenido.innerHTML="Error en lectura del servidor";
        }
    } catch (error) {
        contenido.innerHTML="Error en conexion con servidor";
    }
});
botonBusc.addEventListener("click", async () => {
    try {
        let response = await fetch(`/usuario/${userId.value}`, {
            method: "GET",
            headers: {"Content-Type" : "application/json" }
        });
        if(response.ok) {
            usuarios = await response.json();
            contenido.innerHTML= "Id: " + usuarios.id +" Name: "+ usuarios.name +" UserName: "+ usuarios.username +" Email: "+ usuarios.email +" Address: "+usuarios.address;
        }else{
            contenido.innerHTML="Error en lectura del servidor";
        }
    } catch (error) {
        contenido.innerHTML="Error en conexion con servidor";
    }
});
btnAddPost.addEventListener("click", async () => {
    let publicacion = {
        "userId":userIdPost.value,
        "id":idPost.value,
        "title":titlePost.value,
        "body":bodyPost.value,
    }
    publicaciones.push(publicacion);
    crearPublicacion(publicacion);
    loadPublicacion();
    mostrarPublicacion();
});
btnActuPost.addEventListener("click",  async () => {
    try {
        let publicacion = {
            "userId":userIdPost.value,
            "id":idPost.value,
            "title":titlePost.value,
            "body":bodyPost.value,
        }
        let response = await fetch(`/pagina/${idPost.value}`, {
                method: "PUT",
                headers: {"Content-Type" : "application/json"
            },
            body:JSON.stringify(publicacion)
        });
        if(response.ok) {
            loadPublicacion();
        }else{
            contenido.innerHTML="Error en lectura del servidor";
        }
    } catch (error) {
        contenido.innerHTML="Error en conexion con servidor";
    }
});
btnBorrarPost.addEventListener("click", async () => {
    try {
        let response = await fetch(`/pagina/${idPost.value}`,{
            method:"DELETE",
            headers: {"Content-Type" : "application/json" }
         });
         if(response.ok){
             loadPublicacion();
         }else{
             container.innerHTML="Error en lectura del servidor";
         }
    } catch (error) {
        container.innerHTML="Error en Conexion con Servidor";
    }
});
btnBuscarPost.addEventListener("click", async () => {
    try {
        let response = await fetch(`/pagina/${idPost.value}`, {
            method: "GET",
            headers: {"Content-Type" : "application/json" }
        });
        if(response.ok) {
            publicaciones = await response.json();
            contenido.innerHTML= "UserID: " + publicaciones.userId +" ID: "+ publicaciones.id +" Title: "+ publicaciones.title +" Body: "+ publicaciones.body;
        }else{
            contenido.innerHTML="Error en lectura del servidor";
        }
    } catch (error) {
        contenido.innerHTML="Error en conexion con servidor";
    }
});