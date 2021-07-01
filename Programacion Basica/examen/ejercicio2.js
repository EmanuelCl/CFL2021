let readlineSync=require("readline-Sync");
let elem,arr,nro,ocu;
elem=readlineSync.questionInt("Ingrese tamaño: ");
arr=new Array(elem);
cargar(arr,elem);
nro=readlineSync.questionInt("Ingrese numero: ");
mostrar(arr,elem);
ocu=metodo(arr,elem,nro);
console.log("El numero "+nro+"...." +ocu);
function cargar(v,l){
    for(let i=0;i<l;i++)
        v[i]=Math.floor(Math.random()*100);
    
}
function mostrar(v,l){
    let c="";
    for(let i=0;i<l;i++)
        c+=v[i]+" ";
        console.log(c);
    
}
function metodo(v,l,n){
    let oc=0;//defino la variable oc de tipo numerico agregandole un 0
    for(let i=0;i<l;i++){
        if(v[i]==n){
            oc++
        }
    }
    return oc;//retorno el resultado a la funcion
}
