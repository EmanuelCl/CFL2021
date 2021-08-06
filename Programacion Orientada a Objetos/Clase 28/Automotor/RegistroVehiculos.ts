import * as RLS from 'readline-sync';
import * as FS from 'fs';
import Vehiculo from "./Vehiculo";
import Auto from './Auto';
import Moto from './Moto';
import Camion from './Camion';
import AutoDeCarreras from './AutoDeCarreras';
export default class RegistroVehiculos {
    private vehiculos: Vehiculo[];
  
    public constructor (){
        this.vehiculos = [];
    }

    public addVehiculo():void{
        let tipo:string = RLS.question("Ingrese el tipo de vehiculo: ");
        let patente:string = RLS.question('Ingrese la Patente: ');
        let marca:string = RLS.question('Ingrese la marca: ');
        let modelo:string = RLS.question('Ingrese el modelo: ');
        let año: number = RLS.questionInt('Ingrese el año: ');
        
        switch(tipo){
            case "auto":{
                let combustible:string = RLS.question("Ingrese el tipo de Combustible: ")
                this.vehiculos.push(new Auto(tipo,patente,marca,modelo,año,combustible));
                break;
            }
            case "moto":{
                let cilindrada:number = RLS.questionInt("Ingrese la Cilindrada: ");
                this.vehiculos.push(new Moto(tipo,patente,marca,modelo,año,cilindrada));
                break;
            }
            case "camion":{
                let cargaKg:number = RLS.questionInt("Ingrese la capacidad de Carga: ");
                this.vehiculos.push(new Camion(tipo,patente,marca,modelo,año,cargaKg));
                break;
            }
            case "auto de carreras":{
                let velocidad:number = RLS.questionInt("Ingrese la velocidad Maxima del vehiculo: ");
                this.vehiculos.push(new AutoDeCarreras(tipo,patente,marca,modelo,año,velocidad));
                break;
            }
            default:{
                console.log("El tipo de vehiculo ingresado no es admitido en este registro.");
            }
        } 
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
        let tipo:string = RLS.question("Ingrese el tipo de vehiculo: ").toUpperCase();
        let patente:string = RLS.question('Ingrese la Patente: ');
        let marca:string = RLS.question('Ingrese la marca: ');
        let modelo:string = RLS.question('Ingrese el modelo: ');
        let año: number = RLS.questionInt('Ingrese el año: ');

        let posicion= this.findVehiculo(vehiculoViejo);
        if (posicion != -1) {
            this.vehiculos[posicion] = new Vehiculo(tipo,patente,marca,modelo,año)
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
            switch(propiedadVehiculo[0]){
                case "auto":{
                    this.vehiculos.push(new Auto(propiedadVehiculo[0],propiedadVehiculo[1],propiedadVehiculo[2],propiedadVehiculo[3],parseInt(propiedadVehiculo[4]),propiedadVehiculo[5]));
                    break;
                }
                case "moto":{
                    this.vehiculos.push(new Moto(propiedadVehiculo[0],propiedadVehiculo[1],propiedadVehiculo[2],propiedadVehiculo[3],parseInt(propiedadVehiculo[4]),parseInt(propiedadVehiculo[5])));
                    break;
                }
                case "camion":{
                    this.vehiculos.push(new Camion(propiedadVehiculo[0],propiedadVehiculo[1],propiedadVehiculo[2],propiedadVehiculo[3],parseInt(propiedadVehiculo[4]),parseInt(propiedadVehiculo[5])));
                    break;
                }
                case "auto de carreras":{
                    this.vehiculos.push(new AutoDeCarreras(propiedadVehiculo[0],propiedadVehiculo[1],propiedadVehiculo[2],propiedadVehiculo[3],parseInt(propiedadVehiculo[4]),parseInt(propiedadVehiculo[5])));
                    break;
                }
            }
        });
    }
    public cotizarSeguro():void{
        let patente=RLS.question("Ingrese la patente del vehiculo a cotizar: ").toUpperCase();
        let posicion = this.findVehiculo(patente);
        this.vehiculos[posicion].calcularSeguro();
    }
} 