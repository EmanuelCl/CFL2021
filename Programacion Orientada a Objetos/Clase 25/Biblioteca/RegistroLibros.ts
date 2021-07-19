import * as RLS from 'readline-sync';
import * as FS from 'fs';
import Libro from "./Libro";
export default class RegistroLibros {
    private libros: Libro[];

    public constructor (){
        this.libros = [];
    }

    public addLibro():void{
        let nombre:string = RLS.question('Ingrese el nombre: ');
        let editorial:string = RLS.question('Ingrese la editorial: ');
        let genero:string = RLS.question('Ingrese el genero: ');
        let año: number = RLS.questionInt('Ingrese el año: ');
        this.libros.push(new Libro(nombre,editorial,genero,año));
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
        let nombre:string = RLS.question('Ingrese el nombre del libro actualizado: ');
        let editorial:string = RLS.question('Ingrese la editorial del libro actualizado : ');
        let genero:string = RLS.question('Ingrese el genero del libro actualizado: ');
        let año: number = RLS.questionInt('Ingrese el año del libro actualizado: ');

        let posicion= this.findLibro(libroViejo);
        if (posicion != -1) {
            this.libros[posicion] = new Libro(nombre,editorial,genero,año);
        }else{
            console.log("el libro no existe");
        }
    }

    mostrarLibros(): void{
        console.log(this.libros);
    }

    cargarLibros():void{
        let libros:string[] = (FS.readFileSync('libros.txt','utf8')).split('\n');
        let propiedadesLibro:string[] = [];
        libros.forEach(libroString => {
            propiedadesLibro = libroString.split(";")
            this.libros.push(new Libro(propiedadesLibro[0],propiedadesLibro[1],propiedadesLibro[2],parseInt(propiedadesLibro[3])))
        });
    }
} 