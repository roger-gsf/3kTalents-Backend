import { Products } from "./Products";

export class Eletronic implements Products {
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

    beUsed(): void {
        console.log(`The eletronic ${this._name} is being used.`);
    }
}