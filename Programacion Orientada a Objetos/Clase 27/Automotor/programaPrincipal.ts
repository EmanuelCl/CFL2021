import * as RLS from 'readline-sync';
import RegistroVehiculos from './RegistroVehiculos';

let registro: RegistroVehiculos = new RegistroVehiculos();
registro.cargarVehiculo('vehiculos.txt','\n');
registro.mostrarVehiculo();

//menu de opciones CRUD
let opcion: string = RLS.question('Ingrese una opcion,(C=CREAR),(R=BUSCAR),(U=MODIFICAR),(D=ELIMINAR), X para finalizar: ').toUpperCase();
let patente: string;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.addVehiculo();
            break;
        }
        case 'R': {
            patente = RLS.question('Ingrese la patente a buscar: ');
            console.log(`Encontre la patente en la posicion ${registro.findVehiculo(patente)}.`);
            break;            
        }
        case 'U': {
            patente = RLS.question('Ingrese la patente del vehiculo a modificar: ');
            registro.updateVehiculo(patente);
            break;
        }
        case 'D': {
            patente = RLS.question('Ingrese la patente a eliminar: ');
            registro.deleteVehiculo(patente);
            break;                        
        }
    }
    registro.mostrarVehiculo();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}
