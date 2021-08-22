import Ruleta from "./Ruleta";
import Tragamonedas from "./Tragamonedas";
import BlackJack from "./Blackjack";
import TragamonedasDos from "./TragamonedasDos";

export default class Casino{
    private blackJack: BlackJack;
	private tragamonedas: Tragamonedas;
    private tragamonedasDos: TragamonedasDos
    private ruleta: Ruleta;
​
	constructor(){
		this.blackJack = new BlackJack();
		this.tragamonedas = new Tragamonedas();
        this.ruleta = new Ruleta();
        this.tragamonedasDos = new TragamonedasDos();
	}
    
	public jugarTragamonedas():void{
        try {
		    this.tragamonedas.jugarTragamonedas();
        }catch(error){
            console.log('Ocurrió un error esperado, juego finalizado');
            console.log(error);
        }
	}
    public jugarTragramonedasDos():void{
        try {
            this.tragamonedasDos.jugarVariante();
        }catch(error){
            console.log("Ocurrio un error esperado, juego finalizado");
            console.log(error);
        }
    }
    public jugarRuleta():void{
        try {
        this.ruleta.jugarRuleta();
        }catch(error){
            console.log("Ocurrio un error esperado, juego finalizado");
            console.log(error);
        }
    }
    public jugarBlackJack():void{
        try {
        this.blackJack.jugarBlackJack();
        }catch(error){
            console.log("Ocurrio un error esperado, juego finalizado");
            console.log(error);
        }
    }
}