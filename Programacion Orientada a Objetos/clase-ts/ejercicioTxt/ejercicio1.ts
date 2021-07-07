import * as fs from 'fs';
import * as readlineSync from "readline-sync"

let texto: string = fs.readFileSync('abc.txt', 'utf8');

let arreglo:string[]=texto.split(' ');
console.log(arreglo)

function modificar (arreglo:string[]):void {
    let palabra:number=readlineSync.question("Indique la posicion en la cual desea Insertar/eliminar/buscar/actualizar palabras: ");
    console.log(arreglo[palabra])
    arreglo[palabra]=readlineSync.question("Inserte/elimine/busque/actualice palabras: ");
    console.log(arreglo);
}
modificar(arreglo);

//• Crear proyecto NPM
//• Modificar el ejercicio anterior (En clase 2)
//• Implementar sistema para inicializar el listado
//de palabras a partir de un archivo de texto