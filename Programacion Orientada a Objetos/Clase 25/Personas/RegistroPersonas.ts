import * as Read from "readline-sync";
import Persona from "./Persona";
import Lector from "./LectorArchivos";

export default class RegistroPersonas{
    private personas: Persona[];
    private lectorArchivos: Lector;

    public constructor (){
        this.personas=[]
        this.lectorArchivos = new Lector();
    }

    public agregarPersona():void{
        let nombre=Read.question("Ingrese el Nombre: ");
        let apellido=Read.question("Ingrese el Apellido: ");
        let genero=Read.question("Ingrese el Genero: ");
        let edad=Read.questionInt("Ingrese la Edad ");
        let dni=Read.questionInt("Ingrese el DNI: ");
        this.personas.push(new Persona(nombre,apellido,genero,edad,dni));
    }
    public buscarPersona(dni):number{
        for(let i=0;i<this.personas.length;i++){
            if(dni==this.personas[i].getDni){
                return i;
            }
        }
        console.log("No hay resultados")
    }
    public modificarRegistro(dniViejo):void{
        let nombre=Read.question("Ingrese un nuevo Nombre: ");
        let apellido=Read.question("Ingrese un nuevo Apellido: ");
        let genero=Read.question("Ingrese un nuevo Genero: ");
        let edad=Read.questionInt("Ingrese una nueva Edad ");
        let dni=Read.questionInt("Ingrese un nuevo DNI: ");

        let posicion=this.buscarPersona(dniViejo)
        if(posicion!=-1){
            this.personas[posicion]=new Persona(nombre,apellido,genero,edad,dni);
        }else{
            console.log("La persona no existe");
        }
    }
    public eliminarPersona(dni):void{
        let posicion:number=this.buscarPersona(dni)
        if(posicion!=-1){
            this.personas.splice(posicion,1)
        }
    }
    public mostrarPersonas(){
        console.log(this.personas)
    }
    public cargarPersonas(rutaArchivo:string,separador:string):void{
        let personas:string[] = this.lectorArchivos.cargaDatos(rutaArchivo,separador);
        let propiedadesPersona:string[] = [];
        personas.forEach(personaString => {
            propiedadesPersona = personaString.split(";")
            this.personas.push(new Persona(propiedadesPersona[0],propiedadesPersona[1],propiedadesPersona[2],parseInt(propiedadesPersona[3]),parseInt(propiedadesPersona[4])))
        });
    }
}
