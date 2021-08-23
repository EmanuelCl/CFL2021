import ArticuloLectura from "./ArticuloLectura";

export default class Bibloteca{
    private elementos:ArticuloLectura[];
    private nombreBibloteca:string;
    private direccion:string;
    public constructor(){
        this.elementos=[];
        this.nombreBibloteca="Bibloteca Rivadavia"
        this.direccion="Almafuerte 570";
    }
    public insertar(a:ArticuloLectura):boolean{
        if(this.elementos.push(a)){
            return true
        }
        return false
    }
    public buscar(id:number):ArticuloLectura{
        for (let i = 0; i < this.elementos.length; i++) {
            if(id == this.elementos[i].getIsbm()){
                console.log(this.elementos[i])
            }
        }

        throw new Error("El Articulo no se encuentra");
    }
    public eliminar(id:number):boolean{
        for (let i = 0; i < this.elementos.length; i++) {
            if(id == this.elementos[i].getIsbm()){
                this.elementos.splice(i,1);
                return true
            }
        }
        return false
    } 
    public buscarPorAutor(a:string):ArticuloLectura[]{
        for(let i=0;i<this.elementos.length;i++){
            if(a==this.elementos[i].getAutor()){
                console.log(this.elementos[i])
            }
        }
        return this.elementos
    }
    public modificarPaginas(id:number):boolean{
        for(let i=0;i<this.elementos.length;i++){
            this.elementos[i].setCantidadPaginas(id)
        }
        return true
    }
    public mostrarBibloteca():void{
        console.log(this.nombreBibloteca,this.direccion);
        console.log(this.elementos)
    }
}


