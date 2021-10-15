import { Injectable } from '@nestjs/common';
import Usuario from './Usuario';
import * as fs from "fs";
import { PaginaService } from 'src/pagina/pagina.service';

@Injectable()
export class UsuarioService {
    private usuarios:Usuario[]=[];

    constructor(private paginaService:PaginaService){
        this.cargarDatos();
    }

    public getUsuarios():Usuario[]{
        return this.usuarios;
    }
    public getUsuario(id:number):Usuario{
        let usuario=null;
        for(let i=0;i<this.usuarios.length;i++){
            if(this.usuarios[i].getId()==id){
                return this.usuarios[i];
            }
        }
        return usuario;
    }
    public getUsuarioPublicacion(id:number):any{
        let usuarioPost = this.paginaService.getUsuarioPost(id);
        return usuarioPost;
    }
    public crearUsuario(usuario:any){
        this.usuarios.push(new Usuario(usuario.id,usuario.name,usuario.username,usuario.email,usuario.address,usuario.phone,usuario.website,usuario.company));
        this.guardarDatos();
    }
    public updateUsuario(id:number,usuario:any):boolean{
        let posicion = this.usuarios.findIndex(p => p.getId()===id);
        if(posicion > -1){
            const usua = new Usuario(usuario.id,usuario.name,usuario.username,usuario.email,usuario.address,usuario.phone,usuario.website,usuario.company);
            this.usuarios[posicion] = usua;
            this.guardarDatos();
            return true;
        }
        return false;
    }
    public delUsuario(id:number){
        let posicion = this.usuarios.findIndex(usuarios => usuarios.getId()==id);
        this.usuarios.splice(posicion,1);
        this.paginaService.delUsuarioPublicacion(id)
        this.guardarDatos();
    }
    private cargarDatos(){
        let archivo = fs.readFileSync("usuarios.csv", "utf8");
        const elementos = archivo
        .split('\n')
        .map(p => p.replace('\r', ''))
        .map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
            let usuario = new Usuario(parseInt(elementos[i][0]),elementos[i][1],elementos[i][2],elementos[i][3],elementos[i][4],parseInt(elementos[i][5]),elementos[i][6],elementos[i][7]);
            this.usuarios.push(usuario);
        }
    }
    private guardarDatos(){
        let data = "";
        for(let i=0;i<this.usuarios.length;i++){
            let usuario: Usuario = this.usuarios[i];
            if(usuario.getId()){
                data += `\r\n${usuario.getId()},${usuario.getName()},${usuario.getUsername()},${usuario.getEmail()},${usuario.getAddress()},${usuario.getPhone()},${usuario.getWebsite()},${usuario.getCompany()}`
            }
        }
        fs.writeFileSync("usuarios.csv", data.substr(2));
    }
}
