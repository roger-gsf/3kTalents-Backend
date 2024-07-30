<<<<<<< HEAD
import { Warrior } from "./warrior";

export class Monster {
    name: string;
    strength: number;
    health: number;

    constructor(nameMonster: string) {
        this.name = nameMonster;
        this.strength = 50;
        this.health = 10;
    }

    attack(warrior: Warrior): void {
        warrior.receiveDamage(this, this.strength);
        console.log(`The monster ${this.name} dealt ${this.strength} damage to the warrior ${warrior.name}`);
    }

    receiveDamage(warrior: Warrior, damage: number): void {
        this.health -= damage; // this.health - damage;
        console.log(`The monster ${this.name} received ${damage} damage from the warrior ${warrior.name} and now has ${this.health} health`);
    }
}
=======
import { Warrior } from "./warrior";

export class Monster {
    name: string;
    strength: number;
    health: number;

    constructor(nameMonster: string) {
        this.name = nameMonster;
        this.strength = 50;
        this.health = 10;
    }

    attack(warrior: Warrior): void {
        warrior.receiveDamage(this, this.strength);
        console.log(`The monster ${this.name} dealt ${this.strength} damage to the warrior ${warrior.name}`);
    }

    receiveDamage(warrior: Warrior, damage: number): void {
        this.health -= damage; // this.health - damage;
        console.log(`The monster ${this.name} received ${damage} damage from the warrior ${warrior.name} and now has ${this.health} health`);
    }
}
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
