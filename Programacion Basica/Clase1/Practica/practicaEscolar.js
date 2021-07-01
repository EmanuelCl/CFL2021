let readlineSync=require("readline-Sync");
let cantidad=readlineSync.questionInt("Cuantos alumnos desea cargar? ");
let alumno=new Array(cantidad);
let nota1=new Array(cantidad);
let nota2=new Array(cantidad);
let nota3=new Array(cantidad);
let promedio=0
let alumnoBuscado=0
let i=0
for(i=0;i<cantidad;i++){
    alumno[i]=readlineSync.question("Ingrese nombre alumno " + [i] + ": ");
}
for(i=0;i<cantidad;i++){
    nota1[i]=readlineSync.questionInt("Ingrese la nota del primer trimestre de " + alumno[i] + ": " );
    nota2[i]=readlineSync.questionInt("Ingrese la nota del segundo trimestre de " + alumno[i] + ": " );
    nota3[i]=readlineSync.questionInt("Ingrese la nota del tercer trimestre de " + alumno[i] + ": ");
}
for(i=0;i<cantidad;i++){
    promedio=nota1[i]+nota2[i]+nota3[i]
}
alumnoBuscado=readlineSync.questionInt("Ingrese la posicion del alumno para saber su promedio: ")
alumno[i]=alumno[alumnoBuscado]
console.log(alumno[i], ": " + promedio/3)

