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
		this.tragamonedas.jugarTragamonedas();
	}
    public jugarTragramonedasDos():void{
        this.tragamonedasDos.jugarVariante();
    }
    public jugarRuleta():void{
        this.ruleta.jugarRuleta();
    }
    public jugarBlackJack():void{
        this.blackJack.jugarBlackJack();
    }
}