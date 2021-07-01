let readlineSync=require("readline-Sync");
let cantidad=readlineSync.questionInt("Cuantos alumnos desea cargar? ");
let alumnos=new Array(cantidad);
let nota1=new Array(cantidad);
let nota2=new Array(cantidad);
let nota3=new Array(cantidad);
let alumnoBuscado=0;
let promedio=0;
cargarAlumnos(alumnos,cantidad);
cargarNotas(nota1,nota2,nota3,cantidad);
mostrarPromedio(promedio,alumnos,alumnoBuscado,nota1,nota2,nota3);
function cargarAlumnos(alumnos,cantidad){
    let i=0;
    for(i=0;i<cantidad;i++){
        alumnos[i]=readlineSync.question("Ingrese el nombre del alumno en la posicion " + i + " : ");
    }
}
function cargarNotas(nota1,nota2,nota3,cantidad){
    let i=0;
    for(i=0;i<cantidad;i++){
        nota1[i]=readlineSync.questionInt("Ingrese nota del primer trimestre de " + alumnos[i] + " : ");
        nota2[i]=readlineSync.questionInt("Ingrese nota del segundo trimestre de " + alumnos[i] + " : ");
        nota3[i]=readlineSync.questionInt("Ingrese nota del tercer trimestre de " + alumnos[i] + " : ");
    }
}
function mostrarPromedio(promedio,alumnos,alumnoBuscado,nota1,nota2,nota3){
    let i=0;
    for(i=0;i<cantidad;i++){
        promedio=nota1[i]+nota2[i]+nota3[i]
        alumnoBuscado=readlineSync.questionInt("Ingrese la posicion del alumno para saber su promedio : ");
        alumnos[i]=alumnos[alumnoBuscado]
        console.log(alumnos[i] + " promedio: " + promedio/3)
    }
}
