import * as readlineSync from "readline-sync"

let cantidad:number=readlineSync.question("Cuantas palabras desea Ingresar? ");
let arreglo:string[]=[]
function cargarPalabras(arreglo:string[],cantidad:number):void{
    for(let i:number=0;i<cantidad;i++){
        arreglo[i]=readlineSync.question("Ingrese palabras: ")
    }
}
cargarPalabras(arreglo,cantidad)
console.log(arreglo);

function modificar (arreglo:string[]):void {
    let palabra:number=readlineSync.question("Indique la posicion en la cual desea Insertar/eliminar/buscar/actualizar palabras: ");
    console.log(arreglo[palabra])
    arreglo[palabra]=readlineSync.question("Inserte/elimine/busque/actualice palabras: ");
    console.log(arreglo);
}
modificar(arreglo);

//Ejercicio 2 (Partir de cero)
//Definir funciones (con todos los tipos necesarios) para
//hacer lo siguiente:
//Cargar un listado de palabras (por esta vez, usar el arreglo
//como variable global)
//Insertar/eliminar/buscar/actualizar una palabra del listado