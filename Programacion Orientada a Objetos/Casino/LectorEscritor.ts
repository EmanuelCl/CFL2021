import * as FS from "fs";

export default class LectorEscritor{

    public constructor(){
    }
    public guardarResultado(rutaArchivo:string,contenido:string):void{
        FS.appendFileSync(rutaArchivo,contenido);
    }     
}