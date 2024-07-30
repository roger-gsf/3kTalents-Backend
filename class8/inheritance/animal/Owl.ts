import { Animal } from "./Animal"

export class Owl extends Animal {
    color: string

    constructor(_name: string, weight: number, color: string) {
        super(_name, weight);
        this.color = color;
    }

    fly(): void {
        console.log("flying")
    }
}