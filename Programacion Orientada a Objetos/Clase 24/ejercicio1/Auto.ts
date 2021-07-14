class Auto {
    estaEncendido:boolean
    acelerador:number
    estafrenado:boolean
    pasarCambios:number
    pisarEmbrague:boolean
    lucesPrendidas:boolean
    tocarBocina:boolean

    constructor(encendido:boolean,acelerar:number,freno:boolean,cambios:number,luces:boolean,bocina:boolean,embrague:boolean) {
        this.estaEncendido=encendido;
        this.acelerador=acelerar;
        this.estafrenado=freno;
        this.pasarCambios=cambios;
        this.lucesPrendidas=luces;
        this.tocarBocina=bocina;
        this.pisarEmbrague=embrague;
    }

    encendidoApagado(): void {
        if(this.estaEncendido)
        this.estaEncendido=false

        else
            this.estaEncendido=true
    }
    acelerar(): void {
        this.acelerador=this.acelerador + 10
    }
    frenar(): void {
        if(this.estafrenado)
        this.estafrenado=false

        else
            this.estafrenado=true
    }
    cambios(): void {
        this.pasarCambios=this.pasarCambios + 1
    }
    embrague(): void {
        if(this.pisarEmbrague)
        this.pisarEmbrague=false

        else
            this.pisarEmbrague=true
    }
    luces(): void {
        if(this.lucesPrendidas)
        this.lucesPrendidas=false

        else
            this.lucesPrendidas=true
    }
    bocina(): void {
        if(this.tocarBocina)
        this.tocarBocina=false

        else
            this.tocarBocina=true
    }
}
let miAuto=new Auto(false,0,false,0,false,false,false)
console.log(miAuto);
miAuto.encendidoApagado();
miAuto.luces();
miAuto.embrague();
miAuto.cambios();
miAuto.acelerar();
console.log(miAuto);
