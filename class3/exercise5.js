<<<<<<< HEAD
const rl = require('readline-sync');

let running = true;
while (running) {
    console.log("1 - Exercise 1");
    console.log("2 - Exercise 2");
    console.log("3 - Exercise 3");
    console.log("4 - Exercise 4");
    console.log("0 - Exit\n");
    let option = rl.questionInt("Choose an exercise to run: ");

    switch (option) {
        case 1:
            let number = rl.questionInt(`Type a positive or negative integer number: `);
            exercise1(number);
            setTimeout
            break;
        case 2:
            let password = `1234`;
            let newPassword = rl.question(`Type the password: `);
            exercise2(password, newPassword);
            break;
        case 3:
            let firstValue = rl.questionFloat(`Type the first number: `);
            let secondValue = rl.questionFloat(`Type the second number: `);
            let operation = rl.question(`Choose a math operation [+, -, x, :] `)
            exercise3(firstValue, secondValue, operation);
            break;
        case 4:
            let value1 = Number(rl.questionFloat(`Type the first number: `));
            let value2 = Number(rl.questionFloat(`Type the second number: `));
            let value3 = Number(rl.questionFloat(`Type the third number: `));
            exercise4(value1, value2, value3);
            break;
        case 0:
            !running;
            console.log("Exiting...");
            process.exit();
            break;
        default:
            console.log("Invalid option!");
    }
}

function exercise1(number) {
    if (number > 0) {
        console.log(`The entered number is positive.`)
    } else if (number === 0) {
        console.log(`The entered number is 0.`)
    } else {
        console.log(`The entered number is negative.`)
    }
}

function exercise2(password, newPassword) {
    if (password === newPassword) {
        console.log(`Login succesfull.`);
    } else {
        console.log(`Incorrect password.`);
    }
}

function exercise3(firstValue, secondValue, operation) {
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
    }
}

function exercise4(value1, value2, value3) {
    if (value1 > value2 && value1 > value3) {
        console.log(`The first number(${value1}) is the major.`);
    } else if (value2 > value1 && value2 > value3) {
        console.log(`The second number(${value2}) is the major.`);
    } else if (value3 > value1 && value3 > value2) {
        console.log(`The third number(${value3}) is the major.`);
    } else if (value1 === value2 && value1 === value3) {
        console.log(`All the numbers have the same value(${value1})`);
    }
}
=======
const rl = require('readline-sync');

let running = true;
while (running) {
    console.log("1 - Exercise 1");
    console.log("2 - Exercise 2");
    console.log("3 - Exercise 3");
    console.log("4 - Exercise 4");
    console.log("0 - Exit\n");
    let option = rl.questionInt("Choose an exercise to run: ");

    switch (option) {
        case 1:
            let number = rl.questionInt(`Type a positive or negative integer number: `);
            exercise1(number);
            setTimeout
            break;
        case 2:
            let password = `1234`;
            let newPassword = rl.question(`Type the password: `);
            exercise2(password, newPassword);
            break;
        case 3:
            let firstValue = rl.questionFloat(`Type the first number: `);
            let secondValue = rl.questionFloat(`Type the second number: `);
            let operation = rl.question(`Choose a math operation [+, -, x, :] `)
            exercise3(firstValue, secondValue, operation);
            break;
        case 4:
            let value1 = Number(rl.questionFloat(`Type the first number: `));
            let value2 = Number(rl.questionFloat(`Type the second number: `));
            let value3 = Number(rl.questionFloat(`Type the third number: `));
            exercise4(value1, value2, value3);
            break;
        case 0:
            !running;
            console.log("Exiting...");
            process.exit();
            break;
        default:
            console.log("Invalid option!");
    }
}

function exercise1(number) {
    if (number > 0) {
        console.log(`The entered number is positive.`)
    } else if (number === 0) {
        console.log(`The entered number is 0.`)
    } else {
        console.log(`The entered number is negative.`)
    }
}

function exercise2(password, newPassword) {
    if (password === newPassword) {
        console.log(`Login succesfull.`);
    } else {
        console.log(`Incorrect password.`);
    }
}

function exercise3(firstValue, secondValue, operation) {
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
    }
}

function exercise4(value1, value2, value3) {
    if (value1 > value2 && value1 > value3) {
        console.log(`The first number(${value1}) is the major.`);
    } else if (value2 > value1 && value2 > value3) {
        console.log(`The second number(${value2}) is the major.`);
    } else if (value3 > value1 && value3 > value2) {
        console.log(`The third number(${value3}) is the major.`);
    } else if (value1 === value2 && value1 === value3) {
        console.log(`All the numbers have the same value(${value1})`);
    }
}
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
