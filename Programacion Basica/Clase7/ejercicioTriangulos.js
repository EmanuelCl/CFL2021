let readlineSync=require("readline-Sync");
let base=readlineSync.questionInt("Ingrese la base: ");
let altura=readlineSync.questionInt("Ingrese la altura: ");
let resultado;
function calcularAreaTriangulo (base,altura){
resultado=(base*altura)/2
return resultado;
}
console.log("El resultado es "+ calcularAreaTriangulo(base,altura));