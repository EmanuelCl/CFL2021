let readlineSync=require("readline-Sync");
let num=new Array(6)
num[0]=20
num[1]=14
num[2]=8
num[3]=0
num[4]=5
num[5]=19
num[6]=24
let indice=0
while(indice<7){
    console.log("El numero en la posicion " , indice , "es" , num[indice]);
    indice++
}