export default class Item {
    private descripcion: string;
    private costo: number;
    public constructor(descripcion: string, costo: number) {
    this.descripcion = descripcion;
    this.costo = costo;
    }
    public getDescripcion(): string { return this.descripcion; }//retorna la descripcion del item
    public getCosto(): number { return this.costo; } //retorna el costo del item
    public setDescripcion(descripcion: string): void { this.descripcion = descripcion; }// le doy un valor de tipo string a la variable descripcion
    public setCosto(costo: number): void { this.costo = costo; }//le doy un valor de tipo number a la variable costo
    public equals(i: Item): boolean {
    return this.costo == i.getCosto() && this.descripcion == i.getDescripcion();//compara los items por su costo y descripcion
    }
    }
// esta clase crea un objeto item con sus atributos internos