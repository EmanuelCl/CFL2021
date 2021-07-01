let readlineSync=require("readline-Sync");
let nombre=readlineSync.question("Ingrese el nombre del alumno: ");
let notaPractica,notaProblemas,notaTeorica,notaFinal;
while(nombre!=""){
    notaPractica=readlineSync.questionInt("Ingrese nota practica:  ");
    notaProblemas=readlineSync.questionInt("Ingrese nota Problemas:  ");
    notaTeorica=readlineSync.questionInt("Ingrese nota Teorica  ");

    if(notaPractica>0,notaPractica<10 && notaProblemas>0,notaProblemas<10 && notaTeorica>0,notaTeorica<10){
        notaFinal=notaPractica*0.1 + notaProblemas*0.5 + notaTeorica*0.4
        console.log("El resultado es " + notaFinal)
    }else{
        console.log("Error, los numeros Ingresados son mayores a cero o menores a diez");
        
    }
    nombre=readlineSync.question("Ingrese el nombre del alumno:       ")
}