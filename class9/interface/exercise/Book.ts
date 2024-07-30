import { Products } from "./Products";

export class Book implements Products {
    _name: string;
    type: string;
    price: number;
    weight: number;

    constructor(_name: string, type: string, price: number, weight: number) {
        this._name = _name;
        this.type = type;
        this.price = price;
        this.weight = weight;
    }

    beRead() {
        console.log(`The book ${this._name} is being read.`);
    }

}