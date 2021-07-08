import * as readlineSync from "readline-sync"

let cantidad:number=readlineSync.question("Cuantas palabras desea Ingresar? ");
let arreglo:string[]=[]

function cargarPalabras(arreglo:string[],cantidad:number):void{
    for(let indice:number=0;indice<cantidad;indice++){
        arreglo[indice]=readlineSync.question("Ingrese palabras: ")
    }
}
cargarPalabras(arreglo,cantidad);
console.log(arreglo);
opciones(arreglo);

function opciones(arreglo:string[]){
    let pregunta=readlineSync.question("Elija un numero para realizar la siguiente accion: (1=Insertar) (2=eliminar) (3=buscar) (4=actualizar) : ");
    if(pregunta===1){
        insertar(arreglo)
    }else if(pregunta===2){
        eliminar(arreglo)
    }else if(pregunta===3){
        buscar(arreglo)
    }else if(pregunta===4){
        actualizar(arreglo)
    }
}

function actualizar (arreglo:string[]):void {
    let palabra:number=readlineSync.question("Indique la posicion de la palabra que desea actualizar: ");
    console.log(arreglo[palabra])
    arreglo[palabra]=readlineSync.question("Ingrese la modificacion: ");
    console.log(arreglo);
}

function insertar (arreglo:string[]):void {
    let palabra:string=readlineSync.question("Ingrese la palabra que sea agregar: ");
    arreglo.push(palabra)
    console.log(arreglo)
}

function buscar (arreglo:string[]):void {
    let palabra:number=readlineSync.question("Indique la posicion de la palabra que desea buscar: ");
    console.log(arreglo[palabra]);
    console.log(arreglo);
}

function eliminar (arreglo:string[]):void {
    let palabra:number=readlineSync.question("Ingrese la posicion de la palabra que desea eliminar: ");
    arreglo.splice(palabra)
    console.log(arreglo);
}