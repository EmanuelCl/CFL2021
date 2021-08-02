import * as RLS from 'readline-sync';
import * as fs from "fs";
import Casino from './Casino';

let casino: Casino = new Casino();

function mostrarInfo(){
    let info:string[] = (fs.readFileSync("informacion.txt",'utf8')).split("\n");
    console.log(info);
}
mostrarInfo();

let opcion: string = RLS.question('Elija un Juego: (T=Tragamonedas),(TP=Tragamonedas Plus),(R=Ruleta),(B=Blackjack) X para Salir: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case 'T': {
            casino.jugarTragamonedas();
            break;
        }
        case 'TP': {
            casino.jugarTragramonedasDos();
            break;            
        }
        case 'R': {
            casino.jugarRuleta();
            break;
        }
        case 'B': {
            casino.jugarBlackJack()
            break;                        
        }
    }
    opcion = RLS.question('Desea volver a Jugar? (T=Tragamonedas),(TP=Tragamonedas Plus),(R=Ruleta),(B=Blackjack) X para finalizar: ').toUpperCase();
}


