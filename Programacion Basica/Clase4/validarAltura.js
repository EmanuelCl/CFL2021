let readlineSync=require("readline-Sync");
let alturaPermitida= 1.30;
let alturaPersona=readlineSync.questionFloat("Ingrese la Altura:");
if (alturaPersona >=alturaPermitida){
    console.log("La persona puede subir al juego");
}else{
    console.log("La persona no puede subir al juego");
}