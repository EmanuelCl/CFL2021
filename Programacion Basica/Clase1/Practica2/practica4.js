v1=new Array(3);
v2=new Array(3);
v3=new Array(3);
v4=new Array(3);
vResultado1=new Array(3);
vResultado2=new Array(3)
vResultadoFinal=new Array(3);
v1=[1,2,3];
v2=[4,5,6];
v3=[2,1,2];
v4=[1,2,1];
function multiplicarArreglo(v1,v2,vResultado){
    let i=0;
    for(i=0;i<3;i++){
        vResultado[i]=v1[i]*v2[i]
    }
}
multiplicarArreglo(v1,v2,vResultado1);
console.log(vResultado1);
multiplicarArreglo(v3,v4,vResultado2)
console.log(vResultado2);
multiplicarArreglo(vResultado1,vResultado2,vResultadoFinal)
console.log(vResultadoFinal);