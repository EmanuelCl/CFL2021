import Persona from "./Persona";
import * as FS from "fs";

export default class Lector{
    private lectorArchivos:string

    public constructor(lectorArchivos:string){
        this.lectorArchivos = lectorArchivos;

    }
   public cargaDatos(lectorArchivos,separador):string{
       return this.lectorArchivos
   }
}