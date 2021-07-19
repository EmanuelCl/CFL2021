export default class Persona {
    private nombre:string;
    private apellido:string;
    private genero:string;
    private edad:number;
    private dni:number;

    public constructor(nombre:string,apellido:string,genero:string,edad:number,dni:number) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.genero=genero;
        this.edad=edad;
        this.dni=dni;
    }

    public getNombre():string{
        return this.nombre
    }
    public getApellido():string{
        return this.apellido
    }
    public getGenero():string{
        return this.genero
    }
    public getEdad():number{
        return this.edad
    }
    public getDni():number{
        return this.dni
    }
    public setDni(dni:number):void{
        this.dni=dni
    }
}

