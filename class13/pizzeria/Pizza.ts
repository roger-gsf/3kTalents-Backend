import { PizzaFlavor } from "./PizzaFlavor";

export class Pizza {
    private flavor: PizzaFlavor;
    private size: number;
    private price: number;

    constructor(flavor: PizzaFlavor, size: number, price: number) {
        this.flavor = flavor;
        this.size = size;
        this.price = price;
    }

    public description(): string {
        return `${this.flavor} pizza\nSize: ${this.size} cm\nPrice: R$ ${this.price.toFixed(2)}`;
    }
}
