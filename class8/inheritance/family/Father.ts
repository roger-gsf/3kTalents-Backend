export class Father {
    public _name: string;
    public color: string;

    constructor(_name: string, color: string) {
        this._name = _name;
        this.color = color;
    }

    public walk(): void {
        console.log(`${this._name} is walking.`);
    }
}
