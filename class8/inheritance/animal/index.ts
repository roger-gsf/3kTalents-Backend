import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog: Dog = new Dog("Scott", 5);
const myOwl: Owl = new Owl("Hedwig", 5, "white");

console.log(myDog._name)
myDog.bark();
myOwl.fly();

// It's returning "undefined":
// console.log(`Scoot says: ${myDog.bark()}`);
// console.log(`Hedwig is ${myOwl.fly()}`);
