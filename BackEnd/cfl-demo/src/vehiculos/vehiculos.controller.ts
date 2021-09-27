import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';

@Controller('vehiculos')
export class VehiculosController {

    constructor(private vehiculosService: VehiculosService){}

    @Get()
    public getVehiculos():any{ 
        return this.vehiculosService.getVehiculos();
    }

    @Post()
    create(@Body() vehiculo: any) {
        return this.vehiculosService.create(vehiculo);
    }
}
