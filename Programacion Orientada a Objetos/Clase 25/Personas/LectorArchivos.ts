import Persona from "./Persona";
import * as FS from "fs";

export default class Lector{
    private personas: Persona[]

    public constructor(){
        this.personas = [];

    }

    public cargarPersonas():void{
        let personas:string[] = (FS.readFileSync('personas.txt','utf8')).split('\n');
        let propiedadesPersona:string[] = [];
        personas.forEach(personaString => {
            propiedadesPersona = personaString.split(";")
            this.personas.push(new Persona(propiedadesPersona[0],propiedadesPersona[1],propiedadesPersona[2],parseInt(propiedadesPersona[3]),parseInt(propiedadesPersona[4])))
        });
    }
    public mostrarPersonas(){
        console.log(this.personas)
    }

}