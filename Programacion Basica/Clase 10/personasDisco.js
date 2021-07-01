let capacidad=270;
let menores21=0;
let mayores21=0;
let total=0
let personas=new Array(capacidad);
cargarArreglo(personas,capacidad);
mostrarPersonas(personas,capacidad);
menores21=contarMenores(personas,capacidad);
console.log("La cantidad de menores de 21 son ", menores21);
console.log("La cantidad de mayores de 21 son ", capacidad-menores21);
console.log("En total hay ",capacidad, " personas");
function Aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
function cargarArreglo(personas,capacidad){
    let i=0
    for(i=0;i<capacidad;i++){
        personas[i]=Aleatorio(18,40);
    }
}
function mostrarPersonas(personas,capacidad){
    let i=0;
    let salida=0;
    for(i=0;i<capacidad;i++){
        salida=salida + " " + personas[i]
    }
    console.log(salida);
}

function contarMenores(personas,capacidad){
    let i=0
    let menores=0;
    for(i=0;i<capacidad;i++){
        if(personas[i]<21){
            menores++
        }
    }
    return menores;
}