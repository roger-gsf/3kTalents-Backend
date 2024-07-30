<<<<<<< HEAD
// Create a class "Owl"
// 3 attributes
// 3 methods
// Don't forget the constructor
// After create the class, call the methods
var Owl = /** @class */ (function () {
    // Constructor:
    function Owl(owlName, owlAge, owlWeight, owlCoat) {
        this.name = owlName;
        this.age = owlAge;
        this.weight = owlWeight;
        this.coat = owlCoat;
    }
    // Methods:
    Owl.prototype.chirp = function () {
        return "".concat(this.name, " is chirping");
    };
    Owl.prototype.fly = function () {
        return "".concat(this.name, " is flying");
    };
    Owl.prototype.eat = function () {
        return "".concat(this.name, " is eating");
    };
    return Owl;
}());
var hedwig = new Owl("Hedwig", 2, 5, "White");
console.log(hedwig.fly());
console.log(hedwig.eat());
console.log(hedwig.chirp());
=======
// Create a class "Owl"
// 3 attributes
// 3 methods
// Don't forget the constructor
// After create the class, call the methods
var Owl = /** @class */ (function () {
    // Constructor:
    function Owl(owlName, owlAge, owlWeight, owlCoat) {
        this.name = owlName;
        this.age = owlAge;
        this.weight = owlWeight;
        this.coat = owlCoat;
    }
    // Methods:
    Owl.prototype.chirp = function () {
        return "".concat(this.name, " is chirping");
    };
    Owl.prototype.fly = function () {
        return "".concat(this.name, " is flying");
    };
    Owl.prototype.eat = function () {
        return "".concat(this.name, " is eating");
    };
    return Owl;
}());
var hedwig = new Owl("Hedwig", 2, 5, "White");
console.log(hedwig.fly());
console.log(hedwig.eat());
console.log(hedwig.chirp());
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
