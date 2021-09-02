"use strict"
let botonAgregar = document.querySelector("#agregar");
botonAgregar.addEventListener("click",agregarDocumentos);
let preCargados=document.querySelector("#mostrar");
preCargados.addEventListener("click",documentosCargados);

let documentos = []
function documentosCargados(){
    let documento = {
        "Documento":[
            {
                "titulo":"Alumnos Del Curso",
                "autor":"Mauricio Islas",
                "contenido":"Desempeño Alumnos",
                "fecha":"2021",
            },
            {
                "titulo":"Historia Argentina",
                "autor":"Santillana",
                "contenido":"Historia argentina desde 1800 a 1900",
                "fecha":"19,01,1980",
            },
            {
                "titulo":"Geografia Argentina",
                "autor":"Capeluz",
                "contenido":"Geografia de la Quiaca hasta Ushuaia",
                "fecha":"20,04,1998",
            },
            {
                "titulo":"Ciencias Naturales",
                "autor":"Santillana",
                "contenido":"Atomos, reinos vegetales y animales",
                "fecha":"30,10,1999",
            },
            {
                "titulo":"Matematica Basica",
                "autor":"Santillana",
                "contenido":"Matematica Secundario y nivel Superior",
                "fecha":"03,04,2009",
            },
            {
                "titulo":"Lengua y Literatura",
                "autor":"Capeluz",
                "contenido":"Sustantivo, adjetivos y verbos",
                "fecha":"15,11,2014",
            },
            {
                "titulo":"Economia y Administracion",
                "autor":"Minerva",
                "contenido":"Micro y Macro Economia",
                "fecha":"12,05,2018",
            }
        ]
    }
    
    documentos.push(documento);

    mostrarDocumentos();
}
function agregarDocumentos(){
    let titulo = document.querySelector("#titulo").value;
    let autor = document.querySelector("#autor").value;
    let contenido = document.querySelector("#contenido").value;
    let fecha = parseInt(document.querySelector("#fecha").value);

    let documento = {
        "Documento":[
            {
                "titulo":titulo,
                "autor":autor,
                "contenido":contenido,
                "fecha":fecha,
            }
        ]
    }
    documentos.push(documento);
    
    mostrarDocumentos();
}
function mostrarDocumentos(){
    let html = '';
    for (let i=0;i<documentos.length;i++) {
      html += `
              <ul>
                  <li>${documentos[i].titulo}</li>
                  <li>${documentos[i].autor}</li>
                  <li>${documentos[i].contenido}</li>
                  <li>${documentos[i].fecha}</li>
                  <hr></hr>
              </ul>
          `;
    }
    document.querySelector('#lista').innerHTML = html;
}
function buscar(){
    let autor;
    for(let i=0;i<documentos.length;i++){
        autor=documentos[i]
        if(autor==documentos[i+1]){

        }
    }
}
