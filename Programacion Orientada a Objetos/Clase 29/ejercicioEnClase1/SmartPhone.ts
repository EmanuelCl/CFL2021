import Telefono from "./Telefono";

class SmartPhone implements Telefono{
    private estaPrendido: boolean;

    public constructor(){

    }
    public prender():void{
        this.estaPrendido=true;
        console.log("Prendiendo")

    }
    public apagar():void{
        this.estaPrendido=false;
        console.log("Apagando")
    }
    public llamar(numero:string):void{
        console.log("Llamando....",numero)
    }
    public enviarMensaje(mensaje:string,numero:number):void{
        console.log("Numero celular: ",numero," Mensaje: ",mensaje);
    }
}
let miSmarPhone= new SmartPhone();
miSmarPhone.prender();
console.log(miSmarPhone);
miSmarPhone.llamar("2494223344");
miSmarPhone.enviarMensaje("Hola como estas?",2494887766)
miSmarPhone.apagar();
console.log(miSmarPhone);