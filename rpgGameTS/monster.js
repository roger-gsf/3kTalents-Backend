<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(nameMonster) {
        this.name = nameMonster;
        this.strength = 50;
        this.health = 10;
    }
    Monster.prototype.attack = function (warrior) {
        warrior.receiveDamage(this, this.strength);
        console.log("The monster ".concat(this.name, " dealt ").concat(this.strength, " damage to the warrior ").concat(warrior.name));
    };
    Monster.prototype.receiveDamage = function (warrior, damage) {
        this.health -= damage; // this.health - damage;
        console.log("The monster ".concat(this.name, " received ").concat(damage, " damage from the warrior ").concat(warrior.name, " and now has ").concat(this.health, " health"));
    };
    return Monster;
}());
exports.Monster = Monster;
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(nameMonster) {
        this.name = nameMonster;
        this.strength = 50;
        this.health = 10;
    }
    Monster.prototype.attack = function (warrior) {
        warrior.receiveDamage(this, this.strength);
        console.log("The monster ".concat(this.name, " dealt ").concat(this.strength, " damage to the warrior ").concat(warrior.name));
    };
    Monster.prototype.receiveDamage = function (warrior, damage) {
        this.health -= damage; // this.health - damage;
        console.log("The monster ".concat(this.name, " received ").concat(damage, " damage from the warrior ").concat(warrior.name, " and now has ").concat(this.health, " health"));
    };
    return Monster;
}());
exports.Monster = Monster;
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
