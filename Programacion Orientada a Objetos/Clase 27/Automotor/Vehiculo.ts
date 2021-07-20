export default class Vehiculo{
    private tipo:string;
    private patente:string;
    private marca:string;
    private modelo:string;
    private año:number;

    public constructor(tipo:string,patente:string, marca: string, modelo:string, año:number){
        this.tipo = tipo;
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    public getMarca():string{
        return this.marca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public getAño():number{
        return this.año;
    }

    public getPatente():string{
        return this.patente;
    }

    public setPatente(patente:string):void{
        this.patente = patente;
    }
} 