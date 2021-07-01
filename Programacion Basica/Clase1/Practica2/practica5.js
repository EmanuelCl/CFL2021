let readlineSync=require("readline-Sync");
let infantes=readlineSync.questionInt("Cuantos infantes son? ");
if(infantes<=30){
    console.log("Amarilla");
}else if(infantes>30 && infantes<=35){
    console.log("Verde");
}else if(infantes>35 && infantes<=40){
    console.log("Azul");
}else{
    console.log("La cantidad de infantes no admite ningun aula")
}