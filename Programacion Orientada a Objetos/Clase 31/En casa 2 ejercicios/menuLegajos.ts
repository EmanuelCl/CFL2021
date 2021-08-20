import * as read from "readline-sync";
import gestorLegajos from "./gestorLegajos";

let legajo:gestorLegajos = new gestorLegajos();
legajo.cargarAlumnos("alumnos.txt","\n");
legajo.cargarNotas("notas.txt","\n");
legajo.mostrarAlumnos();
let opcion:string=read.question("Elija una opcion: (P=Ver Promedio de un alumno) , (T=Ver Promedio de todos los alumnos) , X para finalizar: ").toUpperCase();
while(opcion!="X"){
    switch(opcion){
        case "P": {
            let nombre:string=read.question("Ingrese el nombre del Alumno: ");
            legajo.buscarAlumno(nombre);
            break;
        }
        case "T": {
            legajo.obtenerPromedioGeneral();
            break;
        }
    }
    opcion=read.question("Elija una opcion: (P=Ver Promedio de un alumno) , (T=Ver Promedio de todos los alumnos) , X para finalizar: ").toUpperCase();
}
