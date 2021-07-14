import * as Read from "readline-sync"
import RegistroPersonas from "./RegistroPersonas";
import LectorArchivos from "./LectorArchivos"

let registro:RegistroPersonas=new RegistroPersonas();
let lector:LectorArchivos=new LectorArchivos();

let opcion: string = Read.question('Ingrese una opcion:(C:CREAR)(R:BUSCAR)(U:BUSCAR Y REEMPLAZAR)(D:ELIMINAR), X para finalizar: ');
let dni:number;

lector.cargarPersonas();
lector.mostrarPersonas();

while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.agregarPersona();
            break;
        }
        case 'R': {
            dni = Read.questionInt('Ingrese el DNI de la Persona: ');
            console.log(`Encontre el DNI en la posicion ${registro.buscarPersona(dni)}.`);
            break;            
        }
        case 'U': {
            dni = Read.questionInt('Ingrese el DNI de la Persona a modificar: ');
            registro.modificarRegistro(dni);
            break;
        }
        case 'D': {
            dni = Read.questionInt('Ingrese el DNI de la Persona a Eliminar: ');
            registro.eliminarPersona(dni);
            break;                        
        }
    }
    lector.mostrarPersonas();
    opcion = Read.question('Ingrese una opcion:(C:CREAR)(R:BUSCAR)(U:BUSCAR Y REEMPLAZAR)(D:ELIMINAR), X para finalizar: ').toUpperCase();
}

//NPM RUN EJECUTAR
