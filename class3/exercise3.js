<<<<<<< HEAD
const rl = require('readline-sync');

const firstValue = rl.questionFloat(`Type the first number: `);
const secondValue = rl.questionFloat(`Type the second number: `);
const operation = rl.question(`Choose a math operation [+, -, x, :] `)

if (operation == `+`) {
    console.log(`The result is: ${firstValue + secondValue}`);
}
else if (operation == `-`) {
    console.log(`The result is: ${firstValue - secondValue}`);
}
else if (operation == `x`) {
    console.log(`The result is: ${firstValue * secondValue}`);
}
else if (operation == `:`) {
    console.log(`The result is: ${firstValue / secondValue}`);
}
else {
    console.log(`Invalid operation.`);
=======
const rl = require('readline-sync');

const firstValue = rl.questionFloat(`Type the first number: `);
const secondValue = rl.questionFloat(`Type the second number: `);
const operation = rl.question(`Choose a math operation [+, -, x, :] `)

if (operation == `+`) {
    console.log(`The result is: ${firstValue + secondValue}`);
}
else if (operation == `-`) {
    console.log(`The result is: ${firstValue - secondValue}`);
}
else if (operation == `x`) {
    console.log(`The result is: ${firstValue * secondValue}`);
}
else if (operation == `:`) {
    console.log(`The result is: ${firstValue / secondValue}`);
}
else {
    console.log(`Invalid operation.`);
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
}