<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(nameWarrior, typeWarrior, strengthWarrior) {
        this.name = nameWarrior;
        this.type = typeWarrior;
        this.strength = strengthWarrior;
        this.health = 100;
    }
    Warrior.prototype.attack = function (monster) {
        monster.receiveDamage(this, this.strength);
        console.log("The warrior ".concat(this.name, " dealt ").concat(this.strength, " damage to the monster ").concat(monster.name));
    };
    Warrior.prototype.receiveDamage = function (monster, damage) {
        this.health -= damage; // this.health - damage;
        console.log("The warrior ".concat(this.name, " received ").concat(damage, " damage from the monster ").concat(monster.name, " and now has ").concat(this.health, " health"));
    };
    return Warrior;
}());
exports.Warrior = Warrior;
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(nameWarrior, typeWarrior, strengthWarrior) {
        this.name = nameWarrior;
        this.type = typeWarrior;
        this.strength = strengthWarrior;
        this.health = 100;
    }
    Warrior.prototype.attack = function (monster) {
        monster.receiveDamage(this, this.strength);
        console.log("The warrior ".concat(this.name, " dealt ").concat(this.strength, " damage to the monster ").concat(monster.name));
    };
    Warrior.prototype.receiveDamage = function (monster, damage) {
        this.health -= damage; // this.health - damage;
        console.log("The warrior ".concat(this.name, " received ").concat(damage, " damage from the monster ").concat(monster.name, " and now has ").concat(this.health, " health"));
    };
    return Warrior;
}());
exports.Warrior = Warrior;
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
