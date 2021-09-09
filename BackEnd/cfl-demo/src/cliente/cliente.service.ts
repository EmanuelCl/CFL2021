import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
    public getClientes():any{
        let clientes=[];

        let cliente=[
            {
                "nombre":"Emanuel",
                "razon":343536,
                "domicilio":"piedrabuena 1234",
                "saldo":9000,
            },
            {
                "nombre":"Carlos",
                "razon": 311536,
                "domicilio":"av.españa 234",
                "saldo":180000,
            },
            {
                "nombre":"Martina",
                "razon":113436,
                "domicilio":"gral.pinto 987",
                "saldo":200000,
            },
            {
                "nombre":"Lucia",
                "razon":567890,
                "domicilio":"9 de julio 180",
                "saldo":500000,
            },
            {
                "nombre":"Sofia",
                "razon":531824,
                "domicilio":"Av.del valle 678",
                "saldo":88000,
            },
            {
                "nombre":"Esteban",
                "razon":742743,
                "domicilio":"pasteur 576",
                "saldo":10000,
            },
        ]
        for(let i=0;i<cliente.length;i++){
            clientes.push(cliente[i]);
        }
        return clientes
    }
}
