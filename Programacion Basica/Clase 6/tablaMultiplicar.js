let readlineSync=require("readline-Sync");
let num1=readlineSync.questionInt("Ingrese el numero: ");
let num2=readlineSync.questionInt("Ingrese hasta que numero: ");
let multi=1
for(multi=1;(multi<=num2);multi++){
    resultado=num1*multi
     console.log("Tabla:", num1 + "x" +multi, "=", resultado);
}