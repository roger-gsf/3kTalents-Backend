"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
var Owl_1 = require("./Owl");
var myDog = new Dog_1.Dog("Scott", 5);
var myOwl = new Owl_1.Owl("Hedwig", 5, "white");
console.log(myDog._name);
myDog.bark();
myOwl.fly();
// It's returning "undefined":
// console.log(`Scoot says: ${myDog.bark()}`);
// console.log(`Hedwig is ${myOwl.fly()}`);
