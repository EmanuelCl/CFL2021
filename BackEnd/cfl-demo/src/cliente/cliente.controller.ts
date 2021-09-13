import { Controller, Get, Param } from '@nestjs/common';
import Cliente from './Cliente';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) {}

    @Get()
    public getClientes(){
        return this.clienteService.getClientes()
    }
    @Get(':cliente')
    public getCliente(@Param('cliente') id): Cliente {
        return this.clienteService.getCliente(parseInt(id));
    }
}
