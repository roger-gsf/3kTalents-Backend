<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var warrior_1 = require("./warrior");
var monster_1 = require("./monster");
var warriorName = readlineSync.question("Inform the warrior's name: ");
var warriorType = readlineSync.question("Inform the warrior's type: ");
var warriorStrength = readlineSync.questionInt("Inform the warrior's strength: ");
var monsterName = readlineSync.question("Inform the monster's name: ");
var kratos = new warrior_1.Warrior(warriorName, warriorType, warriorStrength);
var hydra = new monster_1.Monster(monsterName);
console.log();
console.log("======== BATTLE ========");
console.log();
kratos.attack(hydra);
console.log();
hydra.attack(kratos);
// Set timeout to clear the console
// setTimeout(() => {
//     console.clear();
// }, 10000);
throw new Error("It's an error!");
;
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var warrior_1 = require("./warrior");
var monster_1 = require("./monster");
var warriorName = readlineSync.question("Inform the warrior's name: ");
var warriorType = readlineSync.question("Inform the warrior's type: ");
var warriorStrength = readlineSync.questionInt("Inform the warrior's strength: ");
var monsterName = readlineSync.question("Inform the monster's name: ");
var kratos = new warrior_1.Warrior(warriorName, warriorType, warriorStrength);
var hydra = new monster_1.Monster(monsterName);
console.log();
console.log("======== BATTLE ========");
console.log();
kratos.attack(hydra);
console.log();
hydra.attack(kratos);
// Set timeout to clear the console
// setTimeout(() => {
//     console.clear();
// }, 10000);
throw new Error("It's an error!");
;
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
