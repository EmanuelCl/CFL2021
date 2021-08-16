import PaymentMethod from "./PaymentMethod";
import Item from "./Item";
class Cuenta {
    private lineItems: Item[] = [];

    public addLineItem(lineItem: Item): void {
        this.lineItems.push(lineItem);//agrega el item al final del arreglo lineItem
    }
    public removeLineItem(lineItem: Item): void {// nos busca en el arreglo el item, si son del mismo tipo y tienen los mismos datos lo borra
        for (let i = 0; i < this.lineItems.length; i++) {
            if (this.lineItems[i].equals(lineItem))
                this.lineItems.splice(i, 1);
            }
        }
    public getCostInCents(): number {
        return this.lineItems.map(item => item.getCosto()).reduce((a, b) => a + b, 0);// esta funcion nos crea un arreglo de los items y reduce el monto total a un solo digito
    }
    public pay(method: PaymentMethod): void {
        method.pay(this.getCostInCents());// esta funcion llama a la funcion anterior con el metodo de pago elegido
    }
}
// esta clase simula la compra y el pago de items en la cual tambien se puede remover y pagar en efectivo o tarjeta