let readlineSync=require("readline-Sync");
let nombre=readlineSync.question("Ingrese el nombre alumno: ");
let notaPractica,notaProblemas,notaTeorica,notaFinal;
while(nombre!=""){
    notaPractica=readlineSync.questionInt("Ingrese nota practica: ");
    notaProblemas=readlineSync.questionInt("Ingrese nota problemas: ");
    notaTeorica=readlineSync.questionInt("Ingrese nota Teorica: ");
    if(notaPractica>0,notaPractica<10 && notaProblemas>0,notaProblemas<10 && notaTeorica>0,notaTeorica<10){
        notaFinal=notaPractica*0.1+ notaProblemas*0.5 + notaTeorica*0.4;
        console.log("La nota Final de " + nombre + "es" + notaFinal);
    }else{
        console.log("Error,numeros ingresados mayores a 10 o menores a cero");
    }
    nombre=readlineSync.question("Ingrese el nombre alumno: ");
}