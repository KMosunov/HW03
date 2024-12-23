export class Product {
    name: string;
    price: number;
    quantity: number

    constructor (name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalValue (): number {
        return this.price * this.quantity;
    }
    isInStock (): boolean {
        return this.quantity > 0;
    }
}