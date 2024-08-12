import * as rl from 'readline-sync';

const randomNumber: number = Math.floor(Math.random() * 100) + 1;
let guess: number;

do {
    guess = rl.questionInt('Choose a number between 1 and 100: ');

    if (guess < 1 || guess > 100) {
        console.log('Invalid number! Please enter a number between 1 and 100.\n');
    } else if (guess < randomNumber) {
        console.log('Wrong! The number is higher.\n');
    } else if (guess > randomNumber) {
        console.log('Wrong! The number is smaller.\n');
    }
} while (guess !== randomNumber);

console.log('You got it right!\nCongrats :)');
