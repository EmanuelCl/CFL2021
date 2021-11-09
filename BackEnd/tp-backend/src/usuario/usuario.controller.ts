import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Usuario from './Usuario';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private usuarioService:UsuarioService){}

    @Get()
    public getUsuarios(): Usuario[] {
        return this.usuarioService.getUsuarios();
    }
    @Get(":id")
    public getUsuario(@Param("id") id:string):Usuario{
        return this.usuarioService.getUsuario(parseInt(id));
    }
    @Get(":id/pagina")
    public getUsuarioPost(@Param("id") id:string){
        return this.usuarioService.getUsuarioPublicacion(parseInt(id));
    }
    @Post()
    public addUsuario(@Body() usuario:any){
        return this.usuarioService.crearUsuario(usuario);
    }
    @Put(":id")
    public updateUsuario(@Body() usuario:any, @Param("id") id):boolean {
        return this.usuarioService.updateUsuario(parseInt(id), usuario);
    }
    @Delete(":id")
    public delUsuario(@Param("id") id: string) {
        return this.usuarioService.delUsuario(parseInt(id));
    }
    //borrar en cascada las publicaciones 
}
