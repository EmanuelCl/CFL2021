import PaymentMethod from "./PaymentMethod";

class Tarjeta implements PaymentMethod {
    public pay(costo: number): void {
        console.log('Se pagó ' + costo + ' empleando tarjeta');//implementa la interface de pago con tarjeta
    }
    }