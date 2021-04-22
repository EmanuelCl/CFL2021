let readlineSync= require("readline-Sync");
let sueldoBase=readlineSync.questionInt("Ingrese su Sueldo actual: ");
let sueldo1=(sueldoBase*20/100 + sueldoBase)
let sueldo2=(sueldoBase*10/100 + sueldoBase)
let sueldo3= (sueldoBase*5/100 + sueldoBase)
if(sueldoBase<15000 && sueldoBase>0){
    console.log("Su sueldo con aumento es: " + sueldo1);
}else{
    if(sueldoBase>15001 && sueldoBase<20000){
    console.log("Su sueldo con aumento es: " + sueldo2);
}else{
    if(sueldoBase>20001 && sueldoBase<25000){
    console.log("Su sueldo con aumento es: " + sueldo3);
}else{
    if(sueldoBase>25000)
    console.log("Su sueldo no recibio aumento")
}
    }
}