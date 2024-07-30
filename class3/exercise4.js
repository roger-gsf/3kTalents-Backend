<<<<<<< HEAD
const rl = require('readline-sync');

const value1 = Number(rl.questionFloat(`Type the first number: `));
const value2 = Number(rl.questionFloat(`Type the second number: `));
const value3 = Number(rl.questionFloat(`Type the third number: `));

if (value1 > value2 && value1 > value3) {
    console.log(`The first number(${value1}) is the major.`);
} else if (value2 > value1 && value2 > value3) {
    console.log(`The second number(${value2}) is the major.`);
} else if (value3 > value1 && value3 > value2) {
    console.log(`The third number(${value3}) is the major.`);
} else if (value1 === value2 && value1 === value3) {
    console.log(`All the numbers have the same value(${value1})`);
=======
const rl = require('readline-sync');

const value1 = Number(rl.questionFloat(`Type the first number: `));
const value2 = Number(rl.questionFloat(`Type the second number: `));
const value3 = Number(rl.questionFloat(`Type the third number: `));

if (value1 > value2 && value1 > value3) {
    console.log(`The first number(${value1}) is the major.`);
} else if (value2 > value1 && value2 > value3) {
    console.log(`The second number(${value2}) is the major.`);
} else if (value3 > value1 && value3 > value2) {
    console.log(`The third number(${value3}) is the major.`);
} else if (value1 === value2 && value1 === value3) {
    console.log(`All the numbers have the same value(${value1})`);
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
}