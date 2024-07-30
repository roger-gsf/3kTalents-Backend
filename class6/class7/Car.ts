<<<<<<< HEAD
// Creating and exporting the class Car:
export class Car {
    // Attributes
    private model: string;
    private brand: string;
    private color: string;
    private doors: number;
    private speed: number;

    // Constructor method:
    constructor(model: string, brand: string, color: string, doors: number, speed: number) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.doors = doors;
        this.speed = speed;
    }

    // Getters and Setters
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

    public getDoors(): number {
        return this.doors;
    }

    public setDoors(newDoors: number): number {
        return this.doors = newDoors;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(newSpeed: number): void {
        if (this.speed > 0) {
            this.speed = newSpeed;
        } else {
            console.log(`The speed must be higher than 0!`);
        }
    }

    // Other methods:
    public turnOn(): void {
        console.log(`The car was started.`);
    }

    public openTheDoor(): string {
        return `The car's door was opened.`
    }
    public speedUp(): string {
        return `The car is speeding up.`
    }
}
=======
// Creating and exporting the class Car:
export class Car {
    // Attributes
    private model: string;
    private brand: string;
    private color: string;
    private doors: number;
    private speed: number;

    // Constructor method:
    constructor(model: string, brand: string, color: string, doors: number, speed: number) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.doors = doors;
        this.speed = speed;
    }

    // Getters and Setters
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

    public getDoors(): number {
        return this.doors;
    }

    public setDoors(newDoors: number): number {
        return this.doors = newDoors;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(newSpeed: number): void {
        if (this.speed > 0) {
            this.speed = newSpeed;
        } else {
            console.log(`The speed must be higher than 0!`);
        }
    }

    // Other methods:
    public turnOn(): void {
        console.log(`The car was started.`);
    }

    public openTheDoor(): string {
        return `The car's door was opened.`
    }
    public speedUp(): string {
        return `The car is speeding up.`
    }
}
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
