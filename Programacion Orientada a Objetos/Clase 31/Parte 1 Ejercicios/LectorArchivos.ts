import * as FS from "fs";

export default class Lector{

    public constructor(){
    }

    public cargaDatos(rutaArchivo:string,separador:string):string[]{
        return (FS.readFileSync(rutaArchivo,"utf8")).split(separador);  
          
    }
}