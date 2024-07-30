import { Car } from "./Car"

export class Toyota implements Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log(`The car of the model ${this.model} has been started.`);
    }
}