let readlineSync=require("readline-Sync");
let n=readlineSync.question("Cuantos alumnos desea cargar? ")
let alumnos=new Array(n);
let nota1=new Array(n);
let nota2=new Array(n);
let nota3=new Array(n);
let promedio;
function cargarAlumnos(alumnos,n){
    let i=0;
    for(i=0;i<n;i++){
        alumnos[i]=readlineSync.question("Ingrese nombre: ");
    }
}
function cargarNotas(nota,n,alumnos){
    let i=0;
    for(i=0;i<n;i++){
        nota[i]=readlineSync.questionInt("Ingrese nota de "+alumnos[i]+ " :");
    }
}
function calcularPromedio(nota1,nota2,nota3,n){
    let i=0;
    let prome=0;
    for(i=0;i<n;i++){
        prome=nota1[i]+nota2[i]+nota3[i]
        console.log(alumnos[i], prome/3)
    }
}
console.log("Cargando lista de Alumnos...");
cargarAlumnos(alumnos,n);
console.log("Cargando lista de Notas Primer trimestre..");
cargarNotas(nota1,n,alumnos);
console.log("Cargando lista de Notas Segundo trimestre..");
cargarNotas(nota2,n,alumnos);
console.log("Cargando lista de Notas Tercer trimestre..");
cargarNotas(nota3,n,alumnos);
promedio=calcularPromedio(nota1,nota2,nota3,n);
