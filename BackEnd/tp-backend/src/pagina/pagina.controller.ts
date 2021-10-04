import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PaginaService } from './pagina.service';
import Publicacion from './Publicacion';

@Controller('pagina')
export class PaginaController {

    constructor(private paginaService:PaginaService){}

    @Get()
    public getPublicaciones(): Publicacion[] {
        return this.paginaService.getPublicaciones();
    }
    @Get(":id")
    public getPublicacion(@Param("id") id:string):Publicacion{
        return this.paginaService.getPublicacion(parseInt(id))
    }
    @Post()
    public addPublicacion(@Body() publicacion:any) {
        return this.paginaService.crearPublicacion(publicacion)
    }
    @Put(":id")
    public updatePublicacion(@Body() publicacion:any, @Param("id") id):boolean {
        return this.paginaService.updatePublicacion(parseInt(id), publicacion);
    }
    @Delete(":id")
    public delPublicacion(@Param("id") id: string) {
        return this.paginaService.delPublicacion(parseInt(id));
    }
}
