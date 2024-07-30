<<<<<<< HEAD
import * as readlineSync from 'readline-sync';

import { Warrior } from "./warrior";
import { Monster } from "./monster";

const warriorName = readlineSync.question(`Inform the warrior's name: `);
const warriorType = readlineSync.question(`Inform the warrior's type: `);
const warriorStrength = readlineSync.questionInt(`Inform the warrior's strength: `);
const monsterName = readlineSync.question(`Inform the monster's name: `);

const kratos: Warrior = new Warrior(warriorName, warriorType, warriorStrength);
const hydra: Monster = new Monster(monsterName);

console.log();
console.log(`======== BATTLE ========`)
console.log();
kratos.attack(hydra);
console.log();
hydra.attack(kratos);

// Set timeout to clear the console
setTimeout(() => {
    console.clear();
}, 10000);
=======
import * as readlineSync from 'readline-sync';

import { Warrior } from "./warrior";
import { Monster } from "./monster";

const warriorName = readlineSync.question(`Inform the warrior's name: `);
const warriorType = readlineSync.question(`Inform the warrior's type: `);
const warriorStrength = readlineSync.questionInt(`Inform the warrior's strength: `);
const monsterName = readlineSync.question(`Inform the monster's name: `);

const kratos: Warrior = new Warrior(warriorName, warriorType, warriorStrength);
const hydra: Monster = new Monster(monsterName);

console.log();
console.log(`======== BATTLE ========`)
console.log();
kratos.attack(hydra);
console.log();
hydra.attack(kratos);

// Set timeout to clear the console
setTimeout(() => {
    console.clear();
}, 10000);
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
