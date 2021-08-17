import Pista from "./Pista";
import Lector from "./LectorArchivos";
import * as read from "readline-sync";
import Administracion from "./Administracion";
export default class GestorPistas implements Administracion{
    private listaReproduccion: Pista[]
    private lectorArchivos: Lector

    public constructor(){
        this.listaReproduccion = []
        this.lectorArchivos = new Lector();
    }
    public crearLista():void{
        let cantidad:number=read.questionInt("Cuantas pistas de audio desea agregar? ");
        for(let i=0;i<cantidad;i++){
            this.agregarPistas();
        }
    }
    public agregarPistas():void{
        let identificador:number=read.questionInt("Ingrese el identificador de la pista: ");
        let titulo:string=read.question("Ingrese el titulo de la pista: ");
        let duracion:number=read.questionInt("Ingrese la duracion de la pista: ");
        let interprete:string=read.question("Ingrese el interprete de la pista: ");
        this.listaReproduccion.push(new Pista(identificador,titulo,duracion,interprete));
        console.log("Creando Pista de Audio....");
        console.log("Agregando a la lista de reproduccion....");
        console.log(this.listaReproduccion);
    }
    public mostrarTotal():void{
        let totalPistas:number=this.listaReproduccion.length
        console.log("Total de Pistas en la Lista: ",totalPistas);
    }
    public duracionTotalPista(identificador:number):void{
        for(let i=0;i<this.listaReproduccion.length;i++){
            if(identificador == this.listaReproduccion[i].getIdentificador()){
                console.log("La duracion de la pista es de:",this.listaReproduccion[i].getDuracion(),"Horas");
            }
        }
    }
    public duracionTotalLista():void{
        let duracion:number=0;
        for(let i=0;i<this.listaReproduccion.length;i++){
            duracion += this.listaReproduccion[i].getDuracion();
        }
        console.log("La duracion total de la lista de Reproduccion es de",duracion,"Horas");
    }
    public mostrarPista():void{
        console.log(this.listaReproduccion)
    }
    public cargarPistas(rutaArchivo:string,separador:string):void{
        let pistas:string[] = this.lectorArchivos.cargaDatos(rutaArchivo,separador)
        let propiedadesPistas:string[] = [];
        pistas.forEach(autoString => {
            propiedadesPistas = autoString.split(";")
            this.listaReproduccion.push(new Pista(parseInt(propiedadesPistas[0]),propiedadesPistas[1],parseInt(propiedadesPistas[2]),propiedadesPistas[3]))
        });
    }
}