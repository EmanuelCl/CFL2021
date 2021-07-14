class Computadora {
    estaPrendida:boolean
    volumenActual:number
    abrirGoogleMeet:boolean
    microfonoEncendido:boolean
    camaraEncendida:boolean
    volumenMicrofono:number
    ejerciciosSubidosGit:number

    constructor(prendida:boolean,volumen:number,googleMeet:boolean,microfono:boolean,camara:boolean,volumenMic:number,ejercicios:number) {
        this.estaPrendida=prendida;
        this.volumenActual=volumen;
        this.abrirGoogleMeet=googleMeet;
        this.microfonoEncendido=microfono;
        this.camaraEncendida=camara;
        this.volumenMicrofono=volumenMic;
        this.ejerciciosSubidosGit=ejercicios;
    }

    prenderApagar(): void {
        if(this.estaPrendida)
        this.estaPrendida=false

        else
            this.estaPrendida=true
    }

    subirVolumenPC(): void {
        this.volumenActual=this.volumenActual + 1
    }

    bajarVolumenPC(): void {
        this.volumenActual=this.volumenActual -1
    }
    abrirMeetClase():void {
        this.abrirGoogleMeet=true
    }
    prenderMicrofono(): void {
        if(this.microfonoEncendido)
        this.microfonoEncendido=false

        else
            this.microfonoEncendido=true
    }
    prenderCamara(): void {
        if(this.camaraEncendida)
        this.camaraEncendida=false

        else
            this.camaraEncendida=true
    }
    subirVolumenMicro(): void {
        this.volumenMicrofono=this.volumenMicrofono + 1
    }
    bajarVolumenMicro(): void {
        this.volumenMicrofono=this.volumenMicrofono - 1
    }
    subirEjercicioGit(): void {
        this.ejerciciosSubidosGit=this.ejerciciosSubidosGit + 1
    }
}
let miCompu=new Computadora(false,10,false,false,false,20,0)
console.log(miCompu);
miCompu.prenderApagar();
miCompu.subirVolumenPC();
miCompu.prenderCamara();
miCompu.abrirMeetClase();
miCompu.subirEjercicioGit();
console.log(miCompu);