import Bibloteca from "./Bibloteca";
import Libro from "./Libro";
import Revista from "./Revista";
import * as read from "readline-sync";
let bibloteca:Bibloteca=new Bibloteca();
bibloteca.insertar(new Libro(22340,"Dan Brown","Random House","El código Da Vinci",200));
bibloteca.insertar(new Libro(65423,"J.K.Rowling","Salamandra","Harry Potter",500));
bibloteca.insertar(new Revista(45721,"Caras","Revista Caras","Vacunas Coronavirus",50));
bibloteca.mostrarBibloteca();
let opciones:string=read.question("Ingrese Una Opcion: (A=Agregar Articulo) , (B=Borrar Articulo) , (F=Buscar Articulo) (M=Modificar Paginas) , (T=Buscar por Autor) , X para finalizar: ").toUpperCase();
while(opciones!="X"){
    switch(opciones){
        case "A":{
            let opcion:string=read.question("Desea Agregar un (L=Libro) o (R=Revista): ").toUpperCase();
            if(opcion=="L"){
                let isbm:number=read.questionInt("Ingrese el numero ID: ");
                let autor:string=read.question("Ingrese el Autor: ");
                let editorial:string=read.question("Ingrese la editorial: ");
                let titulo:string=read.question("Ingrese el titulo: ");
                let cantPag:number=read.questionInt("Ingrese la cantidad de paginas: ");
                bibloteca.insertar(new Libro(isbm,autor,editorial,titulo,cantPag));
                bibloteca.mostrarBibloteca();
                break;
            }
            if(opcion=="R"){
                let isbm:number=read.questionInt("Ingrese el numero ID: ");
                let autor:string=read.question("Ingrese el Autor: ");
                let editorial:string=read.question("Ingrese la editorial: ");
                let titulo:string=read.question("Ingrese el titulo: ");
                let cantPag:number=read.questionInt("Ingrese la cantidad de paginas: ");
                bibloteca.insertar(new Revista(isbm,autor,editorial,titulo,cantPag));
                bibloteca.mostrarBibloteca();
                break;
            }

        }
        case "B":{
            let id:number=read.questionInt("Ingrese el numero ID: ");
            bibloteca.eliminar(id);
            break;
        }
        case "F":{
            let id:number=read.questionInt("Ingrese el numero ID: ");
            bibloteca.buscar(id);
        }
        case "T":{
            let autor:string=read.question("Ingrese el Autor: ");
            bibloteca.buscarPorAutor(autor);
            break;
        }
        case "M":{
            let id:number=read.questionInt("Ingrese el numero ID: ");
            bibloteca.modificarPaginas(id)
            break;
        }
    }
    opciones=read.question("Ingrese Una Opcion: (A=Agregar Articulo) , (B=Borrar Articulo) , (M=Modificar Paginas) , (T=Buscar por Autor) , X para finalizar: ").toUpperCase();
}
