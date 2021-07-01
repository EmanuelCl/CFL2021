let capacidad=270;
let menores21=0;
let mayores21=0;
let personas=new Array(capacidad);
cargarArreglo(personas,capacidad);
mostrarPersonas(personas,capacidad);
menores21=contarMenores(capacidad,personas);
console.log("Hay "+menores21+" menores de 21");
console.log("Los mayores de 21 son ",capacidad-menores21);
console.log("La capacidad total es de ", capacidad);

function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function cargarArreglo(personas,capacidad) {
    for(let i=0;i<capacidad;i++){
        personas[i]=Aleatorio(19,40);
    }
}
function mostrarPersonas(personas,capacidad) {
    let salida="";
    for(let i=0;i<capacidad;i++){
        salida=salida+" "+personas[i];
    }
    console.log(salida);
}
function contarMenores(capacidad,personas){
    let menores=0;
    for(let i=0;i<capacidad;i++){
        if(personas[i]<21){
            menores++
        }
    }
    return menores
}

