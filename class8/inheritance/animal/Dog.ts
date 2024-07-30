import { Animal } from "./Animal"

export class Dog extends Animal {

    constructor(_name: string, weight: number) {
        super(_name, weight)
    }

    bark(): void {
        console.log("roof roof")
    }
}