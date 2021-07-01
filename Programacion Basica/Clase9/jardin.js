let readlineSync=require("readline-Sync");
let infantes=readlineSync.questionInt("Ingrese la cantidad de Infantes : ");

if(infantes<=30){
    console.log("Le corresponde el aula Amarilla");
}else if(infantes>30 && infantes<=35){
    console.log("Le corresponde el aula Verde");
}else if(infantes>35 && infantes<=40){
    console.log("Le corresponde el aula Azul")
}else{
    console.log("La cantidad de infantes no admiten ninguna de las aulas");
}