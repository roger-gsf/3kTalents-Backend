<<<<<<< HEAD
// Creating and exporting the class Motorcycle:
export class Motorcycle {
    // Attributes
    private model: string;
    private brand: string;
    private color: string;
    private speed: number;

    // Constructor method
    constructor(model: string, brand: string, color: string, speed: number) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    // Getters and Setters:
    public getModel(): string {
        return this.model;
    }

    public setModel(newModel: string): string {
        return this.model = newModel;
    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(newBrand: string): string {
        return this.brand = newBrand;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(newColor: string): string {
        return this.color = newColor;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(newSpeed: number): number {
        return this.speed = newSpeed;
    }

    // Other methods
    public turnOn(): void {
        console.log(`The motorcycle was turned on`);
    }

    public riseMotorcycle(): void {
        console.log(`The motorcycle was raised.`);
    }

    public speedUp(): void {
        console.log(`The moto is speeding up.`);
    }
}
=======
// Creating and exporting the class Motorcycle:
export class Motorcycle {
    // Attributes
    private model: string;
    private brand: string;
    private color: string;
    private speed: number;

    // Constructor method
    constructor(model: string, brand: string, color: string, speed: number) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    // Getters and Setters:
    public getModel(): string {
        return this.model;
    }

    public setModel(newModel: string): string {
        return this.model = newModel;
    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(newBrand: string): string {
        return this.brand = newBrand;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(newColor: string): string {
        return this.color = newColor;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(newSpeed: number): number {
        return this.speed = newSpeed;
    }

    // Other methods
    public turnOn(): void {
        console.log(`The motorcycle was turned on`);
    }

    public riseMotorcycle(): void {
        console.log(`The motorcycle was raised.`);
    }

    public speedUp(): void {
        console.log(`The moto is speeding up.`);
    }
}
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
