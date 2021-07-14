import * as RLS from 'readline-sync';
import RegistroLibros from "./RegistroLibros";

let registro: RegistroLibros = new RegistroLibros();
registro.cargarLibros();
registro.mostrarLibros();

let opcion: string = RLS.question('Ingrese una opcion:(C:CREAR)(R:BUSCAR)(U:BUSCAR Y REEMPLAZAR)(D:ELIMINAR), X para finalizar: ').toUpperCase();
let nombre: string;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.addLibro();
            break;
        }
        case 'R': {
            nombre = RLS.question('Ingrese el nombre del Libro a buscar: ');
            console.log(`Encontre el libro en la posicion ${registro.findLibro(nombre)}.`);
            break;            
        }
        case 'U': {
            nombre = RLS.question('Ingrese la palabra a buscar y reemplazar: ');
            registro.updateLibro(nombre);
            break;
        }
        case 'D': {
            nombre = RLS.question('Ingrese el libro a eliminar: ');
            registro.deleteLibro(nombre);
            break;                        
        }
    }
    registro.mostrarLibros();
    opcion = RLS.question('Ingrese una opcion:(C:CREAR)(R:BUSCAR)(U:BUSCAR Y REEMPLAZAR)(D:ELIMINAR), X para finalizar: ').toUpperCase();
}
