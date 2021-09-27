import { Injectable } from '@nestjs/common';
import Vehiculo from './Vehiculo';
import * as fs from "fs";
import Auto from './Auto';
import Camioneta from './Camioneta';

@Injectable()
export class VehiculosService {
    private listaVehiculos: Vehiculo[] =[];

    public constructor(){
        this.loadVehiculos();
    }
    public getVehiculos():Vehiculo[]{
        return this.listaVehiculos;
    }

    public create(vehiculo:any){
        if(vehiculo.tipo=="auto"){
            this.crearAuto(vehiculo)
        }else if(vehiculo.tipo=="camioneta"){
            this.crearCamioneta(vehiculo)
        }
    }
    public crearAuto(auto:any){
        const vehiculo = new Auto(auto["tipo"],auto["marca"],auto["patente"],auto["modelo"],auto["año"],auto["precio"],auto["capacidadBaul"]);
        console.log(vehiculo);
        if (vehiculo.getTipo() && vehiculo.getMarca() && vehiculo.getPatente() && vehiculo.getModelo() && vehiculo.getAño() && vehiculo.getPrecio() && vehiculo.getCapacidad()) {
        this.listaVehiculos.push(vehiculo);
        console.log(auto);
        fs.appendFileSync('vehiculos.csv',
        "\n"+ vehiculo.getTipo() + "," + vehiculo.getMarca() + "," + vehiculo.getPatente() + "," + vehiculo.getModelo() + "," + vehiculo.getAño() + "," + vehiculo.getPrecio() + "," + vehiculo.getCapacidad());
        return {status:"ok"};
        }
        else
        return {status:"parametros incorrectos"};
    }
    public crearCamioneta(camioneta:any){
        const vehiculo = new Camioneta(camioneta["tipo"],camioneta["marca"],camioneta["patente"],camioneta["modelo"],camioneta["año"],camioneta["precio"],camioneta["capacidad"]);
        console.log(vehiculo);
        if (vehiculo.getTipo() && vehiculo.getMarca() && vehiculo.getPatente() && vehiculo.getModelo() && vehiculo.getAño() && vehiculo.getPrecio() && vehiculo.getCapacidad()) {
        this.listaVehiculos.push(vehiculo);
        console.log(camioneta);
        fs.appendFileSync('vehiculos.csv',
        "\n"+ vehiculo.getTipo() + "," + vehiculo.getMarca() + "," + vehiculo.getPatente() + "," + vehiculo.getModelo() + "," + vehiculo.getAño() + "," + vehiculo.getPrecio() + "," + vehiculo.getCapacidad());
        return {status:"ok"};
        }
        else
        return {status:"parametros incorrectos"};
    }
    private loadVehiculos(): void {
        let archivo = fs.readFileSync('vehiculos.csv', 'utf8');
        const elementos = archivo
            .split('\n')
            .map(p => p.replace('\r', ''))
            .map(p => p.split(','));
            for (let i = 0; i < elementos.length; i++) {
                if(elementos[i][0]=="auto"){
                    let auto = new Auto(elementos[i][0],elementos[i][1],elementos[i][2],elementos[i][3],
                    parseInt(elementos[i][4]),parseInt(elementos[i][5]),parseInt(elementos[i][6]));
                this.listaVehiculos.push(auto);
                }else{
                    let camioneta = new Camioneta(elementos[i][0],elementos[i][1],elementos[i][2],elementos[i][3],
                        parseInt(elementos[i][4]),parseInt(elementos[i][5]),parseInt(elementos[i][6]));
                    this.listaVehiculos.push(camioneta);
                }
                    
        }
    }
}
