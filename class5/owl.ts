<<<<<<< HEAD
// Create a class "Owl"
// 3 attributes
// 3 methods
// Don't forget the constructor
// After create the class, call the methods

class Owl {
    // Attributes:
    name: string;
    age: number;
    weight: number;
    coat: string;

    // Constructor:
    constructor(owlName: string, owlAge: number, owlWeight: number, owlCoat: string) {
        this.name = owlName;
        this.age = owlAge;
        this.weight = owlWeight;
        this.coat = owlCoat;
    }

    // Methods:
    chirp(): string {
        return `${this.name} is chirping`;

    }

    fly(): string {
        return `${this.name} is flying`
    }

    eat(): string {
        return `${this.name} is eating`
    }
}

const hedwig: Owl = new Owl(`Hedwig`, 2, 5, `White`);
console.log(hedwig.fly());
console.log(hedwig.eat());
console.log(hedwig.chirp());
=======
// Create a class "Owl"
// 3 attributes
// 3 methods
// Don't forget the constructor
// After create the class, call the methods

class Owl {
    // Attributes:
    name: string;
    age: number;
    weight: number;
    coat: string;

    // Constructor:
    constructor(owlName: string, owlAge: number, owlWeight: number, owlCoat: string) {
        this.name = owlName;
        this.age = owlAge;
        this.weight = owlWeight;
        this.coat = owlCoat;
    }

    // Methods:
    chirp(): string {
        return `${this.name} is chirping`;

    }

    fly(): string {
        return `${this.name} is flying`
    }

    eat(): string {
        return `${this.name} is eating`
    }
}

const hedwig: Owl = new Owl(`Hedwig`, 2, 5, `White`);
console.log(hedwig.fly());
console.log(hedwig.eat());
console.log(hedwig.chirp());
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
