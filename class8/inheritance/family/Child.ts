import { Father } from "./Father";
export class Child extends Father {
    public height: number

    constructor(color: string, _name: string, height: number) {
        super(color, _name)
        this.height = height
    }

    public study(): void {
        console.log(`${this._name} is studying.`)
    }
}
