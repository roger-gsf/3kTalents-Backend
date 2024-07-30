<<<<<<< HEAD
import { Monster } from "./monster";

export class Warrior {
    name: string;
    type: string;
    strength: number;
    health: number;

    constructor(nameWarrior: string, typeWarrior: string, strengthWarrior: number) {
        this.name = nameWarrior;
        this.type = typeWarrior;
        this.strength = strengthWarrior;
        this.health = 100;
    }

    attack(monster: Monster): void {
        monster.receiveDamage(this, this.strength);
        console.log(`The warrior ${this.name} dealt ${this.strength} damage to the monster ${monster.name}`);
    }

    receiveDamage(monster: Monster, damage: number): void {
        this.health -= damage; // this.health - damage;
        console.log(`The warrior ${this.name} received ${damage} damage from the monster ${monster.name} and now has ${this.health} health`);
    }
}
=======
import { Monster } from "./monster";

export class Warrior {
    name: string;
    type: string;
    strength: number;
    health: number;

    constructor(nameWarrior: string, typeWarrior: string, strengthWarrior: number) {
        this.name = nameWarrior;
        this.type = typeWarrior;
        this.strength = strengthWarrior;
        this.health = 100;
    }

    attack(monster: Monster): void {
        monster.receiveDamage(this, this.strength);
        console.log(`The warrior ${this.name} dealt ${this.strength} damage to the monster ${monster.name}`);
    }

    receiveDamage(monster: Monster, damage: number): void {
        this.health -= damage; // this.health - damage;
        console.log(`The warrior ${this.name} received ${damage} damage from the monster ${monster.name} and now has ${this.health} health`);
    }
}
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
