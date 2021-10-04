import { Injectable } from '@nestjs/common';
import Publicacion from './Publicacion';
import * as fs from "fs"

@Injectable()
export class PaginaService {
    private publicaciones:Publicacion[]=[];

    constructor() {
        this.cargarDatos();
    }

    public getPublicaciones():Publicacion[]{
        return this.publicaciones;
    }
    public getPublicacion(id:number):Publicacion{
        let publicacion=null;
        for(let i=0;i<this.publicaciones.length;i++){
            if(this.publicaciones[i].getId()==id){
                return this.publicaciones[i];
            }
        }
        return publicacion;
    }
    public getUsuarioPost(id:number):any{
        let arreglo=[];
        for (let i = 0; i < this.publicaciones.length; i++) {
            if(this.publicaciones[i].getUserId()==id){
                arreglo.push(this.publicaciones[i]);
            }
        }
        return arreglo;
    }
    public crearPublicacion(publicacion:any){
      this.publicaciones.push(new Publicacion(publicacion.userId,publicacion.id,publicacion.title,publicacion.body));
      this.guardarDatos();
    }
    public updatePublicacion(id:number, publicacion:any):boolean{
        let posicion = this.publicaciones.findIndex(p => p.getId()===id);
        if(posicion > -1){
            const publica = new Publicacion(publicacion.userId, publicacion.id, publicacion.title, publicacion.body);
            this.publicaciones[posicion] = publica;
            this.guardarDatos();
            return true;
        }
        return false;
    }
    public delPublicacion(id:number){
        let posicion = this.publicaciones.findIndex(publicacion => publicacion.getId() == id);
        this.publicaciones.splice(posicion,1);
        this.guardarDatos();
    }
    public cargarDatos() {
        let archivo = fs.readFileSync('publicaciones.csv', 'utf8');
        const elementos = archivo
            .split('\n')
            .map(p => p.replace('\r', ''))
            .map(p => p.split(','));
        for (let i = 0; i < elementos.length; i++) {
            let publicacion = new Publicacion(
                parseInt(elementos[i][0]),
                parseInt(elementos[i][1]),
                elementos[i][2],elementos[i][3]
            );
            this.publicaciones.push(publicacion);
        }
    }
    private guardarDatos(){
        let data = "";
        for(let i = 0;i<this.publicaciones.length; i++) {
            let publicacion: Publicacion = this.publicaciones[i];
            if(publicacion.getId()) {
                data += `\r\n${publicacion.getUserId()},${publicacion.getId()},${publicacion.getTitle()},${publicacion.getBody()}`
            }
        }
        fs.writeFileSync("publicaciones.csv", data.substr(2));
    }
}
