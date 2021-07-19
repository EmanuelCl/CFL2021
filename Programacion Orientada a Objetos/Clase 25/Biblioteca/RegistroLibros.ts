import * as RLS from 'readline-sync';
import * as FS from 'fs';
import Libro from "./Libro";
export default class RegistroLibros {
    private libros: Libro[];

    public constructor (){
        this.libros = [];
    }

    public addLibro():void{
        this.libros.push(this.pedirDatos());
    }

    public findLibro(nombre:string): number{
        for (let i = 0; i < this.libros.length; i++) {
            if(nombre == this.libros[i].getNombre()){
                return i;
            }
        }
        return -1;
    }

    public deleteLibro(nombre:string): void{
        let posicion:number = this.findLibro(nombre);
        if (posicion != -1) {
            this.libros.splice(posicion,1);
        }
    }

    public updateLibro(libroViejo: string): void{
        
        let posicion= this.findLibro(libroViejo);
        if (posicion != -1) {
            this.libros[posicion] = this.pedirDatos();
        }else{
            console.log("el libro no existe");
        }
    }

    public mostrarLibros(): void{
        console.log(this.libros);
    }

    public cargarLibros(rutaArchivo:string,separador:string):void{
        let libros:string[] = (FS.readFileSync(rutaArchivo,'utf8')).split(separador);
        let propiedadesLibro:string[] = [];
        libros.forEach(libroString => {
            propiedadesLibro = libroString.split(";")
            this.libros.push(new Libro(propiedadesLibro[0],propiedadesLibro[1],propiedadesLibro[2],parseInt(propiedadesLibro[3])))
        });
    }
    private pedirDatos():Libro{
        let nombre:string = RLS.question('Ingrese el nombre: ');
        let editorial:string = RLS.question('Ingrese la editorial: ');
        let genero:string = RLS.question('Ingrese el genero: ');
        let año: number = RLS.questionInt('Ingrese el año: ');
        let libro:Libro = new Libro(nombre,editorial,genero,año)
        return libro
    } 
} 