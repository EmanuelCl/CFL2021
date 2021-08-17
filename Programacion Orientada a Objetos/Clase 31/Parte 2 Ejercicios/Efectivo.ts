import PaymentMethod from "./PaymentMethod";
class Efectivo implements PaymentMethod {
    public pay(costo: number): void {
        console.log('Se pagó ' + costo + ' empleando efectivo');//implementa la interface de pago en efectivo
    }
    }