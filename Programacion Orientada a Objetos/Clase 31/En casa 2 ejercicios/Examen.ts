export default class Examen{
    private notaUno:number;
    private notaDos:number;
    private notaTres:number;

    public constructor(notaUno:number,notaDos:number,notaTres:number){
        this.notaUno=notaUno;
        this.notaDos=notaDos;
        this.notaTres=notaTres;
    }
    public getNotaUno():number{
        return this.notaUno;
    }
    public getNotaDos():number{
        return this.notaDos;
    }
    public getNotaTres():number{
        return this.notaTres;
    }
}