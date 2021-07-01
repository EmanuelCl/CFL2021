let readlineSync=require("readline-sync");
let usuario= "Juan";
let contraseña="claveJuan";
let usuarioIngresado=readlineSync.question("Ingrese su Usuario: ");
let claveIngresada=readlineSync.question("Ingrese su Clave: ");
if(usuario == usuarioIngresado && contraseña==claveIngresada){
    console.log("Usted Ingreso Correctamente");
}else{
    console.log("Usuario o Contraseña incorrecto");
}