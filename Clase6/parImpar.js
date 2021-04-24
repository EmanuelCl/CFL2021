let readlineSync=require("readline-Sync");
let numero=readlineSync.questionInt("Ingrese un Numero: ");
while(numero==0){
    console.log(numero=readlineSync.questionInt("Ingrese un Numero: "));
}
   if(numero%2==0){
       console.log("El numero es Par");
   }else{
       console.log("El numero es Impar");
   }
