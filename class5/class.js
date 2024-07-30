<<<<<<< HEAD
var Dog = /** @class */ (function () {
    function Dog(dogName, dogWeight, dogCoat) {
        this.name = dogName;
        this.weight = dogWeight;
        this.coat = dogCoat;
        this.breed = "Golden";
    }
    Dog.prototype.bark = function () {
        return "".concat(this.name, " is barking");
    };
    Dog.prototype.run = function () {
        return "".concat(this.name, " is running");
    };
    Dog.prototype.eat = function () {
        return "".concat(this.name, " is eating");
    };
    return Dog;
}());
var littleDog = new Dog("Robert", 8, "Brown");
var greatDog = new Dog("Rufus", 20, "Black");
console.log(littleDog.name); // Robert
console.log(greatDog.bark()); // Roof roof
=======
var Dog = /** @class */ (function () {
    function Dog(dogName, dogWeight, dogCoat) {
        this.name = dogName;
        this.weight = dogWeight;
        this.coat = dogCoat;
        this.breed = "Golden";
    }
    Dog.prototype.bark = function () {
        return "".concat(this.name, " is barking");
    };
    Dog.prototype.run = function () {
        return "".concat(this.name, " is running");
    };
    Dog.prototype.eat = function () {
        return "".concat(this.name, " is eating");
    };
    return Dog;
}());
var littleDog = new Dog("Robert", 8, "Brown");
var greatDog = new Dog("Rufus", 20, "Black");
console.log(littleDog.name); // Robert
console.log(greatDog.bark()); // Roof roof
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
