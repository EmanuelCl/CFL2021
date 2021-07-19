export default class Libro{
    private nombre:string
    private editorial:string;
    private genero:string;
    private año:number;

    public constructor(nombre:string,editorial:string, genero: string,año:number){
        this.nombre = nombre;
        this.editorial = editorial;
        this.genero = genero;
        this.año = año;
    }

    public getNombre():string{
        return this.nombre
    }
    public getEditorial():string{
        return this.editorial;
    }

    public getGenero():string{
        return this.genero;
    }

    public getAño():number{
        return this.año;
    }
    
    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }
} 
