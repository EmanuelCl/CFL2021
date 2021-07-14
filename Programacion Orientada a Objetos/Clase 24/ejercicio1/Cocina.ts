class Cocina {
    estaPrendida:boolean
    temperaturaActual:number


    constructor(encendido:boolean,temperatura:number) {
        this.estaPrendida=encendido;
        this.temperaturaActual=temperatura;
    }

    prenderApagar(): void {
    if(this.estaPrendida)
    this.estaPrendida=false

    else
        this.estaPrendida = true
    }

    subirTemperatura(): void {
        this.temperaturaActual = this.temperaturaActual + 1
    }

    bajarTemperatura(): void {
        this.temperaturaActual = this.temperaturaActual -1
    }

    mostrarCocina() {
        console.log("Mi Cocina esta encendida " + this.estaPrendida + " con la temperatura " + this.temperaturaActual);
    }
}

let miCocina=new Cocina(true,30);
miCocina.mostrarCocina();
miCocina.subirTemperatura();
miCocina.mostrarCocina();
miCocina.prenderApagar();
miCocina.mostrarCocina();
