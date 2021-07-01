let readlineSync=require("readline-Sync");
let sueldo=readlineSync.questionInt("Ingrese el monto de su sueldo: ");
let sueldo1=sueldo*0.2 + sueldo
let sueldo2=sueldo*0.1 + sueldo
let sueldo3=sueldo*0.05 + sueldo
switch (true) {
        case 
            (sueldo>0 &&sueldo<=15000):
            console.log("Su sueldo con aumento es de: " + sueldo1)
             break;

        case  (sueldo>15001 && sueldo<=20000):
            console.log("Su sueldo con aumento es de: " + sueldo2)
             break;

        case  (sueldo>20001 && sueldo<=25000):
            console.log("Su sueldo con aumento es de: " + sueldo3)
             break;

        default:
                 (sueldo>25000)
             console.log("Su sueldo no recibe aumento");
        
                
}