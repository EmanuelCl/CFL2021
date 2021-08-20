import * as fs from "fs";
export default class LectorArchivos{

    public constructor(){

    }
    public cargarDatos(rutaArchivo:string,separador:string):string[]{
        return (fs.readFileSync(rutaArchivo,"utf8")).split(separador); 
    }
}