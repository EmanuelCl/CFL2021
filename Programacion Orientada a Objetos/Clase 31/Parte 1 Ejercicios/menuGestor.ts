import GestorPistas from "./GestorPistas";
import * as read from "readline-sync";

let gestor:GestorPistas = new GestorPistas();
gestor.cargarPistas("pistas.txt","\n")
gestor.mostrarPista();
let opcion:string = read.question("Desea Crear una Nueva Lista de Reproduccion? X para finalizar: ").toUpperCase();//si para crear, x para salir
while(opcion!="X"){
    if(opcion=="SI"){
        gestor.crearLista();
    }
    gestor.mostrarPista();
    opcion = read.question("Desea Crear una Nueva Lista de Reproduccion? X para finalizar: ").toUpperCase();
}