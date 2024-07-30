<<<<<<< HEAD
import * as readlineSync from 'readline-sync';
import { Warrior } from "./warrior";
import { Monster } from "./monster";

const warriorName = readlineSync.question(``);
const warriorType = readlineSync.question(``);
const warriorStrength = readlineSync.questionInt(``);
const monsterName = readlineSync.question(``);

const kratos: Warrior = new Warrior('Kratos', 'Spartan warrior', 50);
const hydra: Monster = new Monster('Hydra');

// Kratos attacks Hydra
kratos.attack(hydra);
console.log(`\n`);
// Hydra attacks Kratos
hydra.attack(kratos);
=======
import * as readlineSync from 'readline-sync';
import { Warrior } from "./warrior";
import { Monster } from "./monster";

const warriorName = readlineSync.question(``);
const warriorType = readlineSync.question(``);
const warriorStrength = readlineSync.questionInt(``);
const monsterName = readlineSync.question(``);

const kratos: Warrior = new Warrior('Kratos', 'Spartan warrior', 50);
const hydra: Monster = new Monster('Hydra');

// Kratos attacks Hydra
kratos.attack(hydra);
console.log(`\n`);
// Hydra attacks Kratos
hydra.attack(kratos);
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
