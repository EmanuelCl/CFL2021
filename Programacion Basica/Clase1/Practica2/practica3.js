let readlineSync=require("readline-Sync");
let cantidad=readlineSync.questionInt("Cuantas butacas hay? ");
let butacas=new Array(cantidad);
let desocupadas=0;
function cargarArreglo(butacas,cantidad,desocupadas){
    let i=0;
    for(i=0;i<cantidad;i++){
        butacas[i]=Math.random()
        if(butacas[i]>0.5){
            console.log(true)
            }else if(butacas[i]<0.5){
            desocupadas++
            console.log(false)
        }
    }
    console.log("Butacas desocupadas "+desocupadas)       
}
cargarArreglo(butacas,cantidad,desocupadas);