let capacidad=270;
let menores21=0;
let mayores21=0;
let personas=new Array(capacidad);

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

function cargarPersonas(personas,capacidad){
    let i=0;
    for(i=0;i<capacidad;i++){
        personas[i]=aleatorio(19,40);
    }
}
function mostrarPersonas(personas,capacidad){
    let i=0;
    let salida=0;
    for(i=0;i<capacidad;i++){
        salida=salida+" "+personas[i] 
    }
  console.log(salida);  
}
function cargaMenores(personas,capacidad){
    let menores=0;
    let i=0;
    for(i=0;i<capacidad;i++){
        if(personas[i]<21){
            menores++
        }
    }
    return menores;
}
cargarPersonas(personas,capacidad);
console.log("Edades de personas dentro del Local:");
mostrarPersonas(personas,capacidad);
menores21=cargaMenores(personas,capacidad);
mayores21=capacidad-menores21
console.log("Los menores de 21 años son: "+menores21);
console.log("Las personas de 21 años o mas son: "+mayores21);
console.log("Hay ",capacidad, "personas dentro del local");
