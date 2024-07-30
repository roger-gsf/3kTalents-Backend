<<<<<<< HEAD
class Dog {
    name: string;
    age: number;
    weight: number;
    coat: string;
    breed: string;

    constructor(dogName: string, dogWeight: number, dogCoat: string) {
        this.name = dogName;
        this.weight = dogWeight;
        this.coat = dogCoat;
        this.breed = `Golden`;
    }

    bark(): string {
        return `${this.name} is barking`;
    }

    run(): string {
        return `${this.name} is running`;
    }

    eat(): string {
        return `${this.name} is eating`
    }
}

const littleDog: Dog = new Dog(`Robert`, 8, `Brown`);
const greatDog: Dog = new Dog(`Rufus`, 20, `Black`);

console.log(littleDog.name); // Robert
=======
class Dog {
    name: string;
    age: number;
    weight: number;
    coat: string;
    breed: string;

    constructor(dogName: string, dogWeight: number, dogCoat: string) {
        this.name = dogName;
        this.weight = dogWeight;
        this.coat = dogCoat;
        this.breed = `Golden`;
    }

    bark(): string {
        return `${this.name} is barking`;
    }

    run(): string {
        return `${this.name} is running`;
    }

    eat(): string {
        return `${this.name} is eating`
    }
}

const littleDog: Dog = new Dog(`Robert`, 8, `Brown`);
const greatDog: Dog = new Dog(`Rufus`, 20, `Black`);

console.log(littleDog.name); // Robert
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
console.log(greatDog.bark()); // Rufus is barking