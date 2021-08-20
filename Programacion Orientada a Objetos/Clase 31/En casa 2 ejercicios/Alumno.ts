export default class Alumno{
    private nombre:string;
    private apellido:string;
    private dni:number;

    public constructor(nombre:string,apellido:string,dni:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
    }
    public getNombre():string{
        return this.nombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    public getDni():number{
        return this.dni;
    }
}