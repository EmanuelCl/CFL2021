let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("Ingrese la base:");
let altura = readlineSync.questionInt("Ingrese la altura:");
let area = base * altura;
console.log("El area es: ", area);