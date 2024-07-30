import { Child } from "./Child";
export class Grandchild extends Child {
    public weight: number

    constructor(color: string, _name: string, height: number, weight: number) {
        super(color, _name, height)
        this.weight = weight
    }

    public walk(): void {
        console.log(`${this._name} is crawling.`)
    }
}
