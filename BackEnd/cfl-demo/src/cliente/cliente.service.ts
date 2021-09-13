import { Injectable } from '@nestjs/common';
import Cliente from './Cliente';
import * as fs from "fs";

@Injectable()
export class ClienteService {
    private listaClientes: Cliente[] = []

    public constructor() {
        this.loadClientes();
    }

    public getClientes(): Cliente[] {
        return this.listaClientes;
    }
    public getCliente(id: number): Cliente {
        let clientes = null;
        // Más adelante agregar manejo de status code
        for (let i=0; i<this.listaClientes.length; i++) {
            if (this.listaClientes[i].getId()==id) {
        
                clientes = this.listaClientes[i];
            }
        }
        return clientes;
    }

    private loadClientes(): void {
        let archivo = fs.readFileSync('clientes.csv', 'utf8');
        const elementos = archivo
            .split('\n')
            .map(p => p.replace('\r', ''))
            .map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
            let cliente = new Cliente(
                parseInt(elementos[i][0]),
                elementos[i][1]
            );
            this.listaClientes.push(cliente);
        }
    }
}







//public getClientes():any{
    //     let clientes=[];

    //     let cliente=[
    //         {
    //             "nombre":"Emanuel",
    //             "razon":343536,
    //             "domicilio":"piedrabuena 1234",
    //             "saldo":9000,
    //         },
    //         {
    //             "nombre":"Carlos",
    //             "razon": 311536,
    //             "domicilio":"av.españa 234",
    //             "saldo":180000,
    //         },
    //         {
    //             "nombre":"Martina",
    //             "razon":113436,
    //             "domicilio":"gral.pinto 987",
    //             "saldo":200000,
    //         },
    //         {
    //             "nombre":"Lucia",
    //             "razon":567890,
    //             "domicilio":"9 de julio 180",
    //             "saldo":500000,
    //         },
    //         {
    //             "nombre":"Sofia",
    //             "razon":531824,
    //             "domicilio":"Av.del valle 678",
    //             "saldo":88000,
    //         },
    //         {
    //             "nombre":"Esteban",
    //             "razon":742743,
    //             "domicilio":"pasteur 576",
    //             "saldo":10000,
    //         },
    //     ]
    //     for(let i=0;i<cliente.length;i++){
    //         clientes.push(cliente[i]);
    //     }
    //     return clientes
    // }