import * as RLS from 'readline-sync';
import * as FS from 'fs';
import Vehiculo from "./Vehiculo";
export default class RegistroVehiculos {
    private vehiculos: Vehiculo[];

    public constructor (){
        this.vehiculos = [];
    }

    public addVehiculo():void{
        this.vehiculos.push(this.pedirDatos());
    }

    public findVehiculo(patente:string): number{
        for (let i = 0; i < this.vehiculos.length; i++) {
            if(patente == this.vehiculos[i].getPatente()){
                return i;
            }
        }
        return -1;
    }

    public deleteVehiculo(patente:string): void{
        let posicion:number = this.findVehiculo(patente);
        if (posicion != -1) {
            this.vehiculos.splice(posicion,1);
        }
    }

    public updateVehiculo(vehiculoViejo: string): void{
        
        let posicion= this.findVehiculo(vehiculoViejo);
        if (posicion != -1) {
            this.vehiculos[posicion] = this.pedirDatos();
        }else{
            console.log("el vehiculo no existe");
        }
    }

    public mostrarVehiculo(): void{
        console.log(this.vehiculos);
    }

    public cargarVehiculo(rutaArchivo:string,separador:string):void{
        let vehiculos:string[] = (FS.readFileSync(rutaArchivo,'utf8')).split(separador);
        let propiedadVehiculo:string[] = [];
        vehiculos.forEach(vehiculoString => {
            propiedadVehiculo = vehiculoString.split(";")
            this.vehiculos.push(new Vehiculo(propiedadVehiculo[0],propiedadVehiculo[1],propiedadVehiculo[2],parseInt(propiedadVehiculo[3])))
        });
    }
    private pedirDatos():Vehiculo{
        let patente:string = RLS.question('Ingrese la Patente: ');
        let marca:string = RLS.question('Ingrese la marca: ');
        let modelo:string = RLS.question('Ingrese el modelo: ');
        let año: number = RLS.questionInt('Ingrese el año: ');
        let vehiculo:Vehiculo = new Vehiculo(patente,marca,modelo,año)
        return vehiculo
    } 
} 