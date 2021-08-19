import * as read from "readline-sync";
import Alumno from "./Alumno";
import Examen from "./Examen";
import LectorArchivos from "./LectorArchivos";

export default class gestorLegajos{
    private lectorArchivos:LectorArchivos;
    private alumnos:Alumno[]
    private notas:Examen[]

    public constructor(){
        this.lectorArchivos=new LectorArchivos();
        this.alumnos=[];
        this.notas=[]
    }
    public cargarAlumnos(rutaArchivo:string,separador:string):void{
        let alumnos:string[] = this.lectorArchivos.cargarDatos(rutaArchivo,separador);
        let propiedadesAlumno:string[] = [];
        alumnos.forEach(autoString => {
            propiedadesAlumno = autoString.split(";")
            this.alumnos.push(new Alumno(propiedadesAlumno[0],propiedadesAlumno[1],parseInt(propiedadesAlumno[2])))
        });
    }
    public cargarNotas(rutaArchivo:string,separador:string):void{
        let notas:string[] = this.lectorArchivos.cargarDatos(rutaArchivo,separador);
        let propiedadesNotas:string[] = [];
        notas.forEach(notaString => {
            propiedadesNotas = notaString.split(";")
            this.notas.push(new Examen(parseInt(propiedadesNotas[0]),parseInt(propiedadesNotas[1]),parseInt(propiedadesNotas[2])))
        });
    }
    public buscarAlumno(nombre:string):void{
        for (let posicion = 0; posicion < this.alumnos.length; posicion++) {
            if(nombre == this.alumnos[posicion].getNombre()){
               this.obtenerPromedio(posicion)
            }
        }
    }
    public obtenerPromedio(posicion:number):void{
        let promedio:number
        promedio=this.notas[posicion].getNotaUno() + this.notas[posicion].getNotaDos() + this.notas[posicion].getNotaTres();
        console.log(this.alumnos[posicion])
        console.log("El promedio del Alumno es de ",promedio)  
         
    }
    public obtenerPromedioGeneral():void{
        for(let i=0;i<this.alumnos.length;i++){
            let promedio:number=this.notas[i].getNotaUno() + this.notas[i].getNotaDos() + this.notas[i].getNotaTres()
            console.log(this.alumnos[i], "Promedio: ",promedio);
        }
    }
    public mostrarAlumnos():void{
        console.log(this.alumnos.length)
    }    
}
