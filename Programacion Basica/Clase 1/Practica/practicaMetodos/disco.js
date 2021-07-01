let capacidad=270;
let menores21=0;
let mayores21=0;
let personas=new Array(capacidad);
cargarArreglo(capacidad,personas);
mostrarPersonas(capacidad,personas);
menores21=contarMenores(capacidad,personas);
console.log("Las personas menores de 21 son " , menores21);
console.log("Las personas mayores de 21 son " , capacidad-menores21);
console.log("Las personas en total son " , capacidad);
function Aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function cargarArreglo(capacidad,personas){
    let i=0;
    for(i=0;i<capacidad;i++){
        personas[i]=Aleatorio(18,40);
    }
}

function mostrarPersonas(capacidad,personas){
    let i=0;
    let salida=0;
    for(i=0;i<capacidad;i++){
        salida=salida+" "+personas[i]
    }
    console.log(salida);
}
function contarMenores(capacidad,personas){
    let i=0;
    let menores=0;
    for(i=0;i<capacidad;i++){
        if(personas[i]<21){
            menores++
        }
    }
    return menores
}