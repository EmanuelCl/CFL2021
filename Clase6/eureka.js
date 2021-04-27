let readlineSync= require("readline-Sync");
let claveIngresada=readlineSync.question("Ingrese la clave: ");
let clave=("eureka")
let contador=1
while(clave!=claveIngresada && contador<=3) {
    contador++    
      console.log(claveIngresada=readlineSync.question("Clave incorrecta, Ingrese nuevamente.."))
    if (clave!=claveIngresada && contador==3){
      console.log("Su clave es incorrecta y a agotado sus intentos");
    }
}