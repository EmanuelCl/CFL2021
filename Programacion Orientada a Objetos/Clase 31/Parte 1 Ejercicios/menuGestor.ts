import GestorPistas from "./GestorPistas";
import * as read from "readline-sync";
import Pista from "./Pista";

let gestor:GestorPistas = new GestorPistas();
gestor.cargarPistas("pistas.txt","\n")
gestor.mostrarPista();
let opcion:string = read.question("Opciones: (C=Crear Lista de Reproduccion), (T=Ver cantidad total de pistas), (D=Ver duracion total de la pista), (DT=Ver duracion total lista) X para finalizar: ").toUpperCase();
while(opcion!="X"){
    switch(opcion){
        case "C": {
            gestor.crearLista(); 
            break;
        }
        case "T": {
            gestor.mostrarTotal();
            break;
        }
        case "D": {
            let identificador:number=read.questionInt("Ingrese el numero de identificador de la pista: ");
            gestor.duracionTotalPista(identificador);
        }
        case "DT": {
            gestor.duracionTotalLista();
        }    
    }
    opcion = read.question("Opciones: (C=Crear Lista de Reproduccion), (T=Ver cantidad total de pistas), (D=Ver duracion total de la pista), (DT=Ver duracion total lista) X para finalizar: ").toUpperCase();
}