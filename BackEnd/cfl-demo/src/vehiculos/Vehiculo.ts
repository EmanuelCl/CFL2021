export default class Vehiculo{
    private tipo:string;
    private marca:string;
    private patente:string;
    private modelo:string;
    private año:number;
    private precio:number;
    private capacidad:number;

    public constructor(tipo:string,marca:string,patente:string,modelo:string,año:number,precio:number,capacidad:number){
        this.tipo=tipo;
        this.marca=marca;
        this.patente=patente;
        this.modelo=modelo;
        this.año=año;
        this.precio=precio;
        this.capacidad=capacidad;
    }
    public getTipo():string{
        return this.tipo;
    }
    public getMarca():string{
        return this.marca;
    }
    public getPatente():string{
        return this.patente;
    }
    public getModelo():string{
        return this.modelo;
    }
    public getAño():number{
        return this.año;
    }
    public getPrecio():number{
        return this.precio;
    }
    public getCapacidad():number{
        return this.capacidad
    }

}